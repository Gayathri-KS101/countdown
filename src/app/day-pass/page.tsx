"use client";

import PageBackground from "@/components/decorations/PageBackground";
import DayPassPricingSection from "@/components/pages/day-pass/DayPassPricingSection";
import dynamic from "next/dynamic";

const FallingLeaves = dynamic(
  () => import("@/components/pages/day-pass/FallingLeaves"),
  { ssr: false },
);

export default function Home() {
  return (
    <div
      className="relative h-full bg-cover bg-center bg-no-repeat bg-[url('/event/mobilebg.svg')]
    lg:bg-[url('/event/eventbg.svg')] lg:flex flex-col justify-center items-center lg:min-h-screen overflow-y-auto py-6"
    >
      <FallingLeaves />

      <div className="flex flex-col relative z-20 gap-12">
        <h1 className="text-center text-6xl md:text-9xl text-(--color-text) font-akira lg:-mb-6">
          DAY PASS
        </h1>
        <DayPassPricingSection />
      </div>
    </div>
  );
}
