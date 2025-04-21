import Head from "next/head";

import VideoHero from "@/components/VideoHero";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <div>
      <VideoHero />
      <RevealSection />
    </div>
  );
}