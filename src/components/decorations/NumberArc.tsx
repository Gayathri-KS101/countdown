"use client";

import { useState, useRef, useEffect } from "react";

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

const ROTATION_AMOUNT = 30; // degrees to rotate on hover
const EASE_STRENGTH = 0.12; // spring easing (0.1-0.15 recommended)
const SWIPE_THRESHOLD = 50; // minimum swipe distance in px
const SWIPE_ROTATION_SCALE = 0.3; // degrees per pixel of swipe

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
  const [isHovered, setIsHovered] = useState(false);
  const [angleOffset, setAngleOffset] = useState(0);
  const animationRef = useRef<number | null>(null);
  const targetOffsetRef = useRef(0);
  const currentOffsetRef = useRef(0);
  
  // Touch tracking
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const swipeOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  // Animation loop with spring easing
  useEffect(() => {
    const animate = () => {
      if (isDraggingRef.current) {
        // During drag, directly follow the swipe offset (no easing)
        currentOffsetRef.current = swipeOffsetRef.current;
        setAngleOffset(swipeOffsetRef.current);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // On hover or release, spring back smoothly
        targetOffsetRef.current = isHovered ? ROTATION_AMOUNT : 0;
        currentOffsetRef.current +=
          (targetOffsetRef.current - currentOffsetRef.current) * EASE_STRENGTH;

        setAngleOffset(currentOffsetRef.current);

        // Continue animating if not fully settled
        if (Math.abs(targetOffsetRef.current - currentOffsetRef.current) > 0.01) {
          animationRef.current = requestAnimationFrame(animate);
        }
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  const centerIndex = Math.floor(count / 2);
  const numbers = Array.from({ length: count }, (_, i) => {
    let v = value + (i - centerIndex);
    if (v < 0) v += max;
    if (v >= max) v -= max;
    return v;
  });
  const centerFont = `clamp(${12 * fontScale}px, ${1.6 * fontScale}vw, ${26 * fontScale}px)`;
  const sideFont = `clamp(${12 * fontScale}px, ${1.6 * fontScale}vw, ${26 * fontScale}px)`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    isDraggingRef.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartRef.current.x;

    // Map horizontal drag to rotation in real-time (left = negative, right = positive)
    swipeOffsetRef.current = Math.max(-ROTATION_AMOUNT, Math.min(ROTATION_AMOUNT, deltaX * SWIPE_ROTATION_SCALE));
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    isDraggingRef.current = false;
    swipeOffsetRef.current = 0;
  };

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
