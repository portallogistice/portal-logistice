// app/api/register/route.ts (Next.js App Router)
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ====== التعديل ٣+٤: استقبال الحقول الجديدة ======
    const {
      fullName,
      city,
      phone,
      callTime,
      timestamp,
      gclid,
      utm_source,
      utm_medium,
      utm_campaign,
      page_url,
      referrer,
    } = body;
    // ====== نهاية التعديل ======

    // Validate required fields (الحقول الجديدة اختيارية)
    if (!fullName || !city || !phone || !callTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (
      !process.env.GOOGLE_CLIENT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      console.error('Missing Google Sheets environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Set up Google Sheets API authentication
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
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
      hour12: true,
    });

    // ====== التعديل ٤: حفظ الأعمدة الجديدة في Google Sheets (A:K) ======
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Registrations!A:K', // تم التوسيع من A:E إلى A:K
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          fullName,                // A - Full Name
          city,                    // B - City
          phone,                   // C - Phone
          callTime,                // D - Call Time
          formattedTimestamp,      // E - Timestamp
          gclid || '',      // F - GCLID (جديد)
          utm_source || '',      // G - UTM Source (جديد)
          utm_medium || '',      // H - UTM Medium (جديد)
          utm_campaign || '',      // I - UTM Campaign (جديد)
          page_url || '',      // J - Page URL (جديد)
          referrer || '',      // K - Referrer (جديد)
        ]],
      },
    });
    // ====== نهاية التعديل ٤ ======

    console.log('Registration saved successfully:', { fullName, phone, gclid });

    return NextResponse.json({
      success: true,
      message: 'Registration saved successfully',
      data: {
        fullName,
        city,
        phone,
        callTime,
        timestamp: formattedTimestamp,
        gclid: gclid || '',
        utm_source: utm_source || '',
        utm_medium: utm_medium || '',
        utm_campaign: utm_campaign || '',
        page_url: page_url || '',
        referrer: referrer || '',
      },
    });
  } catch (error: any) {
    console.error('Error saving to Google Sheets:', error);

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