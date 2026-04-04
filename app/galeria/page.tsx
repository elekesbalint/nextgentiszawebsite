import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { GalleryGrid } from "@/app/components/GalleryGrid";
import {
  galleryImages,
  OFFICIAL_TISZA_GALLERY_URL,
} from "@/app/components/gallery-data";
import { buildMetadata } from "@/app/seo";

export const metadata: Metadata = buildMetadata({
  title: "Galéria",
  description:
    "Fotók a TISZA országjárás szekszárdi állomásáról. Tartalom a magyartisza.hu hivatalos galériájából, gyors helyi kiszolgálással.",
  path: "/galeria",
  keywords: ["Galéria", "Országjárás", "Szekszárd", "TISZA", "Tolna 01"],
});

export default function GaleriaPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#050d2e]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(30,64,175,0.35),transparent_50%)]" />
          <Image
            src="/tisza-sziget-icon.png"
            alt=""
            width={600}
            height={293}
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
              Galéria
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Országjárás – Szekszárd
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/90">
              Pillanatképek a közösségi eseményről. A fotók a{" "}
              <a
                href={OFFICIAL_TISZA_GALLERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-200"
              >
                magyartisza.hu hivatalos galériájából
              </a>{" "}
              származnak.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              ← Vissza a főoldalra
            </Link>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/80">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
            <GalleryGrid images={galleryImages} />
            <p className="mt-10 text-center text-xs leading-6 text-slate-400">
              Forrás:{" "}
              <a
                href={OFFICIAL_TISZA_GALLERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400/90 hover:text-cyan-300"
              >
                magyartisza.hu – Országjárás, Szekszárd
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
