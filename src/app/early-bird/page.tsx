"use client";

import PageBackground from "@/components/decorations/PageBackground";
import PricingSection from "@/components/pages/early-bird/PricingSection";
import dynamic from "next/dynamic"

const FallingLeaves = dynamic(
  () => import("@/components/pages/early-bird/FallingLeaves"),
  { ssr: false }
)

export default function Home() {
  return (
    <div 
      className="relative h-full bg-cover bg-center bg-no-repeat bg-[url('/event/mobilebg.svg')]
    lg:bg-[url('/event/eventbg.svg')] lg:flex flex-col justify-center items-center lg:min-h-screen overflow-y-auto py-6"
    >
      <FallingLeaves />
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <PageBackground />
      </div> */}

      <div className="relative z-20">
        <h1 className="text-center text-6xl md:text-9xl bg-linear-to-r from-[#ffffff] to-(--color-text) bg-clip-text text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.4)] font-akira lg:-mb-6">
          EARLY BIRD
        </h1>
        <PricingSection />
      </div>
    </div>
  );
}

