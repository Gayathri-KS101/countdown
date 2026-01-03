"use client";

import { useEffect, useState } from "react";

export default function SemicircularDial() {
  const [isFastRotation, setIsFastRotation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFastRotation(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  // === ORIGINAL GEOMETRY (UNCHANGED) ===
  const centerX = 864;
  const centerY = -314;

  const circleRadius = 830.83;
  const strokeWidth = 4.32929;
  const pinRadius = circleRadius - strokeWidth / 2;

  const pinCount = 128;
  const pinWidth = 7;
  const pinHeight = 18;

  const pins = Array.from({ length: pinCount }, (_, i) => {
    const angle = (i / pinCount) * 360;
    const rad = (angle * Math.PI) / 180;

    return {
      id: i,
      angle,
      x: centerX + pinRadius * Math.cos(rad),
      y: centerY + pinRadius * Math.sin(rad),
    };
  });

  return (
        <div
        className="pointer-events-none absolute left-1/2 semicircular-dial overflow-hidden"
        style={{
            transform: "translateX(-50%)",
            width: "clamp(900px, 140vw, 1700px)",
            height: "clamp(260px, 40vw, 520px)",
            zIndex: 4,
        }}
        >
      <svg
        viewBox="0 0 1728 529"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${centerX} ${centerY}`}
            to={`360 ${centerX} ${centerY}`}
            dur={isFastRotation ? "3.5s" : "30s"}
            repeatCount="indefinite"
            calcMode="linear"
          />

          {/* Main circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={circleRadius}
            fill="none"
            stroke="#000000"
            strokeWidth={strokeWidth}
          />

          {/* Pins */}
          {pins.map((pin) => (
            <rect
              key={pin.id}
              x={-pinWidth / 2}
              y={-pinHeight / 2}
              width={pinWidth}
              height={pinHeight}
              transform={`translate(${pin.x}, ${pin.y}) rotate(${pin.angle + 90})`}
              fill="#000000"
            />
          ))}
        </g>
      </svg>
        <style>{`
            .semicircular-dial {
            top: 36px;
            }

            @media (min-width: 1024px) {
            .semicircular-dial {
                top: -110px;
            }
            }
        `}</style>
    </div>
  );
}
