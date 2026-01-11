import Image from "next/image";
import React from "react";

type Feature = string;

interface PricingCardProps {
  title: string;
  oldPrice: number;
  price: number;
  heading: string;
  features: Feature[];
  buttonText: string;
  highlight?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  oldPrice,
  price,
  heading,
  features,
  buttonText,
  highlight = false,
}) => {
  return (
    <div
      className={`relative text-white rounded-2xl px-3 py-4  ${
        highlight ? "shadow-(--box-shadow) mb-7 " : "shadow-none"
      }`}
    >
        <Image
            src="/Card-bg.svg"   
            alt="Page background"
            fill
            priority
            className="object-cover rounded-2xl"
        />
        <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 font-akira">{title}</h3>

            <div className="pb-3">
                <div className="flex gap-2">
                    <div className="relative inline-block">
                      {/* Text */}
                      <span className="text-4xl font-akira tracking-wider">
                        {oldPrice}
                      </span>

                      {/* Red diagonal line */}
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
                <div className="pl-26 flex justify-center">
                    <div className={`text-4xl font-akira ${highlight ? "bg-linear-to-r from-[#ffffff] to-(--color-text) bg-clip-text text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.4)]": ""}`}>{price}</div>
                </div>
            </div>

            <h2 className={`${highlight ? "max-w-71" : "max-w-75"} font-akira text-xl mb-2`}>{heading}</h2>

            <ul className={`space-y-3 text-md font-bold max-w-76 font-urbanist text-white mb-6`}>
                {features.map((item, i) => (
                <li key={i} className="flex gap-2"><div>•</div> {item}</li>
                ))}
            </ul>

            {/* Button */}
            <div className="flex w-full justify-center">
              <button className=" bg-(--color-button) px-2 font-akira hover:bg-red-700 transition py-3 rounded-xl font-bold">
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

export default PricingCard;
