// src/providers/i18n-provider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "ar" | "en";

interface I18nContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Translation object
const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    home: "الرئيسية",
    steps: "خطوات الشراء",
    about: "من نحن",
    faq: "الأسئلة الشائعة",
    reports: "التقارير",
    offers: "برامج الاستثمار",
    partners: "شركاؤنا",
    register: "تواصل معنا",
    // Hero Section
    heroTitle: "بوابة التسهيل للخدمات اللوجستية",
    heroSubtitle: "بوابتك إلى عالم الاستثمار وتشغيل ودعم اللوجستي",
    
    // Buttons
    contactUs: "اتصل بنا",
    learnMore: "اعرف المزيد",
    registerNow: "سجل الآن",
    
    // Form
    fullName: "الاسم الكامل",
    city: "من أي مدينة",
    phone: "رقم الهاتف",
    callTime: "الوقت المناسب للاتصال",
    submit: "اتصال بي",
    
    // Steps
    step1Title: "الفكرة",
    step2Title: "التواصل",
    step3Title: "شراء الأصل",
    step4Title: "العقود والضمانات",
    step5Title: "التشغيل",
    step6Title: "التصفية",
    
    receiveReports: "استلام التقارير عبر البريد الإلكتروني",
    emailDescription: "سنرسل التقرير إلى هذا العنوان",
    emailAddress: "عنوان البريد الإلكتروني",
    emailPlaceholder: "your.name@company.com",
    cancel: "إلغاء",
    saveAndContinue: "حفظ ومتابعة",
    invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح",
    privacyNote: "نحترم خصوصيتك - سيتم استخدام بريدك الإلكتروني فقط لإرسال التقارير.",
    close: "إغلاق",
    
    // Footer
    copyright: "جميع الحقوق محفوظة - بوابة التسهيل للخدمات اللوجستية",
    subscribe: "الاشتراك",
  },
  en: {
    // Navigation
    home: "Home",
    steps: "Purchase Steps",
    about: "About Us",
    faq: "FAQ",
    reports: "Reports",
    offers: "Investment Programs",
    partners: "Partners",
    register: "Contact Us",
    
    // Hero Section
    heroTitle: "Logistics Services Portal",
    heroSubtitle: "Your Gateway to Investment, Operation, and Logistics Support",
    // en.json

  receiveReports: "Receive Reports by Email",
  emailDescription: "We'll send the report to this address",
  emailAddress: "Email address",
  emailPlaceholder: "your.name@company.com",
  cancel: "Cancel",
  saveAndContinue: "Save & Continue",
  invalidEmail: "Please enter a valid email address",
  privacyNote: "We respect your privacy — your email will only be used for sending reports.",
  close: "Close",


// ar.json

 

    // Buttons
    contactUs: "Contact Us",
    learnMore: "Learn More",
    registerNow: "Register Now",
    
    // Form
    fullName: "Full Name",
    city: "City",
    phone: "Phone Number",
    callTime: "Preferred Call Time",
    submit: "Call Me",
    
    // Steps
    step1Title: "The Idea",
    step2Title: "Contact",
    step3Title: "Asset Purchase",
    step4Title: "Contracts & Guarantees",
    step5Title: "Operation",
    step6Title: "Liquidation",
    
    // Footer
    copyright: "All Rights Reserved - Logistics Services Portal",
    subscribe: "Subscribe",
  },
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    const initialLang = savedLang || "ar";
    setLanguageState(initialLang);
    updateDocumentLanguage(initialLang);
  }, []);

  const updateDocumentLanguage = (lang: Language) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    updateDocumentLanguage(lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  

  return (
    <I18nContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        t,
        dir: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}