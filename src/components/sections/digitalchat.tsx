// src/components/sections/ai-digital-section.tsx
"use client";

import React from "react";
import { Bot, Sparkles, MessageSquare, Play, ShieldCheck, Zap, ArrowRight, UserCheck } from "lucide-react";

// Update this to your dynamic i18n hook if needed
const useLanguage = () => {
  // Logic to detect 'ar' or 'en'
  return { lang: 'ar', isRtl: true }; 
};

export function DigitalChatSection() {
  const { lang, isRtl } = useLanguage();

  const openTawkChat = () => {
    if (typeof (window as any).Tawk_API !== "undefined") {
      (window as any).Tawk_API.maximize();
    }
  };

  const content = {
    en: {
      badge: "Powered by GPT-4 & HeyGen",
      title: "Meet Your Digital Investment Advisor",
      desc: "Experience the future of consulting. Our AI-driven Digital Human identifies your entity type and guides you through the logistics requirements in real-time.",
      feat1Title: "Instant Identification",
      feat1Desc: "Separates Individual Investors from Corporate Entities automatically.",
      feat2Title: "RAG-Verified Knowledge",
      feat2Desc: "Accurate answers based strictly on official commercial and administrative terms.",
      btn: "Start Interactive Session",
      status: "Available 24/7",
      avatarTitle: "Digital Human AI",
      avatarStatus: "Waiting for your first question...",
      floatingBadge: "I can explain the 10-bike requirement for corporations."
    },
    ar: {
      badge: "مدعوم بتقنيات GPT-4 و HeyGen",
      title: "تحدث مع مستشارك الاستثماري الرقمي",
      desc: "اختبر مستقبل الاستشارات اللوجستية. يقوم مستشارنا الرقمي المدعوم بالذكاء الاصطناعي بتحديد نوع هويتك وشرح المتطلبات بدقة وبشكل تفاعلي.",
      feat1Title: "تحديد الهوية الفوري",
      feat1Desc: "التمييز التلقائي بين المستثمر الفرد والمنشآت التجارية.",
      feat2Title: "معرفة موثقة (RAG)",
      feat2Desc: "إجابات دقيقة مبنية بالكامل على الشروط الإدارية والتجارية الرسمية.",
      btn: "بدء الجلسة التفاعلية",
      status: "متوفر 24/7",
      avatarTitle: "الإنسان الرقمي AI",
      avatarStatus: "بانتظار سؤالك الأول...",
      floatingBadge: "يمكنني شرح شرط الـ 10 دراجات للمنشآت."
    }
  };

  const t = lang === 'ar' ? content.ar : content.en;

  return (
    <section 
      id="digital-chat" 
      dir={isRtl ? "rtl" : "ltr"}
      className="relative py-20 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden"
    >
      {/* High-Performance Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5134]/10 dark:bg-[#1A5134]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Side */}
          <div 
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A5134]/5 dark:bg-[#1A5134]/20 rounded-full mb-8 border border-[#1A5134]/10 dark:border-[#1A5134]/30">
              <Sparkles className="w-4 h-4 text-[#1A5134] dark:text-emerald-400" />
              <span className="text-[10px] md:text-xs font-bold text-[#1A5134] dark:text-emerald-400 uppercase tracking-widest">
                {t.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1]">
              {t.title.split('Investment').map((part, i) => i === 1 ? <span key={i} className="text-[#1A5134] dark:text-emerald-500">Investment</span> : part)}
              {/* For Arabic logic fallback */}
              {lang === 'ar' && t.title.split('الرقمي').map((part, i) => i === 1 ? <span key={i} className="text-[#1A5134] dark:text-emerald-500">الرقمي</span> : part)}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
              {t.desc}
            </p>

            <div className="space-y-8 w-full">
              <FeatureItem 
                icon={<UserCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                title={t.feat1Title}
                desc={t.feat1Desc}
                bg="bg-indigo-50 dark:bg-indigo-950/30"
              />
              <FeatureItem 
                icon={<ShieldCheck className="w-6 h-6 text-[#1A5134] dark:text-emerald-400" />}
                title={t.feat2Title}
                desc={t.feat2Desc}
                bg="bg-emerald-50 dark:bg-emerald-950/30"
              />
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button 
                onClick={openTawkChat}
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#1A5134] hover:bg-[#143d27] text-white font-bold rounded-2xl shadow-xl shadow-emerald-900/20 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <Play className={`w-5 h-5 fill-current ${isRtl ? 'rotate-180' : ''}`} />
                {t.btn}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
              
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                {t.status}
              </div>
            </div>
          </div>

          {/* Visual Avatar Side */}
          <div 
            className="relative"
          >
            <div className="relative rounded-[3rem] p-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-2xl group overflow-hidden">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                <img 
                  src="" 
                  alt="AI Advisor" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Audio Bar Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-end gap-1.5 mb-6 justify-center h-10">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 md:w-1.5 bg-emerald-500 rounded-full opacity-80 animate-ping"
                      >
                        <div className="w-1 md:w-1.5 bg-emerald-500 rounded-full opacity-80 animate-ping" />
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl mb-1">{t.avatarTitle}</p>
                    <p className="text-emerald-400/80 text-xs md:text-sm font-medium tracking-wide">
                      {t.avatarStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glassmorphic Floating Badge */}
            <div 
              className="absolute -top-6 -right-4 md:-right-10 p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl">
                  <Bot className="w-4 h-4 text-[#1A5134] dark:text-emerald-400" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter dark:text-white">AI Assistant</span>
              </div>
              <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                "{t.floatingBadge}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc, bg }: { icon: React.ReactNode, title: string, desc: string, bg: string }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">{desc}</p>
      </div>
    </div>
  );
}