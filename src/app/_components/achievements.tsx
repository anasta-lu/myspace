import Link from "next/link";
import { achievements } from "@/lib/achievements";

export function Achievements() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto max-w-2xl scroll-mt-6 px-5 pb-12"
    >
      <h2 id="work-title" className="text-xl font-extrabold md:text-2xl">
        Achievements
      </h2>
      <p className="mt-1 text-sm text-muted">
        Before → after, at a $500m+ statutory reporting scheme.
      </p>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {achievements.map((a) => (
          <li
            key={a.slug}
            className="print-outline break-inside-avoid rounded-2xl border border-line bg-card p-4"
          >
            <p className="flex items-baseline gap-2.5 font-mono text-2xl font-semibold tabular-nums">
              {a.before && (
                <>
                  <s className="text-base text-muted decoration-2">{a.before}</s>
                  <span className="text-base text-amber" aria-hidden="true">
                    →
                  </span>
                </>
              )}
              <span>{a.after}</span>
            </p>
            <h3 className="mt-1.5 font-bold leading-snug">{a.measure}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{a.how}</p>
            <Link
              href={`/achievements#${a.slug}`}
              className="print-hide mt-3 inline-block text-sm font-bold text-signal underline-offset-4 hover:underline"
            >
              Read how I did it →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
