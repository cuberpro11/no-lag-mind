import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, appendFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATA_DIR = path.join(process.cwd(), 'data');
const CSV_FILE = path.join(DATA_DIR, 'emails.csv');

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    if (!existsSync(DATA_DIR)) {
      await mkdir(DATA_DIR, { recursive: true });
    }

    // Check if CSV file exists, if not create it with header
    const fileExists = existsSync(CSV_FILE);
    const timestamp = new Date().toISOString();
    const csvRow = `${email},${timestamp}\n`;

    if (!fileExists) {
      // Create file with header
      await writeFile(CSV_FILE, 'email,timestamp\n' + csvRow, 'utf-8');
    } else {
      // Append to existing file
      await appendFile(CSV_FILE, csvRow, 'utf-8');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json(
      { error: 'Failed to save email' },
      { status: 500 }
    );
  }
}

