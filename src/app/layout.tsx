// src/app/layout.tsx
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { I18nProvider } from "@/providers/i18n-provider";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

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
      { url: "/images/logo.png", type: "image/png" },
      { url: "/images/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/images/logo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/images/logo.png",
  },
  openGraph: {
    title: "بوابة التسهيل للخدمات اللوجستية | Logistics Services Portal",
    description: "بوابتك إلى عالم الاستثمار وتشغيل ودعم اللوجستي",
    url: "https://portal-logistice.com",
    siteName: "Portal Logistice",
    images: [
      {
        url: "/images/logo.png",
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
    images: ["/images/logo.png"],
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M5RWZFC3');
            `,
          }}
        />
        
      </head>
      <body
        className={`${cairo.variable} ${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors overflow-x-hidden`}
      >
          <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5RWZFC3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider>
          <I18nProvider>
            <Header />
            <main className="w-full  overflow-x-hidden">{children}</main>
            <WhatsAppButton />
          </I18nProvider>
        </ThemeProvider>
        
        
        {/* Tawk.to Chat Script */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69552e6649f94a197f5c96bc/1jdqbqgi6';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}