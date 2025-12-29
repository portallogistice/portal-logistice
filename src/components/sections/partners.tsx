// src/components/sections/partners.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Handshake } from "lucide-react";

export function PartnersSection() {
  const { language } = useI18n();

  // Major Saudi delivery app partners
  const partners = [
    { name: "Jahez", logo: "🍔" },
    { name: "HungerStation", logo: "🍕" },
    { name: "Mrsool", logo: "📦" },
    { name: "ToYou", logo: "🚚" },
    { name: "The Chefz", logo: "👨‍🍳" },
    { name: "Noon", logo: "🛍️" },
    { name: "Careem", logo: "🚗" },
    { name: "Uber", logo: "🚕" },
  ];

  return (
    <section id="partners" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <Handshake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {language === "ar" ? "شركاؤنا" : "Our Partners"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "ar" ? "نتعاون مع أفضل المنصات" : "We Collaborate with the Best Platforms"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar"
              ? "نعمل مع أكبر منصات التوصيل في المملكة لضمان أفضل عائد استثماري لشركائنا"
              : "We work with the largest delivery platforms in the Kingdom to ensure the best investment return for our partners"}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="relative">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-gray-950 dark:via-transparent dark:to-gray-950 z-10 pointer-events-none" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 p-8 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Logo */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                
                {/* Partner Name */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                  {partner.name}
                </h3>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-900 border border-emerald-200 dark:border-emerald-900">
            <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              8+
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {language === "ar" ? "شريك رئيسي" : "Main Partners"}
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900 border border-blue-200 dark:border-blue-900">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              24/7
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {language === "ar" ? "العمل على مدار الساعة" : "Around the Clock"}
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900 border border-purple-200 dark:border-purple-900">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              13
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {language === "ar" ? "مدينة في المملكة" : "Cities in Kingdom"}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white">
            <h3 className="text-2xl font-bold mb-3">
              {language === "ar" ? "انضم إلى شبكتنا المتنامية" : "Join Our Growing Network"}
            </h3>
            <p className="text-emerald-50 mb-6 max-w-xl">
              {language === "ar"
                ? "كن جزءاً من نظام لوجستي متكامل يعمل مع أفضل المنصات في المملكة"
                : "Be part of an integrated logistics system working with the best platforms in the Kingdom"}
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span>{language === "ar" ? "سجل الآن" : "Register Now"}</span>
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}