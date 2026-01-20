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
       <h1 className="
    text-center
    text-3xl         
    sm:text-4xl
    md:text-6xl
    lg:text-6xl

    max-w-[20rem]      
    sm:max-w-sm
    md:max-w-2xl
    lg:max-w-4xl

    text-(--color-text)
    font-akira
    leading-tight
  ">
    REGISTRATIONS ARE LIVE
  </h1>

        <div className="flex flex-col gap-24 py-12">
          <TicketsLivePricingRow1 />
          <TicketsLivePricingRow2 />
        </div>
      </div>
    </div>
  );
}
