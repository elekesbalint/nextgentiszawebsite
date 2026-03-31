import type { Metadata } from "next";

export const siteUrl = "https://nextgentisza.hu";

const defaultOgImage = "/tisza-sziget-logo.png";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: BuildMetadataInput): Metadata {
  const absoluteUrl = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: "Next Gen Tisza Sziget Tolna 01",
      locale: "hu_HU",
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Next Gen Tisza Sziget Tolna 01",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}
