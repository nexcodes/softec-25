import VideoHero from "@/components/VideoHero";
import FeatureCards from "@/components/FeatureCards";
import LogoCarousel from "@/components/LogoCarousel";
import CTASignup from "@/components/CTASignup";

import  Header  from "@/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <VideoHero />
      <FeatureCards />
      <LogoCarousel />
      <CTASignup />
      
    </>
  );
}
