// src/app/layout.tsx
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { I18nProvider } from "@/providers/i18n-provider";
import { Header } from "@/components/layout/header";

// Arabic font
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

// English font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "بوابة التسهيل للخدمات اللوجستية | Logistics Services Portal",
  description: "بوابتك إلى عالم الاستثمار وتشغيل ودعم اللوجستي",
  keywords: "logistics, investment, Saudi Arabia, delivery, motorcycle",
  icons: {
    icon: [
      { url: "/images/logo.webp", type: "image/webp" },
      { url: "/images/logo.webp", type: "image/webp", sizes: "32x32" },
      { url: "/images/logo.webp", type: "image/webp", sizes: "16x16" },
    ],
    apple: [
      { url: "/images/logo.webp", type: "image/webp", sizes: "180x180" },
    ],
    shortcut: "/images/logo.webp",
  },
  openGraph: {
    title: "بوابة التسهيل للخدمات اللوجستية | Logistics Services Portal",
    description: "بوابتك إلى عالم الاستثمار وتشغيل ودعم اللوجستي",
    url: "https://portal-logistice.com",
    siteName: "Portal Logistice",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Portal Logistice Logo",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "بوابة التسهيل للخدمات اللوجستية | Logistics Services Portal",
    description: "بوابتك إلى عالم الاستثمار وتشغيل ودعم اللوجستي",
    images: ["/images/logo.webp"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${cairo.variable} ${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors overflow-x-hidden`}
      >
        <ThemeProvider>
          <I18nProvider>
            <Header />
            <main className="w-full overflow-x-hidden">{children}</main>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}