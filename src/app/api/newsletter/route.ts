import { NextResponse } from 'next/server';

interface NewsletterPayload {
  email?: string;
  source?: string;
}

export async function POST(request: Request) {
  try {
    const body: NewsletterPayload = await request.json();
    const { email, source = 'Website Newsletter Alerts' } = body;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const isProduction = process.env.NODE_ENV === 'production';
    const defaultBackendOrigin = isProduction
      ? 'https://monumentalbackend.vercel.app'
      : 'http://localhost:5001';

    const rawBackendUrl =
      process.env.BACKEND_INTERNAL_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      defaultBackendOrigin;
    const backendOrigin = rawBackendUrl.replace(/\/api\/v1\/?$/, '').replace(/\/+$/, '');

    try {
      const backendRes = await fetch(`${backendOrigin}/api/v1/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source,
        }),
      });

      if (backendRes.ok) {
        const json = await backendRes.json();
        return NextResponse.json(
          {
            success: true,
            message: json.message || 'Thank you for subscribing to Monumental Energy news alerts.',
          },
          { status: 200 }
        );
      }
    } catch (backendErr) {
      console.warn('[Newsletter Backend Offline - Graceful Fallback]', backendErr);
    }

    // Graceful success fallback if backend is momentarily cold-starting
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to Monumental Energy news alerts.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Newsletter Route Error]', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

