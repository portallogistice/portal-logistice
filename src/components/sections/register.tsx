// src/components/sections/register.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { useState } from "react";
import { User, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";

export function RegisterSection() {
  const { language } = useI18n();
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
    callTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ fullName: "", city: "", phone: "", callTime: "" });
      setIsSuccess(false);
    }, 3000);
  };

  const callTimes = [
    { value: "9:30-10:30", label: "ص 9:30 - ص 10:30" },
    { value: "10:30-11:30", label: "ص 10:30 - ص 11:30" },
    { value: "11:30-12:30", label: "ص 11:30 - م 12:30" },
    { value: "12:30-13:30", label: "م 12:30 - م 01:30" },
    { value: "13:30-14:30", label: "م 01:30 - م 02:30" },
    { value: "14:30-15:30", label: "م 02:30 - م 03:30" },
    { value: "15:30-16:30", label: "م 03:30 - م 04:30" },
    { value: "16:30-17:30", label: "م 04:30 - م 05:30" },
  ];

  return (
    <section id="register" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4 sm:mb-5 md:mb-6">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {language === "ar" ? "انضم إلينا" : "Join Us"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight px-2">
              {language === "ar" ? "تسجيل كمستثمر" : "Register as Investor"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              {language === "ar"
                ? "بوابة الخدمات اللوجستية لاستثمار الأصول وتشغيلها كدراجات نارية ومركبات نقل خفيفة وثقيلة"
                : "Logistics services portal for asset investment and operation of motorcycles and light & heavy transport vehicles"}
            </p>
          </div>

          {/* Registration Form */}
          <div className="relative">
            {/* Decorative Elements - Hidden on mobile for performance */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50 hidden sm:block" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-300 dark:bg-emerald-800/20 rounded-full blur-3xl opacity-50 hidden sm:block" />

            <div className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-5 sm:p-6 md:p-8 lg:p-12">
              {isSuccess ? (
                <div className="text-center py-8 sm:py-10 md:py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4 sm:mb-5 md:mb-6">
                    <CheckCircle2 className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {language === "ar" ? "تم التسجيل بنجاح!" : "Registration Successful!"}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {language === "ar"
                      ? "سنتواصل معك في أقرب وقت ممكن"
                      : "We will contact you as soon as possible"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {language === "ar" ? "الاسم الكامل" : "Full Name"}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {language === "ar" ? "من أي مدينة" : "City"}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder={language === "ar" ? "أدخل مدينتك" : "Enter your city"}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder={language === "ar" ? "05xxxxxxxx" : "05xxxxxxxx"}
                    />
                  </div>

                  {/* Call Time */}
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {language === "ar" ? "الوقت المناسب للاتصال" : "Preferred Call Time"}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.callTime}
                      onChange={(e) => setFormData({ ...formData, callTime: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                      <option value="">
                        {language === "ar" ? "اختر الوقت المناسب" : "Select preferred time"}
                      </option>
                      {callTimes.map((time) => (
                        <option key={time.value} value={time.value}>
                          {time.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 active:from-emerald-800 active:to-emerald-700 text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{language === "ar" ? "جاري الإرسال..." : "Submitting..."}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{language === "ar" ? "اتصال بي" : "Call Me"}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}