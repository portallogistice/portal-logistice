// src/components/sections/partners.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Handshake, ArrowRight, Building2, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Brand colors from logo
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export function PartnersSection() {
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

  const partners = [
    { name: "Jahez", image: "/images/Jahez.jpeg", emoji: "🍔" },
    { name: "HungerStation", image: "/images/Hungerstation.svg", emoji: "🍕" },
    { name: "Mrsool", image: "/images/Mrsool.jpeg", emoji: "📦" },
    { name: "ToYou", image: "/images/Toyou.png", emoji: "🚚" },
    { name: "Noon", image: "/images/Noon.svg", emoji: "🛍️" }
  ];

  const stats = [
    { 
      icon: Building2, 
      value: "8+", 
      label: language === "ar" ? "شريك رئيسي" : "Main Partners",
    },
    { 
      icon: Clock, 
      value: "24/7", 
      label: language === "ar" ? "العمل على مدار الساعة" : "Around the Clock",
    },
    { 
      icon: MapPin, 
      value: "13", 
      label: language === "ar" ? "مدينة في المملكة" : "Cities in Kingdom",
    },
  ];

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
      id="partners" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950"
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
              <Handshake className="w-4 h-4" style={{ color: colors.secondary }} />
            </div>
            <span 
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "شركاؤنا" : "Our Partners"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span style={{ color: colors.primary }}>
              {language === "ar" ? "نتعاون مع " : "Collaborating with "}
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              {language === "ar" ? "أفضل المنصات" : "Leading Platforms"}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar"
              ? "نعمل مع أكبر منصات التوصيل في المملكة لضمان أفضل عائد استثماري"
              : "Working with the Kingdom's largest delivery platforms for optimal returns"}
          </p>
        </div>

        {/* Partners Grid - Optimized for Performance */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => {
            const isVisible = visibleElements.has(`partner-${index}`);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                data-id={`partner-${index}`}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl border-2 p-8 flex flex-col items-center justify-center transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  borderColor: isEven ? `${colors.primary}20` : `${colors.secondary}20`,
                  transitionDelay: `${index * 50}ms`,
                  willChange: isVisible ? 'auto' : 'transform, opacity',
                }}
              >
                {/* Partner Logo/Icon */}
                <div className="relative w-20 h-20 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {partner.image ? (
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="text-6xl">{partner.emoji}</div>
                  )}
                </div>
                
                {/* Partner Name */}
                <h3 
                  className="text-sm font-bold"
                  style={{ color: colors.primary }}
                >
                  {partner.name}
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

        {/* Stats Grid */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isVisible = visibleElements.has(`stat-${index}`);
            
            return (
              <div
                key={index}
                data-id={`stat-${index}`}
                className={`text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  borderColor: `${colors.secondary}20`,
                  transitionDelay: `${400 + index * 100}ms`,
                  willChange: isVisible ? 'auto' : 'transform, opacity',
                }}
              >
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  {stat.value}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div> */}

        {/* CTA Card */}
        <div 
          data-id="cta"
          className={`max-w-4xl mx-auto p-8 lg:p-12 rounded-2xl text-white relative overflow-hidden shadow-2xl transition-all duration-700 ${
            visibleElements.has("cta") ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          }}
        >
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right rtl:md:text-right ltr:md:text-left flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                {language === "ar" ? "ابدأ رحلة استثمارك اليوم" : "Start Your Journey Today"}
              </h3>
              <p className="text-blue-100 text-lg">
                {language === "ar"
                  ? "انضم إلى شبكة تضم أكثر من 8 منصات توصيل عالمية ومحلية"
                  : "Join a network with over 8 global and local delivery platforms"}
              </p>
            </div>
            
            <Link
              href="#register"
              onClick={handleScrollClick}
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ color: colors.primary }}
            >
              <span>{language === "ar" ? "سجل الآن" : "Register Now"}</span>
              <ArrowRight className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}