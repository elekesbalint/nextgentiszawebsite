import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Cselekedj",
  description: "Átirányítás a TISZA Párt önkéntes csatlakozási oldalára.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CselekedjPage() {
  redirect("https://magyartisza.hu/cselekedj/onkentes");
}
