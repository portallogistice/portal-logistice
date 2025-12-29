// src/components/layout/header.tsx
"use client";

import { Moon, Sun, Globe, Menu, X } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 64; // Header height (h-16 = 64px)
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg"
            : "border-b border-transparent bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0"
              onClick={handleLinkClick}
            >
              <div className="relative h-10 w-10 flex-shrink-0 rounded-xl  flex items-center justify-center shadow-lg">
<Image src="/images/logo.webp" alt="Logo" width={40} height={40} />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-gray-900 dark:text-white block leading-tight">
                  {language === "ar" ? "بوابة التسهيل" : "Portal"}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400">
                  {language === "ar" ? "للخدمات اللوجستية" : "Logistice"}
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
              {["home", "steps", "register", "about", "faq", "products"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-lg transition-all"
                >
                  {t(item)}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {language === "ar" ? "EN" : "ع"}
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              <Link
                href="#register"
                onClick={handleLinkClick}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              >
                {t("registerNow")}
              </Link>
            </div>

            <div className="flex lg:hidden items-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle language"
              >
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {language === "ar" ? "EN" : "AR"}
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Fixed Background Issue */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 z-[46] lg:hidden overflow-y-auto transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-1">
          {["home", "steps", "register", "about", "faq", "products"].map((item, index) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={handleLinkClick}
              className={`text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 py-3 px-4 rounded-lg border-b border-gray-100 dark:border-gray-800 transition-all ${
                mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {t(item)}
            </Link>
          ))}

          <Link
            href="#register"
            onClick={handleLinkClick}
            className={`mt-4 w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold shadow-lg transition-all ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? `${6 * 50}ms` : "0ms",
            }}
          >
            {t("registerNow")}
          </Link>
        </nav>
      </div>
    </>
  );
}