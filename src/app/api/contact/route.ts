import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nowa wiadomość od ${name}`,
      text: `Od: ${name} (${email})\n\n${message}`,
      html: `
        <h2>Nowa wiadomość od ${name}</h2>
        <p><strong>Adres e-mail:</strong> ${email}</p>
        <p><strong>Treść wiadomości:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Wiadomość wysłana pomyślnie!",
    });
  } catch (error) {
    console.error("Błąd wysyłania e-maila:", error);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości" },
      { status: 500 }
    );
  }
}
