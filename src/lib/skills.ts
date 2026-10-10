export type Skill = { name: string; proof: string | string[] };
export type SkillGroup = { label: string; skills: Skill[] };

export const fullSuite = {
  years: "3.5 years",
  areas: [
    "Accounts receivable",
    "Month-end close",
    "Reconciliations",
    "Financial reporting",
    "Management reports",
    "Cashflow management & reporting",
    "P&L, balance sheet & cash flow statement",
    "Statutory reporting (AASB / IFRS)",
    "External audits",
    "Multi-entity accounting",
    "Government reporting",
    "Payroll",
    "BAS & payroll tax",
    "Statutory obligations",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Finance & reporting",
    skills: [
      { name: "AASB statutory reporting", proof: "Statutory reporting for a $500m+ scheme" },
      { name: "Statutory compliance", proof: "Kept a regulated scheme audit-ready" },
      { name: "Month-end close & reconciliations", proof: "Automated bank matching: 5 h a week to 0 h" },
      { name: "Audit support", proof: "Cut audit samples from 60 to 2" },
      { name: "Business cases", proof: "Built the $50K ERP upgrade case" },
    ],
  },
  {
    label: "ERP implementation",
    skills: [
      {
        name: "Oracle Fusion ERP",
        proof: [
          "Configured the Collections module myself: delinquency tracking, promise-to-pay and collector notes",
          "FBDI bulk loads: manual journals, customer uploads and mass updates",
          "Bank statement auto-match set-up (5 h a week to 0 h)",
          "Oracle BI report training",
        ],
      },
      { name: "Microsoft Dynamics 365 Finance", proof: "7 Microsoft Learn badges: GL, AP/AR, fixed assets, budgeting" },
      { name: "NetSuite", proof: "Led the implementation end to end, with minimal partner help (reference on request)" },
      { name: "Xero", proof: "Implemented for a production company" },
      { name: "MYOB", proof: "Implemented, plus MYOB Essentials certificate" },
      { name: "Unleashed & DEAR Systems (now Cin7 Core)", proof: "Inventory system migrations" },
    ],
  },
  {
    label: "Data & BI",
    skills: [
      { name: "Power BI & DAX", proof: "Formal training with Nexacu" },
      { name: "Excel, expert level", proof: "Formal training with Nexacu" },
      { name: "Power Query", proof: "Repeatable data clean-up instead of manual fixes" },
      { name: "SQL", proof: "Extracting and reconciling ERP data" },
    ],
  },
  {
    label: "Automation & code",
    skills: [
      { name: "Python", proof: "Financial modelling and automation scripts" },
      { name: "React", proof: "Custom reporting tools, and this site" },
      { name: "Agentic AI", proof: "AI agents that do the menial work" },
      { name: "Docker", proof: "Self-hosting open-source tools" },
      { name: "Nocobase & Frappe", proof: "Custom reporting apps on open-source platforms" },
      { name: "WordPress", proof: "Runs cleanuppartners.com.au" },
    ],
  },
  {
    label: "Systems & architecture",
    skills: [
      { name: "Data & app architecture", proof: "Bridging finance and IT on ERP projects" },
      { name: "Systems analysis", proof: "Systems Analyst at ITPLUS, 2015 to 2019" },
      { name: "Process redesign", proof: "Root cause first, then automate" },
    ],
  },
  {
    label: "IT infrastructure",
    skills: [
      { name: "Networking", proof: "Surveillance and network installs at ITPLUS" },
      { name: "Server builds & configuration", proof: "Built and configured servers for customers" },
      { name: "Firmware coding", proof: "Wrote firmware for hardware products" },
    ],
  },
  {
    label: "Documentation & training",
    skills: [
      { name: "Technical manuals", proof: "Written for IT products and systems" },
      { name: "Policies & procedures", proof: "Finance and IT processes, written down so they last" },
      { name: "Training in IT & finance", proof: "Teaching teams the systems and the accounting behind them" },
    ],
  },
];
