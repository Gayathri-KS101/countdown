import TopRedSemicircle from "@/components/decorations/TopRedSemicircle";
import TopGradientTrapezoid from "@/components/decorations/TopGradientTrapezoid";
import NumberArcGroup from "@/components/decorations/NumberArcGroup";
import DoubleEllipseRing from "@/components/decorations/DoubleEllipseRing";
import BottomMountain from "@/components/decorations/BottomMountain";
import InventoTitle from "@/components/hero/InventoTitle";
import Birds from "@/components/decorations/Birds";
import PageBackground from "@/components/decorations/PageBackground";

export default function Home() {
  return (
    <main className="relative h-screen lg:min-h-screen overflow-hidden">
      <PageBackground />
      {/* Background decoration (behind everything) */}
      <DoubleEllipseRing width={620} height={620} zIndex={1} />

      {/* Hero section */}
      <section className="relative h-screen lg:min-h-screen z-10">
        <TopRedSemicircle />
        <TopGradientTrapezoid />
        <NumberArcGroup />
        <InventoTitle />
        <Birds />
      </section>

      {/* Bottom image (LAST visual element) */}
      <BottomMountain />
    </main>
  );
}
