"use client";

import Image from "next/image";

export default function Birds() {
  return (
    <div
      className="pointer-events-none absolute"
      style={{
        left: "clamp(12px, 4vw, 80px)",    // ⬅️ moved LEFT
        top: "clamp(300px, 48vh, 480px)",  // ⬆️ moved UP
        width: "clamp(120px, 20vw, 256px)",
        zIndex: 12,
      }}
    >
      <Image
        src="/birds.svg"
        alt="Flying birds"
        width={256}
        height={144}
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
