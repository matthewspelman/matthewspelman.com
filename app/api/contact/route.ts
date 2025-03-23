import { Resend } from 'resend';
import { NextResponse } from 'next/server';

async function verifyRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const { name, email, message, token } = await request.json();

    // Verify reCAPTCHA token
    const isValidToken = await verifyRecaptcha(token);
    if (!isValidToken) {
      return NextResponse.json(
        { success: false, error: 'Invalid reCAPTCHA token' },
        { status: 400 }
      );
    }

    // Initialize Resend only when needed
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['matthewspelman@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 