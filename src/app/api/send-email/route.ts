// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { reportsData } from "@/lib/reportsData";
import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
function reverseArabicText(text: string): string {
  return text.split(' ').reverse().join(' ');
}
const resend = new Resend(process.env.RESEND_API_KEY);
// ============================================================================
// FONT LOADING - Load your Amiri fonts
// ============================================================================
function loadArabicFonts(doc: jsPDF) {
  try {
    // Read the font files from public/fonts
    const fontsPath = path.join(process.cwd(), "public", "fonts");
    
    // Load Regular font
    const regularFont = fs.readFileSync(
      path.join(fontsPath, "Amiri-Regular.ttf")
    );
    const regularBase64 = regularFont.toString("base64");
    
    // Load Bold font
    const boldFont = fs.readFileSync(
      path.join(fontsPath, "Amiri-Bold.ttf")
    );
    const boldBase64 = boldFont.toString("base64");
    
    // Add fonts to jsPDF
    doc.addFileToVFS("Amiri-Regular.ttf", regularBase64);
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    
    doc.addFileToVFS("Amiri-Bold.ttf", boldBase64);
    doc.addFont("Amiri-Bold.ttf", "Amiri", "bold");
    
    // Set default font
    doc.setFont("Amiri", "normal");
   
    
    return true;
  } catch (error) {
    console.error("Error loading Arabic fonts:", error);
    return false;
  }
}

// ============================================================================
// PDF GENERATION FUNCTION
// ============================================================================
function generateReportPDF(report: any): ArrayBuffer {
  // Create PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });
  
  // Load Arabic fonts
  const fontsLoaded = loadArabicFonts(doc);
  
  if (!fontsLoaded) {
    throw new Error("Failed to load Arabic fonts");
  }
  
  // Page dimensions
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;
  let currentY = 20;
  
  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace: number) => {
    if (currentY + requiredSpace > pageHeight - 20) {
      doc.addPage();
      currentY = 20;
      addPageNumber();
    }
  };
  
  // Helper function to add page numbers
  const addPageNumber = () => {
    const pageCount = doc.getNumberOfPages();
    doc.setFontSize(9);
    doc.setTextColor(128, 128, 128);
    doc.setFont("Amiri", "normal");
    doc.text(
      reverseArabicText(`صفحة ${pageCount}`),
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" }
    );
  };
  
  // Helper function to wrap text
  const wrapText = (text: string, maxWidth: number, fontSize: number): string[] => {
    doc.setFontSize(fontSize);
    return doc.splitTextToSize(text, maxWidth);
  };
  
  // ============================================================================
  // HEADER SECTION
  // ============================================================================
  
  // Header background
  doc.setFillColor(0, 60, 127);
  doc.rect(0, 0, pageWidth, 60, "F");
  
  // Logo circle (top right for RTL)
  doc.setFillColor(255, 255, 255);
  doc.circle(pageWidth - 25, 15, 8, "F");
  doc.setTextColor(0, 60, 127);
  doc.setFontSize(10);
  doc.setFont("Amiri", "bold");
  doc.text("بوابة", pageWidth - 25, 14, { align: "center" });
  doc.text("التسهيل", pageWidth - 25, 18, { align: "center" });
  
  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFont("Amiri", "bold");
  doc.setFontSize(24);
  const titleLines = wrapText(report.title, maxWidth - 40, 24);
  let titleY = 25;
  titleLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, titleY, { align: "center" });
    titleY += 8;
  });
  
  // Subtitle
  if (report.subtitle) {
    doc.setFontSize(16);
    doc.setFont("Amiri", "normal");
    doc.setTextColor(220, 230, 240);
    const subtitleLines = wrapText(report.subtitle, maxWidth - 40, 16);
    subtitleLines.forEach((line: string) => {
      doc.text(line, pageWidth / 2, titleY, { align: "center" });
      titleY += 6;
    });
  }
  
  // Info bar
  doc.setFillColor(0, 50, 100);
  doc.rect(0, 60, pageWidth, 15, "F");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  const currentDate = new Date().toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  doc.text(reverseArabicText(`تاريخ التقرير: ${currentDate}`), pageWidth - 20, 69, { align: "right" });
  doc.text(reverseArabicText("تقرير موثق ✓"), 20, 69);
  
  currentY = 85;
  
  // ============================================================================
  // SECTIONS
  // ============================================================================
  
  report.sections.forEach((section: any, sectionIndex: number) => {
    checkPageBreak(30);
    
    // Section number badge
    doc.setFillColor(0, 168, 232);
    doc.roundedRect(pageWidth - 30, currentY - 4, 12, 12, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("Amiri", "bold");
    doc.setFontSize(14);
    doc.text(reverseArabicText(`${sectionIndex + 1}`), pageWidth - 24, currentY + 4, { align: "center" });
    
    // Section title
    doc.setTextColor(0, 60, 127);
    doc.setFont("Amiri", "bold");
    doc.setFontSize(18);
    const sectionTitleLines = wrapText(section.title, maxWidth - 20, 18);
    sectionTitleLines.forEach((line: string) => {
      doc.text(line, pageWidth - 35, currentY + 4, { align: "right" });
      currentY += 7;
    });
    
    currentY += 12;
    
    // Section content
    if (section.content) {
      checkPageBreak(20);
      doc.setFontSize(11);
      doc.setFont("Amiri", "normal");
      doc.setTextColor(40, 40, 40);
      const contentLines = wrapText(section.content, maxWidth - 10, 11);
      contentLines.forEach((line: string) => {
        checkPageBreak(10);
        doc.text(line, pageWidth - 25, currentY, { align: "right" });
        currentY += 6;
      });
      currentY += 8;
    }
    
    // Subsections
    if (section.subsections && section.subsections.length > 0) {
      section.subsections.forEach((subsection: any) => {
        checkPageBreak(25);
        
        // Calculate subsection box height
        const subsectionContentLines = wrapText(subsection.content, maxWidth - 20, 11);
        let boxHeight = 15 + subsectionContentLines.length * 6;
        
        if (subsection.bullets && subsection.bullets.length > 0) {
          subsection.bullets.forEach((bullet: string) => {
            const bulletLines = wrapText(bullet, maxWidth - 30, 11);
            boxHeight += bulletLines.length * 6 + 1;
          });
        }
        
        // Subsection background
        doc.setFillColor(245, 248, 250);
        doc.roundedRect(margin, currentY - 3, maxWidth, boxHeight, 3, 3, "F");
        
        // Blue accent bar (right side for RTL)
        doc.setFillColor(0, 168, 232);
        doc.rect(pageWidth - 23, currentY - 3, 3, boxHeight, "F");
        
        // Subsection title
        doc.setFontSize(12);
        doc.setFont("Amiri", "bold");
        doc.setTextColor(0, 60, 127);
        doc.text(subsection.title, pageWidth - 28, currentY + 3, { align: "right" });
        currentY += 10;
        
        // Subsection content
        doc.setFontSize(11);
        doc.setFont("Amiri", "normal");
        doc.setTextColor(40, 40, 40);
        subsectionContentLines.forEach((line: string) => {
          doc.text(line, pageWidth - 28, currentY, { align: "right" });
          currentY += 6;
        });
        
        // Bullets
        if (subsection.bullets && subsection.bullets.length > 0) {
          currentY += 3;
          subsection.bullets.forEach((bullet: string) => {
            doc.text("●", pageWidth - 28, currentY);
            const bulletLines = wrapText(bullet, maxWidth - 30, 11);
            bulletLines.forEach((line: string, idx: number) => {
              doc.text(line, pageWidth - 33, currentY, { align: "right" });
              if (idx < bulletLines.length - 1) currentY += 6;
            });
            currentY += 7;
          });
        }
        
        currentY += 8;
      });
    }
    
    // Key Points
    if (section.keyPoints && section.keyPoints.length > 0) {
      checkPageBreak(30);
      
      doc.setFontSize(12);
      doc.setFont("Amiri", "bold");
      doc.setTextColor(0, 60, 127);
      doc.text("النقاط الرئيسية:", pageWidth - 25, currentY, { align: "right" });
      currentY += 8;
      
      section.keyPoints.forEach((point: string) => {
        const pointLines = wrapText(point, maxWidth - 18, 11);
        const pointHeight = pointLines.length * 6 + 6;
        
        checkPageBreak(pointHeight + 5);
        
        // Point box
        doc.setFillColor(220, 240, 255);
        doc.roundedRect(margin, currentY - 3, maxWidth, pointHeight, 2, 2, "F");
        
        // Checkmark
        doc.setTextColor(0, 168, 232);
        doc.setFontSize(12);
        doc.text("✓", pageWidth - 25, currentY + 2);
        
        // Point text
        doc.setFontSize(11);
        doc.setFont("Amiri", "normal");
        doc.setTextColor(40, 40, 40);
        pointLines.forEach((line: string) => {
          doc.text(line, pageWidth - 32, currentY + 2, { align: "right" });
          currentY += 6;
        });
        
        currentY += 5;
      });
      
      currentY += 8;
    }
    
    // Conclusion
    if (section.conclusion) {
      checkPageBreak(25);
      
      const conclusionLines = wrapText(section.conclusion, maxWidth - 20, 11);
      const conclusionHeight = conclusionLines.length * 6 + 15;
      
      // Conclusion box
      doc.setFillColor(240, 248, 255);
      doc.roundedRect(margin, currentY - 3, maxWidth, conclusionHeight, 3, 3, "F");
      
      // Border
      doc.setDrawColor(0, 168, 232);
      doc.setLineWidth(0.5);
      doc.roundedRect(margin, currentY - 3, maxWidth, conclusionHeight, 3, 3, "S");
      
      // Quote mark
      doc.setFontSize(24);
      doc.setTextColor(200, 220, 240);
      doc.text('"', pageWidth - 25, currentY + 5);
      
      // Conclusion text
      currentY += 8;
      doc.setFontSize(11);
      doc.setFont("Amiri", "normal");
      doc.setTextColor(0, 60, 127);
      conclusionLines.forEach((line: string) => {
        doc.text(line, pageWidth - 30, currentY, { align: "right" });
        currentY += 6;
      });
      
      currentY += 13;
    }
    
    currentY += 12;
  });
  
  // ============================================================================
  // FOOTER - Add page numbers to all pages
  // ============================================================================
  const totalPages = doc.getNumberOfPages();
  
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Footer line
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);
    
    // Page number
    doc.setFontSize(9);
    doc.setTextColor(128, 128, 128);
    doc.setFont("Amiri", "normal");
    doc.text(
      reverseArabicText(`صفحة ${i} من ${totalPages}`),
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" }
    );
    
    // Report ID
    doc.text(
      reverseArabicText(`رقم التقرير: ${report.id}`),
      pageWidth - 20,
      pageHeight - 10,
      { align: "right" }
    );
    
    // Organization
    doc.text(reverseArabicText("بوابة التسهيل"), 20, pageHeight - 10);
  }
  
  // Generate PDF
  return doc.output("arraybuffer");
}
export async function POST(request: Request) {
  try {
    const { email, subject, reportId } = await request.json();
    const report = reportsData.find((report) => report.id === reportId);
    if (!report) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
    }
    const pdfBuffer =  generateReportPDF(report);
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