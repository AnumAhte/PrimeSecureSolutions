import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/sections/final-cta";
import { TextLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Reveal } from "@/components/ui/primitives";
import { blog } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: blog.body,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const hasPosts = blog.posts.length > 0;

  return (
    <>
      <PageHeader eyebrow={blog.eyebrow} title={blog.title} body={blog.body} />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          {hasPosts ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blog.posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <article className="group flex h-full flex-col rounded-xl border border-ice-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-26px_rgba(11,27,48,0.35)]">
                    <p className="flex items-center gap-2 text-[11.5px] text-ink-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {post.readingTime && (
                        <>
                          <span className="text-ink-400/50">·</span>
                          {post.readingTime}
                        </>
                      )}
                    </p>
                    <h2 className="font-display mt-3 text-[16px] leading-snug font-bold text-ink-900">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-ink-500">
                      {post.excerpt}
                    </p>
                    <TextLink href={`/blog/${post.slug}`} className="mt-4">
                      Read More
                    </TextLink>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Nothing published yet. An honest empty state beats fabricated
               sample posts, which would have to be deleted before launch. */
            <Reveal className="mx-auto max-w-[520px] text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-ice-200 bg-ice-50 text-brand-500">
                <Icon name="clipboard" className="h-7 w-7" />
              </span>
              <p className="mt-6 text-[14.5px] leading-[1.75] text-ink-500">
                {blog.emptyState}
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
