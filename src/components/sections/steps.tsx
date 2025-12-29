// src/components/sections/steps.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Lightbulb, MessageCircle, ShoppingCart, FileCheck, Play, TrendingDown, CheckCircle } from "lucide-react";

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
  },
];

export function StepsSection() {
  const { language } = useI18n();

  return (
    <section id="steps" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {language === "ar" ? "كيف يعمل" : "How It Works"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "ar" ? "خطوات شراء الأصل وتشغيله" : "Asset Purchase and Operation Steps"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar" 
              ? "ستة خطوات بسيطة للبدء في استثمارك وتحقيق دخل شهري ثابت"
              : "Six simple steps to start your investment and achieve stable monthly income"}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className={`h-full p-6 rounded-2xl ${step.bgColor} border-2 border-transparent hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                  {/* Step Number */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {step.id}
                    </div>
                    <div className="flex-shrink-0">
                      <Icon className={`w-10 h-10 text-gray-700 dark:text-gray-300`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {language === "ar" ? step.titleAr : step.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {language === "ar" ? step.descAr : step.descEn}
                  </p>

                  {/* Decorative Element */}
                  <div className={`absolute top-4 right-4 rtl:right-auto rtl:left-4 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Connection Line (except for last item in row) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 rtl:-right-auto rtl:-left-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-transparent dark:from-emerald-700" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span>{language === "ar" ? "ابدأ الآن" : "Start Now"}</span>
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}