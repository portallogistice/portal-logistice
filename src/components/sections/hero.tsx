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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-950/20 pt-16"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Improved Animated Blobs with better positioning */}
      <div className="absolute top-10 left-5 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob" />
      <div className="absolute top-32 right-8 w-80 h-80 bg-emerald-300 dark:bg-emerald-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge/Icon with enhanced animation */}
          <div 
            className={`flex justify-center mb-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
              <div className="relative p-5 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40 rounded-2xl shadow-xl backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
                <Bike className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Main Title with improved typography */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500">
              {t("heroTitle")}
            </span>
          </h1>

          {/* Subtitle with better spacing */}
          <p 
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 font-semibold mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {t("heroSubtitle")}
          </p>

          {/* Description with improved readability */}
          <p 
            className={`text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {language === "ar" 
              ? "فكرة المشروع الاستثماري هي شراء دراجة نارية وتشغيلها في مجال الخدمات اللوجستية لتسليم الطلبات بهدف تحقيق عائد ربح يتجاوز 120٪"
              : "The investment project idea is to purchase a motorcycle and operate it in logistics services for order delivery, aiming to achieve a profit return exceeding 120%"}
          </p>

          {/* Trust Stats */}
          <div 
            className={`grid grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <Link
              href="#register"
              onClick={handleScrollClick}
              className="group relative w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("registerNow")}
                <ArrowDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#steps"
              onClick={handleScrollClick}
              className="group w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-emerald-600 dark:text-emerald-400 font-bold text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl border-2 border-emerald-600 dark:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                {t("learnMore")}
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div 
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <Link
              href="#steps"
              onClick={handleScrollClick}
              className="group inline-flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              aria-label={language === "ar" ? "انتقل للأسفل" : "Scroll down"}
            >
              <span className="text-xs font-medium uppercase tracking-wider">
                {language === "ar" ? "انتقل للأسفل" : "Scroll"}
              </span>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                <ArrowDown className="relative w-6 h-6 animate-bounce" />
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