"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Shield, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export function TrustBarSection() {
  const { language } = useI18n();
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-id") || "";
            setVisibleElements((prev) => new Set([...prev, elementId]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px" }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-id]");
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Platform logos
  const platforms = [
    {
      logo: "/images/platform-2.jpeg",
      alt: language === "ar" ? "نفاذ" : "NaFath",
    },
    {
      logo: "/images/platform-4.png",
      alt: language === "ar" ? "المركز السعودي للأعمال" : "Saudi Business Center",
    },
    {
      logo: "/images/platform-3.png",
      alt: language === "ar" ? "المركز المعلومات الوطني" : "National Information Center",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 lg:py-16 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950 border-b border-gray-200 dark:border-gray-800"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-id="header">
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
              <CheckCircle2 className="w-4 h-4" style={{ color: colors.secondary }} />
            </div>
            <span 
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "الموثوقية والاعتماد" : "Trust & Certification"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span style={{ color: colors.primary }}>
              {language === "ar" ? "عقودنا موثقة ومعتمدة عبر " : "Our contracts are certified through "}
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              {language === "ar" ? "المنصات الوطنية" : "National Platforms"}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar"
              ? "جميع عقودنا الاستثمارية موثقة رسمياً ومعتمدة من المنصات الحكومية المعتمدة"
              : "All our investment contracts are officially documented and approved by authorized government platforms"}
          </p>
        </div>

        {/* Platforms Grid - Optimized for Performance */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const isVisible = visibleElements.has(`platform-${index}`);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                data-id={`platform-${index}`}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl border-2 p-8 flex flex-col items-center justify-center transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  borderColor: isEven ? `${colors.primary}20` : `${colors.secondary}20`,
                  transitionDelay: `${index * 100}ms`,
                  willChange: isVisible ? 'auto' : 'transform, opacity',
                }}
              >
                {/* Platform Logo */}
                <div className="relative w-24 h-24 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={platform.logo}
                    alt={platform.alt}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
                
                {/* Platform Name */}
                <h3 
                  className="text-sm font-bold text-center"
                  style={{ color: colors.primary }}
                >
                  {platform.alt}
                </h3>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: isEven 
                      ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                      : `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
