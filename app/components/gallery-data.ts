/**
 * Képek a TISZA hivatalos országjárás (Szekszárd) oldal galériájából.
 * Forrás HTML-ben szereplő framerusercontent URL-ek.
 *
 * Csak .jpg fájlok: a .png elemek a forráson logók / UI grafikák voltak, nem eseményfotók.
 */
export const OFFICIAL_TISZA_GALLERY_URL =
  "https://magyartisza.hu/cselekedj/orszagjaras/szeksz%C3%A1rd#galeria";

const alt =
  "TISZA országjárás, Szekszárd – fotó a magyartisza.hu galériájából";

export const galleryImages: Array<{ src: string; alt: string }> = [
  { src: "https://framerusercontent.com/images/0rtHrpRSIVsizUr7LDA5kGHL1A.jpg", alt },
  { src: "https://framerusercontent.com/images/49dTsyZRWopgHGBahMODKY98b14.jpg", alt },
  { src: "https://framerusercontent.com/images/9EryvBC9ttbi8mdcDKqSJJMD8.jpg", alt },
  { src: "https://framerusercontent.com/images/I5EEIlrJpoj6wxc2xcELXjqgFQ.jpg", alt },
  { src: "https://framerusercontent.com/images/L1K3xRtEbwwFwYTPjraIn1tTbe4.jpg", alt },
  { src: "https://framerusercontent.com/images/MaCas2f5FZPpHAoJw8gEHnWqUg.jpg", alt },
  { src: "https://framerusercontent.com/images/O9le5R7aodpR1gjihdneI45jmA.jpg", alt },
  { src: "https://framerusercontent.com/images/OZUZHo3Vw8yQZtXx9yLlghgbE.jpg", alt },
  { src: "https://framerusercontent.com/images/Zjl4fAvlq986dImfFDrXbPMWzU.jpg", alt },
  { src: "https://framerusercontent.com/images/fMfAJvSE6H0pZUQCE7gb6ztDg.jpg", alt },
  { src: "https://framerusercontent.com/images/fdwqZL8nyylG2HdlTlLlmN008.jpg", alt },
  { src: "https://framerusercontent.com/images/kQdUa2QkXNFtVDHkY9zttgc6H0.jpg", alt },
  { src: "https://framerusercontent.com/images/sqvgX2wB8pFOPeUsAxWKNDPo0Q.jpg", alt },
  { src: "https://framerusercontent.com/images/vKaYs3bIqaeggfhpoFwlUve9Uw.jpg", alt },
  { src: "https://framerusercontent.com/images/x8heMuWtwdz3FPMOYpF5uLX50j0.jpg", alt },
  { src: "https://framerusercontent.com/images/xOQx3C1zhMb0FIE9Qcxy2nNMTdU.jpg", alt },
];

export const galleryPreviewImages = galleryImages.slice(0, 4);
