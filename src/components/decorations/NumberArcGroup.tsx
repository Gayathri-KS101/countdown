"use client";

import { useEffect, useState } from "react";
import NumberArc from "./NumberArc";
import { getCountdownValues } from "@/lib/countdown";
import { getArcCount } from "@/lib/arcDensity";
import MaskedEllipseLines from "@/components/decorations/MaskedEllipseLines";


const TARGET_DATE = new Date("2026-01-29T00:00:00");

export default function NumberArcGroup() {
  const [time, setTime] = useState(getCountdownValues(TARGET_DATE));
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getCountdownValues(TARGET_DATE));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Minutes arc — LOWER */}
      <NumberArc
        value={time.minutes}
        max={60}
        count={getArcCount(width, "minutes")}
        radiusX="clamp(200px, 30vw, 320px)"
        radiusY="clamp(150px, 22vw, 220px)"
        arcRotation={0}
        maxAngle={90}
        label="minutes"
        topOffset="clamp(30px, 3vw, 50px)"   // ⬅️ moved DOWN
        fontScale={1.5}
      />
        <MaskedEllipseLines />
      {/* Seconds arc — LOWER THAN MINUTES */}
      <NumberArc
        value={time.seconds}
        max={60}
        count={getArcCount(width, "seconds")}
        radiusX="clamp(160px, 24vw, 260px)"
        radiusY="clamp(110px, 16vw, 160px)"
        arcRotation={0}
        maxAngle={90}
        label="seconds"
        topOffset="clamp(-0px, 0vw, -0px)"  // ⬅️ stays lower
        fontScale={1}
      />
    </>
  );
}
