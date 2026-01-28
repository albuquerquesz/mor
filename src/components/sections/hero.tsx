import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20costura.";

  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-start overflow-hidden bg-background pt-32 lg:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />

      <div className="container relative z-10 py-12 lg:py-16 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-foreground mb-8"
          >
            A arte de transformar{" "}
            <span className="text-primary italic">tecidos</span> em{" "}
            <span className="text-primary italic">memórias</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light"
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
              className="group h-14 px-10 text-lg"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                Fale Comigo no WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

