import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { ContactForm } from "@/app/components/ContactForm";

export default function KapcsolatPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold md:text-5xl">Kapcsolat</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200/90">
          Várjuk üzenetedet, kérdésedet vagy csatlakozási szándékodat.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Elérhetőségek</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200/85">
              Email: info@nextgentisza.hu
            </p>
            <p className="text-sm leading-7 text-slate-200/85">
              Facebook: /nextgentiszaszekszard
            </p>
          </article>
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
