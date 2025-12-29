// src/components/sections/hero.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { ArrowDown, Bike } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-950/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 dark:bg-emerald-800/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
              <Bike className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-600">
              {t("heroTitle")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium animate-slide-up">
            {t("heroSubtitle")}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up">
            فكرة المشروع الاستثماري هي شراء دراجة نارية وتشغيلها في مجال الخدمات
            اللوجستية لتسليم الطلبات بهدف تحقيق عائد ربح يتجاوز 120٪
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up">
            <Link
              href="#register"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {t("registerNow")}
            </Link>
            <Link
              href="#steps"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-emerald-600 dark:text-emerald-400 font-bold rounded-xl shadow-lg hover:shadow-xl border-2 border-emerald-600 dark:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              {t("learnMore")}
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <Link
              href="#steps"
              className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </section>
  );
}