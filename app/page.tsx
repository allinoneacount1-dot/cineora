import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { GenesisLayer } from "@/components/sections/GenesisLayer";
import { TokenUtility } from "@/components/sections/TokenUtility";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <GenesisLayer />
      <TokenUtility />
      <FinalCTA />
      <Footer />
    </main>
  );
}
