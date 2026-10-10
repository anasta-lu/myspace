const pipeline = ["Problem", "Root cause", "Automate", "Result"];

const skills = [
  "Financial Reporting",
  "Statutory Compliance",
  "ERP Systems",
  "Data & App Architecture",
  "Data Analytics",
  "Agentic AI",
  "Automation",
  "BI & Excel Expert",
  "Python, React & SQL",
];

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-5 pt-12 pb-10 md:pt-24 print:pt-0">
      <p className="flex items-center gap-2 font-mono text-xs font-semibold text-signal">
        <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
        Ana Lu · Financial & Systems Accountant · Sydney
      </p>
      <a
        href="/education"
        className="print-outline mt-3 inline-flex items-center gap-1.5 rounded-full border border-amber bg-amber/15 px-3 py-1 text-xs font-bold text-ink hover:bg-amber/25"
      >
        Provisional Member, CA ANZ
        <span className="font-mono font-semibold text-muted">· CA due 2027</span>
      </a>
      <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-tight [text-wrap:balance] md:text-5xl">
        Financial accountant who fixes{" "}
        <span className="bg-[linear-gradient(transparent_62%,rgb(var(--amber)/0.5)_62%)] [box-decoration-break:clone]">
          the system
        </span>, not just the numbers.
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
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key skills">
        {skills.map((item) => (
          <li
            key={item}
            className="print-outline rounded-full bg-signal/10 px-3 py-1 text-xs font-semibold text-signal"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-muted">
        Also known for patience, and for being fun to be around.
      </p>
      <div className="print-hide mt-8 hidden gap-3 md:flex">
        <CtaLinks />
      </div>
    </section>
  );
}

const ctaBase =
  "flex-1 whitespace-nowrap rounded-xl px-3 py-3.5 text-center text-base font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:flex-none md:px-5";

export function CtaLinks() {
  return (
    <>
      <a
        href="/#work"
        className={`${ctaBase} bg-amber text-on-amber transition-opacity hover:opacity-90`}
      >
        My achievements
      </a>
      <a
        href="/#contact"
        className={`${ctaBase} border border-line bg-card text-ink transition-colors hover:border-ink`}
      >
        Hire me <span aria-hidden="true">😊</span>
      </a>
    </>
  );
}

export function MobileCtaBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="print-hide fixed inset-x-0 bottom-0 z-10 flex gap-2 border-t border-line bg-page/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden"
    >
      <CtaLinks />
    </nav>
  );
}
