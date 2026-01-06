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

  // Brand colors from logo
  const colors = {
    primary: "#003C7F", // Dark Blue from logo
    secondary: "#00A8E8", // Light Blue from logo
    accent: "#0080C8", // Medium Blue
  };

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
        const headerHeight = 64;
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
            ? "border-b bg-white dark:bg-gray-900 shadow-lg"
            : "border-b border-transparent bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
        }`}
        style={{
          borderBottomColor: scrolled ? colors.secondary : "transparent",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0 group"
              onClick={handleLinkClick}
            >
              <div className="relative h-10 w-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.webp"
                  alt="Portal Logistic"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span
                  className="font-bold text-lg block leading-tight"
                  style={{ color: colors.primary }}
                >
                  {language === "ar" ? "بوابة التسهيل" : "PORTAL"}
                </span>
                <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: colors.secondary }}
                >
                  {language === "ar" ? "للخدمات اللوجستية" : "LOGISTIC"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
              {["home", "steps", "register", "about","offers","partners", "faq", "reports"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item}`}
                  onClick={handleLinkClick}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all rounded-lg group overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors">
                    {t(item)}
                  </span>
                  {/* Hover background with gradient */}
                  <span
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-opacity-80 transition-all group"
                aria-label="Toggle language"
                style={{
                  backgroundColor: theme === "light" ? "#f0f9ff" : "#1e293b",
                }}
              >
                <Globe
                  className="h-4 w-4 transition-colors"
                  style={{ color: colors.secondary }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: colors.primary }}
                >
                  {language === "ar" ? "EN" : "ع"}
                </span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-opacity-80 transition-all"
                aria-label="Toggle theme"
                style={{
                  backgroundColor: theme === "light" ? "#f0f9ff" : "#1e293b",
                }}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" style={{ color: colors.primary }} />
                ) : (
                  <Sun className="h-5 w-5" style={{ color: colors.secondary }} />
                )}
              </button>

              {/* CTA Button */}
              <Link
                href="#register"
                onClick={handleLinkClick}
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-white font-semibold shadow-md hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                }}
              >
                <span className="relative z-10">{t("registerNow")}</span>
                {/* Shine effect on hover */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2 rtl:space-x-reverse">
              {/* Language Switcher - Mobile */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg transition-all"
                aria-label="Toggle language"
                style={{
                  backgroundColor: theme === "light" ? "#f0f9ff" : "#1e293b",
                }}
              >
                <span className="text-sm font-bold" style={{ color: colors.primary }}>
                  {language === "ar" ? "EN" : "ع"}
                </span>
              </button>

              {/* Theme Switcher - Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all"
                aria-label="Toggle theme"
                style={{
                  backgroundColor: theme === "light" ? "#f0f9ff" : "#1e293b",
                }}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" style={{ color: colors.primary }} />
                ) : (
                  <Sun className="h-5 w-5" style={{ color: colors.secondary }} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white transition-all hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 z-[46] lg:hidden overflow-y-auto transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-1">
          {["home", "steps", "register", "about", "offers", "partners", "faq", "reports"].map((item, index) => (
            <Link
              key={item}
              href={`/#${item}`}
              onClick={handleLinkClick}
              className={`text-lg font-medium py-3 px-4 rounded-lg border-b transition-all relative overflow-hidden group ${
                mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                borderBottomColor: theme === "light" ? "#e5e7eb" : "#374151",
                color: colors.primary,
              }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                {t(item)}
              </span>
              {/* Hover background */}
              <span
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                }}
              />
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/#register"
            onClick={handleLinkClick}
            className={`mt-4 w-full text-center px-6 py-3 rounded-lg text-white font-bold shadow-lg transition-all ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
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