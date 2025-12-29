// src/components/sections/faq.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { useState, useEffect, useRef } from "react";
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    questionAr: "كيف تعمل منصة بوابة الخدمات اللوجستية؟",
    questionEn: "How does the Portal Logistics Services platform work?",
    answerAr: "تعمل منصة بوابة الخدمات اللوجستية كمشغل ومستأجر للدراجات النارية الخاصة بالمستثمرين الراغبين في تحسين دخلهم الإضافي من خلال تأجيرها في مجال التوصيل.",
    answerEn: "The Portal Logistics Services platform operates as an operator and lessor of motorcycles for investors looking to improve their additional income by renting them in the delivery field.",
  },
  {
    questionAr: "ما هي المزايا التي توفرها المنصة للمستثمرين؟",
    questionEn: "What advantages does the platform offer to investors?",
    answerAr: "توفر المنصة للمستثمر إمكانية استئجار الدراجات النارية دون الحاجة إلى تعيين موظفين، الحصول على عائد استثماري ثابت من خلال الإيجار الشهري، والاستفادة من خدمات التسويق المتخصصة.",
    answerEn: "The platform provides investors with the ability to rent motorcycles without needing to hire employees, obtain a stable investment return through monthly rent, and benefit from specialized marketing services.",
  },
  {
    questionAr: "هل عمل المنصة يتوافق مع الشريعة الإسلامية؟",
    questionEn: "Is the platform's work compliant with Islamic Sharia?",
    answerAr: "نعم، المنصة متوافقة مع الشريعة الإسلامية حيث يتم عقد شراكة واضحة بين المنصة والمستثمر، مع عقود موثقة من مركز الأعمال السعودي، وإيجار شهري محدد بدون فوائد ربوية.",
    answerEn: "Yes, the platform is Sharia-compliant as a clear partnership is established between the platform and the investor, with contracts certified by the Saudi Business Center, and a fixed monthly rent without usurious interest.",
  },
  {
    questionAr: "ما هي الإجراءات الحكومية التي تقوم بها المنصة؟",
    questionEn: "What government procedures does the platform handle?",
    answerAr: "تقوم المنصة بجميع الإجراءات الحكومية للدراجة النارية، بما في ذلك رخصة السير، تأمين المركبة، ولوحات المركبة.",
    answerEn: "The platform handles all government procedures for the motorcycle, including driving license, vehicle insurance, and vehicle plates.",
  },
  {
    questionAr: "كيف يمكنني التسجيل في منصة بوابة الخدمات اللوجستية؟",
    questionEn: "How can I register on the Portal Logistics Services platform?",
    answerAr: "يمكنك التسجيل من خلال زيارة الموقع الإلكتروني وملء نموذج التسجيل بالبيانات المطلوبة، وسنقوم بالتواصل معك لاستكمال الإجراءات.",
    answerEn: "You can register by visiting the website and filling out the registration form with the required information, and we will contact you to complete the procedures.",
  },
  {
    questionAr: "ما هي شروط التسجيل كمستثمر؟",
    questionEn: "What are the requirements for registering as an investor?",
    answerAr: "يجب أن يكون المستثمر سعودي الجنسية أو مقيماً في المملكة العربية السعودية، وأن يكون بالغاً سن الرشد.",
    answerEn: "The investor must be a Saudi citizen or a resident in Saudi Arabia, and must be of legal age.",
  },
  {
    questionAr: "كيف يمكنني الحصول على الدعم والتمويل؟",
    questionEn: "How can I get support and financing?",
    answerAr: "توفر المنصة الدعم والتمويل عن طريق تقسيط تابي أو تمارا لرأس المال بشكل كامل أو جزئي لشراء الدراجة النارية.",
    answerEn: "The platform provides support and financing through Tabby or Tamara installments for full or partial capital to purchase the motorcycle.",
  },
  {
    questionAr: "متى يمكنني تصفية الاستثمار؟",
    questionEn: "When can I liquidate the investment?",
    answerAr: "يمكن تصفية الاستثمار في أي وقت بعد الأشهر الثلاثة الأولى بدون رسوم إضافية، مع وعد بشراء الأصل بخصم 35٪ كمعدل إهلاك خلال السنة الأولى.",
    answerEn: "Investment can be liquidated anytime after the first three months without additional fees, with a promise to buy back the asset at a 35% discount as depreciation rate during the first year.",
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-index]");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
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
      id="faq" 
      className="relative py-24 sm:py-28 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-950/40 rounded-full mb-8 shadow-lg backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
            <div className="p-1.5 rounded-full bg-emerald-500/10">
              <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              {language === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {language === "ar"
              ? "إجابات على أكثر الأسئلة شيوعاً حول منصة بوابة الخدمات اللوجستية"
              : "Answers to the most common questions about the Portal Logistics Services platform"}
          </p>
        </div>

        {/* Enhanced FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isVisible = visibleElements.has(index);
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-right rtl:text-right ltr:text-left focus:outline-none group/button relative z-10"
                >
                  <div className="flex items-start gap-4 flex-1 pr-4 rtl:pr-0 rtl:pl-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover/button:scale-110 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover/button:text-emerald-600 dark:group-hover/button:text-emerald-400 transition-colors flex-1">
                      {language === "ar" ? faq.questionAr : faq.questionEn}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover/button:bg-emerald-200 dark:group-hover/button:bg-emerald-900/50 transition-all duration-300 group-hover/button:scale-110">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-transform" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-transform" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-6 relative">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent dark:via-emerald-700" />
                    <div className="mt-4">
                      {language === "ar" ? faq.answerAr : faq.answerEn}
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`} />
              </div>
            );
          })}
        </div>

        {/* Enhanced Contact CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 dark:from-emerald-950/40 dark:via-gray-900 dark:to-emerald-950/20 border-2 border-emerald-200/50 dark:border-emerald-900/50 shadow-2xl backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {language === "ar" ? "لديك سؤال آخر؟" : "Have another question?"}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {language === "ar" 
                  ? "نحن هنا لمساعدتك في أي استفسار"
                  : "We're here to help with any inquiry"}
              </p>
            </div>
            <Link
              href="#register"
              onClick={handleScrollClick}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>{language === "ar" ? "تواصل معنا" : "Contact Us"}</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}