// src/components/sections/about.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Building2, Users, TrendingUp, Shield, Award, Target, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-id]");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const features = [
    {
      icon: Building2,
      titleAr: "منشأة سعودية متخصصة",
      titleEn: "Specialized Saudi Establishment",
      descAr: "متخصصون في الخدمات اللوجستية مع شبكة واسعة من دراجات التوصيل",
      descEn: "Specialized in logistics services with a wide network of delivery motorcycles",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      titleAr: "فريق محترف",
      titleEn: "Professional Team",
      descAr: "فريق عمل متخصص في الإدارة والقيادة مع سائقين متمرسين",
      descEn: "Specialized management team with experienced drivers",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      titleAr: "نمو سريع",
      titleEn: "Rapid Growth",
      descAr: "الشراكة مع المستثمرين داعم قوي لتطورنا وتوسعنا السريع",
      descEn: "Partnership with investors is a strong supporter of our rapid development and expansion",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      titleAr: "أمان وثقة",
      titleEn: "Safety & Trust",
      descAr: "عقود موثقة ومعتمدة من مركز الأعمال السعودي",
      descEn: "Certified contracts approved by Saudi Business Center",
      gradient: "from-amber-500 to-amber-600",
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
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950 overflow-hidden"
    >
      {/* Background decorative elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 hidden sm:block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div 
          data-id="header"
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            visibleElements.has("header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-950/40 rounded-full mb-6 sm:mb-8 shadow-lg backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
            <div className="p-1 sm:p-1.5 rounded-full bg-emerald-500/10">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              {language === "ar" ? "من نحن" : "About Us"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              {language === "ar" ? "بوابة التسهيل للخدمات اللوجستية" : "Portal Logistics Services"}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          {/* Left Content - Enhanced */}
          <div 
            data-id="content"
            className={`transition-all duration-1000 ${
              visibleElements.has("content") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="relative pl-4 sm:pl-6 border-l-4 border-emerald-500 dark:border-emerald-400">
                {language === "ar"
                  ? "نحن منشأة سعودية متخصصة في الخدمات اللوجستية. تعمل المنشأة على تشغيل شبكة واسعة من دراجات التوصيل لحسابها ولحساب المستثمرين."
                  : "We are a specialized Saudi establishment in logistics services. The establishment operates a wide network of delivery motorcycles for its own account and for investors."}
              </p>
              <p>
                {language === "ar"
                  ? "لدى المنشأة فريق عمل متخصص في الإدارة والقيادة، وسائقين متمرسين في جميع تطبيقات التوصيل داخل المملكة العربية السعودية."
                  : "The establishment has a specialized management team and experienced drivers in all delivery applications within the Kingdom of Saudi Arabia."}
              </p>
              <p>
                {language === "ar"
                  ? "تؤمن شركتنا بأن سوق الخدمات اللوجستية سوق كبير ويتسع للجميع. لذلك، تسخر الشركة مجهوداتها للعمل لحسابها الخاص والاستثمار للآخرين."
                  : "Our company believes that the logistics services market is large and accommodates everyone. Therefore, the company dedicates its efforts to work for its own account and invest for others."}
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-8 sm:mt-10 md:mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    data-id={`stat-${index}`}
                    className={`group relative p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-2 border-gray-200/50 dark:border-gray-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl active:scale-95 transition-all duration-500 hover:-translate-y-2 text-center transition-all duration-1000 ${
                      visibleElements.has(`stat-${index}`) 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 mb-2 sm:mb-3 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2 leading-tight group-hover:scale-110 transition-transform">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 leading-tight px-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Enhanced Features Grid */}
          <div 
            data-id="features"
            className={`transition-all duration-1000 ${
              visibleElements.has("features") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    data-id={`feature-${index}`}
                    className={`group relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-2 border-gray-200/50 dark:border-gray-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 active:scale-[0.98] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden transition-all duration-1000 ${
                      visibleElements.has(`feature-${index}`) 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                        <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {language === "ar" ? feature.titleAr : feature.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {language === "ar" ? feature.descAr : feature.descEn}
                      </p>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl sm:rounded-b-3xl`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div
            data-id="vision"
            className={`group relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 dark:from-emerald-950/40 dark:via-gray-900 dark:to-emerald-950/20 border-2 border-emerald-200/50 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-2xl active:scale-[0.98] transition-all duration-500 hover:-translate-y-2 overflow-hidden transition-all duration-1000 ${
              visibleElements.has("vision") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity hidden sm:block" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-2.5xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {language === "ar" ? "رؤيتنا" : "Our Vision"}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {language === "ar"
                  ? "أن نكون الشريك الأول للمستثمرين في مجال الخدمات اللوجستية، ونساهم في تطوير الاقتصاد التشاركي في المملكة العربية السعودية"
                  : "To be the first partner for investors in the field of logistics services, and contribute to the development of the sharing economy in Saudi Arabia"}
              </p>
            </div>
          </div>

          <div
            data-id="mission"
            className={`group relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-blue-950/40 dark:via-gray-900 dark:to-blue-950/20 border-2 border-blue-200/50 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-2xl active:scale-[0.98] transition-all duration-500 hover:-translate-y-2 overflow-hidden transition-all duration-1000 ${
              visibleElements.has("mission") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity hidden sm:block" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-2.5xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {language === "ar" ? "رسالتنا" : "Our Mission"}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {language === "ar"
                  ? "تقديم خدمات لوجستية عالية الجودة مع توفير فرص استثمارية مربحة وآمنة للمستثمرين في جميع أنحاء المملكة"
                  : "Providing high-quality logistics services while offering profitable and secure investment opportunities for investors throughout the Kingdom"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}