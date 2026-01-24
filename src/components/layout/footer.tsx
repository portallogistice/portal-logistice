// src/components/layout/footer.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

// Brand colors from logo
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export function Footer() {
  const { language } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const phoneNumber = "+966599977725"; // WhatsApp number without spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

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
      {/* Top Border with Brand Colors */}
      <div 
        className="h-1"
        style={{
          background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                }}
              >
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {language === "ar" ? "بوابة التسهيل" : "Portal"}
                </h3>
                <p className="text-sm" style={{ color: colors.secondary }}>
                  {language === "ar" ? "للخدمات اللوجستية" : "Logistics"}
                </p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              {language === "ar"
                ? "منشأة سعودية متخصصة في الخدمات اللوجستية، نوفر فرص استثمارية مربحة وآمنة"
                : "Specialized Saudi establishment in logistics services, providing profitable investment opportunities"}
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
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-opacity-80 flex items-center justify-center transition-all group"
                    style={{
                      backgroundColor: `${colors.primary}20`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.primary}20`;
                      e.currentTarget.style.background = "";
                    }}
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
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full transition-all group-hover:w-2"
                      style={{ backgroundColor: colors.secondary }}
                    />
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
              <div  className="flex items-center gap-2  ">
                <Phone className="w-5 h-5  mt-0.5" style={{ color: colors.secondary }} />
               <a href="tel:966599977725" className="text-sm text-gray-400">966599977725+</a>
               <span className="text-sm text-gray-400 mx-2">|</span>
               <a href="tel:966563771743" className="text-sm text-gray-400">966563771743+</a>
               <span className="text-sm text-gray-400 mx-2">|</span>
               <a href="tel:920031392" className="text-sm text-gray-400">920031392</a>
               
              </div>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                <div className="text-sm">
                  <p className="text-gray-400">info@portallogistice.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                <div className="text-sm">
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
            <p className="text-gray-400 mb-4 text-sm">
              {language === "ar"
                ? "اشترك للحصول على آخر التحديثات والعروض"
                : "Subscribe for latest updates"}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={language === "ar" ? "بريدك الإلكتروني" : "Your email"}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 text-white placeholder-gray-500 text-sm transition-all focus:outline-none"
                style={{
                  borderColor: `${colors.primary}40`,
                }}
                onFocus={(e) => e.target.style.borderColor = colors.secondary}
                onBlur={(e) => e.target.style.borderColor = `${colors.primary}40`}
              />
              <button
                type="submit"
                className="w-full px-4 py-3 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                }}
              >
                {language === "ar" ? "اشترك" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: `${colors.primary}40` }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-right rtl:md:text-right ltr:md:text-left">
              © 2025 {language === "ar" ? "بوابة التسهيل للخدمات اللوجستية" : "Portal Logistics"}.{" "}
              {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                href="#" 
                className="text-gray-400 transition-colors"
                style={{
                  color: "#9ca3af",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary}
                onMouseLeave={(e) => e.currentTarget.style.color = "#9ca3af"}
              >
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 transition-colors"
                style={{
                  color: "#9ca3af",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary}
                onMouseLeave={(e) => e.currentTarget.style.color = "#9ca3af"}
              >
                {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
  onClick={scrollToTop}
  className="fixed bottom-8 right-8 rtl:right-auto rtl:left-8 w-12 h-12 text-white rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 z-30 flex items-center justify-center"
  style={{
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  }}
  aria-label="Scroll to top"
>
  <ArrowUp className="w-6 h-6" />
</button>
    </footer>
  );
}