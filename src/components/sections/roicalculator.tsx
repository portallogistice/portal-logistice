// src/components/sections/roi-calculator.tsx
"use client";

import React, { useState } from "react";
import { useI18n } from "@/providers/i18n-provider";
import { Calculator, TrendingUp, ArrowRight, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

// Brand colors from logo
const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

export function ROICalculatorSection() {
  const { language } = useI18n();
  const [bikeCount, setBikeCount] = useState(1);
  
  // Traditional Plan (3 years lease)
  const tradRevenue = 660 * 12 * 3 * bikeCount;
  const tradCosts = 7500 * bikeCount;
  const tradNetProfit = tradRevenue - tradCosts;
  const tradROI = 254;

  // Smart Plan (Annual liquidation)
  const smartRevenue = 26920 * bikeCount;
  const smartCosts = 5250 * bikeCount;
  const smartNetProfit = 21760 * bikeCount;
  const smartROI = 330;
  
  const profitDifference = smartNetProfit - tradNetProfit;
  const dailyIncome = Math.floor(smartNetProfit / (3 * 365));

  return (
    <section 
      id="calculator" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            style={{
              backgroundColor: `${colors.secondary}10`,
              border: `1px solid ${colors.secondary}20`,
            }}
          >
            <div 
              className="p-1.5 rounded-full"
              style={{ backgroundColor: `${colors.secondary}20` }}
            >
              <Calculator className="w-4 h-4" style={{ color: colors.secondary }} />
            </div>
            <span 
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              {language === "ar" ? "حاسبة الأرباح" : "ROI Calculator"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span style={{ color: colors.primary }}>
              {language === "ar" ? "احسب " : "Calculate Your "}
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
              }}
            >
              {language === "ar" ? "أرباحك المتوقعة" : "Expected Returns"}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "ar" 
              ? "قارن بين الخطة التقليدية والخطة الذكية واكتشف الفرق"
              : "Compare traditional and smart plans to discover the difference"}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          
          {/* Control Panel */}
          <div className="lg:col-span-4">
            <div 
              className="sticky top-24 p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 shadow-xl"
              style={{ borderColor: `${colors.secondary}20` }}
            >
              {/* Bike Counter */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label 
                    className="text-sm font-bold"
                    style={{ color: colors.primary }}
                  >
                    {language === "ar" ? "عدد الدراجات" : "Number of Bikes"}
                  </label>
                  <span 
                    className="text-4xl font-bold"
                    style={{ color: colors.secondary }}
                  >
                    {bikeCount}
                  </span>
                </div>
                
                <input
                  type="range"
                  value={bikeCount}
                  onChange={(e) => setBikeCount(Number(e.target.value))}
                  min={1}
                  max={50}
                  step={1}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${colors.primary} 0%, ${colors.secondary} ${(bikeCount / 50) * 100}%, #e5e7eb ${(bikeCount / 50) * 100}%, #e5e7eb 100%)`,
                  }}
                />
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>

              {/* Info Card */}
              <div 
                className="p-4 rounded-xl mb-6"
                style={{ backgroundColor: `${colors.secondary}10` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                  <div>
                    <h4 
                      className="font-bold text-sm mb-1"
                      style={{ color: colors.primary }}
                    >
                      {language === "ar" ? "مدة الاستثمار" : "Investment Period"}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "3 سنوات (حسب التقرير)" : "3 Years (Per Report)"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Daily Income */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br" style={{
                backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
              }}>
                <p className="text-white/80 text-xs font-semibold mb-2">
                  {language === "ar" ? "دخل يومي متوقع" : "Expected Daily Income"}
                </p>
                <p className="text-white text-3xl font-bold">
                  {dailyIncome.toLocaleString()}
                  <span className="text-lg font-normal ml-1">
                    {language === "ar" ? "ريال" : "SAR"}
                  </span>
                </p>
                <p className="text-white/70 text-xs mt-2">
                  {language === "ar" ? "وأنت نائم 💤" : "While you sleep 💤"}
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            
            {/* Traditional Plan */}
            <div className="p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-600 dark:text-gray-400 mb-1">
                  {language === "ar" ? "الخطة التقليدية" : "Traditional Plan"}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "ar" ? "تأجير لمدة 3 سنوات" : "3-Year Lease"}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <MetricRow 
                  label={language === "ar" ? "إجمالي الإيرادات" : "Total Revenue"} 
                  value={tradRevenue} 
                />
                <MetricRow 
                  label={language === "ar" ? "التكاليف والصيانة" : "Costs & Maintenance"} 
                  value={tradCosts} 
                  isNegative 
                />
                <div className="pt-3 border-t-2" style={{ borderColor: colors.primary }}>
                  <div className="flex justify-between items-center">
                    <span className="font-bold" style={{ color: colors.primary }}>
                      {language === "ar" ? "صافي الربح" : "Net Profit"}
                    </span>
                    <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                      {tradNetProfit.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div 
                className="p-4 rounded-xl flex justify-between items-center"
                style={{ backgroundColor: `${colors.primary}10` }}
              >
                <span className="text-sm font-bold" style={{ color: colors.primary }}>
                  {language === "ar" ? "عائد الاستثمار" : "ROI"}
                </span>
                <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                  {tradROI}%
                </span>
              </div>
            </div>

            {/* Smart Plan */}
            <div className="relative p-6 lg:p-8 rounded-2xl border-2 shadow-2xl transform hover:scale-[1.02] transition-transform" style={{
              borderColor: colors.secondary,
              backgroundColor: `${colors.secondary}05`,
            }}>
              {/* Recommended Badge */}
              <div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1"
                style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
              >
                <Zap className="w-3 h-3 fill-current" />
                {language === "ar" ? "موصى بها" : "Recommended"}
              </div>

              <div className="mb-6 mt-2">
                <h3 className="text-lg font-bold mb-1" style={{ color: colors.secondary }}>
                  {language === "ar" ? "الخطة الذكية" : "Smart Plan"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "ar" ? "تصفية سنوية" : "Annual Liquidation"}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <MetricRow 
                  label={language === "ar" ? "إيرادات + بيع الأصل" : "Revenue + Asset Sale"} 
                  value={smartRevenue} 
                  highlight 
                />
                <MetricRow 
                  label={language === "ar" ? "تكلفة التجديد" : "Renewal Cost"} 
                  value={smartCosts} 
                  isNegative 
                />
                <div className="pt-3 border-t-2" style={{ borderColor: colors.secondary }}>
                  <div className="flex justify-between items-center">
                    <span className="font-bold" style={{ color: colors.secondary }}>
                      {language === "ar" ? "صافي الربح" : "Net Profit"}
                    </span>
                    <span className="text-2xl font-bold" style={{ color: colors.secondary }}>
                      {smartNetProfit.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div 
                className="p-4 rounded-xl flex justify-between items-center text-white mb-4"
                style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
              >
                <span className="text-sm font-bold">
                  {language === "ar" ? "عائد الاستثمار" : "ROI"}
                </span>
                <span className="text-2xl font-bold">
                  +{smartROI}%
                </span>
              </div>

              {/* Profit Difference */}
              <div 
                className="text-center p-3 rounded-lg text-sm font-bold"
                style={{ 
                  backgroundColor: `${colors.secondary}20`,
                  color: colors.primary,
                }}
              >
                🎯 {language === "ar" ? "أرباح إضافية:" : "Extra Profit:"} +{profitDifference.toLocaleString()} {language === "ar" ? "ريال" : "SAR"}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div 
          className="mt-16 max-w-5xl mx-auto p-8 rounded-2xl text-white shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {language === "ar" ? "استثمار ذكي = أصول جديدة دائماً" : "Smart Investment = Always New Assets"}
                </h3>
                <p className="text-white/90 text-sm">
                  {language === "ar" 
                    ? "في الخطة الذكية، تمتلك دائماً دراجة جديدة تضمن سهولة التسييل في أي وقت"
                    : "With the Smart Plan, you always own a new bike ensuring easy liquidation anytime"}
                </p>
              </div>
            </div>
            
            <Link
              href="#register"
              className="flex-shrink-0 px-8 py-4 bg-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
              style={{ color: colors.primary }}
            >
              <span>{language === "ar" ? `ابدأ بـ ${bikeCount} دراجة` : `Start with ${bikeCount} Bikes`}</span>
              <ArrowRight className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component
function MetricRow({ label, value, isNegative = false, highlight = false }: {
  label: string;
  value: number;
  isNegative?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className={highlight ? "font-semibold text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}>
        {label}
      </span>
      <span className={`font-mono font-bold ${
        isNegative 
          ? "text-red-500" 
          : highlight 
            ? "text-emerald-600" 
            : "text-gray-700 dark:text-gray-300"
      }`}>
        {isNegative ? "-" : "+"}{value.toLocaleString()}
      </span>
    </div>
  );
}