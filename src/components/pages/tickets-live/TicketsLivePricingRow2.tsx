"use client";
import FeaturedPricingCard from "@/components/pages/tickets-live/FeaturedPricingCard";
import PricingCard from "@/components/pages/tickets-live/PricingCard";
import { motion } from "motion/react";
import DiscountedPricingCard from "@/components/pages/tickets-live/DiscountedPricingCard";

const TicketsLivePricingRow2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-end">
        <PricingCard
          title="DAY 3"
          price={599}
          buttonText="GRAB YOURS"
          features={[
            "Your day 3 access includes:",
            "Access to Haricharan’s live performance",
            "Complimentary entry to Taksati",
          ]}
        />

        <FeaturedPricingCard
          title="DAY 3"
          subtitle="BUNDLE - 10"
          oldPrice={5999}
          price={5399}
          buttonText="BOOK BUNDLE"
          highlight
          features={[
            "Entry valid for 10 individuals",
            "Access to Haricharan’s live performance",
            "Complimentary entry to Taksati",
          ]}
        />

        <DiscountedPricingCard
          title="DAY 3"
          subtitle="BUNDLE - 5"
          oldPrice={2999}
          price={2699}
          buttonText="GRAB YOURS"
          features={[
            "Entry valid for 5 individuals",
            "Access to Haricharan’s live performance",
            "Complimentary entry to Taksati",
          ]}
        />
      </div>
    </motion.section>
  );
};

export default TicketsLivePricingRow2;
