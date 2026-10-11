import type { Metadata } from "next";
import Link from "next/link";
import { Achievements } from "@/app/_components/achievements";
import { Contact } from "@/app/_components/contact";
import { Hero } from "@/app/_components/hero";
import { PrintButton } from "@/app/_components/print-button";
import { degrees, professional, training } from "@/lib/education";
import { fullSuite } from "@/lib/skills";

export const metadata: Metadata = {
  title: "CV | Ana Lu",
  description:
    "Ana Lu's CV: financial and systems accountant, before and after results, credentials and skills.",
};

export default function CoolCvPage() {
  return (
    <main>
      <div className="print-hide mx-auto flex max-w-2xl items-center justify-between gap-3 px-5 pt-6">
        <Link
          href="/hire"
          className="font-mono text-xs font-semibold text-signal hover:underline"
        >
          ← Back
        </Link>
        <PrintButton className="rounded-xl bg-amber px-4 py-2.5 text-sm font-bold text-on-amber hover:brightness-95" />
      </div>
      <Hero />
      <Achievements />

      <section
        aria-labelledby="cv-edu"
        className="mx-auto max-w-2xl px-5 pb-12 print:break-inside-auto"
      >
        <h2 id="cv-edu" className="text-xl font-extrabold md:text-2xl">
          Credentials
        </h2>
        <ul className="mt-4 grid gap-3">
          {[professional, ...degrees, ...training].map((q) => (
            <li key={q.title} className="break-inside-avoid">
              <p className="font-bold leading-snug">{q.title}</p>
              <p className="text-sm text-muted">
                {q.provider}
                {q.dates && <span className="font-mono"> · {q.dates}</span>}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="cv-suite"
        className="mx-auto max-w-2xl px-5 pb-12 break-inside-avoid"
      >
        <h2 id="cv-suite" className="text-xl font-extrabold md:text-2xl">
          Full-suite coverage
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {fullSuite.areas.map((a) => (
            <li
              key={a}
              className="rounded-full border border-line px-3 py-1 text-sm"
            >
              {a}
            </li>
          ))}
        </ul>
        <Link
          href="/skills"
          className="print-hide mt-4 inline-block font-mono text-xs font-semibold text-signal hover:underline"
        >
          All skills & tech stack →
        </Link>
      </section>

      <Contact />
    </main>
  );
}
