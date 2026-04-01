import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { ContactForm } from "@/app/components/ContactForm";
import { buildMetadata } from "@/app/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kapcsolat",
  description:
    "Lépj kapcsolatba a Next Gen Tisza Sziget Tolna 01 csapatával: kérdés, üzenet vagy csatlakozási szándék esetén.",
  path: "/kapcsolat",
  keywords: ["Kapcsolat", "EmailJS űrlap", "Next Gen Tisza elérhetőség", "Tolna 01 kapcsolat"],
});

export default function KapcsolatPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <section className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-[#061322] via-[#0b1f35] to-[#071a2e] px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <h1 className="relative z-10 text-4xl font-semibold md:text-5xl">Kapcsolat</h1>
          <p className="relative z-10 mt-6 max-w-3xl text-base leading-8 text-slate-100/90">
            Várjuk üzenetedet, kérdésedet vagy csatlakozási szándékodat. Közösen
            építjük tovább a TOLNA 01 KÖRZET közösségét.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <h2 className="text-xl font-semibold">Elérhetőségek</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200/90">
              <p>
                <span className="text-slate-400">Email:</span> info@nextgentisza.hu
              </p>
              <p>
                <span className="text-slate-400">Facebook:</span>{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61575349613006&mibextid=wwXIfr&rdid=3ljHwf5uFUfARwT3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18QBxjjQZb%2F%3Fmibextid%3DwwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-200 transition hover:text-cyan-100"
                >
                  NEXT GEN Tisza sziget | Szekszárd
                </a>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50/95">
              Üzeneted közvetlenül a csapathoz érkezik, és igyekszünk rövid időn
              belül válaszolni.
            </div>
          </article>
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
