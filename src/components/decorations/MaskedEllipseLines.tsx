"use client";

import { useEffect, useState } from "react";

export default function MaskedEllipseLines() {
  const SIZE = 820;
  const R_INNER = 380;
  const R_OUTER = 395;
  const LINE_COUNT = 270;
  const CENTER = SIZE / 2;

  const [isFastRotation, setIsFastRotation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFastRotation(false), 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="pointer-events-none absolute left-1/2 masked-ellipse-lines overflow-hidden"
      style={{
        width: "clamp(900px, 180vw, 2400px)",
        height: "clamp(550px, 90vw, 1100px)",
        top: "clamp(-790px, -61vw, -350px)",
        zIndex: 5,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CENTER} ${CENTER}`}
            to={`360 ${CENTER} ${CENTER}`}
            dur={isFastRotation ? "12s" : "90s"}
            repeatCount="indefinite"
            calcMode="linear"
          />

          {Array.from({ length: LINE_COUNT }).map((_, i) => {
            const angle = (i / LINE_COUNT) * Math.PI * 2;
            const pinX = CENTER + R_OUTER * Math.cos(angle);
            const pinY = CENTER + R_OUTER * Math.sin(angle);

            return (
              <rect
                key={i}
                x={-1.5}
                y={-6}
                width={3}
                height={12}
                transform={`translate(${pinX}, ${pinY}) rotate(${(angle * 180) / Math.PI + 90})`}
                fill="rgba(40,40,40,0.8)"
              />
            );
          })}
        </g>
      </svg>
      <style>{`
        .masked-ellipse-lines {
          transform: translateX(-50%);
        }

        @media (min-width: 1024px) {
          .masked-ellipse-lines {
            transform: translateX(-50%) scaleX(1.2);
          }
        }
      `}</style>
    </div>
  );
}
