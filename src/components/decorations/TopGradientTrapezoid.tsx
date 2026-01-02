export default function TopGradientTrapezoid() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        -z-10
        w-[clamp(180px,22vw,280px)]
        h-[clamp(600px,120vh,1200px)]
        bg-gradient-to-b
        from-[rgba(194,12,25,0.5)]
        to-[rgba(255,255,255,0.5)]
        "
      style={{
        clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
      }}
    />
  );
}
