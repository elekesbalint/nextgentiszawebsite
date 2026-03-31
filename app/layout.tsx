import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/app/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Next Gen Tisza Sziget Tolna 01",
    template: "%s | Next Gen Tisza Sziget Tolna 01",
  },
  description:
    "A Next Gen Tisza Sziget TOLNA 01 KÖRZET hivatalos közösségi oldala. Események, hírek, jelölti bemutatkozás és csatlakozási lehetőségek.",
  applicationName: "Next Gen Tisza Sziget Tolna 01",
  authors: [{ name: "Next Gen Tisza Sziget Tolna 01" }],
  creator: "Next Gen Tisza Sziget Tolna 01",
  publisher: "Next Gen Tisza Sziget Tolna 01",
  category: "politika, közélet",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
