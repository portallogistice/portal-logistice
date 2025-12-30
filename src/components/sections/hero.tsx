"use client";

import { useI18n } from "@/providers/i18n-provider";
import { ArrowRight, TrendingUp, Users, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const { t, language } = useI18n();
  const [mounted, setMounted] = useState(false);

  // Brand colors from logo
  const colors = {
    primary: "#003C7F",
    secondary: "#00A8E8",
    accent: "#0080C8",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { 
      icon: TrendingUp, 
      value: "120%", 
      label: language === "ar" ? "عائد الربح" : "Profit Return",
      color: colors.primary,
    },
    { 
      icon: Users, 
      value: "1000+", 
      label: language === "ar" ? "مستثمر" : "Investors",
      color: colors.secondary,
    },
    { 
      icon: Shield, 
      value: "100%", 
      label: language === "ar" ? "آمن وموثق" : "Secure",
      color: colors.accent,
    },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 pt-16"
    >
      {/* Optimized Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${colors.secondary} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Optimized Animated Gradients - GPU Accelerated */}
      <div 
        className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
        style={{ 
          background: `radial-gradient(circle, ${colors.secondary}, transparent)`,
          willChange: 'transform'
        }}
      />
      <div 
        className="absolute top-40 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float-delayed"
        style={{ 
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          willChange: 'transform'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="text-center lg:text-right rtl:lg:text-right">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 shadow-lg border mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ 
                borderColor: colors.secondary,
                transitionDelay: "100ms" 
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.secondary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                {language === "ar" ? "استثمار موثق ومضمون" : "Certified Investment"}
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span style={{ color: colors.primary }}>
                {language === "ar" ? "بوابة التسهيل" : "Portal"}
              </span>
              <br />
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`
                }}
              >
                {language === "ar" ? "للخدمات اللوجستية" : "Logistics Services"}
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {t("heroSubtitle")}
            </p>

            {/* Description */}
            <p 
              className={`text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {language === "ar" 
                ? "فكرة المشروع الاستثماري هي شراء دراجة نارية وتشغيلها في مجال الخدمات اللوجستية لتسليم الطلبات بهدف تحقيق عائد ربح يتجاوز 120%"
                : "Investment project to purchase and operate motorcycles in logistics services, achieving profit returns exceeding 120%"}
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-end rtl:lg:justify-end mb-10 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Link
                href="#register"
                onClick={handleScrollClick}
                className="group relative px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t("registerNow")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`
                  }}
                />
              </Link>
              
              <Link
                href="#steps"
                onClick={handleScrollClick}
                className="px-8 py-4 bg-white dark:bg-gray-800 font-bold rounded-xl shadow-lg hover:shadow-xl border-2 transition-all duration-300"
                style={{ 
                  color: colors.primary,
                  borderColor: colors.secondary 
                }}
              >
                {t("learnMore")}
              </Link>
            </div>

            {/* Trust Badges */}
            <div 
              className={`flex items-center justify-center lg:justify-end rtl:lg:justify-end gap-6 text-sm text-gray-600 dark:text-gray-400 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }} />
                <span>{language === "ar" ? "موثق رسمياً" : "Officially Certified"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }} />
                <span>{language === "ar" ? "متوافق شرعياً" : "Sharia Compliant"}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div 
            className={`relative transition-all duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Main Visual */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Circles */}
              <div 
                className="absolute inset-0 rounded-full opacity-20 blur-2xl animate-pulse"
                style={{ backgroundColor: colors.secondary }}
              />
              <div 
                className="absolute inset-8 rounded-full opacity-10 blur-xl"
                style={{ backgroundColor: colors.primary }}
              />
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="p-12 rounded-full shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                  }}
                >
                  <svg className="w-40 h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const positions = [
                  { top: "10%", left: "0%", rotate: "-5deg" },
                  { top: "50%", right: "0%", rotate: "5deg" },
                  { bottom: "10%", left: "5%", rotate: "-3deg" },
                ];
                return (
                  <div
                    key={index}
                    className="absolute bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border hover:scale-110 transition-transform duration-300"
                    style={{
                      ...positions[index],
                      borderColor: stat.color,
                      animation: `float ${3 + index}s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${stat.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: stat.color }} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold" style={{ color: stat.color }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotate, 0deg)); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}