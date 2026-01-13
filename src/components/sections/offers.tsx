"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Percent, Wallet, GraduationCap, Calculator, 
  CheckCircle2, AlertCircle, TrendingUp, History, 
  UserCheck, ShieldCheck, HeartHandshake, MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/providers/i18n-provider";

const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export function OffersSection() {
  const { language } = useI18n();
  const [investmentAmount, setInvestmentAmount] = useState(660);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.getAttribute("data-id") || ""]));
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll("[data-id]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fractionalROI = investmentAmount * 0.10;
  const maintenanceShare = (investmentAmount / 6600) * 100;

  return (
    <section 
      ref={sectionRef}
      id="offers" 
      className="relative py-20 lg:py-28 overflow-hidden bg-slate-50 dark:bg-gray-950"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-id="header">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-500/10 border border-blue-500/20">
            <Percent className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              {language === "ar" ? "عروض حصرية" : "Exclusive Offers"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#003C7F] dark:text-white">
            {language === "ar" ? "باقات استثمارية مصممة لك" : "Investment Packages Tailored for You"}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* Card 1: Fractional Investment (Students) */}
          <div 
            data-id="card-1"
            className={`group relative bg-white dark:bg-gray-900 rounded-3xl border-2 overflow-hidden transition-all duration-700 hover:shadow-2xl ${
              visibleElements.has("card-1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ borderColor: `${colors.secondary}20` }}
          >
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold animate-pulse">
                    {language === "ar" ? "فرصتك الاستثمارية الآن" : "Invest Now"}
                </div>
                <Image 
                    src="/images/offer-1.jpeg" 
                    alt="Student Investment"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-6 left-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6" />
                        {language === "ar" ? "برنامج الاستثمار الجزئي" : "Fractional Investment"}
                    </h3>
                    <p className="text-blue-200 text-sm font-medium">
                        {language === "ar" ? "لطلاب وطالبات الثانوي والجامعة" : "For Students & Limited Budgets"}
                    </p>
                </div>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg"><Wallet className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{language === "ar" ? "ابدأ بـ 660 ريال فقط" : "Start with 660 SAR"}</p>
                    <p className="text-xs text-gray-500">{language === "ar" ? "دخول عالم الاستثمار بأقل التكاليف" : "Low cost entry to logistics"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600" /></div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{language === "ar" ? "عائد شهري ثابت 10%" : "10% Fixed Monthly ROI"}</p>
                    <p className="text-xs text-gray-500">{language === "ar" ? "يصرف لمدة 36 شهرًا" : "Contract duration: 36 months"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg"><History className="w-5 h-5 text-orange-600" /></div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{language === "ar" ? "توزيع مخاطر (النسبة والتناسب)" : "Proportional Risk"}</p>
                    <p className="text-xs text-gray-500">{language === "ar" ? "تتحمل الصيانة والإهلاك حسب نسبتك فقط" : "Shared costs based on share %"}</p>
                  </div>
                </div>
              </div>

              {/* Smart Calculator */}
              <div className="bg-slate-50 dark:bg-gray-800 p-5 rounded-2xl border border-blue-100 dark:border-gray-700 mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                      <Calculator className="w-3 h-3" /> {language === "ar" ? "كيف تعمل الحسبة؟" : "How it works"}
                    </span>
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                      {language === "ar" ? `حصة ${maintenanceShare}%` : `${maintenanceShare}% Share`}
                    </span>
                </div>
                <input 
                    type="range" min="660" max="6600" step="660"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-900 p-2 rounded-xl text-center shadow-sm">
                        <p className="text-[10px] text-gray-400">{language === "ar" ? "استثمارك" : "Investment"}</p>
                        <p className="font-bold text-sm text-blue-600">{investmentAmount} {language === "ar" ? "ر.س" : "SAR"}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-2 rounded-xl text-center shadow-sm">
                        <p className="text-[10px] text-gray-400">{language === "ar" ? "إيرادك الشهري" : "Monthly Revenue"}</p>
                        <p className="font-bold text-sm text-green-600">+{fractionalROI} {language === "ar" ? "ر.س" : "SAR"}</p>
                    </div>
                </div>
              </div>

              <Link href="#register" onClick={handleScrollClick} 
                className="group inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
              >
                {language === "ar" ? "انطلق في استثمارك الأول" : "Start Your First Investment"}
              </Link>
              <p className="text-center text-[10px] text-gray-400 mt-4 flex items-center justify-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {language === "ar" ? "رسوم إدارية ثابتة 95 ريال عند التعاقد" : "Fixed 95 SAR admin fee"}
              </p>
            </div>
          </div>

          {/* Card 2: Retirement Gold Program */}
          <div 
            data-id="card-2"
            className={`group relative bg-white dark:bg-gray-900 rounded-3xl border-2 overflow-hidden transition-all duration-700 hover:shadow-2xl ${
              visibleElements.has("card-2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ borderColor: "#D4AF3740" }} // Gold tint
          >
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20 bg-[#D4AF37] text-white px-4 py-1 rounded-full text-xs font-bold">
                    {language === "ar" ? "التقاعد الذهبي" : "Golden Retirement"}
                </div>
                <Image 
                    src="/images/offer.jpeg" 
                    alt="Retiree Investment"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-6 left-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                        <UserCheck className="w-6 h-6" />
                        {language === "ar" ? "لأنكم أساس الخبرة" : "For Our Experts"}
                    </h3>
                    <p className="text-yellow-200 text-sm font-medium">
                        {language === "ar" ? "بوابتكم لراحة البال والنمو المالي" : "Your gateway to peace of mind"}
                    </p>
                </div>
            </div>

            <div className="p-8">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {language === "ar" 
                  ? "سواء كنت تملك 240 شهراً من الخدمة أو أتممت عامك الخمسين، باقة (التقاعد الذهبي) تجعل مدخراتك تعمل من أجلك."
                  : "Whether you have 240 months of service or are 50+, let your savings work for you."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { ar: "عوائد شهرية ثابتة", en: "Fixed Monthly ROI", icon: CheckCircle2 },
                  { ar: "عقد الأمان العائلي", en: "Family Security Contract", icon: ShieldCheck },
                  { ar: "رسوم إدارية مخفضة", en: "Reduced Admin Fees", icon: Percent },
                  { ar: "تقارير واتساب مبسطة", en: "Simple WhatsApp Reports", icon: MessageSquare },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-gray-800 rounded-xl">
                    <item.icon className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        {language === "ar" ? item.ar : item.en}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 mb-8">
                <div className="flex items-center gap-3">
                   <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />
                   <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-normal">
                      {language === "ar" 
                        ? "إمكانية إضافة مستفيد من الأبناء أو الأحفاد لضمان استمرار الدخل للعائلة."
                        : "Ability to add children or grandchildren as beneficiaries for long-term family income."}
                   </p>
                </div>
              </div>

              <Link href="#register" onClick={handleScrollClick} 
                className="group inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
              >
                {language === "ar" ? "ابدأ رحلة استثمارية هادئة" : "Start Your Peaceful Journey"}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}