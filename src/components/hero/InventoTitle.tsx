"use client";

export default function InventoTitle() {
  return (
    <div className="pointer-events-none absolute left-1/2 invento-title">
      <h1 className="invento-text font-akira font-extrabold">
        INVENTO
      </h1>

      <style>{`
        /* ===== BASE (ALL SCREENS) ===== */
        .invento-title {
          transform: translateX(-50%); 
          bottom: clamp(20px, 8vh, 60px);
          width: clamp(280px, 90vw, 998px);
          text-align: center;
          z-index: 5;
          overflow: visible;
        }

        .invento-text {
          font-size: clamp(44px, 14vw, 140px);
          line-height: 1.1;
          letter-spacing: -0.05em;
          background: linear-gradient(
            180deg,
            #C51D28 20.57%,
            #FFFFFF 70.71%
          );
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
            bottom: 195px;
          }
        }
      `}</style>
    </div>
  );
}
