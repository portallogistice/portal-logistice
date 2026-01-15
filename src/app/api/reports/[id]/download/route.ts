// app/api/reports/[id]/download/route.ts
import { NextResponse } from "next/server";
import { reportsData } from "@/lib/reportsData";
import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
function reverseArabicText(text: string): string {
  return text.split(' ').reverse().join(' ');
}

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
  doc.rect(0, 0, pageWidth, 70, "F");
  
  // Logo - FIXED VERSION
  try {
    const logoPath = path.join(process.cwd(), "public", "images", "logo.png"); // Use PNG
    const logoBuffer = fs.readFileSync(logoPath);
    const logoBase64 = logoBuffer.toString("base64");
    
    // Logo dimensions and position
    const logoSize = 12; // Size in mm
    const logoX = pageWidth - margin - logoSize;
    const logoY = 8;
    
    // White circle background for logo
    doc.setFillColor(255, 255, 255);
    doc.circle(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2 + 1, "F");
    
    // ...
    doc.addImage(
      `data:image/png;base64,${logoBase64}`, // PNG instead of WEBP
      'PNG',
      logoX,
      logoY,
      logoSize,
      logoSize
    );
  } catch (error) {
    console.error("Error loading logo:", error);
    // Fallback to text logo
    doc.setFillColor(255, 255, 255);
    doc.circle(pageWidth - 25, 15, 8, "F");
    doc.setTextColor(0, 60, 127);
    doc.setFontSize(10);
    doc.setFont("Amiri", "bold");
    doc.text(reverseArabicText("بوابة"), pageWidth - 25, 14, { align: "center" });
    doc.text(reverseArabicText("التسهيل"), pageWidth - 25, 18, { align: "center" });
  }
  
  // Title - FIXED SPACING
  doc.setTextColor(255, 255, 255);
  doc.setFont("Amiri", "bold");
  doc.setFontSize(22);
  const titleLines = wrapText(report.title, maxWidth - 30, 22);
  let titleY = 32; // Better starting position
  titleLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, titleY, { align: "center" });
    titleY += 9; // Better line spacing
  });
  
  // Add spacing between title and subtitle
  titleY += 3;
  
  // Subtitle - FIXED SPACING
  if (report.subtitle) {
    doc.setFontSize(14);
    doc.setFont("Amiri", "normal");
    doc.setTextColor(220, 235, 245);
    const subtitleLines = wrapText(report.subtitle, maxWidth - 30, 14);
    subtitleLines.forEach((line: string) => {
      doc.text(line, pageWidth / 2, titleY, { align: "center" });
      titleY += 7; // Better line spacing
    });
  }
  
  // Info bar
  doc.setFillColor(0, 50, 100);
  doc.rect(0, 70, pageWidth, 12, "F");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.setFont("Amiri", "normal");
  const currentDate = new Date().toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  doc.text((`تاريخ التقرير: ${currentDate}`), pageWidth - 20, 77, { align: "right" });
  doc.text(("تقرير موثق ✓"), 20, 77);
  
  currentY = 90;
  
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

// ============================================================================
// API ROUTE HANDLER
// ============================================================================
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const reportId = Number(id);
    
    // Validate report ID
    if (isNaN(reportId)) {
      return new NextResponse("Invalid report ID", { status: 400 });
    }
    
    // Find report
    const report = reportsData.find((r) => r.id === reportId);
    
    if (!report) {
      return new NextResponse("Report not found", { status: 404 });
    }
    
    // Generate PDF
    const pdfBuffer = generateReportPDF(report);
    
    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `report-${reportId}-${timestamp}.pdf`;
    
    // Return PDF
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
    
  } catch (error) {
    console.error("PDF generation error:", error);
    return new NextResponse(
      "Error generating PDF. Please try again later.",
      { status: 500 }
    );
  }
}