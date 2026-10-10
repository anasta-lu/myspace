import { Achievements } from "@/app/_components/achievements";
import { Hero, MobileCtaBar } from "@/app/_components/hero";

export default function Index() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />
      <Achievements />
      <MobileCtaBar />
    </main>
  );
}
