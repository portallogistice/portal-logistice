// src/components/sections/faq.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { useState, useEffect, useRef } from "react";
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// Brand colors from logo
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

const faqs = [
  {
    questionAr: "كيف تعمل منصة بوابة الخدمات اللوجستية؟",
    questionEn: "How does the platform work?",
    answerAr: "تعمل منصة بوابة الخدمات اللوجستية كمشغل ومستأجر للدراجات النارية الخاصة بالمستثمرين الراغبين في تحسين دخلهم الإضافي من خلال تأجيرها في مجال التوصيل.",
    answerEn: "The platform operates as an operator and lessor of motorcycles for investors looking to improve their income through rental in the delivery field.",
  },
  {
    questionAr: "ما هي المزايا التي توفرها المنصة للمستثمرين؟",
    questionEn: "What advantages does the platform offer?",
    answerAr: "توفر المنصة للمستثمر إمكانية استئجار الدراجات النارية دون الحاجة إلى تعيين موظفين، الحصول على عائد استثماري ثابت من خلال الإيجار الشهري، والاستفادة من خدمات التسويق المتخصصة.",
    answerEn: "The platform provides motorcycle rental without hiring employees, stable monthly returns, and specialized marketing services.",
  },
  {
    questionAr: "هل عمل المنصة يتوافق مع الشريعة الإسلامية؟",
    questionEn: "Is the platform Sharia-compliant?",
    answerAr: "نعم، المنصة متوافقة مع الشريعة الإسلامية حيث يتم عقد شراكة واضحة بين المنصة والمستثمر، مع عقود موثقة من مركز الأعمال السعودي، وإيجار شهري محدد بدون فوائد ربوية.",
    answerEn: "Yes, the platform is Sharia-compliant with clear partnerships, certified contracts, and fixed monthly rent without interest.",
  },
  {
    questionAr: "ما هي الإجراءات الحكومية التي تقوم بها المنصة؟",
    questionEn: "What government procedures are handled?",
    answerAr: "تقوم المنصة بجميع الإجراءات الحكومية للدراجة النارية، بما في ذلك رخصة السير، تأمين المركبة، ولوحات المركبة.",
    answerEn: "The platform handles all procedures including driving license, vehicle insurance, and vehicle plates.",
  },
  {
    questionAr: "كيف يمكنني التسجيل في منصة بوابة الخدمات اللوجستية؟",
    questionEn: "How can I register on the platform?",
    answerAr: "يمكنك التسجيل من خلال زيارة الموقع الإلكتروني وملء نموذج التسجيل بالبيانات المطلوبة، وسنقوم بالتواصل معك لاستكمال الإجراءات.",
    answerEn: "Register by filling out the form on the website, and we will contact you to complete the procedures.",
  },
  {
    questionAr: "متى يمكنني تصفية الاستثمار؟",
    questionEn: "When can I liquidate the investment?",
    answerAr: "يمكن تصفية الاستثمار في أي وقت بعد الأشهر الثلاثة الأولى بدون رسوم إضافية، مع وعد بشراء الأصل بخصم 35٪ كمعدل إهلاك خلال السنة الأولى.",
    answerEn: "Liquidation is possible after 3 months without fees, with asset buyback at 35% depreciation during the first year.",
  },
];

export function FAQSection() {
  const { language } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const faqIndex = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleElements((prev) => new Set([...prev, faqIndex]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px" }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-index]");
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 64;
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
              <HelpCircle className="w-4 h-4" style={{ color: colors.secondary }} />
            </div>
            <span 
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span style={{ color: colors.primary }}>
              {language === "ar" ? "الأسئلة " : "Frequently "}
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              {language === "ar" ? "الشائعة" : "Asked Questions"}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar"
              ? "إجابات على أكثر الأسئلة شيوعاً حول منصة بوابة الخدمات اللوجستية"
              : "Answers to common questions about Portal Logistics Services"}
          </p>
        </div>

        {/* FAQ Accordion - Optimized */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isVisible = visibleElements.has(index);
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`relative bg-white dark:bg-gray-900 rounded-2xl border-2 transition-all duration-700 hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  borderColor: isOpen ? colors.secondary : "#e5e7eb",
                  transitionDelay: `${index * 80}ms`,
                  willChange: isVisible ? 'auto' : 'transform, opacity',
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-right rtl:text-right ltr:text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4 flex-1 pr-4 rtl:pr-0 rtl:pl-4">
                    <div 
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span 
                      className={`text-lg font-bold flex-1 leading-tight transition-colors ${
                        isOpen ? "" : "text-gray-900 dark:text-gray-100"
                      }`}
                      style={isOpen ? { color: colors.primary } : undefined}
                    >
                      {language === "ar" ? faq.questionAr : faq.questionEn}
                    </span>
                  </div>
                  
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? `${colors.secondary}20` : "#f3f4f6",
                    }}
                  >
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: isOpen ? colors.secondary : "#6b7280" }}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div 
                    className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400 leading-relaxed border-t"
                    style={{ borderColor: `${colors.secondary}20` }}
                  >
                    {language === "ar" ? faq.answerAr : faq.answerEn}
                  </div>
                </div>
                
                {/* Bottom Accent */}
                {isOpen && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="max-w-md mx-auto text-center">
          <div 
            className="p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 shadow-xl"
            style={{ borderColor: `${colors.secondary}20` }}
          >
            <div 
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "لديك سؤال آخر؟" : "Have another question?"}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {language === "ar" 
                ? "نحن هنا لمساعدتك في أي استفسار"
                : "We're here to help with any inquiry"}
            </p>
            
            <Link
              href="#register"
              onClick={handleScrollClick}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              }}
            >
              <span>{language === "ar" ? "تواصل معنا" : "Contact Us"}</span>
              <ArrowRight className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}