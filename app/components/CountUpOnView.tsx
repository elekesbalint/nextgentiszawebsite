"use client";

import { useEffect, useRef, useState } from "react";

type CountUpOnViewProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
};

export function CountUpOnView({
  end,
  durationMs = 1200,
  suffix = "",
}: CountUpOnViewProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const start = performance.now();
    let frameId = 0;

    const step = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const next = Math.round(end * progress);
      setValue(next);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [durationMs, end, hasStarted]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
