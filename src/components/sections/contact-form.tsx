"use client";

import { useActionState, useId } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { contact, site } from "@/content/site";
import { ArrowRight, Icon } from "../ui/icon";

const initialState: EnquiryState = { status: "idle" };

const field =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-[14px] text-ink-900 transition-colors placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40";
const fieldOk = "border-ice-200 focus:border-brand-400";
const fieldBad = "border-red-300 focus:border-red-400";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialState,
  );
  const uid = useId();

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-ice-200 bg-white p-8 text-center sm:p-10">
        <div className="mx-auto max-w-[420px]">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
            <Icon name="shield" className="h-7 w-7" />
          </span>
          <h3 className="font-display mt-5 text-[20px] font-extrabold text-ink-900">
            {contact.form.successTitle}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.7] text-ink-500">
            {contact.form.successBody}
          </p>
        </div>
      </div>
    );
  }

  // `values` comes back on a failed submit so nothing typed is lost.
  const v = state.values ?? {};
  const err = state.errors ?? {};
  const id = (name: string) => `${uid}-${name}`;
  const errId = (name: string) => `${uid}-${name}-error`;

  return (
    <div className="rounded-2xl border border-ice-200 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,27,48,0.45)] sm:p-8">
      <h2 className="font-display text-[19px] font-extrabold text-ink-900">
        {contact.form.title}
      </h2>
      <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-500">
        {contact.form.body}
      </p>

      <form action={formAction} className="mt-7 grid gap-5" noValidate>
        {/* Honeypot. Hidden from people and from screen readers, but a bot
            filling every field in the DOM will trip it. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor={id("website")}>Website</label>
          <input
            id={id("website")}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id={id("name")}
            errorId={errId("name")}
            name="name"
            label="Your name"
            required
            autoComplete="name"
            defaultValue={v.name}
            error={err.name}
          />
          <Field
            id={id("email")}
            errorId={errId("email")}
            name="email"
            type="email"
            label="Email"
            required
            autoComplete="email"
            defaultValue={v.email}
            error={err.email}
          />
          <Field
            id={id("phone")}
            errorId={errId("phone")}
            name="phone"
            type="tel"
            label="Phone"
            autoComplete="tel"
            defaultValue={v.phone}
            error={err.phone}
          />
          <Field
            id={id("company")}
            errorId={errId("company")}
            name="company"
            label="Company"
            autoComplete="organization"
            defaultValue={v.company}
            error={err.company}
          />
        </div>

        <div>
          <Label htmlFor={id("service")}>What can we help with?</Label>
          <select
            id={id("service")}
            name="service"
            defaultValue={v.service ?? ""}
            className={`${field} ${fieldOk} appearance-none bg-[length:16px] bg-[right_0.9rem_center] bg-no-repeat pr-10 bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235a6e88' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")]`}
          >
            <option value="">Select a service</option>
            {contact.form.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor={id("message")} required>
            How can we help?
          </Label>
          <textarea
            id={id("message")}
            name="message"
            rows={5}
            required
            defaultValue={v.message}
            aria-invalid={err.message ? true : undefined}
            aria-describedby={err.message ? errId("message") : undefined}
            placeholder="Tell us about your business, the hours you need covered, and what's taking up your team's time."
            className={`${field} resize-y ${err.message ? fieldBad : fieldOk}`}
          />
          <FieldError id={errId("message")} message={err.message} />
        </div>

        {/* Form-level status. aria-live so it is announced when it appears. */}
        <div aria-live="polite">
          {state.status === "error" && state.message && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
              {state.message}
            </p>
          )}
          {state.status === "unconfigured" && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-[1.7] text-amber-800">
              <p className="font-semibold">This form isn&apos;t connected yet.</p>
              <p className="mt-1">
                Your message has not been sent. Please email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold underline underline-offset-2"
                >
                  {site.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="font-semibold underline underline-offset-2"
                >
                  {site.phone}
                </a>{" "}
                and we&apos;ll pick it up from there.
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-500 px-7 text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_6px_20px_-6px_rgba(28,116,224,0.75)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {pending ? "Sending…" : contact.form.submit}
            {!pending && (
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            )}
          </button>
          <p className="text-[12px] text-ink-400">
            We&apos;ll only use these details to reply to you.
          </p>
        </div>
      </form>
    </div>
  );
}

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-[12.5px] font-semibold text-ink-700"
    >
      {children}
      {required && (
        <span className="ml-0.5 text-brand-500" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[12px] font-medium text-red-600">
      {message}
    </p>
  );
}

function Field({
  id,
  errorId,
  name,
  label,
  type = "text",
  required,
  autoComplete,
  defaultValue,
  error,
}: {
  id: string;
  errorId: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${field} ${error ? fieldBad : fieldOk}`}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
