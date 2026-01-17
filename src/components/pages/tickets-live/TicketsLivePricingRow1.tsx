"use client";
import FeaturedPricingCard from "@/components/pages/tickets-live/FeaturedPricingCard";
import PricingCard from "@/components/pages/tickets-live/PricingCard";
import { motion } from "motion/react";
import DiscountedPricingCard from "@/components/pages/tickets-live/DiscountedPricingCard";

const TicketsLivePricingRow1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-end">
        <PricingCard
          title="DAY 2"
          price={499}
          buttonText="GRAB YOURS"
          features={[
            "Your day 2 access includes :",
            "Access to Fejo’s live performance",
            "Complimentary entry to Natya",
          ]}
        />

        <FeaturedPricingCard
          title="DAY 2"
          subtitle="BUNDLE - 10"
          oldPrice={4999}
          price={4499}
          buttonText="BOOK BUNDLE"
          highlight
          features={[
            "Entry valid for 10 individuals",
            "Access to Fejo’s live performance",
            "Complimentary entry to Natya",
          ]}
        />

        <DiscountedPricingCard
          title="DAY 2"
          subtitle="BUNDLE - 5"
          oldPrice={2499}
          price={2299}
          buttonText="GRAB YOURS"
          features={[
            "Entry valid for 5 individuals",
            "Access to Fejo’s live performance",
            "Complimentary entry to Natya",
          ]}
        />
      </div>
    </motion.section>
  );
};

export default TicketsLivePricingRow1;
