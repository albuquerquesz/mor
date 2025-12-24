import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
              Sobre a <span className="text-primary italic">Môr</span>
            </h2>
          </motion.div>

          {/* Storytelling Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-8"
          >
            {/* Quote/Highlight */}
            <blockquote className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif">
                "
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed italic">
                Cada ponto carrega uma história, cada costura guarda um sentimento.
              </p>
            </blockquote>

            {/* Main Text */}
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Há anos dedico minha vida à arte da costura, transformando tecidos em peças que 
                contam histórias. Seja um vestido de noiva que guardará as memórias do dia mais 
                especial, ou um ajuste que faz você se sentir confiante, cada trabalho é feito 
                com o mesmo cuidado e dedicação.
              </p>
              <p>
                Acredito que a roupa certa tem o poder de transformar não apenas a aparência, 
                mas também como nos sentimos. Por isso, trabalho lado a lado com cada cliente, 
                entendendo suas necessidades e sonhos para criar peças verdadeiramente únicas.
              </p>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
            />

            {/* Signature-style text */}
            <p className="font-serif text-xl text-primary italic">
              Com amor e dedicação, Môr
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
