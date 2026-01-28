import { motion } from "framer-motion";
import { Sparkles, Ruler, Heart } from "lucide-react";

const diferenciais = [
  {
    icon: Sparkles,
    title: "Ajustes de Luxo",
    description: "Cada ajuste é feito com precisão milimétrica, garantindo o caimento perfeito para valorizar sua silhueta.",
  },
  {
    icon: Ruler,
    title: "Confecção Sob Medida",
    description: "Peças exclusivas criadas especialmente para você, respeitando seu estilo e personalidade únicos.",
  },
  {
    icon: Heart,
    title: "Acabamento Artesanal",
    description: "Detalhes minuciosos e acabamentos impecáveis que transformam cada peça em uma obra de arte.",
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Por que escolher a <span className="text-primary italic">Môr</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Dedicação, técnica e amor em cada ponto
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card p-8 lg:p-10 h-full text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-serif font-medium text-foreground mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
