// src/components/sections/about.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Building2, Users, TrendingUp, Shield, Award, Target } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Brand colors from logo
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export function AboutSection() {
  const { language } = useI18n();
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-id") || "";
            setVisibleElements((prev) => new Set([...prev, elementId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-id]");
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Building2,
      titleAr: "منشأة سعودية متخصصة",
      titleEn: "Specialized Saudi Establishment",
      descAr: "متخصصون في الخدمات اللوجستية مع شبكة واسعة من دراجات التوصيل",
      descEn: "Specialized in logistics services with wide delivery network",
    },
    {
      icon: Users,
      titleAr: "فريق محترف",
      titleEn: "Professional Team",
      descAr: "فريق عمل متخصص في الإدارة والقيادة مع سائقين متمرسين",
      descEn: "Specialized management team with experienced drivers",
    },
    {
      icon: TrendingUp,
      titleAr: "نمو سريع",
      titleEn: "Rapid Growth",
      descAr: "الشراكة مع المستثمرين داعم قوي لتطورنا وتوسعنا السريع",
      descEn: "Investor partnership drives rapid development and expansion",
    },
    {
      icon: Shield,
      titleAr: "أمان وثقة",
      titleEn: "Safety & Trust",
      descAr: "عقود موثقة ومعتمدة من مركز الأعمال السعودي",
      descEn: "Certified contracts from Saudi Business Center",
    },
  ];

  const stats = [
    { value: "120%", label: language === "ar" ? "عائد الربح" : "Profit Return", icon: TrendingUp },
    { value: "500+", label: language === "ar" ? "دراجة نارية" : "Motorcycles", icon: Building2 },
    { value: "1000+", label: language === "ar" ? "مستثمر" : "Investors", icon: Users },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.primary}, transparent)` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          data-id="header"
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visibleElements.has("header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
              <Award className="w-4 h-4" style={{ color: colors.secondary }} />
            </div>
            <span 
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "من نحن" : "About Us"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span style={{ color: colors.primary }}>
              {language === "ar" ? "بوابة " : "Portal "}
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              {language === "ar" ? "الخدمات اللوجستية" : "Logistics Services"}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Content */}
          <div 
            data-id="content"
            className={`transition-all duration-700 ${
              visibleElements.has("content") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p 
                className="relative pl-5 border-l-4"
                style={{ borderColor: colors.secondary }}
              >
                {language === "ar"
                  ? "نحن منشأة سعودية متخصصة في الخدمات اللوجستية. تعمل المنشأة على تشغيل شبكة واسعة من دراجات التوصيل لحسابها ولحساب المستثمرين."
                  : "We are a specialized Saudi establishment in logistics services. Operating a wide network of delivery motorcycles for our own account and for investors."}
              </p>
              <p>
                {language === "ar"
                  ? "لدى المنشأة فريق عمل متخصص في الإدارة والقيادة، وسائقين متمرسين في جميع تطبيقات التوصيل داخل المملكة العربية السعودية."
                  : "The establishment has a specialized management team and experienced drivers across all delivery applications within Saudi Arabia."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    data-id={`stat-${index}`}
                    className={`group p-5 rounded-2xl bg-white dark:bg-gray-900 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                      visibleElements.has(`stat-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ 
                      borderColor: `${colors.secondary}20`,
                      transitionDelay: `${400 + index * 100}ms` 
                    }}
                  >
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div 
                      className="text-2xl lg:text-3xl font-bold mb-1"
                      style={{ color: colors.primary }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Features */}
          <div 
            data-id="features"
            className={`transition-all duration-700 ${
              visibleElements.has("features") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    data-id={`feature-${index}`}
                    className={`group p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                      visibleElements.has(`feature-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ 
                      borderColor: isEven ? `${colors.primary}20` : `${colors.secondary}20`,
                      transitionDelay: `${500 + index * 100}ms` 
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: isEven 
                          ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`
                          : `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: colors.primary }}
                    >
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div
            data-id="vision"
            className={`group p-8 lg:p-10 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all duration-700 hover:shadow-2xl ${
              visibleElements.has("vision") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              borderColor: `${colors.primary}20`,
              transitionDelay: "700ms" 
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
              }}
            >
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "رؤيتنا" : "Our Vision"}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === "ar"
                ? "أن نكون الشريك الأول للمستثمرين في مجال الخدمات اللوجستية، ونساهم في تطوير الاقتصاد التشاركي في المملكة العربية السعودية"
                : "To be the first partner for investors in logistics services, contributing to the sharing economy development in Saudi Arabia"}
            </p>
          </div>

          <div
            data-id="mission"
            className={`group p-8 lg:p-10 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all duration-700 hover:shadow-2xl ${
              visibleElements.has("mission") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              borderColor: `${colors.secondary}20`,
              transitionDelay: "800ms" 
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "رسالتنا" : "Our Mission"}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === "ar"
                ? "تقديم خدمات لوجستية عالية الجودة مع توفير فرص استثمارية مربحة وآمنة للمستثمرين في جميع أنحاء المملكة"
                : "Providing high-quality logistics services with profitable and secure investment opportunities for investors throughout the Kingdom"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}