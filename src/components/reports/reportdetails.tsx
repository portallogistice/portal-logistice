// Report Detail Page Component
"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Download,
  Share2,
  BookmarkPlus,
  FileText,
  TrendingUp,
  BarChart3,
  ChevronRight,
  Eye,
  Clock,
  DollarSign,
  Target,
  Award,
  CheckCircle,
  Info,
  Printer,
  Mail,
} from "lucide-react";
import { ReportData } from "@/types/report";
import { useI18n } from "@/providers/i18n-provider";
import { reportsData } from "@/lib/reportsData";

// Add animations CSS
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.5s ease-out;
  }
  
  .animate-pulse-slow {
    animation: pulse 3s ease-in-out infinite;
  }
  
  /* Custom scrollbar */
  .custom-scroll::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .custom-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .custom-scroll::-webkit-scrollbar-thumb {
    background: #00A8E8;
    border-radius: 4px;
  }
  
  .custom-scroll::-webkit-scrollbar-thumb:hover {
    background: #0080C8;
  }
  
  /* Smooth text rendering */
  .prose {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

// Brand colors
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};



interface ReportDetailPageProps {
  reportId: number;
}

export default function ReportDetailPage({ 
  reportId
}: ReportDetailPageProps) {
  const reportData = reportsData.find((report) => report.id === reportId);
  const {language} = useI18n();
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-pulse-slow"
            style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }}
          />
          <div
            className="absolute top-1/2 -left-40 w-96 h-96 rounded-full opacity-15 dark:opacity-10 blur-3xl animate-pulse-slow"
            style={{ 
              background: `radial-gradient(circle, ${colors.primary}, transparent)`,
              animationDelay: '1.5s'
            }}
          />
        </div>

        {/* Sticky Header */}
        <div
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isSticky
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
                style={{
                  color: colors.primary,
                  backgroundColor: isSticky ? `${colors.secondary}15` : "white",
                }}
              >
                <ArrowRight className={`w-5 h-5 ${language === "ar" ? "" : "rotate-180"}`} />
                <span>{language === "ar" ? "العودة" : "Back"}</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  style={{ backgroundColor: `${colors.secondary}15` }}
                >
                  <Share2 className="w-5 h-5" style={{ color: colors.primary }} />
                </button>
                <button
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  style={{ backgroundColor: `${colors.secondary}15` }}
                >
                  <BookmarkPlus className="w-5 h-5" style={{ color: colors.primary }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Article */}
            <article className="lg:col-span-8">
              {/* Header Section */}
              <div className="animate-fadeInUp">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <span>{language === "ar" ? "الرئيسية" : "Home"}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>{language === "ar" ? "التقارير" : "Reports"}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span style={{ color: colors.secondary }}>
                    {language === "ar" ? "تقرير مالي" : "Financial Report"}
                  </span>
                </div>

                {/* Title */}
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  style={{ color: colors.primary }}
                >
                  {language === "ar" ? reportData.titleAr : reportData.titleEn}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      }}
                    >
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: colors.primary }}>
                        {language === "ar" ? reportData.author : reportData.authorEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(reportData.date).toLocaleDateString(
                        language === "ar" ? "ar-SA" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{language === "ar" ? reportData.readTime : reportData.readTimeEn}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span>{reportData.views}</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12 animate-fadeInUp">
                {reportData.highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all"
                      style={{ 
                        borderColor: `${colors.primary}15`,
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {language === "ar" ? highlight.titleAr : highlight.titleEn}
                          </p>
                          <p className="text-2xl font-bold" style={{ color: colors.primary }}>
                            {language === "ar" ? highlight.valueAr : highlight.valueEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Executive Summary */}
              <div className="mb-12 animate-slideInRight">
                <div
                  className="p-6 sm:p-8 rounded-2xl border-2"
                  style={{
                    backgroundColor: `${colors.secondary}05`,
                    borderColor: `${colors.secondary}20`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Info className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.secondary }} />
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      {language === "ar" ? "ملخص تنفيذي" : "Executive Summary"}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {language === "ar" ? reportData.summaryAr : reportData.summaryEn}
                  </p>
                </div>
              </div>

              {/* Main Sections */}
              <div className="space-y-8 mb-12">
                {reportData.sections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <div
                      key={section.id}
                      className="animate-fadeInUp"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div
                        className={`p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 transition-all ${
                          isActive ? "shadow-xl" : "hover:shadow-lg"
                        }`}
                        style={{ borderColor: isActive ? colors.secondary : `${colors.primary}15` }}
                      >
                        {/* Section Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                            }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold flex-1" style={{ color: colors.primary }}>
                            {language === "ar" ? section.titleAr : section.titleEn}
                          </h2>
                        </div>

                        {/* Section Content */}
                        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                          {(language === "ar" ? section.contentAr : section.contentEn).map(
                            (paragraph, pIndex) => (
                              <p key={pIndex} className="text-lg">
                                {paragraph}
                              </p>
                            )
                          )}

                          {/* Sub-points */}
                          {section.subPoints && (
                            <div className="mt-6 space-y-3">
                              {section.subPoints.map((point, pIndex) => (
                                <div
                                  key={pIndex}
                                  className="flex gap-3 p-4 rounded-xl"
                                  style={{ backgroundColor: `${colors.secondary}08` }}
                                >
                                  <CheckCircle
                                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                                    style={{ color: colors.secondary }}
                                  />
                                  <div>
                                    <h4 className="font-bold mb-1" style={{ color: colors.primary }}>
                                      {language === "ar" ? point.titleAr : point.titleEn}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                      {language === "ar" ? point.descAr : point.descEn}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Conclusion */}
              <div className="animate-fadeInUp">
                <div
                  className="p-6 sm:p-8 rounded-2xl border-2"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}05 100%)`,
                    borderColor: `${colors.primary}20`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Award className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.primary }} />
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      {language === "ar" ? "الخلاصة الاستثمارية" : "Investment Conclusion"}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {language === "ar" ? reportData.conclusionAr : reportData.conclusionEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <button
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>{language === "ar" ? "تحميل التقرير الكامل" : "Download Full Report"}</span>
                </button>

                <button
                  className="flex items-center justify-center gap-3 px-6 py-4 font-bold rounded-xl border-2 transition-all hover:scale-105 active:scale-95"
                  style={{
                    color: colors.primary,
                    borderColor: `${colors.primary}30`,
                    backgroundColor: "white",
                  }}
                >
                  <Printer className="w-5 h-5" />
                  <span className="hidden sm:inline">{language === "ar" ? "طباعة" : "Print"}</span>
                </button>

                <button
                  className="flex items-center justify-center gap-3 px-6 py-4 font-bold rounded-xl border-2 transition-all hover:scale-105 active:scale-95"
                  style={{
                    color: colors.primary,
                    borderColor: `${colors.primary}30`,
                    backgroundColor: "white",
                  }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline">{language === "ar" ? "مشاركة" : "Share"}</span>
                </button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <div className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2"
                  style={{ borderColor: `${colors.primary}15` }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
                    {language === "ar" ? "محتويات التقرير" : "Table of Contents"}
                  </h3>
                  <div className="space-y-2">
                    {reportData.sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className="w-full flex items-center gap-3 p-3 rounded-xl text-right transition-all hover:scale-105"
                          style={{
                            backgroundColor: activeSection === section.id ? `${colors.secondary}15` : "transparent",
                            color: activeSection === section.id ? colors.secondary : colors.primary,
                          }}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm font-semibold flex-1">
                            {language === "ar" ? section.titleAr : section.titleEn}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Related Reports */}
                <div className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2"
                  style={{ borderColor: `${colors.primary}15` }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
                    {language === "ar" ? "تقارير ذات صلة" : "Related Reports"}
                  </h3>
                  <div className="space-y-3">
                    {reportData.relatedReports.map((report) => (
                      <a
                        key={report.id}
                        href={`/reports/${report.id}`}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-105 hover:shadow-md"
                        style={{ backgroundColor: `${colors.secondary}08` }}
                      >
                        <FileText className="w-5 h-5 flex-shrink-0" style={{ color: colors.secondary }} />
                        <span className="text-sm font-semibold flex-1" style={{ color: colors.primary }}>
                          {language === "ar" ? report.titleAr : report.titleEn}
                        </span>
                        <ChevronRight className={`w-4 h-4 ${language === "ar" ? "rotate-180" : ""}`} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div
                  className="p-6 rounded-2xl text-white text-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  }}
                >
                  <Target className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {language === "ar" ? "ابدأ استثمارك اليوم" : "Start Your Investment Today"}
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    {language === "ar"
                      ? "انضم لأكثر من 1000 مستثمر ذكي"
                      : "Join over 1000 smart investors"}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}