"use client";

import Image from "next/image";

export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Image
        src="/mainbg.svg"   // ⬅️ your background image
        alt="Page background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional overlay to soften background */}
      <div
        className="absolute inset-0"
        style={{
            background:
            "linear-gradient(to bottom, rgba(255,255,255,0.35), rgba(255,255,255,0.15))",
        }}
        />

    </div>
  );
}
