// email api

import { NextResponse } from "next/server";
import { Resend } from "resend";

const api_key = process.env.RESEND_API_KEY as string;
const resend = new Resend(api_key);
const fromEmail = process.env.FROM_EMAIL as string;
const toEmail = process.env.TO_EMAIL as string;

// any
export async function POST(req: any) {
  const { firstName, lastName, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email, toEmail],
      subject: "subject",
      text: "Hello, this is the text content of the email.",
      react: `
        <h1>Message from Milan Kiele Portfolio</h1>
        <p>Hello ${firstName} ${lastName}</p>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
