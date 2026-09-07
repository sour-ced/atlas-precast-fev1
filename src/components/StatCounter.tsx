"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatCounter({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="stat-number text-5xl sm:text-6xl text-accent">
        {inView && <CountUp end={end} duration={2.5} separator="," />}
        {!inView && "0"}
        {suffix}
      </div>
      <div className="mt-2 text-sm sm:text-base uppercase tracking-wide text-white/80">
        {label}
      </div>
    </div>
  );
}
