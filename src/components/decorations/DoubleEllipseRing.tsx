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
  className="pointer-events-none fixed left-1/2 double-ellipse-ring"
  style={{
    top: "clamp(-1000px, -52vw, -280px)",
    width: "clamp(400px, 70vw, 1100px)",
    height: "clamp(400px, 70vw, 980px)",
    transform: "translateX(-50%)",
    zIndex,
  }}
>

      {/* Outer ring */}
      <div
        className="absolute inset-0"
        style={{ 
          border: "2.5px solid #78777C",
          borderRadius: "50%"
        }}
      />

      {/* Inner ring */}
      <div
        className="absolute"
        style={{
          top: gap,
          left: gap,
          right: gap,
          bottom: gap,
          border: "2.5px solid #78777C",
          borderRadius: "50%"
        }}
      />
    </div>
  );
}
