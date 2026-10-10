const pipeline = ["Problem", "Root cause", "Automate", "Result"];

const proof = ["$500m+ statutory reporting", "NetSuite & Oracle ERP", "CA ANZ 2027"];

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-5 pt-12 pb-10 md:pt-24">
      <p className="flex items-center gap-2 font-mono text-xs font-semibold text-signal">
        <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
        Anasta W. · Financial & Systems Accountant · Sydney
      </p>
      <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-tight [text-wrap:balance] md:text-5xl">
        Financial accountant who fixes{" "}
        <span className="text-amber">the system</span>, not just the numbers.
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
        AASB statutory reporting for a $500m+ scheme, plus a systems
        analyst&apos;s eye for automating the menial work away. Looking for a
        financial accountant role that uses both.
      </p>
      <ol
        className="mt-6 flex flex-wrap items-center gap-1.5 font-mono text-[11px] font-semibold text-muted"
        aria-label="How I work"
      >
        {pipeline.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            <span className="rounded-md border border-line bg-card px-2 py-1.5 text-ink">
              {step}
            </span>
            {i < pipeline.length - 1 && <span aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Highlights">
        {proof.map((item) => (
          <li
            key={item}
            className="rounded-full bg-signal/10 px-3 py-1 text-xs font-semibold text-signal"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 hidden gap-3 md:flex">
        <CtaLinks />
      </div>
    </section>
  );
}

export function CtaLinks() {
  return (
    <>
      <a
        href="#work"
        className="flex-1 rounded-xl bg-amber px-5 py-3.5 text-center font-bold text-on-amber transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:flex-none"
      >
        See my work
      </a>
      <a
        href="#contact"
        className="flex-1 rounded-xl border border-line bg-card px-5 py-3.5 text-center font-bold text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:flex-none"
      >
        Get in touch
      </a>
    </>
  );
}

/** Thumb-reach action bar, phones only. */
export function MobileCtaBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-10 flex gap-2 border-t border-line bg-page/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden"
    >
      <CtaLinks />
    </nav>
  );
}
