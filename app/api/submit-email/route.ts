import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // Handle both JSON and FormData
    let email: string;
    const contentType = request.headers.get('content-type') || '';

    try {
      if (contentType.includes('application/json')) {
        const body = await request.json();
        email = body.email;
      } else {
        const formData = await request.formData();
        email = formData.get('email') as string;
      }
    } catch (parseError) {
      console.error('Error parsing request:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate email
    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the email submission
    // In production, you should store this in a database or use Netlify Forms
    console.log('Email submitted successfully:', trimmedEmail);
    
    // Return success response
    // Note: In a production environment, you should:
    // 1. Store emails in a database (MongoDB, PostgreSQL, etc.)
    // 2. Or use Netlify Forms (requires form in HTML at build time)
    // 3. Or use an email service API (Resend, SendGrid, etc.)
    
    return NextResponse.json({ 
      success: true,
      message: 'Email submitted successfully'
    });
  } catch (error) {
    console.error('Error in submit-email route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to submit email: ${errorMessage}` },
      { status: 500 }
    );
  }
}

