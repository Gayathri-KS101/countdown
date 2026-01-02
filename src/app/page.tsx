import TopRedSemicircle from "@/components/decorations/TopRedSemicircle";
import TopGradientTrapezoid from "@/components/decorations/TopGradientTrapezoid";
import NumberArcGroup from "@/components/decorations/NumberArcGroup";
import DoubleEllipseRing from "@/components/decorations/DoubleEllipseRing";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background decoration (NOT clipped) */}
      <DoubleEllipseRing
        width={620}
        height={620}
        zIndex={20}
      />


      {/* Hero content */}
      <section className="relative min-h-screen z-10">
        <TopRedSemicircle />
        <TopGradientTrapezoid />
        <NumberArcGroup />

        {/* rest of hero */}
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">Hero Content</h1>
        </div>
      </section>
    </main>
  );
}
