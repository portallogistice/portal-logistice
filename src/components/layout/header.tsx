// src/components/layout/header.tsx
"use client";

import { Moon, Sun, Globe, Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { useI18n } from "@/providers/i18n-provider";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll optimization: Throttling can be added here if needed, 
  // but for simple boolean toggle, native event is acceptable.
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 80; // Adjusted for breathing room
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  // Navigation Items
  const navItems = ["home", "steps", "register", "about", "offers", "partners", "faq", "reports"];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b ${
          scrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-gray-200 dark:border-gray-800 shadow-sm py-2"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* --- Logo Area --- */}
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="group flex items-center gap-3 relative z-50"
            >
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.webp"
                  alt="Portal Logistic"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 40px, 48px"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl leading-none text-[#003C7F] dark:text-blue-400">
                  {language === "ar" ? "بوابة التسهيل" : "PORTAL"}
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#00A8E8] uppercase mt-0.5">
                  {language === "ar" ? "للخدمات اللوجستية" : "LOGISTIC"}
                </span>
              </div>
            </Link>

            {/* --- Desktop Navigation --- */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/#${item}`}
                  onClick={(e) => handleLinkClick(e, `#${item}`)}
                  className="relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:text-[#003C7F] dark:hover:text-blue-400 transition-colors group"
                >
                  {t(item)}
                  {/* Subtle underline animation instead of heavy gradient */}
                  <span className="absolute inset-x-3 bottom-1 h-0.5 bg-[#00A8E8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right rounded-full" />
                </Link>
              ))}
            </nav>

            {/* --- Desktop Actions --- */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Settings Group */}
              <div className="flex items-center gap-1 p-1 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <button
                  onClick={toggleLanguage}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all"
                  aria-label="Switch Language"
                >
                  {language === "ar" ? "EN" : "ع"}
                </button>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all"
                  aria-label="Toggle Theme"
                >
                  {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                </button>
              </div>

              {/* CTA Button */}
              <Link
                href="#register"
                onClick={(e) => handleLinkClick(e, "#register")}
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#003C7F] hover:bg-[#003166] text-white rounded-full font-medium text-sm transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 overflow-hidden"
              >
                <span className="relative z-10">{t("registerNow")}</span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
              </Link>
            </div>

            {/* --- Mobile Toggle --- */}
            <div className="flex lg:hidden items-center gap-2">
               <button
                  onClick={toggleLanguage}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900"
                >
                  {language === "ar" ? "EN" : "ع"}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-50 p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`fixed inset-y-0 right-0 left-0 sm:left-auto sm:w-[400px] z-40 bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${
          mobileMenuOpen 
            ? language === 'ar' ? 'translate-x-0' : 'translate-x-0' // Simplified for logic properties
            : language === 'ar' ? '-translate-x-full' : 'translate-x-full' // RTL/LTR drawer logic
        } ltr:right-0 rtl:left-0 rtl:right-auto`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <nav className="flex-1 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={`/#${item}`}
                onClick={(e) => handleLinkClick(e, `#${item}`)}
                className={`flex items-center justify-between p-4 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group ${
                    mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {t(item)}
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#00A8E8] transition-colors rtl:rotate-180" />
              </Link>
            ))}
          </nav>

          {/* Mobile Footer Actions */}
          <div className="mt-6 space-y-4 border-t border-gray-100 dark:border-gray-800 pt-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Appearance</span>
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              >
                 {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
            
            <Link
              href="#register"
              onClick={(e) => handleLinkClick(e, "#register")}
              className="flex items-center justify-center w-full py-4 bg-[#003C7F] text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 active:scale-95 transition-transform"
            >
              {t("registerNow")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}