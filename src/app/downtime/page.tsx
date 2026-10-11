import type { Metadata } from "next";
import Link from "next/link";
import { MobileCtaBar } from "@/app/_components/hero";

export const metadata: Metadata = {
  title: "My Down Time | Ana Lu",
  description:
    "What Ana Lu does off the clock: competitive tennis, camping, a bit of party, cleaning, gaming, and designing an ERP for fun.",
};

const REPO = "https://github.com/anasta-lu/hrt-systems";

type Photo = { src: string; alt: string; top?: boolean; natural?: boolean };
type Entry = { title: string; text: React.ReactNode; photos?: Photo[]; wide?: boolean };

const entries: Entry[] = [
  {
    title: "Competitive tennis",
    text: "I play competitively. I win some, I lose some. Most recently: runner-up in D Doubles at the Tennis Sydney Open 2026.",
    photos: [{ src: "/downtime/tennis.webp", alt: "Ana holding the Tennis Sydney Open 2026 D Doubles runner-up trophy", natural: true }],
  },
  {
    title: "Camping & nature",
    text: "Campfires, bush, and the occasional pony who wants my carrot.",
    photos: [
      { src: "/downtime/campfire.webp", alt: "Feet up by a campfire at night" },
      { src: "/downtime/ponies.webp", alt: "Ana feeding a carrot to a pony through a farm fence" },
    ],
  },
  {
    title: "A bit of party here and there",
    text: "Healthy social life, somehow. I'm just as happy staying in as going out.",
    photos: [
      { src: "/downtime/party.webp", alt: "Ana smiling at a busy party", top: true },
      { src: "/downtime/selfie.webp", alt: "Casual selfie of Ana", top: true },
    ],
  },
  {
    title: "Professional cleaning, for fun",
    text: "Yes, really. There's something satisfying about a job that's visibly done.",
    photos: [{ src: "/downtime/cleaning-kit.webp", alt: "Cleaning kit and vacuum unloaded from a car boot" }],
  },
  {
    title: "Designing an ERP: HRT Systems",
    text: (
      <>
        A full-suite ERP for small businesses that I&apos;ve worked on over the
        years. The{" "}
        <a href={`${REPO}/tree/main/docs`} target="_blank" rel="noopener" className="font-semibold text-signal hover:underline">
          docs folder
        </a>{" "}
        holds my technical papers, from requirements and chart of accounts
        design to payroll, controls and reporting.{" "}
        <Link href="/hobby" className="font-semibold text-signal hover:underline">
          Read more →
        </Link>
      </>
    ),
    photos: [{ src: "/proof/hrt-systems-repo.webp", alt: "The HRT Systems repository on GitHub" }],
    wide: true,
  },
  {
    title: "Gaming & mucking around with software",
    text: "Lots of games, plus Java, C#, C++ and Ruby side projects, and installing Odoo, Joomla, Drupal or WordPress just to see how they work.",
  },
];

export default function DownTimePage() {
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
          My down time
        </h1>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          Yes, I have a life outside spreadsheets.
        </p>

        <ul className="mt-10 grid gap-12">
          {entries.map((e) => (
            <li key={e.title} className="break-inside-avoid">
              <h2 className="text-xl font-extrabold leading-snug">{e.title}</h2>
              <p className="mt-2 max-w-prose leading-relaxed text-muted">{e.text}</p>
              {e.photos && (
                <div
                  className={`mt-4 grid gap-3 ${e.photos.length > 1 ? "grid-cols-2" : e.wide ? "" : e.photos[0].natural ? "max-w-[240px]" : "max-w-xs"}`}
                >
                  {e.photos.map((p) => {
                    const img = (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className={`w-full rounded-2xl border border-line object-cover ${e.wide || p.natural ? "h-auto" : "aspect-[4/5]"} ${p.top ? "object-top" : ""}`}
                      />
                    );
                    return e.wide ? (
                      <Link key={p.src} href="/hobby" className="block">
                        {img}
                      </Link>
                    ) : (
                      <div key={p.src}>{img}</div>
                    );
                  })}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <MobileCtaBar />
    </main>
  );
}
