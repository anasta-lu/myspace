import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";
import { jobs } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work history | Ana Lu",
  description: "Ana Lu's work history: job titles, companies and dates.",
};

export default function WorkPage() {
  return (
    <main className="pb-24 md:pb-0">
      <div className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-16">
        <Link
          href="/"
          className="print-hide font-mono text-xs font-semibold text-signal hover:underline"
        >
          ← Ana Lu
        </Link>
        <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight md:text-5xl">
          Work history
        </h1>
        <ol className="mt-8 grid gap-5 border-l-2 border-line pl-5">
          {jobs.map((j) => (
            <li key={j.title + j.dates} className="relative break-inside-avoid">
              <span
                className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-page bg-amber"
                aria-hidden="true"
              />
              <h2 className="font-bold leading-snug">{j.title}</h2>
              <p className="mt-0.5 text-sm text-muted">
                {j.company} ·{" "}
                <span className="font-mono tabular-nums">{j.dates}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
      <MobileCtaBar />
    </main>
  );
}
