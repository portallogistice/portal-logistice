// src/components/layout/footer.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const { language } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { href: "#home", labelAr: "الرئيسية", labelEn: "Home" },
    { href: "#steps", labelAr: "خطوات الشراء", labelEn: "Steps" },
    { href: "#register", labelAr: "تسجيل", labelEn: "Register" },
    { href: "#about", labelAr: "من نحن", labelEn: "About" },
    { href: "#faq", labelAr: "الأسئلة الشائعة", labelEn: "FAQ" },
    { href: "#products", labelAr: "المنتجات", labelEn: "Products" },
  ];

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-gray-300">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {language === "ar" ? "بوابة التسهيل" : "Portal"}
                </h3>
                <p className="text-sm text-emerald-400">
                  {language === "ar" ? "للخدمات اللوجستية" : "Logistice"}
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {language === "ar"
                ? "منشأة سعودية متخصصة في الخدمات اللوجستية، نوفر فرص استثمارية مربحة وآمنة"
                : "Specialized Saudi establishment in logistics services, providing profitable and secure investment opportunities"}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 group-hover:bg-emerald-400 transition-colors" />
                    {language === "ar" ? link.labelAr : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">+966 50 000 0000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">info@portallogistice.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">
                    {language === "ar"
                      ? "الرياض، المملكة العربية السعودية"
                      : "Riyadh, Saudi Arabia"}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {language === "ar" ? "النشرة البريدية" : "Newsletter"}
            </h4>
            <p className="text-gray-400 mb-4">
              {language === "ar"
                ? "اشترك للحصول على آخر التحديثات والعروض"
                : "Subscribe to get latest updates and offers"}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={language === "ar" ? "بريدك الإلكتروني" : "Your email"}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02]"
              >
                {language === "ar" ? "اشترك" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 {language === "ar" ? "بوابة التسهيل للخدمات اللوجستية" : "Portal Logistice"}.{" "}
              {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rtl:right-auto rtl:left-8 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}