import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations/contact';
import { NextResponse } from 'next/server';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable');
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'ข้อมูลไม่ถูกต้อง' },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    const resend = getResend();

    const { data, error: resendError } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'admin@example.com',
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (resendError) {
      return NextResponse.json(
        { success: false, error: resendError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' },
      { status: 500 }
    );
  }
}
