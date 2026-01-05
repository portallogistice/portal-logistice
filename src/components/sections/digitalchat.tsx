// src/components/sections/digitalchat.tsx
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Bot, Sparkles, Play, ShieldCheck, ArrowRight, UserCheck, TrendingUp } from "lucide-react";

const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

const styles = `
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
    will-change: transform;
  }
  
  .animate-float-delayed {
    animation: float-delayed 10s ease-in-out infinite;
    animation-delay: 1s;
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-float, .animate-float-delayed {
      animation: none;
    }
  }
`;

interface DigitalChatSectionProps {
  language?: "ar" | "en";
}

export function DigitalChatSection({ language = "ar" }: DigitalChatSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const isRtl = language === "ar";

  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for video autoplay
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    
    if (!video || !section || !mounted) return;

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVideoInView(entry.isIntersecting);
          
          if (entry.isIntersecting) {
            // Section is visible - attempt to play video
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                // Autoplay was prevented - this is normal on some browsers
                console.log("Video autoplay prevented:", error.message);
                // Video will show play button overlay instead
              });
            }
          } else {
            // Section is not visible - pause video
            video.pause();
          }
        });
      },
      {
        threshold: 0.25, // Trigger when 25% of section is visible
        rootMargin: '0px'
      }
    );

    observerRef.current.observe(section);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [mounted]);

  // Handle video errors
  const handleVideoError = useCallback(() => {
    console.error("Video failed to load");
    setVideoError(true);
  }, []);

  // Handle video loaded
  const handleVideoLoaded = useCallback(() => {
    setVideoError(false);
  }, []);

  // Open chat function
  const openTawkChat = useCallback(() => {
    if (typeof window !== 'undefined' && typeof (window as any).Tawk_API !== "undefined") {
      (window as any).Tawk_API.maximize();
    } else {
      console.log("Tawk chat not available");
    }
  }, []);

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
      floatingBadge: "I can explain the 10-bike requirement for corporations.",
      accuracy: "Accuracy"
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
      floatingBadge: "يمكنني شرح شرط الـ 10 دراجات للمنشآت.",
      accuracy: "دقة"
    }
  };

  const t = content[language];

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <style>{styles}</style>
      <section 
        ref={sectionRef}
        id="digital-chat" 
        dir={isRtl ? "rtl" : "ltr"}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 py-20"
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${colors.secondary} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />
        
        {/* Animated Gradients - Only on large screens for performance */}
        <div 
          className="hidden lg:block absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
          style={{ 
            background: `radial-gradient(circle, ${colors.secondary}, transparent)`,
          }}
          aria-hidden="true"
        />
        <div 
          className="hidden lg:block absolute bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float-delayed"
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Text Content Side */}
            <div className="text-center lg:text-right space-y-6">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 shadow-lg border"
                style={{ borderColor: colors.secondary }}
              >
                <Sparkles className="w-4 h-4" style={{ color: colors.secondary }} aria-hidden="true" />
                <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                  {t.badge}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {language === 'en' ? (
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
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.desc}
              </p>

              {/* Features */}
              <div className="space-y-6">
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
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 pt-4">
                <button 
                  onClick={openTawkChat}
                  className="group relative px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                  }}
                  aria-label={t.btn}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Play className={`w-5 h-5 fill-current ${isRtl ? 'rotate-180' : ''}`} aria-hidden="true" />
                    {t.btn}
                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} aria-hidden="true" />
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
                      aria-hidden="true"
                    />
                    <span 
                      className="relative inline-flex rounded-full h-3 w-3"
                      style={{ backgroundColor: colors.secondary }}
                      aria-hidden="true"
                    />
                  </span>
                  {t.status}
                </div>
              </div>
            </div>

            {/* Visual Avatar Side */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-lg mx-auto">
                {/* Decorative Background Circles - Only on desktop for performance */}
                <div 
                  className="hidden lg:block absolute inset-0 rounded-[3rem] opacity-20 blur-2xl animate-pulse"
                  style={{ backgroundColor: colors.secondary }}
                  aria-hidden="true"
                />
                <div 
                  className="hidden lg:block absolute inset-8 rounded-[2.5rem] opacity-10 blur-xl"
                  style={{ backgroundColor: colors.primary }}
                  aria-hidden="true"
                />
                
                {/* Main Card */}
                <div 
                  className="relative rounded-[3rem] p-2 bg-white dark:bg-gray-900 border shadow-2xl group overflow-hidden h-full cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  style={{ borderColor: colors.secondary }}
                  onClick={openTawkChat}
                  role="button"
                  tabIndex={0}
                  aria-label={language === "ar" ? "فتح المحادثة" : "Open chat"}
                  onKeyPress={(e) => e.key === 'Enter' && openTawkChat()}
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    {/* Video Container */}
                    {!videoError ? (
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover object-top"
                        loop
                        playsInline
                        preload="metadata"
                        onError={handleVideoError}
                        onLoadedData={handleVideoLoaded}
                        aria-label={language === "ar" ? "فيديو المستشار الرقمي" : "Digital advisor video"}
                      >
                        <source src="/videos/introduction.mp4" type="video/mp4" />
                      </video>
                    ) : (
                      // Fallback UI if video fails
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-8">
                          <Bot className="w-20 h-20 mx-auto mb-4" style={{ color: colors.secondary }} />
                          <p className="text-gray-600 dark:text-gray-400 font-semibold">
                            {language === "ar" ? "المستشار الرقمي" : "Digital Advisor"}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
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
                      <Bot className="w-4 h-4" style={{ color: colors.secondary }} aria-hidden="true" />
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
                      <TrendingUp className="w-6 h-6" style={{ color: colors.primary }} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: colors.primary }}>
                        98%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {t.accuracy}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function FeatureItem({ 
  icon, 
  title, 
  desc, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  desc: string;
  color: string;
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