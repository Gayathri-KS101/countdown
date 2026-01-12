import PageBackground from "@/components/decorations/PageBackground";
import PricingSection from "@/components/pages/early-bird/PricingSection";
export default function Home() {
  return (
    <main className="relative h-full lg:min-h-screen overflow-y-auto py-6">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PageBackground />
      </div>

      <div className="relative z-20">
        <h1 className="text-center text-6xl md:text-9xl text-(--color-text) font-akira lg:-mb-6">
          EARLY BIRD
        </h1>
        <PricingSection />
      </div>
    </main>
  );
}

