import { Resend } from "resend";
import type { NextRequest } from "next/server";

// Lazily instantiated inside the handler so the module-level eval doesn't
// throw at build time when RESEND_API_KEY is absent in CI/preview builds.
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

type ContactBody = { message: string };

function isValidBody(body: unknown): body is ContactBody {
  return (
    typeof body === "object" &&
    body !== null &&
    "message" in body &&
    typeof (body as Record<string, unknown>).message === "string" &&
    ((body as Record<string, unknown>).message as string).trim().length > 0
  );
}

export async function POST(request: NextRequest): Promise<Response> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!isValidBody(body)) {
    return Response.json({ error: "Message is required" }, { status: 422 });
  }

  const { message } = body;

  if (message.length > 2000) {
    return Response.json(
      { error: "Message too long (max 2000 characters)" },
      { status: 422 }
    );
  }

  // Escape < to prevent HTML injection in the email body
  const safeMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const resend = getResend();
  const { error } = await resend.emails.send({
    from: "filip.se <hello@filip.se>",
    to: "filip@filip.se",
    subject: "New message from filip.se",
    text: message,
    html: `<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px">
      <h2 style="font-size:18px;font-weight:600;margin-bottom:16px;color:#0D0D0D">
        New message from filip.se
      </h2>
      <p style="font-size:15px;line-height:1.7;color:#333;white-space:pre-wrap">${safeMessage}</p>
    </div>`,
  });

  if (error) {
    // Never expose Resend internals to the client
    console.error("[contact] Resend error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return Response.json({ success: true }, { status: 200 });
}
