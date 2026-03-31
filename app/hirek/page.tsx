import Image from "next/image";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { news } from "@/app/components/site-data";

export default function HirekPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#07133b]">
          <div className="absolute inset-0 animate-hero-pulse bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.22),transparent_46%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.28),transparent_52%)]" />
          <Image
            src="/tisza-sziget-icon.png"
            alt=""
            width={600}
            height={293}
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
              Hírek
            </p>
            <h1 className="animate-fade-up animate-delay-1 mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Friss információk és közlemények
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-3xl text-base leading-8 text-slate-200/90 md:text-lg">
              Itt gyűjtjük össze a Next Gen Tisza Sziget Szekszárd fontos híreit,
              bejelentéseit és közösségi aktualitásait.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/80">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <article className="shine-overlay animate-fade-up rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Kiemelt hír
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                Dr. Sárosi József bemutatkozó oldala elindult
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100/90">
                A Tolna 01. OEVK jelöltünk részletes programját, bemutatkozását és
                közösségi elérhetőségeit már külön oldalon is követheted.
              </p>
            </article>

            <ul className="mt-8 space-y-4">
              {news.map((item, index) => (
                <li
                  key={item}
                  className={`animate-fade-up rounded-xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200/90 ${index === 1 ? "animate-delay-1" : ""} ${index === 2 ? "animate-delay-2" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
