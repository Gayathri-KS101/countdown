"use client";

interface Props {
  width: number;
  height: number;
  zIndex?: number;
  gap?: number;
}

export default function DoubleEllipseRing({
  width,
  height,
  zIndex = 0,
  gap = 5,
}: Props) {
  return (
    <div
      className="pointer-events-none fixed left-1/2 -translate-x-1/2"
      style={{
        // Responsive top: shows ~40% of ellipse on mobile, ~35% on desktop
        // Mobile: -(320px * 0.6) = -192px equivalent
        // Desktop: -(620px * 0.65) = -403px equivalent  
        top: "clamp(-400px, -45vw, -250px)",
        width: "clamp(400px, 70vw, 620px)",
        height: "clamp(400px, 70vw, 620px)",
        zIndex,
      }}
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: "2px solid #78777C" }}
      />

      {/* Inner ring */}
      <div
        className="absolute rounded-full"
        style={{
          top: gap,
          left: gap,
          right: gap,
          bottom: gap,
          border: "2px solid #78777C",
        }}
      />
    </div>
  );
}
