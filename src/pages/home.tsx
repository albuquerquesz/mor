import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import Diferenciais from "@/components/sections/differentials";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { } from "@/components/sections/cta-final";
import Footer from "@/components/sections/footer";

export const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Diferenciais />
      <About />
      <Gallery />
      <CTAFinal />
      <Footer />
    </main>
  );
};

