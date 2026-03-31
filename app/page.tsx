import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { events, news, pillars } from "@/app/components/site-data";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#050d2e]">
          <div className="absolute inset-0 animate-hero-pulse bg-[radial-gradient(circle_at_50%_20%,rgba(49,85,218,0.45),rgba(5,13,46,0.95)_58%)]" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-cyan-500/5 blur-3xl" />
          <Image
            src="/tisza-sziget-icon.png"
            alt=""
            width={600}
            height={293}
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          />

          <div className="animate-fade-up relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center md:py-28">
            <Image
              src="/tisza-sziget-logo.png"
              alt="Next Gen Ifi Tisza Sziget Tolna 01 OEVK logo"
              width={420}
              height={420}
              className="animate-logo-float h-auto w-[260px] rounded-2xl border border-white/15 shadow-2xl shadow-cyan-950/40 md:w-[330px]"
              priority
            />
            <h1 className="mt-10 text-4xl font-semibold leading-tight md:text-6xl">
              Next Gen Tisza Sziget Szekszárd
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/90 md:text-lg">
              Közösség, felelősség, cselekvés. Egy helyi csapat, amely a város
              jövőjéért dolgozik.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/cselekedj"
                className="rounded-xl bg-[#e89124] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#ff9d24]"
              >
                Csatlakozz hozzánk
              </Link>
              <Link
                href="/program"
                className="rounded-xl border border-white/35 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              >
                Program
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/75">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <Image
                src="/dr-sarosi-jozsef.png"
                alt="Dr. Sárosi József"
                width={900}
                height={1200}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Jelöltünk - Tolna 01. OEVK
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Dr. Sárosi József
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200/90">
                Szekszárdon nőtt fel, itt alapított családot, és ma is a városért
                dolgozik. Jogászként és cégvezetőként hisz a felelős döntésekben,
                az átlátható működésben és az emberséges közéletben.
              </p>
              <Link
                href="/jeloltunk"
                className="mt-7 inline-flex rounded-xl bg-[#e89124] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff9d24]"
              >
                Részletes bemutatkozás
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/75">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Mire építünk?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200/85">
                Helyi fókusz, szakmai igényesség és emberközeli szerveződés.
                Közösen szeretnénk alakítani Szekszárd jövőjét.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200/85">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-950">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Következő események
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.title}
                  className="rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-5"
                >
                  <p className="text-sm font-semibold text-cyan-200">{event.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{event.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/70">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Friss hírek</h2>
              <ul className="mt-8 space-y-4">
                {news.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-cyan-200">
                Csatlakozás
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Építsük együtt a szekszárdi közösséget
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200/90">
                Jelentkezz szervezőnek, önkéntesnek vagy résztvevőnek, és legyél
                része egy aktív, felelős helyi közéleti közösségnek.
              </p>
              <Link
                href="/kapcsolat"
                className="mt-6 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
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
