"use client";

import { useEffect, useState } from "react";
import NumberArc from "./NumberArc";
import { getCountdownValues } from "@/lib/countdown";
import { getArcCount } from "@/lib/arcDensity";
import MaskedEllipseLines from "@/components/decorations/MaskedEllipseLines";
import SemiCircularDial from "@/components/decorations/SemiCircularDial";

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

  const isMobile = width < 640;
  const dayLabelOffset = isMobile ? "-4px" : "-28px";
  const hourLabelOffset = isMobile ? "-3px" : "-10px";

  return (
    <>
        {/* Days arc */}
        <NumberArc
        value={time.days}
        max={9999} // large enough to avoid wrap
        count={getArcCount(width, "days")}
        radiusX="clamp(320px, 65vw, 800px)"   // ⬅️ BIGGEST
        radiusY="clamp(320px, 55vw, 420px)"
        arcRotation={0}
        maxAngle={90}
        label="Days"
        topOffset="clamp(0px, -0vw, -0px)" // ⬅️ highest
        fontScale={3}
        labelOffset={dayLabelOffset}
        />


        {/* Hours arc */}
        <NumberArc
        value={time.hours}
        max={24}
        count={getArcCount(width, "hours")}
        radiusX="clamp(250px, 55vw, 620px)"   // ⬅️ WIDER
        radiusY="clamp(260px, 40vw, 350px)"   // ⬅️ BIGGER
        arcRotation={0}
        maxAngle={90}
        label="Hours"
        topOffset="clamp(-40px, calc(-40px + 0.025vw), 20px)"
        fontScale={1.9}
        labelOffset={hourLabelOffset}
        />
        <SemiCircularDial />

      {/* Minutes arc — LOWER */}
      <NumberArc
        value={time.minutes}
        max={60}
        count={getArcCount(width, "minutes")}
        radiusX="clamp(200px, 30vw, 5000px)"
        radiusY="clamp(150px, 22vw, 220px)"
        arcRotation={0}
        maxAngle={90}
        label="Minutes"
        topOffset="clamp(-10px, -1vw, 10px)"   // ⬅️ moved UP
        fontScale={1.5}
      />
        <MaskedEllipseLines />
      {/* Seconds arc — LOWER THAN MINUTES */}
      <NumberArc
        value={time.seconds}
        max={60}
        count={getArcCount(width, "seconds")}
        radiusX="clamp(160px, 24vw, 340px)"
        radiusY="clamp(110px, 16vw, 140px)"
        arcRotation={0}
        maxAngle={90}
        label="Seconds"
        topOffset="clamp(-40px, -4vw, -40px)"  // ⬅️ moved UP
        fontScale={1}
      />
    </>
  );
}
