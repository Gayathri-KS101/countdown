import Image from "next/image";
import React from "react";

type Feature = string;

interface DiscountedPricingCardProps {
  title: string;
  subtitle?: string;
  oldPrice: number;
  price: number;
  features: Feature[];
  buttonText: string;
  highlight?: boolean;
}

const DiscountedPricingCard: React.FC<DiscountedPricingCardProps> = ({
  title,
  subtitle,
  oldPrice,
  price,
  features,
  buttonText,
  highlight = false,
}) => {
  const handleRedirect = () => {
    window.location.href = "https://makemypass.com/event/after-hours";
  };

  return (
    <div
      className={`relative text-white rounded-2xl px-3 py-4 ${
        highlight ? "shadow-(--box-shadow) mb-7" : "shadow-none"
      }`}
    >
      <Image
        src="/Card-bg.svg"
        alt="Page background"
        fill
        priority
        className="object-cover rounded-2xl z-0"
      />

      <div className="absolute inset-0 bg-white opacity-10 rounded-2xl z-[1]" />

      <div className="relative pl-3 z-10">
        <h3 className="text-2xl font-bold mb-4 font-akira flex flex-col justify-center text-center  h-10 items-center">
          <span>{title}</span>
          <span>{subtitle}</span>
        </h3>

        <div className="pb-3">
          <div className="flex gap-2 h-15 items-center">
            <div className="relative inline-block">
              <span className="text-4xl font-akira opacity-90 tracking-wider">
                {oldPrice}
              </span>
              <div className="absolute top-1/2 left-0 w-full h-1 bg-(--color-text) rotate-[-10deg]" />
            </div>
            <Image
              src={"/arrow.svg"}
              alt="arrow"
              width={60}
              height={60}
              priority
              className="rotate-10"
            />
          </div>
          <div className="px-3 flex justify-end">
            <div
              className={`text-4xl font-akira ${
                highlight
                  ? "bg-linear-to-r from-[#ffffff] to-(--color-text) bg-clip-text text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.4)]"
                  : ""
              }`}
            >
              ₹{price}
            </div>
          </div>
        </div>

        <div>
          {features.map((item, i) => (
            <h2 key={i} className="max-w-80 font-akira text-xl mb-2">
              {item}
            </h2>
          ))}
        </div>

        <div className="flex w-full justify-center">
          <button
            onClick={handleRedirect}
            className={`${
              highlight ? "px-5 py-4" : "px-3 py-3"
            } bg-(--color-button) font-akira hover:bg-red-700 transition rounded-xl font-bold`}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {highlight && (
        <div className="absolute -bottom-9 inset-x-0 flex justify-center -z-1">
          <div className="text-black font-akira border-2 rounded-lg border-(--color-text) py-2 px-3">
            BEST VALUE PASS
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountedPricingCard;
