// src/components/sections/faq.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar"
              ? "إجابات على أكثر الأسئلة شيوعاً حول منصة بوابة الخدمات اللوجستية"
              : "Answers to the most common questions about the Portal Logistics Services platform"}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-right rtl:text-right ltr:text-left focus:outline-none group"
              >
                <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-1 pr-4 rtl:pr-0 rtl:pl-4">
                  {language === "ar" ? faq.questionAr : faq.questionEn}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                  {language === "ar" ? faq.answerAr : faq.answerEn}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {language === "ar" ? "لديك سؤال آخر؟" : "Have another question?"}
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span>{language === "ar" ? "تواصل معنا" : "Contact Us"}</span>
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}