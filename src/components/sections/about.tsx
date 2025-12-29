// src/components/sections/about.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { Building2, Users, TrendingUp, Shield, Award, Target } from "lucide-react";

export function AboutSection() {
  const { language } = useI18n();

  const features = [
    {
      icon: Building2,
      titleAr: "منشأة سعودية متخصصة",
      titleEn: "Specialized Saudi Establishment",
      descAr: "متخصصون في الخدمات اللوجستية مع شبكة واسعة من دراجات التوصيل",
      descEn: "Specialized in logistics services with a wide network of delivery motorcycles",
    },
    {
      icon: Users,
      titleAr: "فريق محترف",
      titleEn: "Professional Team",
      descAr: "فريق عمل متخصص في الإدارة والقيادة مع سائقين متمرسين",
      descEn: "Specialized management team with experienced drivers",
    },
    {
      icon: TrendingUp,
      titleAr: "نمو سريع",
      titleEn: "Rapid Growth",
      descAr: "الشراكة مع المستثمرين داعم قوي لتطورنا وتوسعنا السريع",
      descEn: "Partnership with investors is a strong supporter of our rapid development and expansion",
    },
    {
      icon: Shield,
      titleAr: "أمان وثقة",
      titleEn: "Safety & Trust",
      descAr: "عقود موثقة ومعتمدة من مركز الأعمال السعودي",
      descEn: "Certified contracts approved by Saudi Business Center",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {language === "ar" ? "من نحن" : "About Us"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === "ar" ? "بوابة التسهيل للخدمات اللوجستية" : "Portal Logistics Services"}
            </h2>

            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                {language === "ar"
                  ? "نحن منشأة سعودية متخصصة في الخدمات اللوجستية. تعمل المنشأة على تشغيل شبكة واسعة من دراجات التوصيل لحسابها ولحساب المستثمرين."
                  : "We are a specialized Saudi establishment in logistics services. The establishment operates a wide network of delivery motorcycles for its own account and for investors."}
              </p>
              <p>
                {language === "ar"
                  ? "لدى المنشأة فريق عمل متخصص في الإدارة والقيادة، وسائقين متمرسين في جميع تطبيقات التوصيل داخل المملكة العربية السعودية."
                  : "The establishment has a specialized management team and experienced drivers in all delivery applications within the Kingdom of Saudi Arabia."}
              </p>
              <p>
                {language === "ar"
                  ? "تؤمن شركتنا بأن سوق الخدمات اللوجستية سوق كبير ويتسع للجميع. لذلك، تسخر الشركة مجهوداتها للعمل لحسابها الخاص والاستثمار للآخرين."
                  : "Our company believes that the logistics services market is large and accommodates everyone. Therefore, the company dedicates its efforts to work for its own account and invest for others."}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  120%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "ar" ? "عائد الربح" : "Profit Return"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "ar" ? "دراجة نارية" : "Motorcycles"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  1000+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "ar" ? "مستثمر" : "Investors"}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {language === "ar" ? feature.titleAr : feature.titleEn}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === "ar" ? feature.descAr : feature.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-900 border border-emerald-200 dark:border-emerald-900">
            <Target className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {language === "ar" ? "رؤيتنا" : "Our Vision"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === "ar"
                ? "أن نكون الشريك الأول للمستثمرين في مجال الخدمات اللوجستية، ونساهم في تطوير الاقتصاد التشاركي في المملكة العربية السعودية"
                : "To be the first partner for investors in the field of logistics services, and contribute to the development of the sharing economy in Saudi Arabia"}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900 border border-blue-200 dark:border-blue-900">
            <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {language === "ar" ? "رسالتنا" : "Our Mission"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === "ar"
                ? "تقديم خدمات لوجستية عالية الجودة مع توفير فرص استثمارية مربحة وآمنة للمستثمرين في جميع أنحاء المملكة"
                : "Providing high-quality logistics services while offering profitable and secure investment opportunities for investors throughout the Kingdom"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}