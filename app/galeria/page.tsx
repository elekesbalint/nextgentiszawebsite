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
        <section className="relative min-h-[min(52vh,440px)] w-full overflow-hidden border-b border-white/10 md:min-h-[400px] lg:min-h-[440px]">
          <Image
            src="/galeria/hero-cover.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#030a1f]/88 to-[#050d2e]/75"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-[#020617]/40"
            aria-hidden
          />
          <Image
            src="/tisza-sziget-icon.png"
            alt=""
            width={600}
            height={293}
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/2 hidden h-auto w-[min(70vw,520px)] -translate-y-1/2 opacity-[0.07] md:block lg:right-0 lg:w-[min(55vw,600px)]"
          />

          <div className="relative z-10 mx-auto flex min-h-[min(52vh,440px)] w-full max-w-6xl flex-col justify-end px-6 py-12 md:min-h-[400px] md:justify-center md:py-16 lg:min-h-[440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/95">
              Galéria
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-[2.75rem]">
              Országjárás - Szekszárd
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg md:leading-8">
              Pillanatképek a közösségi eseményről.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex w-fit text-sm font-medium text-[#7ad9f7] transition hover:text-[#98e3f8]"
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
