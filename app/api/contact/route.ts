import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const recipient = "info@nextgentisza.hu";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "A név, email és üzenet mező kötelező." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Kérlek, érvényes email címet adj meg." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM ?? user ?? recipient;

    if (!host || !user || !pass) {
      return NextResponse.json(
        {
          error:
            "Az email küldéshez hiányoznak a szerver beállítások (SMTP_HOST, SMTP_USER, SMTP_PASS).",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from,
      to: recipient,
      replyTo: email,
      subject: `Új kapcsolatfelvétel - ${name}`,
      text: [
        `Név: ${name}`,
        `Email: ${email}`,
        `Telefonszám: ${phone || "-"}`,
        "",
        "Üzenet:",
        message,
      ].join("\n"),
      html: `
        <h2>Új kapcsolatfelvétel</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefonszám:</strong> ${phone || "-"}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Hiba történt az üzenet elküldése közben." },
      { status: 500 },
    );
  }
}
