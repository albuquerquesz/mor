import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Diferenciais from "@/components/sections/Diferenciais";
import Sobre from "@/components/sections/Sobre";
import Galeria from "@/components/sections/Galeria";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Diferenciais />
      <Sobre />
      <Galeria />
      <CTAFinal />
      <Footer />
    </main>
  );
};

export default Index;
