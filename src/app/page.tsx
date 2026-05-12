// src/app/page.tsx
import { HeroSection } from "@/components/sections/hero";
import { TrustBarSection } from "@/components/sections/trust-bar";
import { StepsSection } from "@/components/sections/steps";
import { RegisterSection } from "@/components/sections/register";
import { AboutSection } from "@/components/sections/about";
import { FAQSection } from "@/components/sections/faq";
import { PartnersSection } from "@/components/sections/partners";
import { Footer } from "@/components/layout/footer";
import { VideoSection } from "@/components/sections/video";
import { ROICalculatorSection } from "@/components/sections/roicalculator";
import { DigitalChatSection } from "@/components/sections/digitalchat";
import { ReportsSection } from "@/components/sections/report";
import { OffersSection } from "@/components/sections/offers";
import { useI18n } from "@/providers/i18n-provider";

export default function Home() {
  return (

    <>
      <HeroSection />
      <TrustBarSection />
      <VideoSection />
      <ROICalculatorSection />
      <DigitalChatSection />
      <AboutSection />
      <StepsSection />
      <OffersSection />
      <PartnersSection />
      <FAQSection />
      <ReportsSection />
      <RegisterSection />
      <Footer />
    </>


  );
}
