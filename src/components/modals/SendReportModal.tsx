"use client";

import { useState, useEffect } from "react";
import { X, Mail, Check, AtSign } from "lucide-react";
import { useI18n } from "@/providers/i18n-provider"; // adjust path if needed

interface SendReportModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export default function SendReportModal({
  open,
  onClose,
  onSuccess,
}: SendReportModalProps) {
  const { language, toggleLanguage, t } = useI18n();
  const isArabic = language === "ar";

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem("preferredReportEmail");
      if (saved) setEmail(saved);
    }
  }, [open]);

  useEffect(() => {
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()));
  }, [email]);

  if (!open) return null;

  const handleSubmit = () => {
    if (!isValid) {
      setError(t("invalidEmail"));
      return;
    }

    localStorage.setItem("email", email.trim());
    setError("");
    onSuccess(email.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-[8px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className={`
          relative w-full max-w-md sm:max-w-lg 
          transform transition-all duration-300
          rounded-2xl sm:rounded-3xl 
          bg-white dark:bg-gray-900 
          shadow-2xl 
          border border-gray-200/50 dark:border-gray-800
          animate-in fade-in zoom-in-95 duration-200
          max-h-[90vh] overflow-hidden flex flex-col
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
              <Mail size={20} className="sm:size-5" />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {t("receiveReports")}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {t("emailDescription")}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={t("close")}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-6 py-6 sm:py-7 flex-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {t("emailAddress")}
          </label>

          <div className="relative">
            <div
              className={`absolute inset-y-0 ${
                isArabic ? "right-0 pr-4" : "left-0 pl-4"
              } flex items-center pointer-events-none`}
            >
              <AtSign size={18} className="text-gray-400 dark:text-gray-500" />
            </div>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              autoComplete="email"
              autoFocus
              dir="ltr" // email should always be LTR
              className={`
                w-full ${isArabic ? "pr-11 pl-4" : "pl-11 pr-4"} py-3.5 rounded-xl 
                bg-gray-50 dark:bg-gray-950 
                border border-gray-200 dark:border-gray-800
                text-gray-900 dark:text-gray-100 text-left
                placeholder-gray-400 dark:placeholder-gray-600
                focus:border-blue-500 dark:focus:border-blue-500
                focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/25
                focus:bg-white dark:focus:bg-gray-950
                transition-all duration-200 outline-none
                ${error ? "border-red-500 focus:border-red-500" : ""}
              `}
            />
          </div>

          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            {t("privacyNote")}
          </p>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-5 sm:py-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-950/50 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="
              flex-1 order-2 sm:order-1
              py-3.5 px-5 rounded-xl 
              border border-gray-300 dark:border-gray-700
              text-gray-700 dark:text-gray-300 font-medium
              hover:bg-gray-100 dark:hover:bg-gray-800 
              active:scale-[0.98]
              transition-all duration-200
            "
          >
            {t("cancel")}
          </button>

          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`
              flex-1 order-1 sm:order-2
              flex items-center justify-center gap-2.5
              py-3.5 px-6 rounded-xl font-semibold
              transition-all duration-200
              active:scale-[0.98]
              shadow-lg shadow-blue-600/10 dark:shadow-blue-600/20
              ${
                isValid
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            <Check size={18} />
            {t("saveAndContinue")}
          </button>
        </div>
      </div>
    </div>
  );
}