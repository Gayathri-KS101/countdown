"use client";
import PricingCard from "./PricingCard";
import { motion } from "motion/react";

const DayPassPricingSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
        <PricingCard
          title="DAY 2 PASS"
          price={1199}
          buttonText="BOOK DAY2"
          heading="Live Concert: FEJO"
          features={[
            "Avail any one workshop worth ₹500 for free",
            "Job Fair Access",
            "Talk Session & Tech Expos",
            "Natya (Cultural Night)",
          ]}
        />

        <PricingCard
          title="BUNDLE PASS"
          price={1999}
          buttonText="BOOK BUNDLE"
          highlight
          heading="Live Concert: FEJO + HARICHARAN"
          features={[
            "Avail any one workshop worth ₹500 for free",
            "Job Fair Access",
            "Talk Session & Tech Expos",
            "Natya + Taksati",
          ]}
        />

        <PricingCard
          title="DAY 3 PASS"
          price={1299}
          buttonText="BOOK DAY3"
          heading="Live Concert: HARICHARAN"
          features={[
            "Avail any one workshop worth ₹500 for free",
            "Job Fair Access",
            "Talk Session & Tech Expos",
            "Taksati (Closing Cultural Event)",
          ]}
        />
      </div>
    </motion.section>
  );
};

export default DayPassPricingSection;
