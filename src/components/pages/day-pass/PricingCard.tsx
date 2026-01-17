import Image from "next/image";
import React from "react";

type Feature = string;

interface PricingCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  heading: string;
  heading2?: string;
  features: Feature[];
  buttonText: string;
  highlight?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  oldPrice,
  heading,
  heading2,
  features,
  buttonText,
  highlight = false,
}) => {
  const handleRedirect = () => {
    window.location.href = "https://makemypass.com/event/day-pass";
  };

  return (
    <div
      className={`relative text-black rounded-2xl px-3 py-4 ${
        highlight ? "shadow-(--box-shadow) mb-7" : "shadow-none"
      }`}
    >
      <div className="absolute inset-0 bg-white rounded-2xl z-[1]" />

      <div className="relative pl-3 z-10">
        <h3 className="text-2xl font-bold mb-4 font-akira flex justify-center">
          {title}
        </h3>

        <div className="pb-3">
          {oldPrice ? (
            <>
              <div className="flex gap-2 h-15 items-center">
                <div className="relative inline-block">
                  <span className="text-4xl font-akira opacity-90 tracking-wider">
                    ₹{oldPrice}
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
                      ? "bg-linear-to-r from-[#000000] to-(--color-text) bg-clip-text text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.4)]"
                      : ""
                  }`}
                >
                  ₹{price}
                </div>
              </div>
            </>
          ) : (
            <div className="px-3 flex justify-center">
              <div
                className={`text-4xl font-akira ${
                  highlight
                    ? "bg-linear-to-r from-[#000000] to-(--color-text) bg-clip-text text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.4)]"
                    : ""
                }`}
              >
                ₹{price}
              </div>
            </div>
          )}
        </div>

        <h2 className="max-w-80 font-akira text-xl mb-2 flex flex-col">
          <span>{heading}</span>
          <span>{heading2}</span>
        </h2>

        <ul className="space-y-3 text-md font-bold max-w-76 font-urbanist text-black mb-6">
          {features.map((item, i) => (
            <li key={i} className="flex gap-2">
              <div className="opacity-65 text-[14px]">•</div> {item}
            </li>
          ))}
        </ul>

        <div className="flex w-full justify-center">
          <button
            onClick={handleRedirect}
            className={`${
              highlight ? "px-5 py-4" : "px-3 py-3"
            } bg-(--color-button) font-akira hover:bg-red-700 transition rounded-xl font-bold text-white`}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {highlight && (
        <div className="absolute -bottom-9 inset-x-0 flex justify-center -z-1">
          <div className="text-white font-akira border-2 rounded-lg border-(--color-text) py-2 px-3">
            BEST VALUE PASS
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
