import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";

export const metadata: Metadata = {
  title: "Hobby: HRT Systems | Ana Lu",
  description:
    "HRT Systems, a full-suite ERP for small and medium businesses that Ana Lu designs and builds as a hobby. Open source, with every design paper public.",
};

const REPO = "https://github.com/anasta-lu/hrt-systems";
const doc = (file: string) => `${REPO}/blob/main/docs/${file}`;

const stack = [
  { part: "Backend", tech: "Python + FastAPI, modular monolith" },
  { part: "Database", tech: "PostgreSQL: row-level security (Standard) and schema per tenant (Pro)" },
  { part: "Workflows", tech: "Temporal.io" },
  { part: "Frontend", tech: "React / Next.js" },
];

const papers = [
  { title: "Planning & requirements", file: "SDLC_01_Planning_and_Requirements.md", shows: "Turning business needs into scope" },
  { title: "Technical architecture blueprint", file: "SDLC_02_Technical_Architecture_Blueprint.md", shows: "How the whole system fits together" },
  { title: "Dimensional chart of accounts", file: "08_Dimensional_Chart_of_Accounts_Design.md", shows: "Accounting design, not just code" },
  { title: "Payroll & HRIS integrations", file: "SDLC_05_Payroll_and_HRIS_Integrations.md", shows: "Payroll rules as a system" },
  { title: "Security & controls", file: "SDLC_13_Phase_6_Security_and_Controls.md", shows: "Internal controls built in" },
  { title: "Reporting & analytics", file: "SDLC_16_Phase_9_Reporting_and_Analytics.md", shows: "From ledger to management reports" },
  { title: "Database design", file: "SDLC_21_Database_Design_v2.md", shows: "Multi-tenant data model" },
];

export default function HobbyPage() {
  return (
    <main className="pb-24 md:pb-0">
      <div className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-16">
        <Link
          href="/"
          className="print-hide font-mono text-xs font-semibold text-signal hover:underline"
        >
          ← Ana Lu
        </Link>
        <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-signal">
          Hobby
        </p>
        <h1 className="mt-2 text-[2rem] font-extrabold leading-tight tracking-tight [text-wrap:balance] md:text-5xl">
          I design ERPs for fun
        </h1>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          HRT Systems is a full-suite ERP for small and medium businesses:
          Xero-simple on the surface, enterprise-grade underneath. It pulls
          together years of working inside NetSuite, Oracle Fusion, Xero and
          MYOB, and seeing where each one falls short.
        </p>
        <p className="mt-3 max-w-prose leading-relaxed">
          It&apos;s where I show the systems and functional analyst side of my
          work: understanding how a business runs, then designing the system
          around it.
        </p>

        <a
          href={REPO}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex rounded-xl bg-amber px-5 py-3.5 text-base font-bold text-on-amber hover:brightness-95"
        >
          View the code on GitHub →
        </a>
        <p className="mt-2 hidden font-mono text-xs text-muted print:block">
          github.com/anasta-lu/hrt-systems
        </p>

        <section aria-labelledby="papers-title" className="mt-12">
          <h2
            id="papers-title"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-signal"
          >
            Read the design papers
          </h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
            Every phase is written up before it&apos;s built. Start with any of
            these, or browse{" "}
            <a href={`${REPO}/tree/main/docs`} target="_blank" rel="noopener" className="font-semibold text-signal hover:underline">
              all the docs
            </a>
            .
          </p>
          <ul className="print-outline mt-4 divide-y divide-line rounded-2xl border border-line bg-card">
            {papers.map((p) => (
              <li key={p.file} className="break-inside-avoid">
                <a
                  href={doc(p.file)}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-page"
                >
                  <span>
                    <span className="block font-bold leading-snug">{p.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">{p.shows}</span>
                  </span>
                  <span className="print-hide text-signal" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="stack-title" className="mt-12 break-inside-avoid">
          <h2
            id="stack-title"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-signal"
          >
            Tech stack
          </h2>
          <dl className="mt-4 grid gap-3">
            {stack.map((s) => (
              <div key={s.part} className="grid grid-cols-[6.5rem_1fr] gap-3">
                <dt className="font-mono text-sm font-semibold">{s.part}</dt>
                <dd className="text-sm leading-relaxed text-muted">{s.tech}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
      <MobileCtaBar />
    </main>
  );
}
