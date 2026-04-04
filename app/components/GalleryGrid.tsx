"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImageItem = { src: string; alt: string };

type LightboxAnim = "enter" | "next" | "prev";

export function GalleryGrid({ images }: { images: GalleryImageItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [lightboxAnim, setLightboxAnim] = useState<LightboxAnim>("enter");

  const close = useCallback(() => setIndex(null), []);
  const goPrev = useCallback(() => {
    setLightboxAnim("prev");
    setIndex((cur) => {
      if (cur === null) return null;
      return cur === 0 ? images.length - 1 : cur - 1;
    });
  }, [images.length]);
  const goNext = useCallback(() => {
    setLightboxAnim("next");
    setIndex((cur) => {
      if (cur === null) return null;
      return cur === images.length - 1 ? 0 : cur + 1;
    });
  }, [images.length]);

  const openAt = useCallback((idx: number) => {
    setLightboxAnim("enter");
    setIndex(idx);
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, goPrev, goNext]);

  return (
    <>
      <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-4">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openAt(idx)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-lg shadow-black/20 transition hover:border-cyan-300/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={900}
                height={700}
                className="max-h-[420px] w-full object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-105"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              />
            </div>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galéria nagyítás"
        >
          <div className="flex shrink-0 items-center justify-end gap-2 pb-2">
            <p className="mr-auto text-sm text-white/70">
              {index + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={close}
              className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Bezárás (Esc)
            </button>
          </div>
          <div
            className="relative flex min-h-0 flex-1 items-center justify-center gap-2 md:gap-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="z-[1] hidden shrink-0 rounded-full border border-white/25 bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-white/10 md:inline-flex"
              aria-label="Előző kép"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden>
                <path strokeWidth="2" strokeLinecap="round" d="m15 6-6 6 6 6" />
              </svg>
            </button>
            <div
              className="relative h-[min(88dvh,calc(100dvh-5.5rem))] w-full min-w-0 max-w-[min(96vw,calc(100vw-2rem))] md:max-w-[min(96vw,calc(100vw-8rem))]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                key={index}
                className={`absolute inset-0 ${
                  lightboxAnim === "next"
                    ? "animate-gallery-lightbox-next"
                    : lightboxAnim === "prev"
                      ? "animate-gallery-lightbox-prev"
                      : "animate-gallery-lightbox-enter"
                }`}
              >
                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  fill
                  unoptimized
                  priority
                  sizes="100vw"
                  className="object-contain object-center drop-shadow-2xl"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="z-[1] hidden shrink-0 rounded-full border border-white/25 bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-white/10 md:inline-flex"
              aria-label="Következő kép"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden>
                <path strokeWidth="2" strokeLinecap="round" d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
          <p className="shrink-0 pt-3 text-center text-xs text-white/50 md:hidden">
            Lapozás: balra / jobbra nyíl a billentyűzeten
          </p>
        </div>
      )}
    </>
  );
}
