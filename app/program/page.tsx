import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Program",
  description: "Átirányítás a TISZA Párt hivatalos program oldalára.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProgramPage() {
  redirect("https://magyartisza.hu/program");
}
