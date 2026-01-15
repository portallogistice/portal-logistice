"use client";

import { 
  ArrowRight, 
  Calendar, 
  Download, 
  Share2, 
  ChevronLeft, 
  Printer, 
  Mail, 
  Quote, 
  TrendingUp, 
  Award, 
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Check
} from "lucide-react";
import { reportsData } from "@/lib/reportsData";
import { useState } from "react";
import SendReportModal from "@/components/modals/SendReportModal";


export default function ReportDetailPage({ 
  reportId, 
  language = "ar" 
}: { 
  reportId: number; 
  language?: string;
}) {
  const reportData = reportsData.find((report) => report.id === reportId);
  const isRtl = language === "ar";
  
  // State management
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successSendingEmail, setSuccessSendingEmail] = useState(false);
  const [successDownloadingReport, setSuccessDownloadingReport] = useState(false);
const [showSendReportModal, setShowSendReportModal] = useState(false);
  // Download handler
  const handleDownloadReport = async () => {
    if (!reportData) return;

    setLoading(true);
    setError("");
    setSuccessDownloadingReport(false);

    try {
      // Make API request
      const response = await fetch(`/api/reports/${reportData.id}/download?id=${reportData.id}`);
      
      if (!response.ok) {
        throw new Error("فشل تحميل التقرير");
      }
      
      // Get the blob
      const blob = await response.blob();
      
      // Verify it's a PDF
      if (blob.type !== "application/pdf") {
        throw new Error("الملف المحمل ليس PDF صالحاً");
      }
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      
      // Generate filename
      const timestamp = new Date().toISOString().split('T')[0];
      link.download = `تقرير-${reportData.id}-${timestamp}.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

      // Show success message
      setSuccessDownloadingReport(true);
      setTimeout(() => setSuccessDownloadingReport(false), 5000);

    } catch (err) {
      console.error("Download error:", err);
      setError(
        isRtl 
          ? "حدث خطأ أثناء تحميل التقرير. يرجى المحاولة مرة أخرى."
          : "An error occurred while downloading the report. Please try again."
      );
      setTimeout(() => setError(""), 8000);
    } finally {
      setLoading(false);
    }
  };
 
  const getStoredEmail = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("email");
  };
  
 // In ReportDetailPage.tsx, replace handleEmailReport with:
const handleEmailReport = async () => {
  if (!reportData) return;
  const email = getStoredEmail();
  if (!email) {
    setShowSendReportModal(true);
    return;
  }

  setLoading(true);
  setError("");
  setSuccessSendingEmail(false);

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email, // Replace with user's email or add an input field
        subject: `تقرير: ${reportData.title}`,
        reportId: reportData.id,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSuccessSendingEmail(true);
      setError("");
      
    } else {
      throw new Error('Failed to send email');
    }
  } catch (err) {
    console.error("Email error:", err);
    setError(
      isRtl 
        ? "فشل إرسال البريد الإلكتروني. يرجى المحاولة مرة أخرى."
        : "Failed to send email. Please try again."
    );
    setTimeout(() => setError(""), 8000);
  } finally {
    setLoading(false);
  }
};

  // Share handler
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: reportData?.title,
          text: reportData?.subtitle,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share error:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isRtl ? "تم نسخ الرابط!" : "Link copied!");
    }
  };

  // Not found state
  if (!reportData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center p-8">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {isRtl ? "التقرير غير موجود" : "Report not found"}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {isRtl 
              ? "عذراً، التقرير المطلوب غير متوفر"
              : "Sorry, the requested report is not available"
            }
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isRtl ? "العودة" : "Go Back"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-950 pb-20" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isRtl ? <ArrowRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            <span className="font-medium">{isRtl ? "العودة للتقارير" : "Back to Reports"}</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleShare}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label={isRtl ? "مشاركة" : "Share"}
            >
              <Share2 className="w-5 h-5 text-gray-500" />
            </button>
            <button 
              onClick={() => window.print()}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label={isRtl ? "طباعة" : "Print"}
            >
              <Printer className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <header className="mb-12 text-center lg:text-right">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              {reportData.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 font-medium">
              {reportData.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-gray-800 py-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>{new Date().toLocaleDateString('ar-SA')}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span>{isRtl ? "تقرير موثق" : "Verified Report"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                <span>{isRtl ? "بوابة التسهيل" : "Portal Logistics"}</span>
              </div>
            </div>
          </header>

          {/* Report Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            {/* Main Overview Section */}
            {reportData.sections[0] && (
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#003C7F] to-[#00A8E8] text-white mb-12 shadow-xl overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 opacity-10 rotate-12 text-white" />
                <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  {reportData.sections[0].title}
                </h2>
                <p className="relative z-10 text-blue-50 text-lg leading-relaxed">
                  {reportData.sections[0].content}
                </p>
              </div>
            )}

            {/* Dynamic Rendering of Report Sections */}
            <div className="space-y-16">
              {reportData.sections.slice(1).map((section, idx) => (
                <section key={idx} className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white shadow-lg font-bold text-xl">
                      {idx + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 m-0">
                      {section.title}
                    </h2>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
                    {section.content && (
                      <p className="text-slate-600 dark:text-gray-300 text-lg leading-[1.8] mb-6">
                        {section.content}
                      </p>
                    )}

                    {section.subsections && section.subsections.length > 0 && (
                      <div className="space-y-6 mt-8">
                        {section.subsections.map((subsection, subIdx) => (
                          <div key={subIdx} className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-800/40 border-r-4 border-blue-500">
                            <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-500" />
                              {subsection.title}
                            </h4>
                            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                              {subsection.content}
                            </p>
                            {subsection.bullets && subsection.bullets.length > 0 && (
                              <ul className="mt-4 space-y-2">
                                {subsection.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-3 text-slate-600 dark:text-gray-400">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.keyPoints && section.keyPoints.length > 0 && (
                      <div className="space-y-4 mt-8">
                        {section.keyPoints.map((point, kIdx) => (
                          <div key={kIdx} className="flex items-start gap-4 p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500">
                            <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                            <p className="text-slate-700 dark:text-gray-300 text-lg leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.conclusion && (
                      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800">
                        <p className="text-slate-800 dark:text-gray-200 text-lg font-medium italic leading-relaxed">
                          {section.conclusion}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Final Conclusion Box */}
            {reportData.sections[reportData.sections.length - 1]?.conclusion && (
              <div className="mt-20 p-8 md:p-12 rounded-[2rem] border-2 border-dashed border-blue-200 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-center">
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-6">
                  {isRtl ? "الخلاصة النهائية:" : "Final Conclusion:"}
                </h3>
                <p className="text-slate-800 dark:text-gray-200 text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                  " {reportData.sections[reportData.sections.length - 1].conclusion} "
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="mt-16 space-y-4">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDownloadReport}
                disabled={loading}
                className="flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 dark:shadow-none transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
               
                {loading
                  ? isRtl ? "جاري التحميل..." : "Downloading..."
                  : successDownloadingReport
                  ? isRtl ? "تم التحميل بنجاح!" : "Downloaded!"
                  : isRtl ? "تحميل التقرير الكامل (PDF)" : "Download Full Report (PDF)"
                }
              </button>
              <button 
  onClick={handleEmailReport}  // This should now use the updated function
  disabled={loading || successSendingEmail}
  className="flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-gray-800 text-slate-700 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <Mail className="w-5 h-5" />
  {isRtl ? "إرسال نسخة للإيميل" : "Send Copy to Email"}
</button>
            </div>
            <SendReportModal
        open={showSendReportModal}
        onClose={() => setShowSendReportModal(false)}
        onSuccess={()=>handleEmailReport()}
      />
            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {successSendingEmail && (
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-400">
                <Check className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">
                  {isRtl ? "تم إرسال التقرير بنجاح!" : "Report sent successfully!"}
                </p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}