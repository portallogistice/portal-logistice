// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, subject, reportId } = await request.json();
    // app/api/send-email/route.ts (excerpt)

// Dynamic base URL function (add this at the top)
const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    // Use custom domain in production
    return 'https://portallogistice.com';
  }
  if (process.env.VERCEL_ENV === 'preview') {
    // Use Vercel preview URL for branches/deploy previews
    return `https://${process.env.VERCEL_URL}`;
  }
  // Local dev fallback
  return 'http://localhost:3000';
};

const baseUrl = getBaseUrl();

    // Generate PDF by calling the download route internally
    const pdfResponse = await fetch(`${baseUrl}/api/reports/${reportId}/download`);
    
    if (!pdfResponse.ok) {
      throw new Error('Failed to generate PDF');
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

    // Send email with PDF attachment
    const data = await resend.emails.send({
      from: 'Portal Logistics <reports@portallogistice.com>', // Use your verified domain
      to: email,
      subject: subject || 'تقرير بوابة التسهيل',
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #003C7F;">تقرير بوابة التسهيل</h2>
          <p>مرحباً،</p>
          <p>   التقرير المرفق أدناه هو نسخة من التقرير الأصلي.</p>
          <br/>
          <p>مع أطيب التحيات،<br/>فريق بوابة التسهيل</p>
        </div>
      `,
      attachments: [
        {
          filename: `report-${reportId}-${new Date().toISOString().split('T')[0]}.pdf`,
          content: pdfBase64,
        },
      ],
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}