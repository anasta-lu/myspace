import type { Metadata } from "next";
import Link from "next/link";
import AchievementsPage from "@/app/achievements/page";
import { Achievements } from "@/app/_components/achievements";
import { Contact } from "@/app/_components/contact";
import { Hero } from "@/app/_components/hero";
import { PrintButton } from "@/app/_components/print-button";
import EducationPage from "@/app/education/page";
import SkillsPage from "@/app/skills/page";
import WorkPage from "@/app/work/page";

export const metadata: Metadata = {
  title: "CV | Ana Lu",
  description:
    "Ana Lu's full CV: before and after results, work history, achievements in detail, education and skills.",
};

export default function CoolCvPage() {
  return (
    <div>
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
      <WorkPage />
      <AchievementsPage />
      <div className="print:break-before-page">
        <EducationPage />
      </div>
      <div className="print:break-before-page">
        <SkillsPage />
      </div>
      <Contact />
    </div>
  );
}
