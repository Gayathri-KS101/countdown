"use client";

import { useRotaryAnimation } from "@/hooks/useRotaryAnimation";

type NumberArcProps = {
  radiusX: string;
  radiusY: string;
  value: number;
  max: number;
  count: number;
  arcRotation?: number;
  maxAngle?: number;
  label?: string;
  labelOffset?: string;
  topOffset?: string;
  fontScale?: number;
};

export default function NumberArc({
  radiusX,
  radiusY,
  value,
  max,
  count,
  arcRotation = 0,
  maxAngle = 180,
  label,
  labelOffset,
  topOffset,
  fontScale = 1,
}: NumberArcProps) {
  const {
    angleOffset,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useRotaryAnimation();

  const centerIndex = Math.floor(count / 2);
  const numbers = Array.from({ length: count }, (_, i) => {
    let v = value + (i - centerIndex);
    if (v < 0) v += max;
    if (v >= max) v -= max;
    return v;
  });
  const centerFont = `clamp(${12 * fontScale}px, ${1.6 * fontScale}vw, ${26 * fontScale}px)`;
  const sideFont = `clamp(${12 * fontScale}px, ${1.6 * fontScale}vw, ${26 * fontScale}px)`;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
      style={{ top: topOffset }}
    >
      {/* Hover zone sized to encompass the arc */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
        style={{
          width: `calc(${radiusX} * 2.2)`,
          height: `calc(${radiusY} * 2.2)`,
          top: "0",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      {numbers.map((num, i) => {
        const t = (i - centerIndex) / centerIndex;
        // Add angle offset from hover animation
        const angle = t * maxAngle + arcRotation + angleOffset;
        const rad = (angle * Math.PI) / 180;
        const isCenter = i === centerIndex;

        return (
        <div
        key={`${num}-${i}`}
        className="absolute -translate-x-1/2 pointer-events-none"
        style={{
            transform: `
            translate(
                calc(${radiusX} * ${Math.sin(rad)}),
                calc(${radiusY} * ${Math.cos(rad)})
            )
            `,
        }}
        >
        {/* Number */}
        <div
            className={`
            font-amanojaku
            leading-none
            text-center
            transition-colors
            ${
                isCenter
                ? "text-[#C20C19] text-[clamp(12px,1vw,16px)]"
                : "text-[#78777C] text-[clamp(12px,1vw,16px)]"
            }
            `}
              style={{
                    fontSize: isCenter ? centerFont : sideFont,
                }}
        >
            {String(num).padStart(2, "0")}
        </div>

        {/* Label */}
        {isCenter && label && (
        <div
            className="
            text-center
            font-amanojaku
            text-[#C20C19]
            tracking-wide
            "
            style={{
            marginTop: `calc(clamp(6px, 1.2vw, 12px) + ${labelOffset ?? "0px"})`,
            fontSize: `clamp(${8 * fontScale}px, ${1.2 * fontScale}vw, ${14 * fontScale}px)`,
            }}
        >
            {label}
        </div>
        )}

        </div>
        );
      })}
    </div>
  );
}
