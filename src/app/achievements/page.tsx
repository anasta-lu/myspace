import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";
import { achievements } from "@/lib/achievements";

export const metadata: Metadata = {
  title: "Achievements | Ana Lu",
  description:
    "How Ana Lu found the root cause and fixed the system behind each result: audit, automation, ERP and reporting.",
};

const steps = [
  { key: "problem", label: "Problem" },
  { key: "rootCause", label: "Root cause" },
  { key: "whatIDid", label: "What I did" },
  { key: "result", label: "Result" },
] as const;

export default function AchievementsPage() {
  return (
    <main className="pb-24 md:pb-0">
      <div className="mx-auto max-w-2xl px-5 pt-8 md:pt-16">
        <Link
          href="/"
          className="print-hide font-mono text-xs font-semibold text-signal hover:underline"
        >
          ← Ana Lu
        </Link>
        <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight [text-wrap:balance] md:text-5xl">
          Achievements, in detail
        </h1>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          Each one follows the same path: find the problem, dig to the root
          cause, fix the system, then measure the result.
        </p>

        <nav aria-label="Jump to" className="print-hide mt-6 flex flex-wrap gap-2">
          {achievements.map((a) => (
            <a
              key={a.slug}
              href={`#${a.slug}`}
              className="rounded-full border border-line bg-card px-3 py-1.5 font-mono text-xs font-semibold tabular-nums text-ink hover:border-ink"
            >
              {a.before ? `${a.before} → ${a.after}` : a.after}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 grid max-w-2xl gap-12 px-5 pb-16">
        {achievements.map((a) => (
          <article
            key={a.slug}
            id={a.slug}
            aria-labelledby={`${a.slug}-title`}
            className="scroll-mt-6 break-inside-avoid"
          >
            <p className="flex items-baseline gap-2.5 font-mono text-3xl font-semibold tabular-nums">
              {a.before && (
                <>
                  <s className="text-lg text-muted decoration-2">{a.before}</s>
                  <span className="text-lg text-amber" aria-hidden="true">
                    →
                  </span>
                </>
              )}
              <span>{a.after}</span>
              <span className="sr-only">{a.measure}</span>
            </p>
            <h2
              id={`${a.slug}-title`}
              className="mt-2 text-2xl font-extrabold leading-snug [text-wrap:balance]"
            >
              {a.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{a.where}</p>

            <ol className="mt-5 grid gap-4 border-l-2 border-line pl-5">
              {steps.map((step) => (
                <li key={step.key} className="relative">
                  <span
                    className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-page bg-amber"
                    aria-hidden="true"
                  />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-signal">
                    {step.label}
                  </h3>
                  {a[step.key].map((para) => (
                    <p key={para} className="mt-1.5 max-w-prose leading-relaxed">
                      {para}
                    </p>
                  ))}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <MobileCtaBar />
    </main>
  );
}
