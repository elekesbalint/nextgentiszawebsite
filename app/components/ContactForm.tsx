"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Nem sikerült elküldeni az üzenetet.");
        return;
      }

      setStatus("success");
      setMessage("Köszönjük! Üzenetedet sikeresen elküldtük.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Hálózati hiba történt, próbáld újra.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-6"
    >
      <h2 className="text-xl font-semibold">Kapcsolatfelvételi űrlap</h2>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          required
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Név"
          className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
        />
        <input
          type="email"
          required
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Email cím"
          className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
        />
        <input
          type="text"
          value={form.phone}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, phone: event.target.value }))
          }
          placeholder="Telefonszám (opcionális)"
          className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
        />
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Üzenet"
          className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex rounded-xl bg-[#e89124] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ff9d24] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Küldés..." : "Üzenet küldése"}
      </button>

      {status !== "idle" && (
        <p
          className={`mt-4 text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
