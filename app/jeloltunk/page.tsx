import Image from "next/image";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

const telepulesek = [
  "Alsónyék",
  "Báta",
  "Bátaszék",
  "Bogyiszló",
  "Decs",
  "Fácánkert",
  "Fadd",
  "Medina",
  "Őcsény",
  "Pörböly",
  "Sárpilis",
  "Sióagárd",
  "Szedres",
  "TOLNA 01 KÖRZET",
  "Tengelic",
  "Tolna",
  "Várdomb",
];

export default function JeloltunkPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#050d2e]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.20),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(30,64,175,0.38),transparent_52%)]" />
          <Image
            src="/tisza-sziget-icon.png"
            alt=""
            width={600}
            height={293}
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.15fr] md:items-center">
            <div className="animate-fade-up">
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Tolna 01. OEVK
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Dr. Sárosi József
              </h1>
              <p className="mt-3 text-lg text-slate-200/90">
                OEVK jelöltünk - TOLNA 01 KÖRZET és környéke
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://adomanyozas.magyartisza.hu/c/tolna.01?source=web_aloldal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-gradient-to-r from-[#ce2939] via-[#ffffff] to-[#477050] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-105"
                >
                  Kampány támogatása
                </a>
                <a
                  href="https://www.facebook.com/tisza.tolnamegye.01oevk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.1V12h2.1V9.8c0-2.08 1.24-3.22 3.14-3.22.9 0 1.84.16 1.84.16v2.04h-1.03c-1 0-1.32.63-1.32 1.27V12h2.25l-.36 2.88h-1.89v7A10 10 0 0 0 22 12z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/dr_sarosi_jozsef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.92 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16zM12 7.34A4.66 4.66 0 1 1 7.34 12 4.66 4.66 0 0 1 12 7.34zm0 1.8A2.86 2.86 0 1 0 14.86 12 2.86 2.86 0 0 0 12 9.14z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>

            <div className="animate-fade-up rounded-2xl border border-white/15 bg-white/5 p-3 shadow-2xl shadow-cyan-950/30">
              <Image
                src="/dr-sarosi-jozsef.png"
                alt="Dr. Sárosi József"
                width={900}
                height={1200}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/70">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-8 md:grid-cols-3">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
                <h2 className="text-2xl font-semibold md:text-3xl">Bemutatkozás</h2>
                <p className="mt-5 text-base leading-8 text-slate-200/90">
                  Dr. Sárosi József egész életét TOLNA 01 KÖRZET élte, itt nőtt fel,
                  itt alapított családot, és ma is itt neveli három fiát. Jogász
                  végzettségű, aki két évtizede cégvezetőként bizonyítja, hogy
                  képes felelősséggel dönteni, csapatot építeni és helytállni a
                  nehéz helyzetekben is. Meghatározó számára a város iránti
                  elkötelezettség; szülővárosát nemcsak szereti, hanem aktívan
                  tenni is akar érte.
                </p>
                <p className="mt-5 text-base leading-8 text-slate-200/90">
                  A rendszerváltást azért tartja fontosnak, mert úgy látja: a
                  jelenlegi hatalom alatt egyre nőnek a társadalmi különbségek,
                  erősödik a korrupció, és a fiatal generáció előtt bezárulnak a
                  lehetőségek. József szerint most dől el, hogy TOLNA 01 KÖRZET és Tolna
                  megye a jövőben is európai irányt követ-e, vagy tovább sodródik
                  egy kiszámíthatatlan rendszer felé.
                </p>
                <p className="mt-5 text-base leading-8 text-slate-200/90">
                  Jelöltként egy erős, felkészült csapatban gondolkodik: hiszi,
                  hogy a közös munka többet ér bármilyen hangos ígéretnél.
                  Fontosnak tartja a munkahelyteremtést, a logisztikai,
                  turisztikai és gazdasági fejlesztéseket, valamint azt, hogy a
                  fel nem használt források helyett végre valódi beruházások
                  érkezzenek a térségbe.
                </p>
              </article>

              <aside className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-6">
                <h3 className="text-xl font-semibold">Elérhetőségek</h3>
                <p className="mt-4 text-sm leading-7 text-slate-100/90">
                  Kövesd és támogasd a kampányát:
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <a
                    className="inline-flex w-full items-center gap-2 rounded-lg border border-white/20 px-3 py-2 transition hover:border-white"
                    href="https://www.facebook.com/tisza.tolnamegye.01oevk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="h-4 w-4 shrink-0 fill-current"
                    >
                      <path d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.1V12h2.1V9.8c0-2.08 1.24-3.22 3.14-3.22.9 0 1.84.16 1.84.16v2.04h-1.03c-1 0-1.32.63-1.32 1.27V12h2.25l-.36 2.88h-1.89v7A10 10 0 0 0 22 12z" />
                    </svg>
                    Facebook oldal
                  </a>
                  <a
                    className="inline-flex w-full items-center gap-2 rounded-lg border border-white/20 px-3 py-2 transition hover:border-white"
                    href="https://www.instagram.com/dr_sarosi_jozsef/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="h-4 w-4 shrink-0 fill-current"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.92 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16zM12 7.34A4.66 4.66 0 1 1 7.34 12 4.66 4.66 0 0 1 12 7.34zm0 1.8A2.86 2.86 0 1 0 14.86 12 2.86 2.86 0 0 0 12 9.14z" />
                    </svg>
                    Instagram oldal
                  </a>
                  <a
                    className="block rounded-lg border border-white/20 px-3 py-2 transition hover:border-white"
                    href="https://adomanyozas.magyartisza.hu/c/tolna.01?source=web_aloldal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kampány támogatása
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Települések a Tolna 01. OEVK-ban
            </h2>
            <p className="mt-4 text-slate-200/85">
              Ebben az OEVK-ban a következő települések találhatóak:
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {telepulesek.map((telepules) => (
                <div
                  key={telepules}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                >
                  {telepules}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
