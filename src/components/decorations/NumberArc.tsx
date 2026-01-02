type NumberArcProps = {
  radiusX: string;
  radiusY: string;
  value: number;
  max: number;
  count: number;
  arcRotation?: number;
  maxAngle?: number;
  label?: string;
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
    topOffset,
    fontScale = 1,
}: NumberArcProps) {
  const centerIndex = Math.floor(count / 2);

  const numbers = Array.from({ length: count }, (_, i) => {
    let v = value + (i - centerIndex);
    if (v < 0) v += max;
    if (v >= max) v -= max;
    return v;
  });
  const centerFont = `clamp(${14 * fontScale}px, ${2 * fontScale}vw, ${32 * fontScale}px)`;
  const sideFont = `clamp(${12 * fontScale}px, ${1.6 * fontScale}vw, ${26 * fontScale}px)`;


  return (
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-0 h-0"
      style={{ top: topOffset }}
    >
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
                mt-[4px]
                text-center
                font-amanojaku
                text-[#C20C19]
                tracking-wide
            "
            style={{
              fontSize: `clamp(${10 * fontScale}px, ${1.2 * fontScale}vw, ${16 * fontScale}px)`,
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
