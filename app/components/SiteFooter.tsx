import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-cyan-200/80">
              Next Gen Tisza Sziget Szekszárd
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
              A TISZA Párthoz kapcsolódó helyi közösségi kezdeményezés.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <p>Email: nextgentisza@gmail.com</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/nextgentiszaszekszard"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.1V12h2.1V9.8c0-2.08 1.24-3.22 3.14-3.22.9 0 1.84.16 1.84.16v2.04h-1.03c-1 0-1.32.63-1.32 1.27V12h2.25l-.36 2.88h-1.89v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.92 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16zM12 7.34A4.66 4.66 0 1 1 7.34 12 4.66 4.66 0 0 1 12 7.34zm0 1.8A2.86 2.86 0 1 0 14.86 12 2.86 2.86 0 0 0 12 9.14z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M13.7 3h2.33c.18 1.53 1.08 2.96 2.47 3.76.8.47 1.75.73 2.7.73v2.45a7.24 7.24 0 0 1-4.98-1.93l.01 6.28a5.28 5.28 0 1 1-4.56-5.22v2.47a2.82 2.82 0 1 0 2.08 2.71L13.7 3z" />
                </svg>
              </a>
            </div>
            <Link
              href="/kapcsolat"
              className="inline-block text-cyan-300 transition hover:text-cyan-200"
            >
              Kapcsolat oldal
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} NextGenTisza - Minden jog fenntartva.</p>
          <p>
            Designed &amp; coded by{" "}
            <a
              href="https://balintelekes.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition hover:text-cyan-200"
            >
              Bálint Elekes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
