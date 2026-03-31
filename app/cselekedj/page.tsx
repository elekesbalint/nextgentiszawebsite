import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export default function CselekedjPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#081743]">
          <div className="absolute inset-0 animate-hero-pulse bg-[radial-gradient(circle_at_12%_20%,rgba(34,211,238,0.22),transparent_44%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.34),transparent_54%)]" />
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
              Cselekedj
            </p>
            <h1 className="animate-fade-up animate-delay-1 mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              A változás itt kezdődik: veled
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-3xl text-base leading-8 text-slate-200/90 md:text-lg">
              Csatlakozz önkéntesként, légy jelen eseményeinken, és segíts
              felépíteni egy erős, cselekvő közösséget Szekszárdon.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/80">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              <article className="animate-fade-up rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-cyan-200">1. lépés</p>
                <h2 className="mt-2 text-xl font-semibold">Jelentkezz</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200/85">
                  Írj nekünk, hogy miben tudsz segíteni - szervezés, online munka
                  vagy helyi jelenlét.
                </p>
              </article>
              <article className="animate-fade-up animate-delay-1 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-cyan-200">2. lépés</p>
                <h2 className="mt-2 text-xl font-semibold">Kapcsolódj be</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200/85">
                  Részt vehetsz kitelepüléseken, rendezvényeken és közösségi
                  beszélgetéseken.
                </p>
              </article>
              <article className="animate-fade-up animate-delay-2 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-cyan-200">3. lépés</p>
                <h2 className="mt-2 text-xl font-semibold">Építs közösséget</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200/85">
                  Hozz új embereket, szervezz helyi kapcsolatokat és légy aktív
                  része a változásnak.
                </p>
              </article>
            </div>

            <div className="mt-10 animate-fade-in rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-6 text-center">
              <h3 className="text-2xl font-semibold">Készen állsz csatlakozni?</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-100/90">
                Egy rövid üzenettel is sokat segítesz. Felvesszük veled a
                kapcsolatot, és megtaláljuk a neked megfelelő szerepet.
              </p>
              <Link
                href="/kapcsolat"
                className="mt-6 inline-flex rounded-full bg-[#e89124] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff9d24]"
              >
                Kapcsolatfelvétel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
