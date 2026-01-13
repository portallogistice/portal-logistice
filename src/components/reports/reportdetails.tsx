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
  CheckCircle2
} from "lucide-react";
import { reportsData } from "@/lib/reportsData";

export default function ReportDetailPage({ reportId, language = "ar" }: { reportId: number, language?: string }) {
  const reportData = reportsData.find((report) => report.id === reportId);
  const isRtl = language === "ar";

  if (!reportData) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl font-bold">{isRtl ? "التقرير غير موجود" : "Report not found"}</p>
    </div>
  );

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
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" onClick={() => window.print()}>
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
                    {/* Main Content */}
                    {section.content && (
                      <p className="text-slate-600 dark:text-gray-300 text-lg leading-[1.8] mb-6">
                        {section.content}
                      </p>
                    )}

                    {/* Subsections */}
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

                    {/* Key Points */}
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

                    {/* Conclusion */}
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
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 dark:shadow-none transition-all hover:-translate-y-1 active:scale-95">
              <Download className="w-5 h-5" />
              {isRtl ? "تحميل التقرير الكامل (PDF)" : "Download Full Report (PDF)"}
            </button>
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-gray-800 text-slate-700 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-95">
              <Mail className="w-5 h-5" />
              {isRtl ? "إرسال نسخة للإيميل" : "Send Copy to Email"}
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}