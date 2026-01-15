// src/components/sections/reports.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { 
  FileText, Search, X, TrendingUp, DollarSign, 
  Calendar, BarChart3, PieChart, LineChart, Users, 
  Package, Truck, Clock, Award, Target, CheckCircle,
  ArrowRight, Filter, Download, Eye
} from "lucide-react";
import { useRouter } from "next/navigation";
import { reportsData } from "@/lib/reportsData";
import { ReportData } from "@/types/report";
// Brand colors
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

// Report categories
const categories = [
  { id: "all", labelAr: "الكل", labelEn: "All", icon: FileText },
  { id: "financial", labelAr: "مالية", labelEn: "Financial", icon: DollarSign },
  { id: "operational", labelAr: "تشغيلية", labelEn: "Operational", icon: Truck },
  { id: "performance", labelAr: "أداء", labelEn: "Performance", icon: TrendingUp },
  { id: "analytics", labelAr: "تحليلية", labelEn: "Analytics", icon: BarChart3 },
];


interface ReportsSectionProps {
  language?: "ar" | "en";
}

export  function ReportsSection({ language = "ar" }: ReportsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const reportsPerPage = 12;
  const router = useRouter();
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [currentPage, selectedCategory, searchQuery]);

  // Filter reports
  const filteredReports = reportsData.filter((report) => {
      const matchesCategory = selectedCategory === "all" || report.department === selectedCategory;
    const matchesSearch = 
      ( report.title) 
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (report.subtitle)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);
  const startIndex = (currentPage - 1) * reportsPerPage;
  const paginatedReports = filteredReports.slice(startIndex, startIndex + reportsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <section
      ref={sectionRef}
      id="reports"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950"
    >
      {/* Enhanced Background with Dark Mode Support */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-10 blur-3xl animate-pulse"
          style={{ 
            background: `radial-gradient(circle, ${colors.secondary}, transparent)`,
            animationDuration: '8s'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 dark:opacity-10 blur-3xl animate-pulse"
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}, transparent)`,
            animationDuration: '10s',
            animationDelay: '2s'
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${colors.secondary}20 1px, transparent 1px), linear-gradient(90deg, ${colors.secondary}20 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
            style={{
              backgroundColor: `${colors.secondary}15`,
              border: `1px solid ${colors.secondary}30`,
            }}
          >
            <div
              className="p-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: `${colors.secondary}25`,
                animationDuration: '3s'
              }}
            >
              <FileText className="w-4 h-4" style={{ color: colors.secondary }} />
            </div>
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "التقارير" : "Reports"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight px-4">
            <span style={{ color: colors.primary }} className="dark:opacity-95">
              {language === "ar" ? "مركز " : "Reports "}
            </span>
            <span
              className="bg-clip-text text-transparent relative"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              {language === "ar" ? "التقارير" : "Center"}
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {language === "ar"
              ? "أكثر من 50 تقرير مفصل لمساعدتك على اتخاذ قرارات استثمارية مستنيرة"
              : "Over 50 detailed reports to help you make informed investment decisions"}
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-5xl mx-auto mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search
              className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              type="text"
              placeholder={language === "ar" ? "ابحث في التقارير..." : "Search reports..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 rounded-xl border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
              style={{
                borderColor: `${colors.secondary}20`,
                outline: `2px solid ${colors.secondary}`,
              }}
            />
          </div>

       
        </div>

        {/* Reports Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {paginatedReports.map((report, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={report.id}
                data-index={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  style={{ borderColor: `${colors.primary}20` }}
                
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  >
                  </div>

                  {/* Content */}
                  <h3
                    className="text-lg font-bold mb-2 line-clamp-2"
                    style={{ color: colors.primary }}
                  >
                    {report.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {report.subtitle}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: `${colors.secondary}20` }}>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{report.department}</span>
                    </div>
<div className="flex items-center gap-2">
                <button onClick={() => router.push(`/reports/${report.id}`)} className="cursor-pointer">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}>
                    <Download className="w-4 h-4 text-white" />
                    </div>
                    </button>
                    <button onClick={() => router.push(`/reports/${report.id}`)} className="cursor-pointer">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}>
                    <Eye className="w-4 h-4 text-white" />
                    </div>
                    </button>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination - Modern Design */}
        {totalPages > 1 && (
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-3 w-full px-2 sm:px-4 overflow-x-auto scrollbar-hide py-3">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`flex-shrink-0 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-base transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
            currentPage === 1 
              ? "bg-transparent dark:bg-transparent border-2" 
              : ""
          }`}
          style={{
            backgroundColor: currentPage === 1 ? undefined : colors.primary,
            color: currentPage === 1 ? colors.primary : "white",
            border: `2px solid ${colors.primary}`,
          }}
        >
          <span className="flex items-center justify-center gap-1 sm:gap-2">
            <ArrowRight className={`w-3 h-3 sm:w-5 sm:h-5 ${language === "ar" ? "" : "rotate-180"}`} />
            <span className="hidden sm:inline">{language === "ar" ? "السابق" : "Previous"}</span>
          </span>
        </button>
      
        {/* Page Numbers */}
        <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
          {Array.from({ length: Math.min(totalPages <= 5 ? totalPages : 5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
      
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl font-bold text-xs sm:text-base transition-all hover:scale-110 active:scale-95 shadow-md hover:shadow-lg flex-shrink-0 ${
                  currentPage === pageNum 
                    ? "" 
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                }`}
                style={{
                  backgroundColor: currentPage === pageNum ? colors.secondary : undefined,
                  color: currentPage === pageNum ? "white" : undefined,
                  border: `2px solid ${currentPage === pageNum ? colors.secondary : `${colors.secondary}20`}`,
                }}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      
        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`flex-shrink-0 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-base transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
            currentPage === totalPages 
              ? "bg-transparent dark:bg-transparent border-2" 
              : ""
          }`}
          style={{
            backgroundColor: currentPage === totalPages ? undefined : colors.primary,
            color: currentPage === totalPages ? colors.primary : "white",
            border: `2px solid ${colors.primary}`,
          }}
        >
          <span className="flex items-center justify-center gap-1 sm:gap-2">
            <span className="hidden sm:inline">{language === "ar" ? "التالي" : "Next"}</span>
            <ArrowRight className={`w-3 h-3 sm:w-5 sm:h-5 ${language === "ar" ? "rotate-180" : ""}`} />
          </span>
        </button>
      </div>
      
    
        )}
      </div>

      {/* Report Modal - Enhanced */}
      {selectedReport && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedReport(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedReport(null)}
              className="sticky top-4 float-right sm:absolute sm:top-6 sm:right-6 rtl:sm:right-auto rtl:sm:left-6 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
              style={{ backgroundColor: `${colors.secondary}25` }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.primary }} />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6 sm:mb-8">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  />
                  <div
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  >
                    <selectedReport.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                {/* Title & Meta */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight" 
                    style={{ color: colors.primary }}>
                    {language === "ar" ? selectedReport.titleAr : selectedReport.titleEn}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {new Date(selectedReport.date).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US", {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div
                      className="px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm"
                      style={{
                        backgroundColor: `${colors.secondary}20`,
                        color: colors.primary,
                      }}
                    >
                      {categories.find((c) => c.id === selectedReport.category)?.[language === "ar" ? "labelAr" : "labelEn"]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-6 sm:mb-8" 
                style={{ 
                  background: `linear-gradient(90deg, transparent, ${colors.secondary}30, transparent)` 
                }}
              />

              {/* Description */}
              <div className="mb-8 sm:mb-10">
                <h4 className="text-lg sm:text-xl font-bold mb-4" style={{ color: colors.primary }}>
                  {language === "ar" ? "تفاصيل التقرير" : "Report Details"}
                </h4>
                <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                    {language === "ar" ? selectedReport.summaryAr : selectedReport.summaryEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
               
                
                <button
                  onClick={() => setSelectedReport(null)}
                  className="sm:flex-none px-6 py-4 font-bold text-base sm:text-lg rounded-xl transition-all hover:scale-105 active:scale-95 border-2"
                  style={{
                    color: colors.primary,
                    borderColor: `${colors.primary}30`,
                    backgroundColor: 'transparent'
                  }}
                >
                  {language === "ar" ? "إغلاق" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
          </section>
    </>
  );
}