import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";

export const metadata: Metadata = {
  title: "Hobbies | Ana Lu",
  description:
    "What Ana Lu does for fun: designing an ERP, coding, and trying out business software.",
};

const REPO = "https://github.com/anasta-lu/hrt-systems";

const hobbies = [
  {
    title: "Coding",
    text: "Object-oriented projects in Java, C#, C++ and Ruby, for the fun of it.",
  },
  {
    title: "Trying out business software",
    text: "Installing Odoo, Joomla, Drupal or WordPress just to see how they work under the hood.",
  },
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
        <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight md:text-5xl">
          Hobbies
        </h1>

        <section aria-labelledby="hrt-title" className="mt-8 break-inside-avoid">
          <h2 id="hrt-title" className="text-xl font-extrabold leading-snug">
            Designing an ERP: HRT Systems
          </h2>
          <p className="mt-2 max-w-prose leading-relaxed text-muted">
            A full-suite ERP for small businesses that I&apos;ve been working
            on over the years. The{" "}
            <a href={`${REPO}/tree/main/docs`} target="_blank" rel="noopener" className="font-semibold text-signal hover:underline">
              docs folder
            </a>{" "}
            holds all my technical papers, from requirements and chart of
            accounts design to payroll, controls and reporting. Have a look to
            see how I turn business functions into systems.
          </p>
          <a
            href={REPO}
            target="_blank"
            rel="noopener"
            className="print-outline mt-4 block overflow-hidden rounded-2xl border border-line bg-card transition hover:border-ink"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/proof/hrt-systems-repo.webp"
              alt="The HRT Systems repository on GitHub: README with the tech stack, and a docs folder of architecture and SDLC papers"
              width={1687}
              height={854}
              loading="lazy"
              className="h-auto w-full"
            />
          </a>
          <a
            href={REPO}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-block font-mono text-xs font-semibold text-signal hover:underline"
          >
            github.com/anasta-lu/hrt-systems →
          </a>
        </section>

        <ul className="mt-10 grid gap-6">
          {hobbies.map((h) => (
            <li key={h.title} className="break-inside-avoid">
              <h2 className="text-xl font-extrabold leading-snug">{h.title}</h2>
              <p className="mt-2 max-w-prose leading-relaxed text-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <MobileCtaBar />
    </main>
  );
}
