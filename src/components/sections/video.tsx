// src/components/sections/video.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { useState, useRef, useEffect, useCallback } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const styles = `
  @keyframes fadeIn { 
    from { opacity: 0; } 
    to { opacity: 1; } 
  }
  
  @keyframes slideUp { 
    from { opacity: 0; transform: translateY(20px); } 
    to { opacity: 1; transform: translateY(0); } 
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
  .animate-slideUp { animation: slideUp 0.4s ease-out forwards; }
  .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
  
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  .video-card-hover {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
    will-change: transform;
  }
  
  .video-card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }

  .gradient-bg {
    background: linear-gradient(135deg, rgba(0, 60, 127, 0.03) 0%, rgba(0, 168, 232, 0.03) 100%);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

const videosData = [
  {
    id: 1,
    titleAr: "نظرة عامة على الاستثمار",
    titleEn: "Investment Overview",
    descAr: "شرح شامل لنظام الاستثمار وكيفية تحقيق عائد 120%+",
    descEn: "Comprehensive explanation of investment system and 120%+ returns",
    videoUrl: "/videos/video.mp4",
    duration: "3:45",
  },
  {
    id: 2,
    titleAr: "خطوات البدء",
    titleEn: "Getting Started",
    descAr: "دليل خطوة بخطوة للبدء في استثمارك",
    descEn: "Step-by-step guide to start your investment",
    videoUrl: "/videos/video-1.mp4",
    duration: "2:30",
  }
];

export function VideoSection() {
  const { language } = useI18n();
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);
  const [isMobileFullscreen, setIsMobileFullscreen] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Handle video selection with smooth scroll
  const handleVideoSelect = useCallback((video: typeof videosData[0]) => {
    setSelectedVideo(video);
    setIsVideoReady(false);
    
    if (window.innerWidth < 768) {
      setIsMobileFullscreen(true);
    } else {
      // Smooth scroll to video on desktop
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isMobileFullscreen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileFullscreen]);

  // Handle video loaded
  const handleVideoLoaded = useCallback(() => {
    setIsVideoReady(true);
  }, []);

  // Handle main video click
  const handleMainVideoClick = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsMobileFullscreen(true);
    } else if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => console.log('Play prevented:', err));
      } else {
        videoRef.current.pause();
      }
    }
  }, []);

  // Navigation between videos
  const navigateVideo = useCallback((direction: "prev" | "next") => {
    const currentIndex = videosData.findIndex(v => v.id === selectedVideo.id);
    const newIndex = direction === "next"
      ? (currentIndex + 1) % videosData.length
      : (currentIndex - 1 + videosData.length) % videosData.length;
    handleVideoSelect(videosData[newIndex]);
  }, [selectedVideo.id, handleVideoSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isMobileFullscreen) {
        if (e.key === 'Escape') {
          setIsMobileFullscreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isMobileFullscreen]);

  return (
    <>
      <style>{styles}</style>
      <section 
        ref={sectionRef}
        id="video" 
        className="relative py-16 lg:py-24 bg-white dark:bg-gray-950 overflow-hidden"
      >
        {/* Optimized Background - Only on large screens */}
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 hidden lg:block" aria-hidden="true">
          <div 
            className="absolute top-24 left-10 w-72 h-72 rounded-full blur-[120px]" 
            style={{ 
              background: colors.secondary,
              willChange: 'transform'
            }} 
          />
          <div 
            className="absolute bottom-24 right-10 w-72 h-72 rounded-full blur-[120px]" 
            style={{ 
              background: colors.primary,
              willChange: 'transform'
            }} 
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6" style={{ color: colors.primary }}>
                {language === "ar" ? "تعلم كيف تضاعف أرباحك" : "Learn How to Multiply Profits"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {language === "ar" 
                  ? "شاهد الفيديوهات التوضيحية لفهم آلية العمل والبدء في رحلتك الاستثمارية"
                  : "Watch tutorial videos to understand the mechanism and start your investment journey"}
              </p>
            </div>

            {/* Main Video Feature */}
            <div className="relative mb-16 group animate-scaleIn">
              <div 
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black cursor-pointer transform transition-transform duration-500 lg:hover:scale-[1.01]"
                onClick={handleMainVideoClick}
                role="button"
                tabIndex={0}
                aria-label={language === "ar" ? "تشغيل الفيديو" : "Play video"}
                onKeyPress={(e) => e.key === 'Enter' && handleMainVideoClick()}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={selectedVideo.videoUrl}
                  playsInline
                  preload="metadata"
                  onLoadedData={handleVideoLoaded}
                  aria-label={language === "ar" ? selectedVideo.titleAr : selectedVideo.titleEn}
                />
                
                {/* Play Overlay */}
                {isVideoReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors animate-fadeIn">
                    <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <div 
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-inner"
                        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
                      >
                        <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-current translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4">
                <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: colors.primary }}>
                  {language === "ar" ? selectedVideo.titleAr : selectedVideo.titleEn}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "ar" ? selectedVideo.descAr : selectedVideo.descEn}
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
              <h4 className="text-sm lg:text-base font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {language === "ar" ? "اختر فيديو آخر للمشاهدة" : "Choose another video"}
              </h4>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            </div>

            {/* Video Playlist */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 -mx-4 px-4 lg:grid lg:grid-cols-2 lg:mx-0 lg:px-0 lg:overflow-visible">
              {videosData.map((video, index) => (
                video.id!== selectedVideo.id && (
                <div
                  key={video.id}
                  onClick={() => handleVideoSelect(video)}
                  onKeyPress={(e) => e.key === 'Enter' && handleVideoSelect(video)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${language === "ar" ? "مشاهدة" : "Watch"} ${language === "ar" ? video.titleAr : video.titleEn}`}
                  className={`video-card-hover flex-shrink-0 w-[80vw] lg:w-full group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all animate-slideUp ${
                    selectedVideo.id === video.id 
                      ? "border-sky-500 ring-4 ring-sky-500/10" 
                      : "border-transparent bg-slate-50 dark:bg-gray-900"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                        <Play className="w-6 h-6 text-white fill-current" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-[10px] font-bold backdrop-blur-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="font-bold text-base mb-1 truncate" style={{ color: colors.primary }}>
                      {language === "ar" ? video.titleAr : video.titleEn}
                    </h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                      {language === "ar" ? video.descAr : video.descEn}
                    </p>
                  </div>
                </div>
                )
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center animate-slideUp" style={{ animationDelay: '300ms' }}>
              <a 
                href="#register" 
                className="group inline-flex items-center gap-4 px-10 py-5 text-white font-bold text-xl rounded-2xl shadow-2xl transition-all hover:shadow-sky-500/20 hover:scale-105 active:scale-95"
                style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
              >
                <span>{language === "ar" ? "ابدأ استثمارك الآن" : "Start Your Investment Now"}</span>
                <ChevronRight 
                  className={`w-6 h-6 transition-transform group-hover:translate-x-1 ${language === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`} 
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen Modal */}
        {isMobileFullscreen && (
          <div 
            className="fixed inset-0 z-[9999] bg-black animate-fadeIn md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={language === "ar" ? "مشغل الفيديو" : "Video player"}
          >
            <div className="relative w-full h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-5 bg-gradient-to-b from-black/90 to-transparent absolute top-0 left-0 right-0 z-50">
                <button 
                  onClick={() => setIsMobileFullscreen(false)}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white active:scale-95 transition-transform"
                  aria-label={language === "ar" ? "إغلاق" : "Close"}
                >
                  <X className="w-7 h-7" />
                </button>
                <span className="text-white font-bold text-sm tracking-tight truncate max-w-[60%]">
                  {language === "ar" ? selectedVideo.titleAr : selectedVideo.titleEn}
                </span>
                <div className="w-12" aria-hidden="true" />
              </div>
              
              {/* Video Player */}
              <div className="flex-1 flex items-center justify-center bg-black">
                <video 
                  className="w-full h-auto max-h-full" 
                  src={selectedVideo.videoUrl} 
                  controls 
                  autoPlay 
                  playsInline
                  controlsList="nodownload"
                  aria-label={language === "ar" ? selectedVideo.titleAr : selectedVideo.titleEn}
                />
              </div>
              
              {/* Video Info Footer */}
              <div className="p-8 bg-gray-900 border-t border-white/5">
                <h4 className="text-xl font-bold text-white mb-3">
                  {language === "ar" ? selectedVideo.titleAr : selectedVideo.titleEn}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {language === "ar" ? selectedVideo.descAr : selectedVideo.descEn}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}