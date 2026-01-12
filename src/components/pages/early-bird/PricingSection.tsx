"use client"
import PricingCard from "./PricingCard";
import { motion } from "motion/react";

const PricingSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}   
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
        <PricingCard
          title="DAY 2 PASS"
          oldPrice={1199}
          price={899}
          buttonText="BOOK DAY2"
          heading="Live Concert: FEJO"
          features={[
            "₹400 Silver Voucher for any Technical Workshop",
            "Job Fair Access",
            "Talk Session & Tech Expos",
            "Natya (Cultural Night)",
          ]}
        />

        <PricingCard
          title="BUNDLE PASS"
          oldPrice={1999}
          price={1799}
          buttonText="BOOK BUNDLE"
          highlight
          heading="Live Concert: FEJO + HARICHARAN"
          features={[
            "₹400 Silver Voucher for any Technical Workshop",
            "Job Fair Access",
            "Talk Session & Tech Expos",
            "Natya + Taksati",
          ]}
        />

        <PricingCard
          title="DAY 3 PASS"
          oldPrice={1299}
          price={999}
          buttonText="BOOK DAY3"
          heading="Live Concert: HARICHARAN"
          features={[
            "₹400 Silver Voucher for any Technical Workshop",
            "Job Fair Access",
            "Talk Session & Tech Expos",
            "Taksati (Closing Cultural Event)",
          ]}
        />
      </div>
    </motion.section>
  );
};

export default PricingSection;
