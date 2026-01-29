import logo from "@public/logo.png";
import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <img
            src={logo}
            alt="Artes com a Môr"
            className="h-20 opacity-80 hover:opacity-100 transition-opacity"
          />

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="w-24 h-px bg-border" />

          <div className="space-y-2 text-muted-foreground text-sm font-light">
            <p>© {new Date().getFullYear()} Artes com a Môr. Todos os direitos reservados.</p>
            <p className="flex items-center justify-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por{" "}
              <a
                href="https://links.albuquerquesz.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4"
              >
                albuquerquesz
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
