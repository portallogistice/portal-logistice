// src/components/sections/roi-calculator.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Calculator, TrendingUp, ArrowRight, Zap, CheckCircle,
  Shield, Target, BarChart3, Sparkles, Info, FileCheck,
  DollarSign, Clock, Award, TrendingDown, Activity
} from "lucide-react";
import { useI18n } from "@/providers/i18n-provider";

const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

const styles = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes countUp {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 168, 232, 0.5); }
    50% { box-shadow: 0 0 40px rgba(0, 168, 232, 0.8); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .shimmer-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s infinite;
  }
  
  .count-up {
    animation: countUp 0.5s ease-out;
  }
  
  .glow-card {
    animation: glow 2s ease-in-out infinite;
  }
  
  .slide-left {
    animation: slideInLeft 0.6s ease-out;
  }
  
  .slide-right {
    animation: slideInRight 0.6s ease-out;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
  }
  
  input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

export function ROICalculatorSection() {
  const { language } = useI18n();
  const [bikeCount, setBikeCount] = useState(1);
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.getAttribute("data-id") || ""]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    
    const elements = sectionRef.current?.querySelectorAll("[data-id]");
    elements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  // Animate numbers when bike count changes
  useEffect(() => {
    setAnimateNumbers(true);
    const timer = setTimeout(() => setAnimateNumbers(false), 500);
    return () => clearTimeout(timer);
  }, [bikeCount]);

  // Traditional Plan Calculations
  const tradRevenue = 660 * 12 * 3 * bikeCount;
  const tradCosts = 7500 * bikeCount;
  const tradNetProfit = tradRevenue - tradCosts;
  const tradROI = 254;

  // Smart Plan Calculations
  const smartRevenue = 26920 * bikeCount;
  const smartCosts = 5250 * bikeCount;
  const smartNetProfit = 21760 * bikeCount;
  const smartROI = 360;
  
  const profitDifference = smartNetProfit - tradNetProfit;
  const dailyIncome = Math.floor(smartNetProfit / (3 * 365));
  const monthlyIncome = Math.floor(smartNetProfit / 36);

  return (
    <>
      <style>{styles}</style>
      <section 
        ref={sectionRef}
        id="calculator" 
        className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
            style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-10 blur-3xl"
            style={{ background: `radial-gradient(circle, ${colors.primary}, transparent)` }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16" data-id="header">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6 backdrop-blur-md shadow-sm hover:shadow-lg transition-all"
              style={{
                backgroundColor: `${colors.secondary}15`,
                border: `1px solid ${colors.secondary}30`,
              }}>
              <Calculator className="w-4 h-4" style={{ color: colors.secondary }} />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: colors.primary }}>
                {language === "ar" ? "حاسبة الأرباح التفاعلية" : "Interactive ROI Calculator"}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight" style={{ color: colors.primary }}>
              {language === "ar" ? "احسب " : "Calculate Your "}
              <span className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
                }}>
                {language === "ar" ? "أرباحك المتوقعة" : "Expected Returns"}
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === "ar" 
                ? "قارن بين الخطة التقليدية والخطة الذكية واكتشف الفرق في العوائد"
                : "Compare Traditional and Smart plans to discover the difference in returns"}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
            
            {/* Control Panel */}
            <div className="lg:col-span-4 slide-left" data-id="controls">
              <div className="sticky top-24 p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 shadow-xl"
                style={{ borderColor: `${colors.secondary}30` }}>
                
                {/* Bike Counter */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <label className="text-sm font-bold mb-1 block" style={{ color: colors.primary }}>
                        {language === "ar" ? "عدد الدراجات" : "Number of Bikes"}
                      </label>
                      <p className="text-xs text-gray-500">
                        {language === "ar" ? "اختر من 1 إلى 50" : "Choose from 1 to 50"}
                      </p>
                    </div>
                    <div className={`text-5xl font-bold ${animateNumbers ? 'count-up' : ''}`}
                      style={{ color: colors.secondary }}>
                      {bikeCount}
                    </div>
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
                  
                  <div className="flex justify-between text-xs text-gray-500 mt-3">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4 mb-8">
                  <StatCard
                    icon={Clock}
                    label={language === "ar" ? "مدة الاستثمار" : "Investment Period"}
                    value="3"
                    unit={language === "ar" ? "سنوات" : "years"}
                    color={colors.primary}
                  />
                  
                  <StatCard
                    icon={DollarSign}
                    label={language === "ar" ? "الاستثمار المطلوب" : "Required Investment"}
                    value={(6600 * bikeCount).toLocaleString()}
                    unit={language === "ar" ? "ر.س" : "SAR"}
                    color={colors.accent}
                    animate={animateNumbers}
                  />
                </div>

                {/* Daily Income Highlight */}
                <div className="relative overflow-hidden p-6 rounded-2xl text-white text-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                  }}>
                  <div className="shimmer-line" />
                  <Activity className="w-8 h-8 mx-auto mb-3 opacity-80" />
                  <p className="text-white/80 text-xs font-semibold mb-2 uppercase tracking-wide">
                    {language === "ar" ? "دخلك اليومي المتوقع" : "Expected Daily Income"}
                  </p>
                  <p className={`text-4xl font-bold mb-1 ${animateNumbers ? 'count-up' : ''}`}>
                    {dailyIncome.toLocaleString()}
                  </p>
                  <p className="text-sm opacity-90">
                    {language === "ar" ? "ريال يومياً 💰" : "SAR per day 💰"}
                  </p>
                  <p className="text-xs opacity-70 mt-2">
                    {language === "ar" ? "وأنت نائم" : "While you sleep"}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="lg:col-span-8 space-y-6" data-id="comparison">
              {/* Traditional Plan */}
              <div className="slide-left p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all hover:shadow-xl"
                style={{ borderColor: `${colors.primary}20` }}>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5" style={{ color: colors.primary }} />
                      <h3 className="text-xl sm:text-2xl font-bold" style={{ color: colors.primary }}>
                        {language === "ar" ? "الخطة التقليدية" : "Traditional Plan"}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "الأمان الكلاسيكي والتدفق النقدي المستقر" : "Classic Security & Stable Cash Flow"}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}15` }}>
                    <Target className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <MetricRow 
                    label={language === "ar" ? "إجمالي الإيرادات (36 شهر)" : "Total Revenue (36 months)"} 
                    value={tradRevenue}
                    animate={animateNumbers}
                  />
                  <MetricRow 
                    label={language === "ar" ? "التكاليف والصيانة التراكمية" : "Cumulative Costs & Maintenance"} 
                    value={tradCosts} 
                    isNegative 
                    animate={animateNumbers}
                  />
                  <div className="pt-4 border-t-2" style={{ borderColor: `${colors.primary}30` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg" style={{ color: colors.primary }}>
                        {language === "ar" ? "صافي الربح الكلي" : "Total Net Profit"}
                      </span>
                      <span className={`text-2xl sm:text-3xl font-bold ${animateNumbers ? 'count-up' : ''}`}
                        style={{ color: colors.primary }}>
                        {tradNetProfit.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl text-center"
                    style={{ backgroundColor: `${colors.primary}10` }}>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {language === "ar" ? "عائد الاستثمار" : "ROI"}
                    </p>
                    <p className="text-2xl font-bold" style={{ color: colors.primary }}>
                      {tradROI}%
                    </p>
                  </div>
                  <div className="p-4 rounded-xl text-center"
                    style={{ backgroundColor: `${colors.primary}10` }}>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {language === "ar" ? "دخل شهري" : "Monthly Income"}
                    </p>
                    <p className={`text-xl font-bold ${animateNumbers ? 'count-up' : ''}`}
                      style={{ color: colors.primary }}>
                      {(tradNetProfit / 36).toFixed(0)}
                    </p>
                  </div>
                </div>

                {/* Traditional Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: Shield, text: language === "ar" ? "تملك كامل" : "Full Ownership" },
                    { icon: Clock, text: language === "ar" ? "استثمار طويل" : "Long-term" },
                    { icon: CheckCircle, text: language === "ar" ? "تدفق مستقر" : "Stable Flow" },
                    { icon: Award, text: language === "ar" ? "أمان كلاسيكي" : "Classic Security" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg"
                        style={{ backgroundColor: `${colors.primary}05` }}>
                        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: colors.primary }} />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Smart Plan */}
              <div className="relative slide-right p-6 sm:p-8 rounded-2xl border-2 shadow-2xl glow-card"
                style={{
                  borderColor: colors.secondary,
                  background: `linear-gradient(135deg, ${colors.secondary}05 0%, ${colors.accent}05 100%)`
                }}>
                
                {/* Recommended Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1.5 z-10"
                  style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  {language === "ar" ? "موصى بها ⭐" : "Recommended ⭐"}
                </div>

                <div className="flex items-center justify-between mb-6 mt-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5" style={{ color: colors.secondary }} />
                      <h3 className="text-xl sm:text-2xl font-bold" style={{ color: colors.secondary }}>
                        {language === "ar" ? "الخطة الذكية" : "Smart Plan"}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "كفاءة مدعومة بالبيانات ومضاعفة العائد" : "Data-Driven Efficiency & Multiplied Returns"}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.secondary}20` }}>
                    <BarChart3 className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <MetricRow 
                    label={language === "ar" ? "إيرادات + بيع الأصل (سنوياً)" : "Revenue + Asset Sale (Annual)"} 
                    value={smartRevenue} 
                    animate={animateNumbers}
                  />
                  <MetricRow 
                    label={language === "ar" ? "تكلفة التجديد السنوي" : "Annual Renewal Cost"} 
                    value={smartCosts} 
                    isNegative 
                    animate={animateNumbers}
                  />
                  <div className="pt-4 border-t-2" style={{ borderColor: `${colors.secondary}40` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg" style={{ color: colors.secondary }}>
                        {language === "ar" ? "صافي الربح الكلي" : "Total Net Profit"}
                      </span>
                      <span className={`text-2xl sm:text-3xl font-bold ${animateNumbers ? 'count-up' : ''}`}
                        style={{ color: colors.secondary }}>
                        {smartNetProfit.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl text-center text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
                    <p className="text-xs opacity-90 mb-1">
                      {language === "ar" ? "عائد الاستثمار" : "ROI"}
                    </p>
                    <p className="text-2xl font-bold">
                      {smartROI}%
                    </p>
                  </div>
                  <div className="p-4 rounded-xl text-center text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)` }}>
                    <p className="text-xs opacity-90 mb-1">
                      {language === "ar" ? "دخل شهري" : "Monthly Income"}
                    </p>
                    <p className={`text-xl font-bold ${animateNumbers ? 'count-up' : ''}`}>
                      {monthlyIncome.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Profit Difference Highlight */}
                <div className="relative overflow-hidden text-center p-4 rounded-xl mb-6"
                  style={{ 
                    backgroundColor: `${colors.secondary}20`,
                    border: `2px solid ${colors.secondary}40`
                  }}>
                  <TrendingUp className="w-6 h-6 mx-auto mb-2" style={{ color: colors.secondary }} />
                  <p className="text-xs font-semibold mb-1" style={{ color: colors.primary }}>
                    {language === "ar" ? "أرباح إضافية مقارنة بالخطة التقليدية" : "Extra Profit vs Traditional"}
                  </p>
                  <p className={`text-2xl font-bold ${animateNumbers ? 'count-up' : ''}`}
                    style={{ color: colors.secondary }}>
                    +{profitDifference.toLocaleString()} {language === "ar" ? "ر.س" : "SAR"}
                  </p>
                </div>

                {/* Smart Features */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Target, text: language === "ar" ? "توزيع جغرافي" : "Geo Distribution" },
                    { icon: BarChart3, text: language === "ar" ? "قرارات بيانات" : "Data Decisions" },
                    { icon: TrendingUp, text: language === "ar" ? "مضاعفة عائد" : "Multiplied ROI" },
                    { icon: Activity, text: language === "ar" ? "تحسين مستمر" : "Optimization" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg"
                        style={{ backgroundColor: `${colors.secondary}15` }}>
                        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Legal Notice */}
              <div className="flex items-start gap-3 p-4 rounded-xl border-2"
                style={{ 
                  backgroundColor: `${colors.accent}05`,
                  borderColor: `${colors.accent}20`
                }}>
                <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.accent }} />
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === "ar" 
                    ? "جميع الأرباح المذكورة تخضع لعقود استثمارية موثقة رسمياً ومعتمدة من مركز الأعمال السعودي"
                    : "All profits are subject to officially documented investment contracts certified by Saudi Business Center"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 max-w-5xl mx-auto" data-id="cta">
            <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl text-white shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
              <div className="shimmer-line" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {language === "ar" ? "استثمار ذكي = أصول جديدة دائماً" : "Smart Investment = Always New Assets"}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {language === "ar" 
                        ? "في الخطة الذكية، تمتلك دائماً دراجة جديدة (0 كم) مما يضمن سهولة التسييل في أي وقت"
                        : "With Smart Plan, you always own a new bike (0 km) ensuring easy liquidation anytime"}
                    </p>
                  </div>
                </div>
                
                <a
                  href="#register"
                  className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 bg-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
                  style={{ color: colors.primary }}
                >
                  <span>{language === "ar" ? `ابدأ بـ ${bikeCount} دراجة` : `Start with ${bikeCount} Bikes`}</span>
                  <ArrowRight className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper Components
function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  unit, 
  color,
  animate = false
}: { 
  icon: any; 
  label: string; 
  value: string; 
  unit: string; 
  color: string;
  animate?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-105"
      style={{ backgroundColor: `${color}10` }}>
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}20` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 truncate">{label}</p>
        <p className={`text-lg font-bold truncate ${animate ? 'count-up' : ''}`} style={{ color }}>
          {value} <span className="text-xs font-normal">{unit}</span>
        </p>
      </div>
    </div>
  );
}

// Helper Component
function MetricRow({ label, value, isNegative = false, animate = false }: {
  label: string;
  value: number;
  isNegative?: boolean;
  animate?: boolean;
}) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className={animate ? "font-semibold text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}>
        {label}
      </span>
      <span className={`font-mono font-bold ${
        isNegative 
          ? "text-red-500" 
          : animate 
            ? "text-emerald-600" 
            : "text-gray-700 dark:text-gray-300"
      }`}>
        {isNegative ? "-" : "+"}{value.toLocaleString()}
      </span>
    </div>
  );
}