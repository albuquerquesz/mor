import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20costura.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 lg:pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />

      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >

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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 font-light"
            >
              Costura de alto padrão com atenção aos detalhes que fazem toda a diferença.
              Cada peça é única, assim como você.
            </motion.p>

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

        </div>
      </div>
    </section>
  );
};

export default Hero;
