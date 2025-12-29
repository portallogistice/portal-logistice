// src/components/sections/partners.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Handshake, ArrowRight, Building2, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Partner Logo Component with fallback
function PartnerLogo({ src, alt, gradient, name }: { src: string; alt: string; gradient: string; name: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`w-full h-full rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg`}>
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        className="object-contain w-full h-full filter group-hover:brightness-110 transition-all"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-id]");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  // Major Saudi delivery app partners
  const partners = [
    { 
      name: "Jahez", 
      logo: "https://logos-world.net/wp-content/uploads/2023/01/Jahez-Logo.png", 
      url: "https://www.jahez.com",
      gradient: "from-orange-500 to-orange-600" 
    },
    { 
      name: "HungerStation", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/HungerStation-Logo.png", 
      url: "https://www.hungerstation.com",
      gradient: "from-red-500 to-red-600" 
    },
    { 
      name: "Mrsool", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Mrsool-Logo.png", 
      url: "https://www.mrsool.com",
      gradient: "from-blue-500 to-blue-600" 
    },
    { 
      name: "ToYou", 
      logo: "https://www.toyou.com/assets/images/logo.png", 
      url: "https://www.toyou.com",
      gradient: "from-green-500 to-green-600" 
    },
    { 
      name: "The Chefz", 
      logo: "https://www.thechefz.com/assets/images/logo.png", 
      url: "https://www.thechefz.com",
      gradient: "from-purple-500 to-purple-600" 
    },
    { 
      name: "Noon", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Noon-Logo.png", 
      url: "https://www.noon.com",
      gradient: "from-yellow-500 to-yellow-600" 
    },
    { 
      name: "Careem", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Careem-Logo.png", 
      url: "https://www.careem.com",
      gradient: "from-cyan-500 to-cyan-600" 
    },
    { 
      name: "Uber", 
      logo: "https://logos-world.net/wp-content/uploads/2017/05/Uber-Logo.png", 
      url: "https://www.uber.com",
      gradient: "from-gray-700 to-gray-800" 
    },
  ];

  const stats = [
    { 
      icon: Building2, 
      value: "8+", 
      label: language === "ar" ? "شريك رئيسي" : "Main Partners",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-900"
    },
    { 
      icon: Clock, 
      value: "24/7", 
      label: language === "ar" ? "العمل على مدار الساعة" : "Around the Clock",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900"
    },
    { 
      icon: MapPin, 
      value: "13", 
      label: language === "ar" ? "مدينة في المملكة" : "Cities in Kingdom",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900"
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
      id="partners" 
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950 overflow-hidden"
    >
      {/* Background decorative elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 hidden sm:block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-950/40 rounded-full mb-6 sm:mb-8 shadow-lg backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
            <div className="p-1 sm:p-1.5 rounded-full bg-emerald-500/10">
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              {language === "ar" ? "شركاؤنا" : "Our Partners"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              {language === "ar" ? "نتعاون مع أفضل المنصات" : "We Collaborate with the Best Platforms"}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            {language === "ar"
              ? "نعمل مع أكبر منصات التوصيل في المملكة لضمان أفضل عائد استثماري لشركائنا"
              : "We work with the largest delivery platforms in the Kingdom to ensure the best investment return for our partners"}
          </p>
        </div>

        {/* Enhanced Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16 md:mb-20">
          {partners.map((partner, index) => {
            const isVisible = visibleElements.has(`partner-${index}`);
            return (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                data-id={`partner-${index}`}
                className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 active:scale-[0.98] overflow-hidden transition-all duration-1000 cursor-pointer touch-manipulation ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${partner.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Logo */}
                <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <PartnerLogo 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    gradient={partner.gradient}
                    name={partner.name}
                  />
                </div>
                
                {/* Partner Name */}
                <h3 className="relative z-10 text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white text-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                  {partner.name}
                </h3>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
              </a>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isVisible = visibleElements.has(`stat-${index}`);
            return (
              <div
                key={index}
                data-id={`stat-${index}`}
                className={`group relative text-center p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${stat.bgGradient} border-2 border-gray-200/50 dark:border-gray-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 active:scale-[0.98] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.gradient} mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className={`text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center px-4">
          <div 
            data-id="cta"
            className={`inline-block p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 text-white shadow-2xl border-2 border-emerald-400/20 backdrop-blur-sm transition-all duration-1000 w-full max-w-2xl ${
              visibleElements.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm mb-4 sm:mb-5 md:mb-6 shadow-xl">
              <Handshake className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight px-2">
              {language === "ar" ? "انضم إلى شبكتنا المتنامية" : "Join Our Growing Network"}
            </h3>
            <p className="text-emerald-50 mb-6 sm:mb-7 md:mb-8 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
              {language === "ar"
                ? "كن جزءاً من نظام لوجستي متكامل يعمل مع أفضل المنصات في المملكة"
                : "Be part of an integrated logistics system working with the best platforms in the Kingdom"}
            </p>
            <Link
              href="#register"
              onClick={handleScrollClick}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white hover:bg-gray-50 active:bg-gray-100 text-emerald-600 font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-white/50 active:scale-[0.98] transition-all duration-300 transform hover:scale-105 overflow-hidden touch-manipulation w-full sm:w-auto min-w-[200px] justify-center"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <span>{language === "ar" ? "سجل الآن" : "Register Now"}</span>
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}