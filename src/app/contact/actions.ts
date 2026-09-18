"use server";

/**
 * Contact form handler.
 *
 * Delivery is deliberately not hard-wired to a mail provider. The enquiry is
 * POSTed as JSON to CONTACT_WEBHOOK_URL, which can be a form service
 * (Formspree, Basin), an automation (Zapier, Make, n8n), or the client's own
 * endpoint — whatever they end up using, without a dependency or a rebuild.
 *
 * With that variable unset the action reports `unconfigured` rather than
 * pretending to have sent anything, and the form tells the visitor to call or
 * email instead. A contact form that silently swallows enquiries is worse for
 * the business than no form at all, so this never reports success it cannot
 * back up.
 */

export type EnquiryState = {
  status: "idle" | "success" | "error" | "unconfigured";
  /** Field name -> message, for inline errors. */
  errors?: Record<string, string>;
  /** Form-level message. */
  message?: string;
  /** Echoed back so a failed submit does not wipe what was typed. */
  values?: Record<string, string>;
};

const MAX = {
  name: 100,
  email: 150,
  phone: 40,
  company: 120,
  website: 200,
  message: 4000,
  serviceDetail: 2000,
};

// Deliberately permissive: the only real test of an address is delivery, and
// clever patterns reject valid addresses more often than they catch typos.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values = {
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    phone: clean(formData.get("phone")),
    company: clean(formData.get("company")),
    website: clean(formData.get("website")),
    locations: clean(formData.get("locations")),
    service: clean(formData.get("service")),
    serviceDetail: clean(formData.get("serviceDetail")),
    message: clean(formData.get("message")),
  };

  // Honeypot: a hidden field no human fills in. Named "fax" because "website"
  // is now a real field on this form. Accept silently rather than showing an
  // error, so a bot gets no signal about why it failed.
  if (clean(formData.get("fax"))) {
    return { status: "success" };
  }

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Please tell us your name.";
  else if (values.name.length > MAX.name) errors.name = "That name is too long.";

  if (!values.email) errors.email = "We need an email address to reply to.";
  else if (values.email.length > MAX.email || !EMAIL.test(values.email))
    errors.email = "That doesn't look like an email address.";

  if (values.phone.length > MAX.phone) errors.phone = "That number is too long.";
  if (values.company.length > MAX.company)
    errors.company = "That company name is too long.";
  if (values.website.length > MAX.website)
    errors.website = "That address is too long.";
  if (values.serviceDetail.length > MAX.serviceDetail)
    errors.serviceDetail = "Please keep this under 2000 characters.";

  if (!values.message) errors.message = "Please tell us what you need help with.";
  else if (values.message.length > MAX.message)
    errors.message = "Please keep this under 4000 characters.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      errors,
      message: "Please check the highlighted fields.",
      values,
    };
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return {
      status: "unconfigured",
      values,
      message: "This form isn't connected yet.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...values, submittedAt: new Date().toISOString() }),
      // Don't leave a request hanging long enough to stall the whole submit.
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(
        `Contact enquiry rejected by CONTACT_WEBHOOK_URL: ${response.status}`,
      );
      return {
        status: "error",
        values,
        message: "Something went wrong sending that. Please try again.",
      };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Contact enquiry could not be delivered:", error);
    return {
      status: "error",
      values,
      message: "Something went wrong sending that. Please try again.",
    };
  }
}
