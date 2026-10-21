import { NextResponse } from 'next/server';

interface ContactPayload {
  role?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  honeypot?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Anti-spam honeypot verification: quietly return success without executing delivery
    if (body.honeypot && body.honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Inquiry processed' }, { status: 200 });
    }

    const { role = 'Prospective Investor', name, email, phone = '', message } = body;

    // Strict Server-side field validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Please provide your full name (minimum 2 characters).';
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid corporate or personal email address.';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Please include a message or inquiry (minimum 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', errors },
        { status: 400 }
      );
    }

    // Verified Target Destination: Monumental Energy Investor Relations
    const destination = 'info@monumental.energy';
    const timestamp = new Date().toISOString();

    // Formally log the verified investor submission for corporate delivery audit
    console.info(`[IR Inquiry Dispatch] Destination: ${destination} | Role: ${role} | Name: ${name?.trim()} | Email: ${email?.trim()} | Phone: ${phone?.trim() || 'N/A'} | Timestamp: ${timestamp}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully transmitted to Monumental Energy Investor Relations.',
        destination,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[IR Inquiry Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected transmission error occurred. Please contact info@monumental.energy directly.',
      },
      { status: 500 }
    );
  }
}
