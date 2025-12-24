import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20costura.";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={logo} 
                alt="Artes com a Môr - Costura de Alto Padrão" 
                className="h-24 lg:h-32 mx-auto lg:mx-0"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground mb-6"
            >
              A arte de transformar{" "}
              <span className="text-primary italic">tecidos</span> em{" "}
              <span className="text-primary italic">memórias</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 font-light"
            >
              Costura de alto padrão com atenção aos detalhes que fazem toda a diferença. 
              Cada peça é única, assim como você.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                variant="whatsapp"
                size="xl"
                className="group"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Fale Comigo no WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl" />
              
              {/* Main image */}
              <div className="relative aspect-[4/5] w-72 md:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroPortrait}
                  alt="Môr - Artesã de Costura"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-marsala/20 via-transparent to-transparent" />
              </div>

              {/* Floating decorative element */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
