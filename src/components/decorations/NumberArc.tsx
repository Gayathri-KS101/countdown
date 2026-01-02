type NumberArcProps = {
  radiusX: string;
  radiusY: string;
  value: number;
  max: number;
  count: number;
  arcRotation?: number;
  maxAngle?: number;
};

export default function NumberArc({
  radiusX,
  radiusY,
  value,
  max,
  count,
  arcRotation = 0,
  maxAngle = 180,
}: NumberArcProps) {
  const centerIndex = Math.floor(count / 2);

  const numbers = Array.from({ length: count }, (_, i) => {
    let v = value + (i - centerIndex);
    if (v < 0) v += max;
    if (v >= max) v -= max;
    return v;
  });

  return (
    <div className="pointer-events-none absolute left-1/2 top-[clamp(-110px, 0vw,-70px)] -translate-x-1/2 w-0 h-0">
      {numbers.map((num, i) => {
        const t = (i - centerIndex) / centerIndex;
        const angle = t * maxAngle + arcRotation;
        const rad = (angle * Math.PI) / 180;
        const isCenter = i === centerIndex;

        return (
        <div
        key={`${num}-${i}`}
        className="absolute -translate-x-1/2"
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
                ? "text-[#C20C19] text-[clamp(14px,1.2vw,20px)]"
                : "text-[#78777C] text-[clamp(12px,1vw,16px)]"
            }
            `}
        >
            {String(num).padStart(2, "0")}
        </div>

        {/* Label */}
        {isCenter && (
            <div
            className="
                mt-[4px]
                text-center
                font-amanojaku
                text-[#C20C19]
                tracking-wide
                text-[clamp(9px,0.8vw,12px)]
            "
            >
            seconds
            </div>
        )}
        </div>
        );
      })}
    </div>
  );
}
