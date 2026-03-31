"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CountdownBar } from "@/app/components/CountdownBar";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/program", label: "Program" },
    { href: "/rolunk", label: "Rólunk" },
    { href: "/jeloltunk", label: "Jelöltünk" },
    { href: "/esemenyek", label: "Események" },
    { href: "/hirek", label: "Hírek" },
    { href: "/cselekedj", label: "Cselekedj" },
    { href: "/kapcsolat", label: "Kapcsolat" },
  ];

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-white/10 bg-[#060d2b]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-5">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/tisza-sziget-icon.png"
              alt="Next Gen Tisza Sziget ikon"
              width={600}
              height={293}
              className="h-8 w-auto object-contain"
              priority
            />
            <div className="leading-none">
              <p className="text-3xl font-medium tracking-wide text-white">TISZA</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-cyan-200/85">
                Szekszárd Next Gen Tisza Sziget
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-[15px] font-medium text-white/92 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Menü megnyitása"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white lg:hidden"
          >
            <span className="sr-only">Menü</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <div className="group relative hidden md:block">
            <a
              href="https://adomanyozas.magyartisza.hu/c/adomanyozas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-[#7ad9f7] px-6 py-3 text-sm font-semibold text-[#060d2b] transition hover:bg-[#98e3f8]"
            >
              Azonnali Támogatás
            </a>
            <div className="pointer-events-none absolute right-0 top-[calc(100%+10px)] w-[286px] rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100">
              <p className="leading-5">
                A gombra való kattintással átirányításra kerül az{" "}
                <a
                  href="https://adomanyozas.magyartisza.hu/c/adomanyozas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-cyan-700 hover:text-cyan-800"
                >
                  adomanyozas.magyartisza.hu
                </a>{" "}
                oldalra.
              </p>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium text-white/92">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2 transition hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://adomanyozas.magyartisza.hu/c/adomanyozas"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex justify-center rounded-lg bg-[#7ad9f7] px-4 py-2 text-sm font-semibold text-[#060d2b]"
              >
                Azonnali Támogatás
              </a>
            </nav>
          </div>
        )}
      </div>
      <CountdownBar />
    </header>
  );
}
