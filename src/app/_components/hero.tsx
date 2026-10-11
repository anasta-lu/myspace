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

function Portrait() {
  return (
    <div className="relative h-24 w-24 shrink-0 md:h-36 md:w-36">
      <div
        className="print-hide absolute -inset-2.5 rounded-full border border-dashed border-signal/40 motion-safe:animate-[spin_30s_linear_infinite]"
        aria-hidden="true"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-amber" />
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-signal" />
        <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal/60" />
      </div>
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_210deg,rgb(var(--amber)),rgb(var(--blue)),rgb(var(--amber)))] p-[3px] print:bg-none print:p-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/headshot.webp"
          alt="Ana Lu"
          width={480}
          height={480}
          className="h-full w-full rounded-full border-2 border-page object-cover"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-5 pt-12 pb-10 md:pt-24 print:pt-0">
      <div className="flex items-center gap-5 md:gap-7">
        <Portrait />
        <div className="min-w-0">
          <p className="text-2xl font-extrabold tracking-tight md:text-3xl">Ana Lu</p>
          <p className="mt-1 font-mono text-xs font-semibold leading-relaxed text-signal">
            Financial & Systems Accountant
            <br />
            Sydney
          </p>
        </div>
      </div>
      <a
        href="/education"
        className="print-outline mt-6 inline-flex items-center gap-1.5 rounded-full border border-amber bg-amber/15 px-3 py-1 text-xs font-bold text-ink hover:bg-amber/25"
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
        <strong className="font-bold text-ink">Full-suite</strong>: 3.5 years
        owning the whole cycle end to end, from AR and month-end to AASB
        statutory reporting for a $500m+ scheme. Plus a systems analyst&apos;s
        eye for automating the menial work away.
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
      <a
        href="/skills"
        className="print-hide mt-2 inline-block font-mono text-xs font-semibold text-signal hover:underline"
      >
        All skills & tech stack →
      </a>
      <a
        href="/work"
        className="print-hide mt-2 ml-4 inline-block font-mono text-xs font-semibold text-signal hover:underline"
      >
        Work history →
      </a>
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
        href="/hire"
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
