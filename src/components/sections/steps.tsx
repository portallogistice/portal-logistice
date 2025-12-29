// src/components/sections/steps.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Lightbulb, MessageCircle, ShoppingCart, FileCheck, Play, TrendingDown, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const steps = [
  {
    id: 1,
    icon: Lightbulb,
    titleAr: "الفكرة",
    titleEn: "The Idea",
    descAr: "فكرة المشروع الاستثماري هي شراء دراجة نارية وتشغيلها في مجال الخدمات اللوجستية لتسليم الطلبات بهدف تحقيق عائد ربح يتجاوز 120٪",
    descEn: "The investment project idea is to buy a motorcycle and operate it in logistics services for order delivery, aiming to achieve a profit return exceeding 120%",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-900/50",
  },
  {
    id: 2,
    icon: MessageCircle,
    titleAr: "التواصل",
    titleEn: "Contact",
    descAr: "نحن متحمسون للتواصل معك ومناقشة الفرص الاستثمارية والإجابة على جميع استفساراتك وتوضيح المزيد من التفاصيل",
    descEn: "We're excited to connect with you, discuss investment opportunities, answer all your questions, and clarify more details",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-900/50",
  },
  {
    id: 3,
    icon: ShoppingCart,
    titleAr: "شراء الأصل",
    titleEn: "Asset Purchase",
    descAr: "نوفر شراء الأصل نقداً أو بالتقسيط عبر تابي وتمارا، ونكمل جميع الإجراءات الحكومية والتأمين واستخراج الوثائق",
    descEn: "We provide asset purchase in cash or installments via Tabby and Tamara, and complete all government procedures, insurance, and document extraction",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-900/50",
  },
  {
    id: 4,
    icon: FileCheck,
    titleAr: "العقود والضمانات",
    titleEn: "Contracts & Guarantees",
    descAr: "عقود وضمانات موثقة من مركز الأعمال السعودي تعكس الاحتراف والمصداقية، مع تحديد التزامات وحقوق كل طرف",
    descEn: "Contracts and guarantees certified by the Saudi Business Center reflecting professionalism and credibility, defining obligations and rights of each party",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    borderColor: "border-amber-200 dark:border-amber-900/50",
  },
  {
    id: 5,
    icon: Play,
    titleAr: "التشغيل",
    titleEn: "Operation",
    descAr: "شركة متخصصة في الخدمات اللوجستية مع خبرة واسعة ونظام متقدم لتتبع وإدارة الدراجات النارية",
    descEn: "Specialized logistics company with extensive experience and advanced system for tracking and managing motorcycles",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-900/50",
  },
  {
    id: 6,
    icon: TrendingDown,
    titleAr: "التصفية",
    titleEn: "Liquidation",
    descAr: "إمكانية تصفية الاستثمار بعد 3 أشهر بدون رسوم إضافية، مع وعد بشراء الأصل بخصم 35٪ كمعدل إهلاك",
    descEn: "Ability to liquidate investment after 3 months without additional fees, with a promise to buy back the asset at 35% discount as depreciation rate",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    borderColor: "border-teal-200 dark:border-teal-900/50",
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
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
      className="relative py-24 sm:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-950/40 rounded-full mb-8 shadow-lg backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
            <div className="p-1.5 rounded-full bg-emerald-500/10">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              {language === "ar" ? "كيف يعمل" : "How It Works"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              {language === "ar" ? "خطوات شراء الأصل وتشغيله" : "Asset Purchase and Operation Steps"}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {language === "ar" 
              ? "ستة خطوات بسيطة للبدء في استثمارك وتحقيق دخل شهري ثابت"
              : "Six simple steps to start your investment and achieve stable monthly income"}
          </p>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <div
                key={step.id}
                data-index={index}
                className={`relative group transition-all duration-1000 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Enhanced Card with Glassmorphism */}
                <div className={`h-full relative p-8 rounded-3xl ${step.bgColor} backdrop-blur-sm border-2 ${step.borderColor} hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] overflow-hidden`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Step Number Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <span className="relative z-10">{step.id}</span>
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                      </div>
                      <div className="p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                      </div>
                    </div>
                    {/* Arrow indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className={`w-5 h-5 text-emerald-600 dark:text-emerald-400 ${language === "ar" ? "rotate-180" : ""}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {language === "ar" ? step.titleAr : step.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {language === "ar" ? step.descAr : step.descEn}
                  </p>

                  {/* Enhanced Decorative Element */}
                  <div className={`absolute -top-10 -right-10 rtl:right-auto rtl:-left-10 w-32 h-32 bg-gradient-to-br ${step.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
                </div>

                {/* Enhanced Connection Arrow (for desktop) */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 rtl:-right-auto rtl:-left-4 z-20">
                    <div className="relative">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-transparent dark:from-emerald-600 dark:via-emerald-500" />
                      <ArrowRight className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500 dark:text-emerald-400 ${language === "ar" ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link
            href="#register"
            onClick={handleScrollClick}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>{language === "ar" ? "ابدأ الآن" : "Start Now"}</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}