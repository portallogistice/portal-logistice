// src/components/sections/register.tsx
"use client";

import { useI18n } from "@/providers/i18n-provider";
import { useState } from "react";
import { User, MapPin, Phone, Clock, Send, CheckCircle2, Sparkles } from "lucide-react";

const colors = {
  primary: "#003C7F",
  secondary: "#00A8E8",
  accent: "#0080C8",
};

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
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Validate Saudi phone number (starts with 05, 10 digits total)
  const validatePhone = (phone: string): boolean => {
    // Remove any spaces, dashes, or other characters
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // Check if it starts with 05 and has exactly 10 digits
    const phoneRegex = /^05\d{8}$/;
    
    if (!cleanedPhone) {
      setPhoneError(language === "ar" ? "رقم الهاتف مطلوب" : "Phone number is required");
      return false;
    }
    
    if (!phoneRegex.test(cleanedPhone)) {
      setPhoneError(language === "ar" ? "يرجى إدخال رقم هاتف صحيح (يبدأ بـ 05 ويتكون من 10 أرقام)" : "Please enter a valid phone number (starts with 05, 10 digits)");
      return false;
    }
    
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    const numericValue = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedValue = numericValue.slice(0, 10);
    
    setFormData({ ...formData, phone: limitedValue });
    
    // Clear error when user starts typing
    if (phoneError) {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPhoneError("");
    
    // Validate phone number before submission
    if (!validatePhone(formData.phone)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to your backend API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit registration');
      }

      const result = await response.json();
      console.log('Registration saved:', result);
      
      setIsSuccess(true);
      
      setTimeout(() => {
        setFormData({ fullName: "", city: "", phone: "", callTime: "" });
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setError(language === "ar" ? "حدث خطأ. يرجى المحاولة مرة أخرى." : "An error occurred. Please try again.");
      console.error('Registration error:', err);
    } finally {
      setIsSubmitting(false);
    }
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
    <section 
      id="register" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.primary}, transparent)` }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary}, transparent)` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
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
                <Sparkles className="w-4 h-4" style={{ color: colors.secondary }} />
              </div>
              <span 
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: colors.primary }}
              >
                {language === "ar" ? "انضم إلينا" : "Join Us"}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span style={{ color: colors.primary }}>
                {language === "ar" ? "سجل الآن و " : "register now and "}
              </span>
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
                }}
              >
                {language === "ar" ? "سنتواصل معك في أقرب وقت ممكن" : "will contact you as soon as possible"}
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {language === "ar"
                ? "بوابة الخدمات اللوجستية لاستثمار الأصول وتشغيلها كدراجات نارية ومركبات نقل"
                : "Logistics services portal for asset investment and operation"}
            </p>
          </div>

          <div 
            className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 shadow-2xl p-8 lg:p-10"
            style={{ borderColor: `${colors.secondary}20` }}
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  }}
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: colors.primary }}
                >
                  {language === "ar" ? "تم التسجيل بنجاح!" : "Registration Successful!"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === "ar"
                    ? "سنتواصل معك في أقرب وقت ممكن"
                    : "We will contact you as soon as possible"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label 
                    className="flex items-center gap-2 text-sm font-bold mb-2"
                    style={{ color: colors.primary }}
                  >
                    <User className="w-4 h-4" />
                    {language === "ar" ? "الاسم الكامل" : "Full Name"}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all focus:outline-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => e.target.style.borderColor = colors.secondary}
                    onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                    placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                  />
                </div>

                <div>
                  <label 
                    className="flex items-center gap-2 text-sm font-bold mb-2"
                    style={{ color: colors.primary }}
                  >
                    <MapPin className="w-4 h-4" />
                    {language === "ar" ? "من أي مدينة" : "City"}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all focus:outline-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => e.target.style.borderColor = colors.secondary}
                    onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                    placeholder={language === "ar" ? "أدخل مدينتك" : "Enter your city"}
                  />
                </div>

                <div>
                  <label 
                    className="flex items-center gap-2 text-sm font-bold mb-2"
                    style={{ color: colors.primary }}
                  >
                    <Phone className="w-4 h-4" />
                    {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={(e) => {
                      e.target.style.borderColor = phoneError ? "#ef4444" : "#e5e7eb";
                      validatePhone(formData.phone);
                    }}
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all focus:outline-none"
                    style={{ 
                      borderColor: phoneError ? "#ef4444" : "#e5e7eb"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.secondary;
                      setPhoneError("");
                    }}
                    placeholder="05xxxxxxxx"
                    maxLength={10}
                    inputMode="numeric"
                  />
                  {phoneError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <span>⚠</span>
                      {phoneError}
                    </p>
                  )}
                  {!phoneError && formData.phone && (
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      {language === "ar" ? "مثال: 0512345678" : "Example: 0512345678"}
                    </p>
                  )}
                </div>

                <div>
                  <label 
                    className="flex items-center gap-2 text-sm font-bold mb-2"
                    style={{ color: colors.primary }}
                  >
                    <Clock className="w-4 h-4" />
                    {language === "ar" ? "الوقت المناسب للاتصال" : "Preferred Call Time"}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.callTime}
                    onChange={(e) => setFormData({ ...formData, callTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all focus:outline-none"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => e.target.style.borderColor = colors.secondary}
                    onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{language === "ar" ? "جاري الإرسال..." : "Submitting..."}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{language === "ar" ? "اتصال بي" : "Call Me"}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }} />
              <span>{language === "ar" ? "استجابة سريعة خلال 24 ساعة" : "Quick response within 24 hours"}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }} />
              <span>{language === "ar" ? "بياناتك محمية بالكامل" : "Your data is fully protected"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}