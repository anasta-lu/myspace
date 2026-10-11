import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";
import { fullSuite, skillGroups } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills & Tech stack | Ana Lu",
  description:
    "Ana Lu's skills and tech stack: statutory reporting, Oracle Fusion, NetSuite, Power BI, Excel, SQL, Python, React and agentic AI.",
};

export default function SkillsPage() {
  return (
    <main className="pb-24 md:pb-0">
      <div className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-16">
        <Link
          href="/"
          className="print-hide font-mono text-xs font-semibold text-signal hover:underline"
        >
          ← Ana Lu
        </Link>
        <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight [text-wrap:balance] md:text-5xl">
          Skills & tech stack
        </h1>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          No self-rated bars. Each skill comes with where I&apos;ve used it.
        </p>

        <section
          aria-labelledby="full-suite-title"
          className="print-outline mt-8 rounded-2xl border-2 border-amber bg-card p-5 md:p-6"
        >
          <p className="flex items-center gap-2 font-mono text-xs font-semibold text-signal">
            <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
            {fullSuite.years}, owned end to end
          </p>
          <h2
            id="full-suite-title"
            className="mt-3 text-2xl font-extrabold leading-snug [text-wrap:balance]"
          >
            Full-suite financial accountant
          </h2>
          <ul className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2">
            {fullSuite.areas.map((area) => (
              <li key={area} className="flex gap-2 leading-snug">
                <span className="font-bold text-amber" aria-hidden="true">
                  ✓
                </span>
                {area}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-4 text-sm text-muted">
          Formal qualifications, including CA ANZ, are on{" "}
          <Link href="/education" className="font-semibold text-signal hover:underline">
            Education &amp; training →
          </Link>
        </p>

        <p className="mt-2 text-sm text-muted">
          My hobbies include designing an ERP,{" "}
          <Link href="/hobby" className="font-semibold text-signal hover:underline">
            HRT Systems →
          </Link>
        </p>

        <nav aria-label="Jump to" className="print-hide mt-6 flex flex-wrap gap-2">
          {skillGroups.map((g) => (
            <a
              key={g.label}
              href={`#${slug(g.label)}`}
              className="rounded-full border border-line bg-card px-3 py-1.5 font-mono text-xs font-semibold text-ink hover:border-ink"
            >
              {g.label}
            </a>
          ))}
        </nav>

        {skillGroups.map((g) => (
          <section
            key={g.label}
            id={slug(g.label)}
            aria-labelledby={`${slug(g.label)}-title`}
            className="mt-10 scroll-mt-6"
          >
            <h2
              id={`${slug(g.label)}-title`}
              className="font-mono text-xs font-semibold uppercase tracking-wider text-signal"
            >
              {g.label}
            </h2>
            <ul className="print-outline mt-3 divide-y divide-line rounded-2xl border border-line bg-card">
              {g.skills.map((s) => (
                <li key={s.name} className="break-inside-avoid px-4 py-3">
                  <p className="font-bold leading-snug">{s.name}</p>
                  {Array.isArray(s.proof) ? (
                    <ul className="mt-1 grid gap-1 text-sm leading-relaxed text-muted">
                      {s.proof.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="text-amber" aria-hidden="true">
                            –
                          </span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">
                      {s.proof}
                    </p>
                  )}
                  {s.evidence && (
                    <Link
                      href={s.evidence}
                      className="print-hide mt-1.5 inline-block font-mono text-xs font-semibold text-signal hover:underline"
                    >
                      See proof →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <MobileCtaBar />
    </main>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");
}
