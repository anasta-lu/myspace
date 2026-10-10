export type Qualification = {
  title: string;
  provider: string;
  dates: string;
  status?: string;
  note?: string;
};

export const professional: Qualification = {
  title: "Provisional Member, Chartered Accountants ANZ",
  provider: "Chartered Accountants Australia and New Zealand (CA ANZ)",
  dates: "Aug 2023 – Dec 2027",
  status: "CA Program in progress",
  note: "Graduate Diploma of Chartered Accounting. On track for full Chartered Accountant (CA) membership.",
};

export const degrees: Qualification[] = [
  {
    title: "Bachelor of Accountancy, Accounting and Finance",
    provider: "Massey University, Te Kunenga ki Pūrehuroa",
    dates: "2020 – 2023",
  },
  {
    title: "Bachelor of Computer and Information Sciences, IT Service Science",
    provider: "Auckland University of Technology (AUT)",
    dates: "2014 – 2017",
  },
];

export const training: Qualification[] = [
  {
    title: "Dynamics 365 Finance, 7 badges",
    provider: "Microsoft Learn",
    dates: "Nov 2025 – Jun 2026",
    status: "Module assessments passed",
    note: "Core capabilities, general ledger, AP and AR, expense, fixed assets and budgeting, and finance and operations apps.",
  },
  {
    title: "Microsoft Power BI",
    provider: "Nexacu",
    dates: "",
    note: "Formal training in data modelling, DAX and reporting.",
  },
  {
    title: "Microsoft Excel, Expert",
    provider: "Nexacu",
    dates: "",
    note: "Formal training in advanced modelling, Power Query and automation.",
  },
  {
    title: "MYOB Essentials",
    provider: "MYOB",
    dates: "",
    status: "Certificate of Completion",
  },
];
