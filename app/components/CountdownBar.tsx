"use client";

import { useEffect, useState } from "react";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_TS = new Date("2026-04-13T01:00:00+02:00").getTime();

function getCountdown(nowTs: number): CountdownParts {
  const target = TARGET_TS;
  const now = nowTs;
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function TwoDigitBox({ value }: { value: number }) {
  const formatted = value.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-1">
      <span className="inline-flex h-9 w-7 items-center justify-center rounded-xl bg-[#0a1340] text-base font-semibold text-white shadow-sm md:h-11 md:w-9 md:text-xl">
        {formatted[0]}
      </span>
      <span className="inline-flex h-9 w-7 items-center justify-center rounded-xl bg-[#0a1340] text-base font-semibold text-white shadow-sm md:h-11 md:w-9 md:text-xl">
        {formatted[1]}
      </span>
    </div>
  );
}

export function CountdownBar() {
  const [parts, setParts] = useState<CountdownParts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      setParts(getCountdown(Date.now()));
      const delay = 1000 - (Date.now() % 1000);
      timeoutId = setTimeout(tick, delay);
    };

    const forceSync = () => {
      setParts(getCountdown(Date.now()));
    };

    tick();
    window.addEventListener("focus", forceSync);
    document.addEventListener("visibilitychange", forceSync);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("focus", forceSync);
      document.removeEventListener("visibilitychange", forceSync);
    };
  }, []);

  return (
    <section className="border-b border-sky-200/40 bg-[#7ad9f7]">
      <div
        className="mx-auto flex w-full max-w-6xl items-center justify-start gap-x-3 overflow-x-auto whitespace-nowrap px-3 py-3 md:justify-center md:gap-x-6 md:px-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <TwoDigitBox value={parts.days} />
        <span className="text-xs font-semibold text-[#0a1340] md:text-sm">nap</span>
        <TwoDigitBox value={parts.hours} />
        <span className="text-xs font-semibold text-[#0a1340] md:text-sm">óra</span>
        <TwoDigitBox value={parts.minutes} />
        <span className="text-xs font-semibold text-[#0a1340] md:text-sm">perc</span>
        <TwoDigitBox value={parts.seconds} />
        <span className="pr-2 text-xs font-semibold text-[#0a1340] md:pr-0 md:text-sm">
          másodperc
        </span>
      </div>
    </section>
  );
}
