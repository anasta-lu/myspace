import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";

export const metadata: Metadata = {
  title: "Proof | Ana Lu",
  description:
    "Evidence behind Ana Lu's skills: Microsoft Learn Dynamics 365 Finance badges and a spec-first development setup.",
};

const items = [
  {
    id: "dynamics",
    label: "ERP training",
    title: "Dynamics 365 Finance: 7 Microsoft Learn badges",
    caption:
      "Core capabilities, general ledger, AP and AR, expense, fixed assets and budgeting. Module assessments passed, Nov 2025 to Jun 2026.",
    src: "/proof/dynamics-365-badges.webp",
    alt: "Microsoft Learn achievements page showing seven Dynamics 365 Finance badges with module assessments passed",
    width: 1891,
    height: 905,
  },
  {
    id: "dev-setup",
    label: "How I build",
    title: "Spec first, then code",
    caption:
      "A full set of SDLC documents (requirements, architecture, schema, security, API, UI/UX) written before the build, next to a PostgreSQL schema and a Dockerised Next.js app. Private project names are blurred.",
    src: "/proof/dev-setup.webp",
    alt: "Two code editors: one with SDLC design documents and a SQL schema, one with a Dockerfile, brand kit and coding standards",
    width: 1382,
    height: 898,
  },
];

export default function ProofPage() {
  return (
    <main className="pb-24 md:pb-0">
      <div className="mx-auto max-w-3xl px-5 pt-8 pb-16 md:pt-16">
        <Link
          href="/skills"
          className="print-hide font-mono text-xs font-semibold text-signal hover:underline"
        >
          ← Skills & tech stack
        </Link>
        <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight [text-wrap:balance] md:text-5xl">
          Proof
        </h1>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          Screenshots that back up the skills list. Tap an image to see it full
          size.
        </p>

        {items.map((item) => (
          <section
            key={item.id}
            id={item.id}
            aria-labelledby={`${item.id}-title`}
            className="mt-10 scroll-mt-6 break-inside-avoid"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-signal">
              {item.label}
            </p>
            <h2
              id={`${item.id}-title`}
              className="mt-2 text-xl font-extrabold leading-snug"
            >
              {item.title}
            </h2>
            <a
              href={item.src}
              target="_blank"
              rel="noopener"
              className="print-outline mt-4 block overflow-hidden rounded-2xl border border-line bg-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className="h-auto w-full"
              />
            </a>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
              {item.caption}
            </p>
          </section>
        ))}
      </div>
      <MobileCtaBar />
    </main>
  );
}
