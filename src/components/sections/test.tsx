// src/components/sections/roi-calculator.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useI18n } from "@/providers/i18n-provider";
import { ShieldCheck, Zap, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export function TestSection() {
  const { language } = useI18n();
  const [bikes, setBikes] = useState([1]);
  
  // Constants based on your report
  const bikeCount = bikes[0];
  
  // Traditional Plan Calculations
  const tradRevenue = 660 * 12 * 3 * bikeCount;
  const tradCosts = 7500 * bikeCount;
  const tradNetProfit = tradRevenue - tradCosts;
  const tradROI = 254;

  // Smart Plan Calculations
  const smartRevenue = 26920 * bikeCount;
  const smartCosts = 5250 * bikeCount;
  const smartNetProfit = 21760 * bikeCount;
  const smartROI = 330;
  
  const profitDifference = smartNetProfit - tradNetProfit;

  return (
    <section id="calculator" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full mb-4 border border-indigo-100 dark:border-indigo-800">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              {language === "ar" ? "حاسبة الأرباح التفاعلية" : "Interactive ROI Calculator"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {language === "ar" ? "قارن وشاهد قوة استثمارك" : "Compare & See Your Investment Power"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {language === "ar" 
              ? "استخدم شريط السحب لتحديد عدد الدراجات واكتشف الفرق بين الاستثمار التقليدي والذكي" 
              : "Use the slider to select the number of bikes and discover the difference between traditional and smart investing."}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Inputs Panel */}
          <div className="lg:col-span-4 space-y-8 bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-lg font-bold text-gray-900 dark:text-white">
                  {language === "ar" ? "عدد الدراجات النارية" : "Number of Motorcycles"}
                </label>
                <span className="text-4xl font-black text-[#1A5134]">{bikeCount}</span>
              </div>
              <input
                type="range"
                value={bikes[0]}
                onChange={(e) => setBikes([Number(e.target.value)])}
                max={50}
                min={1}
                step={1}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Info className="w-6 h-6 text-[#1A5134]" />
              </div>
              <div>
                <h4 className="font-bold text-sm dark:text-white">
                  {language === "ar" ? "مدة الاستثمار" : "Investment Duration"}
                </h4>
                <p className="text-xs text-gray-500">{language === "ar" ? "3 سنوات (حسب التقرير التحليلي)" : "3 Years (Per Analytical Report)"}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 italic">
                    {language === "ar" 
                      ? "* هذا الاستثمار يدر عليك تقريباً " 
                      : "* This investment earns you approx. "}
                    <span className="font-bold text-[#1A5134]">
                        {Math.floor(smartNetProfit / (3 * 365)).toLocaleString()} {language === "ar" ? "ريال" : "SAR"}
                    </span>
                    {language === "ar" ? " يومياً وأنت نائم." : " daily while you sleep."}
                </p>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            
            {/* Traditional Plan */}
            <div className="relative p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-500 mb-1">
                  {language === "ar" ? "الخطة التقليدية" : "Traditional Plan"}
                </h3>
                <p className="text-sm text-gray-400">{language === "ar" ? "تأجير لـ 3 سنوات" : "Leasing for 3 Years"}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <ResultRow label={language === "ar" ? "إجمالي الإيرادات" : "Total Revenue"} value={tradRevenue} />
                <ResultRow label={language === "ar" ? "التكاليف والصيانة" : "Costs & Maintenance"} value={tradCosts} isNegative />
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{language === "ar" ? "صافي الربح" : "Net Profit"}</span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{tradNetProfit.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 flex justify-between items-center">
                <span className="text-sm font-medium">{language === "ar" ? "عائد الاستثمار" : "ROI"}</span>
                <span className="text-xl font-black text-gray-400">{tradROI}%</span>
              </div>
            </div>

            {/* Smart Plan (Recommended) */}
            <div className="relative p-8 rounded-3xl border-2 border-[#1A5134] bg-emerald-50/30 dark:bg-[#1A5134]/5 shadow-2xl shadow-[#1A5134]/10 flex flex-col transform hover:scale-[1.02] transition-transform">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1A5134] text-white px-6 py-1 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 whitespace-nowrap">
                <Zap className="w-3 h-3 fill-current" />
                {language === "ar" ? "الخطة الذكية (موصى بها)" : "Smart Plan (Recommended)"}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1A5134] mb-1">
                  {language === "ar" ? "استثمار التصفية السنوية" : "Annual Liquidation Plan"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{language === "ar" ? "تجديد الأصول المستمر" : "Continuous Asset Renewal"}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <ResultRow label={language === "ar" ? "إيرادات + بيع الأصل" : "Revenue + Asset Sale"} value={smartRevenue} highlight />
                <ResultRow label={language === "ar" ? "تكلفة التجديد" : "Renewal Cost"} value={smartCosts} isNegative />
                <div className="pt-4 border-t border-[#1A5134]/20">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#1A5134]">{language === "ar" ? "صافي الربح" : "Net Profit"}</span>
                    <span 
                      key={smartNetProfit}
                      className="text-3xl font-black"
                    >
                      {smartNetProfit.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto bg-[#1A5134] rounded-2xl p-4 flex justify-between items-center text-white">
                <span className="text-sm font-bold">{language === "ar" ? "عائد الاستثمار" : "ROI"}</span>
                <span className="text-2xl font-black">+{smartROI}%</span>
              </div>

              {/* Difference Badge */}
              <div className="mt-4 text-center">
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 py-2 rounded-lg animate-pulse">
                   {language === "ar" 
                    ? `أرباح إضافية بقيمة ${profitDifference.toLocaleString()} ريال عند اختيارك هذه الخطة` 
                    : `Extra profit of ${profitDifference.toLocaleString()} SAR with this plan`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Liquid Highlight Footer */}
        <div className="mt-12 p-6 bg-indigo-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-200 dark:shadow-none">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="font-medium text-sm md:text-base">
                    {language === "ar" 
                      ? "في الخطة الذكية، أنت لا تملك أرباحاً فقط، بل تملك دائماً دراجة نارية جديدة كلياً تضمن لك سهولة التسييل في أي وقت."
                      : "In the Smart Plan, you don't just have profits; you always own a brand-new motorcycle ensuring easy liquidation anytime."}
                </p>
            </div>
            <Link 
                href="#register" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-colors flex items-center gap-2 shrink-0 whitespace-nowrap shadow-lg"
            >
                {language === "ar" ? `ابدأ استثمارك بـ ${bikeCount} دراجة` : `Start with ${bikeCount} Bikes`}
                <ArrowRight className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} />
            </Link>
        </div>
      </div>
    </section>
  );
}

function ResultRow({ label, value, isNegative = false, highlight = false }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className={highlight ? "font-bold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}>
        {label}
      </span>
      <span className={`font-mono font-bold ${isNegative ? "text-red-500" : highlight ? "text-emerald-600" : "text-gray-700 dark:text-gray-300"}`}>
        {isNegative ? "-" : "+"}{value.toLocaleString()}
      </span>
    </div>
  );
}