"use client";

import { useEffect, useState } from "react";

export default function InventoTitle() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`pointer-events-none absolute left-1/2 invento-title ${isLoaded ? "loaded" : ""}`}>
      <h1 className="invento-text font-akira font-extrabold">
        INVENTO
      </h1>

      <style>{`
        /* ===== BASE (ALL SCREENS) ===== */
        .invento-title {
          transform: translateX(-50%) translateY(100px); 
          opacity: 0;
          bottom: clamp(20px, 8vh, 60px);
          width: clamp(280px, 90vw, 998px);
          text-align: center;
          z-index: 5;
          overflow: visible;
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .invento-title.loaded {
          transform: translateX(-50%) translateY(0px);
          opacity: 1;
        }

        .invento-text {
          font-size: clamp(44px, 14vw, 140px);
          line-height: 1.1;
          letter-spacing: -0.05em;
          background: #C51D28;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* 📱 VERY SMALL PHONES (iPhone SE) */
        @media (max-width: 376px) {
          .invento-title {
            bottom: 200px; /* ⬅️ predictable */
          }
        }

        /* 📱 NORMAL MOBILES */
        @media (min-width: 377px) and (max-width: 640px) {
          .invento-title {
            bottom: 220px;
          }
        }
      `}</style>
    </div>
  );
}
