/**
 * Országjárás (Szekszárd) galéria – képek helyben a `public/galeria/` mappában
 * (a magyartisza.hu galériájából származó fotók, gyorsabb betöltéshez).
 */
export const OFFICIAL_TISZA_GALLERY_URL =
  "https://magyartisza.hu/cselekedj/orszagjaras/szeksz%C3%A1rd#galeria";

const alt =
  "TISZA országjárás, Szekszárd – fotó a magyartisza.hu galériájából";

export const galleryImages: Array<{ src: string; alt: string }> = [
  { src: "/galeria/orszagjaras-01.png", alt },
  { src: "/galeria/orszagjaras-02.png", alt },
  { src: "/galeria/orszagjaras-03.png", alt },
  { src: "/galeria/orszagjaras-04.png", alt },
  { src: "/galeria/orszagjaras-05.png", alt },
  { src: "/galeria/orszagjaras-06.png", alt },
  { src: "/galeria/orszagjaras-07.png", alt },
  { src: "/galeria/orszagjaras-08.png", alt },
  { src: "/galeria/orszagjaras-09.png", alt },
  { src: "/galeria/orszagjaras-10.png", alt },
  { src: "/galeria/orszagjaras-11.png", alt },
  { src: "/galeria/orszagjaras-12.png", alt },
  { src: "/galeria/orszagjaras-13.png", alt },
  { src: "/galeria/orszagjaras-14.png", alt },
  { src: "/galeria/orszagjaras-15.png", alt },
  { src: "/galeria/orszagjaras-16.png", alt },
];

export const galleryPreviewImages = galleryImages.slice(0, 4);
