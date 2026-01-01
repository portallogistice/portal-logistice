"use client";

import React, { useEffect, useState } from "react";
import { Bot, Sparkles, MessageSquare, Play, ShieldCheck, Zap, ArrowRight, UserCheck, TrendingUp } from "lucide-react";

// Update this to your dynamic i18n hook if needed
const useLanguage = () => {
  return { lang: 'ar', isRtl: true }; 
};

export function DigitalChatSection() {
  const { lang, isRtl } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Brand colors matching hero section
  const colors = {
    primary: "#003C7F",
    secondary: "#00A8E8",
    accent: "#0080C8",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const openTawkChat = () => {
    if (typeof (window as any).Tawk_API !== "undefined") {
      (window as any).Tawk_API.maximize();
    }
  };

  const content = {
    en: {
      badge: "Powered by GPT-4 & HeyGen",
      title: "Meet Your Digital Investment Advisor",
      titleHighlight: "Digital",
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
      titleHighlight: "الرقمي",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 py-20"
    >
      {/* Optimized Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
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
        className="absolute bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float-delayed"
        style={{ 
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          willChange: 'transform'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Text Content Side */}
          <div 
            className={`text-center lg:text-right transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 shadow-lg border mb-6"
              style={{ 
                borderColor: colors.secondary,
                transitionDelay: "100ms" 
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.secondary }} />
              <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                {t.badge}
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {lang === 'en' ? (
                <>
                  <span style={{ color: colors.primary }}>Meet Your </span>
                  <span 
                    className="bg-clip-text text-transparent bg-gradient-to-r block"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`
                    }}
                  >
                    Digital Investment Advisor
                  </span>
                </>
              ) : (
                <>
                  <span style={{ color: colors.primary }}>تحدث مع مستشارك </span>
                  <span 
                    className="bg-clip-text text-transparent bg-gradient-to-r block"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`
                    }}
                  >
                    الاستثماري الرقمي
                  </span>
                </>
              )}
            </h2>
            
            {/* Description */}
            <p 
              className={`text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {t.desc}
            </p>

            {/* Features */}
            <div 
              className={`space-y-6 mb-10 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <FeatureItem 
                icon={<UserCheck className="w-6 h-6" style={{ color: colors.secondary }} />}
                title={t.feat1Title}
                desc={t.feat1Desc}
                color={colors.secondary}
              />
              <FeatureItem 
                icon={<ShieldCheck className="w-6 h-6" style={{ color: colors.primary }} />}
                title={t.feat2Title}
                desc={t.feat2Desc}
                color={colors.primary}
              />
            </div>

            {/* CTA Section */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <button 
                onClick={openTawkChat}
                className="group relative px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play className={`w-5 h-5 fill-current ${isRtl ? 'rotate-180' : ''}`} />
                  {t.btn}
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`
                  }}
                />
              </button>
              
              <div className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span className="relative flex h-3 w-3">
                  <span 
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: colors.secondary }}
                  />
                  <span 
                    className="relative inline-flex rounded-full h-3 w-3"
                    style={{ backgroundColor: colors.secondary }}
                  />
                </span>
                {t.status}
              </div>
            </div>
          </div>

          {/* Visual Avatar Side */}
          <div 
            className={`relative transition-all duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Decorative Background Circles */}
              <div 
                className="absolute inset-0 rounded-[3rem] opacity-20 blur-2xl animate-pulse"
                style={{ backgroundColor: colors.secondary }}
              />
              <div 
                className="absolute inset-8 rounded-[2.5rem] opacity-10 blur-xl"
                style={{ backgroundColor: colors.primary }}
              />
              
              {/* Main Card */}
              <div className="relative rounded-[3rem] p-2 bg-white dark:bg-gray-900 border shadow-2xl group overflow-hidden h-full"
                style={{ borderColor: colors.secondary }}
              >
                <div className="relative rounded-[2.5rem] overflow-hidden h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  {/* Placeholder for AI Avatar Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="p-16 rounded-full shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                      }}
                    >
                      <Bot className="w-32 h-32 text-white" />
                    </div>
                  </div>
                  
                  {/* Visual Audio Bar Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                    <div className="flex items-end gap-1.5 mb-6 justify-center h-10">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 md:w-1.5 rounded-full"
                          style={{
                            backgroundColor: colors.secondary,
                            height: `${Math.random() * 100}%`,
                            animation: `pulse ${0.5 + Math.random()}s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-2xl mb-1">{t.avatarTitle}</p>
                      <p className="text-xs md:text-sm font-medium tracking-wide" style={{ color: colors.secondary }}>
                        {t.avatarStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glassmorphic Floating Badge */}
              <div 
                className="absolute -top-6 -right-4 md:-right-10 p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border max-w-[200px] hover:scale-105 transition-transform duration-300"
                style={{ borderColor: `${colors.secondary}40` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <Bot className="w-4 h-4" style={{ color: colors.secondary }} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
                    AI Assistant
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                  "{t.floatingBadge}"
                </p>
              </div>

              {/* Floating Stats */}
              <div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border hover:scale-110 transition-transform duration-300"
                style={{ borderColor: colors.primary }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <TrendingUp className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: colors.primary }}>
                      98%
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {lang === 'ar' ? 'دقة' : 'Accuracy'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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

function FeatureItem({ icon, title, desc, color }: { 
  icon: React.ReactNode, 
  title: string, 
  desc: string,
  color: string 
}) {
  return (
    <div className="flex items-start gap-5 group">
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300 shadow-lg"
        style={{ backgroundColor: `${color}15` }}
      >
        {icon}
      </div>
      <div className="text-left rtl:text-right">
        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}