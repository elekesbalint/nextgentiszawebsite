"use client";

export function CountdownBar() {
  return (
    <section className="border-b border-emerald-300/35 bg-[linear-gradient(180deg,#f05f5f_0%,#ffffff_50%,#3ad08a_100%)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-2 text-center md:py-2.5">
        <p className="uppercase leading-tight text-[#0a1340]">
          <span className="block text-sm font-semibold italic tracking-[0.08em] md:text-xl md:tracking-[0.06em]">
            A TISZA GYŐZÖTT,
          </span>
          <span className="block text-xl font-black tracking-[0.04em] md:text-[2rem] md:tracking-[0.03em]">
            MAGYARORSZÁG NYERT!
          </span>
        </p>
      </div>
    </section>
  );
}
