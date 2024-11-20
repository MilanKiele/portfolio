import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail as string,
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
