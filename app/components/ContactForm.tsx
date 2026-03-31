"use client";

import emailjs from "@emailjs/browser";
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
  const [validationMessage, setValidationMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setValidationMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setMessage(
        "Hiányzó EmailJS beállítás. Add meg a NEXT_PUBLIC_EMAILJS_* környezeti változókat.",
      );
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus("error");
      setValidationMessage("Az üzenet legalább 10 karakter legyen.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          phone: form.phone.trim() || "-",
          message: form.message.trim(),
        },
        { publicKey },
      );

      setStatus("success");
      setMessage("Köszönjük! Üzenetedet sikeresen elküldtük.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Nem sikerült elküldeni az üzenetet. Kérlek, próbáld újra.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-[#071a2d] via-[#0f2742] to-[#0b1f33] p-6 shadow-[0_20px_60px_rgba(8,21,38,0.6)] md:p-8"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold md:text-2xl">Kapcsolatfelvétel</h2>
          <span className="rounded-full border border-cyan-200/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            24h válaszidő
          </span>
        </div>

        <div className="space-y-4">
        <input
          type="text"
          required
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Név"
          className="w-full rounded-xl border border-white/20 bg-slate-950/65 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/25"
        />
        <input
          type="email"
          required
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Email cím"
          className="w-full rounded-xl border border-white/20 bg-slate-950/65 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/25"
        />
        <input
          type="text"
          value={form.phone}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, phone: event.target.value }))
          }
          placeholder="Telefonszám (opcionális)"
          className="w-full rounded-xl border border-white/20 bg-slate-950/65 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/25"
        />
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Üzenet"
          className="w-full rounded-xl border border-white/20 bg-slate-950/65 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/25"
        />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-[#ce2939] via-[#ffffff] to-[#477050] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Küldés..." : "Üzenet küldése"}
        </button>

        {validationMessage && <p className="mt-4 text-sm text-rose-300">{validationMessage}</p>}

        {status !== "idle" && message && (
          <p
            className={`mt-4 text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
