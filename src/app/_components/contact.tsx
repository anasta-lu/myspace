export const EMAIL = "ana.lu@radicaltg.com";
export const ROLES = "FA, MA, Commercial Analyst & FP&A roles";
export const LINKEDIN = "https://www.linkedin.com/in/anasta";

export function Contact({ title = "Hire me", emoji = true }: { title?: string; emoji?: boolean }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-2xl scroll-mt-6 px-5 pb-16 break-inside-avoid"
    >
      <div className="print-outline rounded-2xl border-2 border-amber bg-card p-6 md:p-8">
        <p className="flex items-center gap-2 font-mono text-xs font-semibold text-signal">
          <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
          Open to {ROLES} · Sydney
        </p>
        <h2
          id="contact-title"
          className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-tight md:text-4xl"
        >
          {title} {emoji && <span aria-hidden="true">😊</span>}
        </h2>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          Need someone who can close the month, explain the numbers and fix the
          system that makes it slow? Let&apos;s talk.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}?subject=Hi%20Ana`}
            className="rounded-xl bg-amber px-5 py-3.5 text-center text-base font-bold text-on-amber hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            Email me
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener"
            className="rounded-xl border border-line bg-page px-5 py-3.5 text-center text-base font-bold text-ink hover:border-ink"
          >
            LinkedIn
          </a>
          <a
            href="/hire"
            className="print-hide rounded-xl border border-line bg-page px-5 py-3.5 text-center text-base font-bold text-ink hover:border-ink"
          >
            Get my CV
          </a>
        </div>

        <dl className="mt-6 grid gap-2 text-sm">
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-mono font-semibold text-muted">Email</dt>
            <dd>
              <a href={`mailto:${EMAIL}`} className="font-semibold text-signal hover:underline">
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-mono font-semibold text-muted">References</dt>
            <dd>Available on request</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
