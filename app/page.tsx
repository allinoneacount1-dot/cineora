import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { SevenLayers } from "@/components/sections/SevenLayers";
import { GenesisLayer } from "@/components/sections/GenesisLayer";
import { TokenUtility } from "@/components/sections/TokenUtility";
import { Partners } from "@/components/sections/Partners";
import { Roadmap } from "@/components/sections/Roadmap";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Hero />
      <Manifesto />
      <SevenLayers />
      <GenesisLayer />
      <TokenUtility />
      <Partners />
      <Roadmap />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}