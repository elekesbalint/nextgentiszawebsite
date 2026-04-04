"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImageItem = { src: string; alt: string };

export function GalleryGrid({ images }: { images: GalleryImageItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const goPrev = useCallback(() => {
    setIndex((cur) => {
      if (cur === null) return null;
      return cur === 0 ? images.length - 1 : cur - 1;
    });
  }, [images.length]);
  const goNext = useCallback(() => {
    setIndex((cur) => {
      if (cur === null) return null;
      return cur === images.length - 1 ? 0 : cur + 1;
    });
  }, [images.length]);

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
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(idx)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-lg shadow-black/20 transition hover:border-cyan-300/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={900}
                height={700}
                className="max-h-[420px] w-full object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            className="relative flex min-h-0 flex-1 items-center justify-center gap-2"
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="hidden shrink-0 rounded-full border border-white/25 p-3 text-white transition hover:bg-white/10 md:inline-flex"
              aria-label="Előző kép"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden>
                <path strokeWidth="2" strokeLinecap="round" d="m15 6-6 6 6 6" />
              </svg>
            </button>
            <div
              className="relative max-h-[min(85vh,900px)] max-w-[min(95vw,1200px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                width={1400}
                height={1050}
                className="max-h-[min(85vh,900px)] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                sizes="95vw"
                priority
              />
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="hidden shrink-0 rounded-full border border-white/25 p-3 text-white transition hover:bg-white/10 md:inline-flex"
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
