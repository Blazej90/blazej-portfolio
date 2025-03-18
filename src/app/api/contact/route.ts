import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("attachments") as File[];

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
    console.error("Błąd:", error);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości" },
      { status: 500 }
    );
  }
}
