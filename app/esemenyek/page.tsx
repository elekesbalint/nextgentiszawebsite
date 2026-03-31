import Image from "next/image";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export default function EsemenyekPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#08153f]">
          <div className="absolute inset-0 animate-hero-pulse bg-[radial-gradient(circle_at_10%_15%,rgba(34,211,238,0.20),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.30),transparent_48%)]" />
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
              Eseménynaptár
            </p>
            <h1 className="animate-fade-up animate-delay-1 mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Találkozzunk személyesen Szekszárdon
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-3xl text-base leading-8 text-slate-200/90 md:text-lg">
              Fórumok, közösségi napok és helyi beszélgetések - minden eseményünk
              nyitott, mert a közös jövőt közösen lehet építeni.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/80">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <article className="animate-fade-up rounded-2xl border border-cyan-300/25 bg-slate-900/75 p-10 text-center shadow-lg shadow-cyan-900/20">
              <p className="text-2xl font-semibold text-cyan-200">Hamarosan...</p>
              <p className="mt-4 text-sm text-slate-300">
                Dolgozunk az események feltöltésén, rövidesen itt lesz minden friss
                információ.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
