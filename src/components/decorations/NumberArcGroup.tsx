"use client";

import { useEffect, useState } from "react";
import NumberArc from "./NumberArc";
import { getCountdownValues } from "@/lib/countdown";
import { getArcCount } from "@/lib/arcDensity";

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
      {/* Seconds — always ≥ 13 */}
      <NumberArc
        value={time.seconds}
        max={60}
        count={getArcCount(width, "seconds")}
        radiusX="clamp(160px, 24vw, 260px)"   // wide horizontally
        radiusY="clamp(110px, 16vw, 160px)"    // shallow vertically
        arcRotation={0}
        maxAngle={90}                         // ⬅️ TRUE SEMICIRCLE
        />;

    </>
  );
}
