export type Achievement = {
  slug: string;
  before?: string;
  after: string;
  measure: string;
  how: string;
  title: string;
  where: string;
  problem: string[];
  rootCause: string[];
  whatIDid: string[];
  result: string[];
};

export const achievements: Achievement[] = [
  {
    slug: "audit-ready",
    before: "60",
    after: "2",
    measure: "Auditor sample requests a month",
    how: "Prepared audit-ready month-end working papers. No audit challenges in the years after.",
    title: "Making the auditors' job easy",
    where: "Exchange for Change · Return and Earn (NSW) and ACT container deposit schemes",
    problem: [
      "In my first year I supplied thousands of documents to external audit. Every request pulled me away from month-end, and every answer had to be dug out by hand.",
    ],
    rootCause: [
      "Auditors weren't asking because something was wrong. They were asking because our month-end work didn't answer their questions up front, so they had to sample to get comfortable.",
    ],
    whatIDid: [
      "I made it my mission to prepare month-end work that answered the auditors' questions before they asked them.",
    ],
    result: [
      "AR sample requests fell from around 60 a month to a couple in year two.",
      "In the years after, the auditors didn't challenge my work, because they trusted it.",
    ],
  },
  {
    slug: "halved-processing",
    before: "100%",
    after: "50%",
    measure: "Finance processing time",
    how: "Automated Oracle matching and rebuilt fragile spreadsheets across month-end, audit, bank recs and AR/AP.",
    title: "A $50m workflow still running at $500m",
    where: "Exchange for Change",
    problem: [
      "The bank rec workbook had been maintained since day one. It took 20 minutes to open, broke constantly and held thousands of transactions a month. It also fed cash flow and debt-collection reporting.",
      "Every export meant manually fixing around 50 customer names back to their registered names. The prepayments workbook held thousands of lines from machines across the state, with no validation: wrong dates, wrong quantities, a new surprise every month.",
    ],
    rootCause: [
      "The workflow was designed when the scheme turned over about $50m a year. Five years later it was processing $500m+ on the same spreadsheets, and nobody had been given the time to rebuild them.",
    ],
    whatIDid: [
      "Where the ERP couldn't do something easily or cheaply, I built financial models that turned raw exports into reports without touching the source data.",
    ],
    result: [
      "Time spent on month-end, external audit, bank recs and AR/AP processing fell by more than half.",
      "The team got so much time back that people forgot how much work Finance actually does.",
    ],
  },
  {
    slug: "erp-business-case",
    after: "$50K",
    measure: "ERP upgrade approved by the board in three months",
    how: "Wrote the business case for payment reminders, debt collection and BI reporting.",
    title: "Winning $50K for a long-neglected Finance team",
    where: "Exchange for Change",
    problem: [
      "Finance had been running on an under-configured Oracle ERP for years. Even a single invoice template change usually cost $10K to $20K, so small fixes never happened.",
    ],
    rootCause: [
      "Finance had never put its case to the IT committee and the board in their terms: what it costs the scheme to leave things as they are.",
    ],
    whatIDid: [
      "Three months into the job, I wrote my first full business case, convincing the IT committee and the board that a long-neglected Finance team was worth investing in.",
    ],
    result: [
      "We delivered payment reminders, a fixed debt-collection module and custom Oracle BI report training for the $50K.",
    ],
  },
  {
    slug: "oracle-auto-match",
    before: "5 h",
    after: "0 h",
    measure: "Manual receipt matching a week",
    how: "Found Oracle's auto-match, unused for five years, in my second week.",
    title: "1,000 clicks a week, replaced by one command",
    where: "Exchange for Change",
    problem: [
      "Bank recs and receipting ate most of the day. We spent around five hours a week clicking about a thousand times to match receipts to invoices, one at a time. One day I reconciled 200+ transactions by hand.",
    ],
    rootCause: [
      "By the end of week one I'd worked out that we weren't using our tools, we were working around them. An ERP of that calibre was never meant to be run by hand.",
    ],
    whatIDid: [
      "In week two I dug through the (famously unhelpful) Oracle manuals and found the auto-match command that nobody had used in the company's five years.",
    ],
    result: [
      "Around five hours a week of manual matching gone.",
      "It's also the moment I knew I'd stay.",
    ],
  },
];
