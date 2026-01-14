"use client";

import Image from "next/image";
import Link from "next/link";

export default function ActionButton() {
  return (
    <div
      className="
    fixed z-20 pointer-events-auto
    inset-x-0 mx-auto
    flex items-center justify-center gap-2
    top-[clamp(460px,60vh,680px)]
md:top-[clamp(500px,62vh,720px)]
lg:top-[clamp(580px,65vh,780px)]

  "
    >

      <Image
        src="/left.svg"
        alt="Left decoration"
        width={80}
        height={80}
        priority
        className="w-[clamp(50px,5vw,80px)] h-auto"
      />

      <Link href="/early-bird">
        <button
          className="
    font-akira font-bold text-white
    bg-[rgba(194,12,25,0.8)]
    hover:bg-[rgba(160,10,21,0.9)]
    backdrop-blur-sm
    transition-all duration-300
    rounded-xl
    whitespace-nowrap
    text-[clamp(13px,1.6vw,18px)]
px-[clamp(12px,3vw,22px)]
py-[clamp(8px,1.4vh,12px)]
    shadow-[0_6px_20px_rgba(0,0,0,0.25)]
    hover:shadow-[0_0_0_2px_rgba(255,255,255,0.6),_0_8px_30px_rgba(255,255,255,0.25)]
    active:scale-95
  "
        >
          EARLY BIRD
        </button>


      </Link>

      <Image
        src="/right.svg"
        alt="Right decoration"
        width={80}
        height={80}
        priority
        className="w-[clamp(50px,5vw,80px)] h-auto"
      />
    </div>
  );
}
