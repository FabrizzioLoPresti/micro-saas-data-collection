import AboutSaaS from "@/components/Layout/about-saas";
import Footer from "@/components/Layout/footer";
import Hero from "@/components/Layout/hero";
import ParallaxText from "@/components/Layout/parallax-text";
import Project from "@/components/Layout/project";

export default function Home() {
  return (
    <div className="min-h-screen h-full background">
      <Hero />
      <ParallaxText />
      <Project />
      <AboutSaaS />
      <Footer />
    </div>
  );
}
