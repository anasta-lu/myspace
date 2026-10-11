import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { Contact, ROLES } from "@/app/_components/contact";

export const metadata: Metadata = {
  title: "Hire me | Ana Lu",
  description:
    "Download Ana Lu's CV: a classic one for applications, or the cool one with before and after numbers.",
};

const GENERIC_CV = "/files/Ana-Lu-CV.pdf";
const COOL_CV = "/files/Ana-Lu-Cool-CV.pdf";
const hasGenericCv = fs.existsSync(
  path.join(process.cwd(), "public", GENERIC_CV),
);

const btn =
  "mt-5 block rounded-xl px-5 py-3.5 text-center text-base font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

export default function HirePage() {
  return (
    <main>
      <div className="mx-auto max-w-2xl px-5 pt-8 pb-8 md:pt-16">
        <Link
          href="/"
          className="print-hide font-mono text-xs font-semibold text-signal hover:underline"
        >
          ← Ana Lu
        </Link>
        <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight md:text-5xl">
          Hire me <span aria-hidden="true">😊</span>
        </h1>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          Open to {ROLES} in Sydney. Pick the CV that suits you.
        </p>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          <li className="flex flex-col rounded-2xl border border-line bg-card p-5">
            <p className="font-mono text-xs font-semibold text-signal">
              PDF · for applications &amp; ATS
            </p>
            <h2 className="mt-2 text-xl font-extrabold">Generic CV</h2>
            <p className="mt-2 flex-1 leading-relaxed text-muted">
              The classic format: full work history, responsibilities and key
              achievements. Easy to forward and file.
            </p>
            {hasGenericCv ? (
              <a
                href={GENERIC_CV}
                download
                className={`${btn} border border-line bg-page text-ink hover:border-ink`}
              >
                Download PDF
              </a>
            ) : (
              <a
                href="#contact"
                className={`${btn} border border-line bg-page text-ink hover:border-ink`}
              >
                Ask me for it
              </a>
            )}
          </li>

          <li className="flex flex-col rounded-2xl border-2 border-amber bg-card p-5">
            <p className="font-mono text-xs font-semibold text-signal">
              Web &amp; PDF · the fun one
            </p>
            <h2 className="mt-2 text-xl font-extrabold">Cool CV</h2>
            <p className="mt-2 flex-1 leading-relaxed text-muted">
              Before and after numbers, work history, achievements in detail,
              education and skills in one PDF.
            </p>
            <a
              href={COOL_CV}
              download
              className={`${btn} bg-amber text-on-amber hover:brightness-95`}
            >
              Download Cool CV
            </a>
          </li>
        </ul>
      </div>
      <Contact title="Or just say hi" emoji={false} />
    </main>
  );
}
