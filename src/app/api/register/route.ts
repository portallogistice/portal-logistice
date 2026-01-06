// app/api/register/route.ts (Next.js App Router)
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, city, phone, callTime, timestamp } = body;

    // Validate required fields
    if (!fullName || !city || !phone || !callTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error('Missing Google Sheets environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Set up Google Sheets API authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Format timestamp for Saudi Arabia timezone
    const formattedTimestamp = new Date(timestamp).toLocaleString('ar-SA', {
      timeZone: 'Asia/Riyadh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    // Append row to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Registrations!A:E', // Sheet name + columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          fullName,
          city,
          phone,
          callTime,
          formattedTimestamp,
        ]],
      },
    });

    console.log('Registration saved successfully:', { fullName, phone });

    return NextResponse.json({
      success: true,
      message: 'Registration saved successfully',
      data: {
        fullName,
        city,
        phone,
        callTime,
        timestamp: formattedTimestamp
      }
    });

  } catch (error: any) {
    console.error('Error saving to Google Sheets:', error);
    
    // Provide more specific error messages
    if (error.message?.includes('Unable to parse')) {
      return NextResponse.json(
        { error: 'Invalid Google credentials format' },
        { status: 500 }
      );
    }
    
    if (error.message?.includes('Requested entity was not found')) {
      return NextResponse.json(
        { error: 'Google Sheet not found or not shared with service account' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to save registration. Please try again.' },
      { status: 500 }
    );
  }
}

