"use client";

import Image from "next/image";

export default function Birds() {
  return (
    <div
      className="pointer-events-none absolute birds-container"
      style={{
        right: "clamp(240px, 38vw, 480px)",    // ⬅️ moved RIGHT
        top: "clamp(430px, 58vh, 650px)",  // ⬆️ moved UP
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
      <style>{`
        /* Mobile adjustments - move birds to the right and up */
        @media (max-width: 376px) {
          .birds-container {
            right: clamp(60px, 12vw, 200px) !important;
            top: clamp(340px, 53vh, 560px) !important;
          }
        }
        @media (max-width: 768px) {
  .birds-container {
    right: clamp(80px, 18vw, 220px) !important;
    top: clamp(300px, 55vh, 600px) !important;
  }
}

        }
      `}</style>
    </div>
  );
}
