// src/app/page.tsx
import { HeroSection } from "@/components/sections/hero";
import { StepsSection } from "@/components/sections/steps";
import { RegisterSection } from "@/components/sections/register";
import { AboutSection } from "@/components/sections/about";
import { FAQSection } from "@/components/sections/faq";
import { PartnersSection } from "@/components/sections/partners";
import { Footer } from "@/components/layout/footer";
import { VideoSection } from "@/components/sections/video";
import { TestSection } from "@/components/sections/test";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <TestSection /> 
      <AboutSection />
      <StepsSection />
      <PartnersSection />
      <FAQSection />
      <RegisterSection />
      <Footer />
    </>
  );
}