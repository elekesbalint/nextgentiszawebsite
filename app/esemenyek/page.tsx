import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { events } from "@/app/components/site-data";

export default function EsemenyekPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#08153f]">
          <div className="absolute inset-0 animate-hero-pulse bg-[radial-gradient(circle_at_10%_15%,rgba(34,211,238,0.20),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.30),transparent_48%)]" />
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
            <div className="grid gap-5 md:grid-cols-3">
              {events.map((event, index) => (
                <article
                  key={event.title}
                  className={`animate-fade-up rounded-2xl border border-cyan-300/20 bg-slate-900/75 p-5 shadow-lg shadow-cyan-900/20 ${index === 1 ? "animate-delay-1" : ""} ${index === 2 ? "animate-delay-2" : ""}`}
                >
                  <p className="text-sm font-semibold text-cyan-200">{event.date}</p>
                  <h2 className="mt-2 text-lg font-semibold text-white">{event.title}</h2>
                  <p className="mt-3 text-sm text-slate-300">{event.location}</p>
                  <span className="mt-5 inline-flex rounded-full border border-cyan-300/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                    Nyitott esemény
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
