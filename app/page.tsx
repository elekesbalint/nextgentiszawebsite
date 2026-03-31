import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { news, pillars } from "@/app/components/site-data";
import { buildMetadata } from "@/app/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kezdőlap",
  description:
    "Next Gen Tisza Sziget Tolna 01 hivatalos oldal: hírek, események, közösségi csatlakozás és helyi ügyek egy helyen.",
  path: "/",
  keywords: [
    "Next Gen Tisza Sziget",
    "Tolna 01",
    "TISZA Párt",
    "helyi közösség",
    "Szekszárd",
  ],
});

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Next Gen Tisza Sziget Tolna 01",
            url: "https://nextgentisza.hu",
            logo: "https://nextgentisza.hu/tisza-sziget-logo.png",
            email: "info@nextgentisza.hu",
            sameAs: [
              "https://www.facebook.com/profile.php?id=61575349613006&mibextid=wwXIfr&rdid=3ljHwf5uFUfARwT3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18QBxjjQZb%2F%3Fmibextid%3DwwXIfr",
              "https://www.instagram.com/dr_sarosi_jozsef/",
              "https://magyartisza.hu",
            ],
          }),
        }}
      />

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
              NEXT GEN TISZA SZIGET TOLNA 01
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/90 md:text-lg">
              Közösség, felelősség, cselekvés. Egy helyi csapat, amely a város
              jövőjéért dolgozik.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://magyartisza.hu/cselekedj/onkentes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-[#ce2939] via-[#ffffff] to-[#477050] px-8 py-3 text-base font-semibold text-black transition hover:brightness-105"
              >
                Csatlakozz hozzánk
              </a>
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
                TOLNA 01 KÖRZET nőtt fel, itt alapított családot, és ma is a városért
                dolgozik. Jogászként és cégvezetőként hisz a felelős döntésekben,
                az átlátható működésben és az emberséges közéletben.
              </p>
              <Link
                href="/jeloltunk"
                className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-[#ce2939] via-[#ffffff] to-[#477050] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-105"
              >
                Részletes bemutatkozás
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/75">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="rounded-3xl border border-cyan-300/25 bg-slate-900/70 p-8 text-center md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                Csatlakozás
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Szeretnél TISZA tag lenni?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-100/90 md:text-base">
                Legyél része a Next Gen Tisza Sziget TOLNA 01 KÖRZET közösségének.
                Ha tenni szeretnél a helyi ügyekért, írj nekünk, és segítünk a
                csatlakozásban.
              </p>
              <Link
                href="/kapcsolat"
                className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-[#ce2939] via-[#ffffff] to-[#477050] px-7 py-3 text-sm font-semibold text-black transition hover:brightness-105"
              >
                Csatlakozz!
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
                Közösen szeretnénk alakítani TOLNA 01 KÖRZET jövőjét.
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
            <article className="mt-10 rounded-2xl border border-cyan-300/25 bg-slate-900/70 p-8 text-center">
              <p className="text-lg font-semibold text-cyan-200">Hamarosan...</p>
              <p className="mt-3 text-sm text-slate-300">
                Az eseménynaptár feltöltés alatt áll.
              </p>
            </article>
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
