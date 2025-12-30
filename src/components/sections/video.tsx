// src/components/sections/video.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { useState } from "react";
import { Play, X, CheckCircle } from "lucide-react";

// Brand colors from logo
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export function VideoSection() {
  const { language } = useI18n();
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace with your actual video URL
  const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

  const benefits = [
    {
      textAr: "فهم كامل لنظام الاستثمار",
      textEn: "Complete understanding of investment system",
    },
    {
      textAr: "شرح مفصل لخطوات العمل",
      textEn: "Detailed explanation of work steps",
    },
    {
      textAr: "أمثلة واقعية من مستثمرين",
      textEn: "Real examples from investors",
    },
  ];

  return (
    <section 
      id="video" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
              style={{
                backgroundColor: `${colors.secondary}10`,
                border: `1px solid ${colors.secondary}20`,
              }}
            >
              <div 
                className="p-1.5 rounded-full"
                style={{ backgroundColor: `${colors.secondary}20` }}
              >
                <Play className="w-4 h-4" style={{ color: colors.secondary }} />
              </div>
              <span 
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: colors.primary }}
              >
                {language === "ar" ? "فيديو توضيحي" : "Explainer Video"}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span style={{ color: colors.primary }}>
                {language === "ar" ? "شاهد كيف " : "Watch How "}
              </span>
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
                }}
              >
                {language === "ar" ? "يعمل النظام" : "It Works"}
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === "ar"
                ? "فيديو توضيحي شامل يشرح نظام الاستثمار وكيفية تحقيق عائد ربح يتجاوز 120%"
                : "Comprehensive explainer video showing the investment system and how to achieve 120%+ returns"}
            </p>
          </div>

          {/* Video Player Container */}
          <div className="relative mb-12">
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: colors.secondary }}
            >
              {!isPlaying ? (
                // Video Thumbnail
                <div 
                  className="relative w-full h-full bg-gradient-to-br cursor-pointer group"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.secondary}20 100%)`,
                  }}
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Thumbnail Image (if you have one) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
                    <div 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      }}
                    >
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  
                  {/* Play Text */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-white font-bold text-lg sm:text-xl mb-2">
                      {language === "ar" ? "شاهد الفيديو التوضيحي" : "Watch Explainer Video"}
                    </p>
                    <p className="text-white/80 text-sm">
                      {language === "ar" ? "مدة الفيديو: 3 دقائق" : "Duration: 3 minutes"}
                    </p>
                  </div>
                </div>
              ) : (
                // YouTube/Video Player
                <div className="relative w-full h-full">
                  <iframe
                    src={videoUrl}
                    title="Investment System Explainer"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all z-10"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ borderColor: `${colors.secondary}20` }}
              >
                <div 
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${colors.secondary}20` }}
                >
                  <CheckCircle className="w-4 h-4" style={{ color: colors.secondary }} />
                </div>
                <p 
                  className="text-sm font-semibold leading-relaxed"
                  style={{ color: colors.primary }}
                >
                  {language === "ar" ? benefit.textAr : benefit.textEn}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {language === "ar" 
                ? "هل أنت مستعد لبدء استثمارك؟"
                : "Ready to start your investment?"}
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              }}
            >
              <span>{language === "ar" ? "سجل الآن" : "Register Now"}</span>
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}