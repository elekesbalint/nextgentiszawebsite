import Image from "next/image";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { CountUpOnView } from "@/app/components/CountUpOnView";
import { pillars } from "@/app/components/site-data";

export default function RolunkPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#07133b]">
          <div className="absolute inset-0 animate-hero-pulse bg-[radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.24),transparent_44%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.30),transparent_52%)]" />
          <Image
            src="/tisza-sziget-icon.png"
            alt=""
            width={600}
            height={293}
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
              Rólunk
            </p>
            <h1 className="animate-fade-up animate-delay-1 mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Helyi közösségből valódi cselekvés
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-3xl text-base leading-8 text-slate-200/90 md:text-lg">
              A Next Gen Tisza Sziget Szekszárd célja, hogy hiteles, nyitott és
              együttműködő közéleti közösséget építsen. Nem kampányzajt, hanem
              valódi megoldásokat és helyi jelenlétet szeretnénk.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/80">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`shine-overlay animate-fade-up rounded-2xl border border-white/10 bg-white/5 p-6 ${index === 1 ? "animate-delay-1" : ""} ${index === 2 ? "animate-delay-2" : ""}`}
                >
                  <h2 className="text-xl font-semibold text-white">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-200/85">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="animate-fade-in rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-center">
                <p className="text-3xl font-semibold text-cyan-200">
                  <CountUpOnView end={25} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-slate-100/90">Aktív közösségi tag</p>
              </article>
              <article className="animate-fade-in animate-delay-1 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-center">
                <p className="text-3xl font-semibold text-cyan-200">
                  <CountUpOnView end={20} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-slate-100/90">Helyi beszélgetés és fórum</p>
              </article>
              <article className="animate-fade-in animate-delay-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-center">
                <p className="text-3xl font-semibold text-cyan-200">
                  <CountUpOnView end={1} />
                </p>
                <p className="mt-2 text-sm text-slate-100/90">Közös cél: működő ország</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
