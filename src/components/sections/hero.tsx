// src/components/sections/hero.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { ArrowDown, Bike, TrendingUp, Users, Shield } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { t, language } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: TrendingUp, value: "120%", label: language === "ar" ? "عائد الربح" : "Profit Return" },
    { icon: Users, value: "1000+", label: language === "ar" ? "مستثمر" : "Investors" },
    { icon: Shield, value: "100%", label: language === "ar" ? "آمن وموثق" : "Secure & Certified" },
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 64;
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-950/20 pt-16 sm:pt-20"
    >
      {/* Enhanced Background Pattern - Hidden on mobile for performance */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] hidden sm:block" />
      
      {/* Improved Animated Blobs with mobile-optimized positioning */}
      <div className="absolute top-5 left-0 sm:top-10 sm:left-5 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200 dark:bg-emerald-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 sm:opacity-60 animate-blob" />
      <div className="absolute top-20 right-0 sm:top-32 sm:right-8 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-300 dark:bg-emerald-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 sm:opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200 dark:bg-emerald-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 sm:opacity-50 animate-blob animation-delay-4000" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge/Icon with mobile-optimized size */}
          <div 
            className={`flex justify-center mb-6 sm:mb-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
              <div className="relative p-3 sm:p-4 md:p-5 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
                <Bike className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Main Title with mobile-optimized typography */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6 px-2 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500">
              {t("heroTitle")}
            </span>
          </h1>

          {/* Subtitle with mobile-optimized spacing */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-800 dark:text-gray-200 font-semibold mb-4 sm:mb-6 px-2 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {t("heroSubtitle")}
          </p>

          {/* Description with mobile-optimized readability */}
          <p 
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 leading-relaxed sm:leading-loose transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {language === "ar" 
              ? "فكرة المشروع الاستثماري هي شراء دراجة نارية وتشغيلها في مجال الخدمات اللوجستية لتسليم الطلبات بهدف تحقيق عائد ربح يتجاوز 120٪"
              : "The investment project idea is to purchase a motorcycle and operate it in logistics services for order delivery, aiming to achieve a profit return exceeding 120%"}
          </p>

          {/* Trust Stats - Mobile-optimized grid */}
          <div 
            className={`grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg active:scale-95 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-600 dark:text-emerald-400 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium text-center leading-tight px-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA Buttons - Mobile-optimized */}
          <div 
            className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16 px-4 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <Link
              href="#register"
              onClick={handleScrollClick}
              className="group relative w-full sm:w-auto min-w-[200px] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 active:from-emerald-800 active:to-emerald-700 text-white font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden touch-manipulation"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("registerNow")}
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#steps"
              onClick={handleScrollClick}
              className="group w-full sm:w-auto min-w-[200px] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 active:bg-gray-50 dark:active:bg-gray-700 text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl border-2 border-emerald-600 dark:border-emerald-500 active:scale-[0.98] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm touch-manipulation"
            >
              <span className="flex items-center justify-center gap-2">
                {t("learnMore")}
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Enhanced Scroll Indicator - Mobile-optimized */}
          <div 
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <Link
              href="#steps"
              onClick={handleScrollClick}
              className="group inline-flex flex-col items-center gap-1.5 sm:gap-2 text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 active:text-emerald-700 dark:active:text-emerald-300 transition-colors touch-manipulation"
              aria-label={language === "ar" ? "انتقل للأسفل" : "Scroll down"}
            >
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                {language === "ar" ? "انتقل للأسفل" : "Scroll"}
              </span>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                <ArrowDown className="relative w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          25% { 
            transform: translate(30px, -60px) scale(1.1); 
          }
          50% { 
            transform: translate(-30px, 30px) scale(0.95); 
          }
          75% { 
            transform: translate(60px, 60px) scale(1.05); 
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}