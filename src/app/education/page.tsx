import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";
import {
  degrees,
  professional,
  training,
  type Qualification,
} from "@/lib/education";

export const metadata: Metadata = {
  title: "Education & Training | Ana Lu",
  description:
    "Ana Lu: Provisional Member of CA ANZ, degrees in accountancy and computer science, and formal Power BI and Excel training.",
};

function Entry({ q }: { q: Qualification }) {
  return (
    <li className="relative break-inside-avoid">
      <span
        className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-page bg-amber"
        aria-hidden="true"
      />
      <h3 className="font-bold leading-snug">{q.title}</h3>
      <p className="mt-0.5 text-sm text-muted">
        {q.provider}
        {q.dates && (
          <>
            {" · "}
            <span className="font-mono tabular-nums">{q.dates}</span>
          </>
        )}
      </p>
      {q.status && (
        <p className="mt-1 font-mono text-xs font-semibold text-signal">
          {q.status}
        </p>
      )}
      {q.note && <p className="mt-1.5 max-w-prose leading-relaxed">{q.note}</p>}
    </li>
  );
}

function Group({ label, items }: { label: string; items: Qualification[] }) {
  return (
    <section aria-label={label} className="mt-10">
      <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-signal">
        {label}
      </h2>
      <ol className="mt-4 grid gap-5 border-l-2 border-line pl-5">
        {items.map((q) => (
          <Entry key={q.title} q={q} />
        ))}
      </ol>
    </section>
  );
}

export default function EducationPage() {
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
          Education & training
        </h1>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          An accountant trained in computer science, now completing the
          Chartered Accountants program.
        </p>

        <section
          aria-labelledby="ca-title"
          className="print-outline mt-8 rounded-2xl border-2 border-amber bg-card p-5 md:p-6"
        >
          <p className="flex items-center gap-2 font-mono text-xs font-semibold text-signal">
            <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
            Professional membership
          </p>
          <h2
            id="ca-title"
            className="mt-3 text-2xl font-extrabold leading-snug [text-wrap:balance]"
          >
            {professional.title}
          </h2>
          <p className="mt-1 text-sm text-muted">{professional.provider}</p>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-sm font-semibold tabular-nums">
            <span>{professional.dates}</span>
            <span className="text-muted">·</span>
            <span>{professional.status}</span>
          </p>
          <p className="mt-3 max-w-prose leading-relaxed">{professional.note}</p>
        </section>

        <Group label="Degrees" items={degrees} />
        <Group label="Formal training & certificates" items={training} />
      </div>
      <MobileCtaBar />
    </main>
  );
}
