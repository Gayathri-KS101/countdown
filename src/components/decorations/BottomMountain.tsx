"use client";

import Image from "next/image";

export default function BottomMountain() {
  return (
    <div className="bottom-mountain pointer-events-none absolute left-1/2">
      {/* Desktop image */}
      <Image
        src="/mountain.svg"
        alt="Mountain background"
        fill
        priority
        className="mountain-desktop object-contain"
      />

      {/* Mobile image */}
      <Image
        src="/mountain-mobile.svg"
        alt="Mountain background mobile"
        fill
        priority
        className="mountain-mobile object-contain"
      />

      <style>{`
        /* ===== BASE (ALL SCREENS) ===== */
        .bottom-mountain {
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) translateY(0%);
          width: 100vw;
          max-width: none;
          height: clamp(420px, 45vw, 720px);
          z-index: 15;
          filter: drop-shadow(0px -24px 50.9px rgba(0,0,0,0.24));
        }

        /* Hide mobile image by default */
        .mountain-mobile {
          display: none;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 640px) {
          .bottom-mountain {
            width: 100vw; /* ⬅️ still full width */
            height: 654.45px;
            bottom: 0;
            transform: translateX(calc(-50% + 0px)) translateY(18%);
            filter: drop-shadow(0px -27px 51.9px rgba(0,0,0,0.24));
          }

          .mountain-desktop {
            display: none;
          }

          .mountain-mobile {
            display: block;
          }
        }

        /* ===== LARGE SCREENS ===== */
        @media (min-width: 1024px) {
          .bottom-mountain {
            transform: translateX(-50%) translateY(20%);
          }
        }
        @media (max-width: 375px) and (max-height: 670px) {
        .bottom-mountain {
            height: 360px;
        }
        }
      `}</style>
    </div>
  );
}
