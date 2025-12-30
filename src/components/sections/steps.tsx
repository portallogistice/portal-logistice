// src/components/sections/steps.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Lightbulb, MessageCircle, ShoppingCart, FileCheck, Play, TrendingDown, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Brand colors from logo
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

const steps = [
  {
    id: 1,
    icon: Lightbulb,
    titleAr: "الفكرة",
    titleEn: "The Idea",
    descAr: "فكرة المشروع الاستثماري هي شراء دراجة نارية وتشغيلها في مجال الخدمات اللوجستية لتسليم الطلبات بهدف تحقيق عائد ربح يتجاوز 120٪",
    descEn: "Investment project to purchase and operate motorcycles in logistics services, achieving profit returns exceeding 120%",
  },
  {
    id: 2,
    icon: MessageCircle,
    titleAr: "التواصل",
    titleEn: "Contact",
    descAr: "نحن متحمسون للتواصل معك ومناقشة الفرص الاستثمارية والإجابة على جميع استفساراتك وتوضيح المزيد من التفاصيل",
    descEn: "Connect with you, discuss investment opportunities, answer questions, and clarify details",
  },
  {
    id: 3,
    icon: ShoppingCart,
    titleAr: "شراء الأصل",
    titleEn: "Asset Purchase",
    descAr: "نوفر شراء الأصل نقداً أو بالتقسيط عبر تابي وتمارا، ونكمل جميع الإجراءات الحكومية والتأمين واستخراج الوثائق",
    descEn: "Asset purchase in cash or installments via Tabby/Tamara, complete government procedures and insurance",
  },
  {
    id: 4,
    icon: FileCheck,
    titleAr: "العقود والضمانات",
    titleEn: "Contracts & Guarantees",
    descAr: "عقود وضمانات موثقة من مركز الأعمال السعودي تعكس الاحتراف والمصداقية، مع تحديد التزامات وحقوق كل طرف",
    descEn: "Certified contracts from Saudi Business Center, defining obligations and rights of each party",
  },
  {
    id: 5,
    icon: Play,
    titleAr: "التشغيل",
    titleEn: "Operation",
    descAr: "شركة متخصصة في الخدمات اللوجستية مع خبرة واسعة ونظام متقدم لتتبع وإدارة الدراجات النارية",
    descEn: "Specialized logistics company with advanced tracking and management system",
  },
  {
    id: 6,
    icon: TrendingDown,
    titleAr: "التصفية",
    titleEn: "Liquidation",
    descAr: "إمكانية تصفية الاستثمار بعد 3 أشهر بدون رسوم إضافية، مع وعد بشراء الأصل بخصم 35٪ كمعدل إهلاك",
    descEn: "Liquidate investment after 3 months without fees, asset buyback at 35% depreciation",
  },
];

export function StepsSection() {
  const { language } = useI18n();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.15, rootMargin: "0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
      id="steps" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950"
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: `radial-gradient(circle, ${colors.secondary}, transparent)`,
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
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
              <CheckCircle className="w-4 h-4" style={{ color: colors.secondary }} />
            </div>
            <span 
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "كيف يعمل" : "How It Works"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span style={{ color: colors.primary }}>
              {language === "ar" ? "خطوات شراء الأصل " : "Asset Purchase "}
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              {language === "ar" ? "وتشغيله" : "& Operation"}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar" 
              ? "ستة خطوات بسيطة للبدء في استثمارك وتحقيق دخل شهري ثابت"
              : "Six simple steps to start your investment and achieve stable monthly income"}
          </p>
        </div>

        {/* Steps Grid - Optimized */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleCards.has(index);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.id}
                data-index={index}
                className={`relative group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${index * 80}ms`,
                  willChange: isVisible ? 'auto' : 'transform, opacity',
                }}
              >
                <div 
                  className="h-full relative p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    borderColor: isEven ? `${colors.primary}20` : `${colors.secondary}20`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Step Number */}
                    <div 
                      className="relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: isEven 
                          ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`
                          : `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
                      }}
                    >
                      {step.id}
                    </div>
                    
                    {/* Icon */}
                    <div 
                      className="p-2.5 rounded-lg transition-colors"
                      style={{
                        backgroundColor: isEven ? `${colors.primary}10` : `${colors.secondary}10`,
                      }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: isEven ? colors.primary : colors.secondary }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-xl font-bold mb-3 transition-colors"
                    style={{ color: colors.primary }}
                  >
                    {language === "ar" ? step.titleAr : step.titleEn}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {language === "ar" ? step.descAr : step.descEn}
                  </p>

                  {/* Accent Line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: isEven 
                        ? `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                        : `linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                    }}
                  />
                </div>

                {/* Connection Arrow */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 rtl:-left-4 rtl:right-auto z-20">
                    <ArrowRight 
                      className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`}
                      style={{ color: `${colors.secondary}40` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#register"
            onClick={handleScrollClick}
            className="group inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            }}
          >
            <span>{language === "ar" ? "ابدأ الآن" : "Start Now"}</span>
            <ArrowRight 
              className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${language === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}