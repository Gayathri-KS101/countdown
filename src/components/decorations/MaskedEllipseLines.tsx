"use client";

import { useEffect, useState } from "react";

export default function MaskedEllipseLines() {
  const SIZE = 880;
  const R_INNER = 380;
  const R_OUTER = 400;
  const LINE_COUNT = 160;

  const CENTER = SIZE / 2;

  const [isFastRotation, setIsFastRotation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFastRotation(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 overflow-hidden"
      style={{
        width: "clamp(1100px, 180vw, 2000px)",
        height: "clamp(550px, 90vw, 1000px)",
        top: "clamp(-570px, -57vw, -280px)",
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

            const x1 = CENTER + R_INNER * Math.cos(angle);
            const y1 = CENTER + R_INNER * Math.sin(angle);
            const x2 = CENTER + R_OUTER * Math.cos(angle);
            const y2 = CENTER + R_OUTER * Math.sin(angle);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(70,70,75,0.8)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
