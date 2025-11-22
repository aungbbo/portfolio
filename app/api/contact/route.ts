import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "aungbobo.dev@gmail.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  if (body.honeypot) {
    return NextResponse.json({ success: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { error: "Please provide a valid name." },
      { status: 400 },
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email." },
      { status: 400 },
    );
  }

  if (message.length < 20 || message.length > 3000) {
    return NextResponse.json(
      { error: "Message should be between 20 and 3000 characters." },
      { status: 400 },
    );
  }

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        html: generateEmailHtml({ name, email, message }),
      }),
    });

    if (!resendResponse.ok) {
      const errorMessage = await resendResponse.text();
      console.error("Resend API error:", errorMessage);
      return NextResponse.json(
        { error: "Unable to send message right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}

function generateEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `
    <div style="font-family: 'Inter', 'Segoe UI', sans-serif; color: #1f2933;">
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-size: 16px;">${message}</pre>
    </div>
  `;
}

