import FallingLeaves from "@/components/pages/day-pass/FallingLeaves";
import TicketsLivePricingRow1 from "@/components/pages/tickets-live/TicketsLivePricingRow1";
import TicketsLivePricingRow2 from "@/components/pages/tickets-live/TicketsLivePricingRow2";

export default function Home() {
  return (
    <div
      className="
        relative
        min-h-screen
        bg-cover bg-center bg-no-repeat bg-fixed
        bg-[url('/event/mobilebg.svg')]
        lg:bg-[url('/event/eventbg.svg')]
        overflow-y-auto
        py-6
      "
    >
      <FallingLeaves />
      <div className="flex flex-col items-center relative z-20">
        <h1 className="text-center text-6xl md:text-9xl max-w-6xl text-(--color-text) font-akira lg:-mb-6">
          TICKETS LIVE NOW
        </h1>

        <div className="flex flex-col gap-24 py-12">
          <TicketsLivePricingRow1 />
          <TicketsLivePricingRow2 />
        </div>
      </div>
    </div>
  );
}
