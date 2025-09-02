"use client";

import { useEffect, useState } from "react";
import { formatNumber } from "../formatNumber";

interface CounterProps {
  from?: number;
  end: number;
  duration?: number;
  formatted?: boolean;
}

export default function Counter({
  from = 0,
  end,
  duration = 2000,
  formatted = true,
}: CounterProps) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const range = end - from;
    const stepTime = 20;
    const totalSteps = Math.ceil(duration / stepTime);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / totalSteps, 1);
      const currentValue = Math.floor(from + range * progress);
      setValue(currentValue);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [from, end, duration]);

  return <span>{formatted ? formatNumber(value) : value}</span>;
}
