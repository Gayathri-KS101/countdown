export default function TopRedSemicircle() {
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden
                    w-[clamp(120px,20vw,200px)]
                    h-[clamp(60px,10vw,100px)]">
      <div
        className="w-full aspect-square rounded-full bg-[#C20C19]
                   -translate-y-1/2"
      />
    </div>
  );
}
