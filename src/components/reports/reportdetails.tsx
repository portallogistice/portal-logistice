"use client";

import { 
  ArrowRight, 
  Calendar, 
  Download, 
  Share2, 
  FileText, 
  ChevronLeft, 
  Clock, 
  Printer, 
  Mail, 
  Quote, 
  TrendingUp, 
  Award, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { useI18n } from "@/providers/i18n-provider";
import { reportsData } from "@/lib/reportsData";

// الألوان المعتمدة
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export default function ReportDetailPage({ reportId }: { reportId: number }) {
  const { language } = useI18n();
  const reportData = reportsData.find((report) => report.id === reportId);
  const isRtl = language === "ar";

  if (!reportData) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl font-bold">{isRtl ? "التقرير غير موجود" : "Report not found"}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-950 pb-20">
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
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Share2 className="w-5 h-5 text-gray-500" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => window.print()}><Printer className="w-5 h-5 text-gray-500" /></button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <header className="mb-12 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <reportData.icon className="w-4 h-4" />
              {isRtl ? reportData.authorAr : reportData.authorEn}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              {isRtl ? reportData.titleAr : reportData.titleEn}
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-gray-800 py-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>{new Date(reportData.date).toLocaleDateString(isRtl ? 'ar-SA' : 'en-US')}</span>
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

          {/* Key Highlights Grid - جديد بناءً على البيانات */}
          {reportData.highlights && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {reportData.highlights.map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{isRtl ? item.valueAr : item.valueEn}</div>
                  <div className="text-xs text-gray-500">{isRtl ? item.titleAr : item.titleEn}</div>
                </div>
              ))}
            </div>
          )}

          {/* Report Content */}
          <div className={`prose prose-lg max-w-none dark:prose-invert ${isRtl ? 'font-arabic' : ''}`}>
            
            {/* Strategy Summary Box */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#003C7F] to-[#00A8E8] text-white mb-12 shadow-xl overflow-hidden">
               <Quote className="absolute -top-4 -right-4 w-32 h-32 opacity-10 rotate-12 text-white" />
               <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                 <TrendingUp className="w-6 h-6" />
                 {isRtl ? "الملخص التنفيذي" : "Executive Summary"}
               </h2>
               <p className="relative z-10 text-blue-50 text-lg leading-relaxed opacity-95">
                 {isRtl ? reportData.summaryAr : reportData.summaryEn}
               </p>
            </div>

            {/* Dynamic Rendering of Report Sections */}
            <div className="space-y-16">
              {reportData.sections.map((section, idx) => (
                <section key={idx} className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white shadow-lg">
                      {section.icon ? <section.icon className="w-6 h-6" /> : <span className="font-bold text-xl">{idx + 1}</span>}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 m-0">
                      {isRtl ? section.titleAr : section.titleEn}
                    </h2>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
                    {/* Paragraphs rendering */}
                    {(isRtl ? section.contentAr : section.contentEn).map((para, pIdx) => (
                      <p key={pIdx} className="text-slate-600 dark:text-gray-300 text-lg leading-[1.8] mb-6 last:mb-0">
                        {para}
                      </p>
                    ))}

                    {/* Sub-points Breakdown */}
                    {section.subPoints && (
                      <div className="grid gap-6 mt-10">
                        {section.subPoints.map((point, ptIdx) => (
                          <div key={ptIdx} className="flex gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-gray-800/40 border-r-4 border-blue-500 relative overflow-hidden group/item">
                             <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                             <div className="relative">
                               <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                 <ChevronRight className={`w-5 h-5 text-blue-500 ${isRtl ? '' : 'rotate-180'}`} />
                                 {isRtl ? point.titleAr : point.titleEn}
                               </h4>
                               <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                                 {isRtl ? point.descAr : point.descEn}
                               </p>
                             </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Final Conclusion Box */}
            <div className="mt-20 p-8 md:p-12 rounded-[2rem] border-2 border-dashed border-blue-200 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-center">
               <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-6">
                 {isRtl ? "الخلاصة الاستثمارية:" : "Investment Conclusion:"}
               </h3>
               <p className="text-slate-800 dark:text-gray-200 text-xl font-medium italic leading-relaxed max-w-3xl mx-auto">
                 " {isRtl ? reportData.conclusionAr : reportData.conclusionEn} "
               </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 dark:shadow-none transition-all hover:-translate-y-1 active:scale-95">
              <Download className="w-5 h-5" />
              {isRtl ? "تحميل التقرير الكامل (PDF)" : "Download Full Report (PDF)"}
            </button>
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-gray-800 text-slate-700 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-all active:scale-95">
              <Mail className="w-5 h-5" />
              {isRtl ? "إرسال نسخة للإيميل" : "Send Copy to Email"}
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}