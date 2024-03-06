import formData from "form-data";
import Mailgun from "mailgun.js";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { kv } from "@vercel/kv";

const formSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY as string,
});

const rateLimit = 30000;

export async function POST(req: NextRequest) {
  const limit = await kv.get<{ ip: string; date: number }>(
    `rate-limit-${req.ip}`,
  );
  if (limit && new Date().getTime() - limit.date < rateLimit) {
    const timeLeft = rateLimit - (new Date().getTime() - limit.date);
    return NextResponse.json(
      {
        error: "You are being rate-limited",
      },
      {
        status: 429,
        headers: {
          "Retry-After": `${(timeLeft / 1000).toFixed(0)}`,
        },
      },
    );
  }
  const rawform = await req.json();
  const form = formSchema.safeParse(rawform);

  if (!form.success) {
    return NextResponse.json(
      {
        error: form.error,
      },
      {
        status: 400,
      },
    );
  }

  const { name, email, message } = form.data;
  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN as string, {
      from: email,
      to: process.env.MAILGUN_TO_EMAIL as string,
      subject: `New message from ${name} | kdvsite`,
      text: message,
    });
    await kv.set(`rate-limit-${req.ip}`, {
      ip: req.ip,
      date: new Date().getTime(),
    });
    return NextResponse.json(
      {
        message: "Your message has been sent!",
      },
      {
        status: 200,
      },
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: "There was an error sending your message",
      },
      {
        status: 500,
      },
    );
  }
}
