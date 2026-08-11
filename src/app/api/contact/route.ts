import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const messages = {
  pl: {
    required: "Wszystkie pola są wymagane",
    failed: "Nie udało się wysłać wiadomości",
  },
  en: {
    required: "All fields are required",
    failed: "Failed to send the message",
  },
};

export async function POST(req: Request) {
  let lang: keyof typeof messages = "pl";

  try {
    const formData = await req.formData();
    lang = formData.get("lang") === "en" ? "en" : "pl";

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("attachments") as File[];

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: messages[lang].required },
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
      from: `"Nowa wiadomość" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `Nowa wiadomość od ${name}`,
      text: `Od: ${name} <${email}>\n\n${message}`,
      attachments: await Promise.all(
        files.map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        }))
      ),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Wiadomość wysłana!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: messages[lang].failed },
      { status: 500 }
    );
  }
}
