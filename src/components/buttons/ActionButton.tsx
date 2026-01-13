"use client";

import Image from "next/image";
import Link from "next/link";

export default function ActionButton() {
  return (
    <div className="action-button-container absolute left-1/2 -translate-x-1/2 pointer-events-auto z-20 flex items-center gap-2">
      <Image
        src="/left.svg"
        alt="Left decoration"
        width={40}
        height={40}
        className="action-button-left"
        priority
      />
      <Link href="/early-bird">
        <button className="action-button font-akira font-bold text-white bg-[#C20C19] hover:bg-[#a00a15] transition-colors border-2 border-black px-6 py-3">
          EARLY BIRD
        </button>
      </Link>
      <Image
        src="/right.svg"
        alt="Right decoration"
        width={40}
        height={40}
        className="action-button-right"
        priority
      />
      <style>{`
        .action-button-container {
          top: clamp(500px, 60vh, 650px);
        }

        .action-button {
          font-size: clamp(16px, 2vw, 24px);
          padding: clamp(12px, 1.8vh, 18px) clamp(4px, 0.5vw, 8px);
          letter-spacing: 0.05em;
          box-shadow: 0px 0px 0px 1px black;
          white-space: nowrap;
        }

        .action-button-left,
        .action-button-right {
          width: clamp(50px, 5vw, 80px);
          height: clamp(50px, 5vw, 80px);
        }

        /* iPhone SE adjustments */
        @media (max-width: 376px) and (max-height: 668px) {
          .action-button-container {
            top: clamp(350px, 52vh, 450px);
            transform: translateX(calc(-50% + 40px));
          }
        }

        /* Mobile adjustments - increase button width and adjust position */
        @media (max-width: 768px) {
          .action-button-container {
            top: clamp(400px, 50vh, 520px);
            transform: translateX(calc(-50% + 60px));
          }
          
          .action-button {
            padding: clamp(12px, 1.8vh, 18px) clamp(18px, 3.5vw, 36px);
          }
        }

        /* Desktop adjustments */
        @media (min-width: 1024px) {
          .action-button-container {
            top: clamp(550px, 63vh, 700px);
          }
          
          .action-button {
            font-size: clamp(18px, 2.2vw, 28px);
            padding: clamp(14px, 2vh, 20px) clamp(6px, 0.7vw, 12px);
          }

          .action-button-left,
          .action-button-right {
            width: clamp(60px, 6vw, 100px);
            height: clamp(60px, 6vw, 100px);
          }
        }
      `}</style>
    </div>
  );
}

