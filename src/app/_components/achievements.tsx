type Achievement = {
  before?: string;
  after: string;
  measure: string;
  how: string;
};

const achievements: Achievement[] = [
  {
    before: "60",
    after: "2",
    measure: "Auditor sample requests a month",
    how: "Prepared audit-ready month-end working papers. No audit challenges in the years after.",
  },
  {
    before: "100%",
    after: "50%",
    measure: "Finance processing time",
    how: "Automated Oracle matching and rebuilt fragile spreadsheets across month-end, audit, bank recs and AR/AP.",
  },
  {
    after: "$50K",
    measure: "ERP upgrade approved by the board in three months",
    how: "Wrote the business case for payment reminders, debt collection and BI reporting.",
  },
  {
    before: "5 h",
    after: "0 h",
    measure: "Manual receipt matching a week",
    how: "Found Oracle's auto-match, unused for five years, in my second week.",
  },
];

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
            key={a.measure}
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
          </li>
        ))}
      </ul>
    </section>
  );
}
