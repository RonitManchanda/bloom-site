import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import WhyDifferent from "@/components/sections/WhyDifferent";
import Features from "@/components/sections/Features";
import DailyInsights from "@/components/sections/DailyInsights";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Principles />
      <WhyDifferent />
      <Features />
      <DailyInsights />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
