import { motion } from "framer-motion";
import moodboard1 from "@/assets/moodboard-1.jpg";
import moodboard2 from "@/assets/moodboard-2.jpg";
import moodboard3 from "@/assets/moodboard-3.jpg";
import moodboard4 from "@/assets/moodboard-4.jpg";

const images = [
  { src: moodboard1, alt: "Tecido rose gold delicado" },
  { src: moodboard2, alt: "Ferramentas artesanais de costura" },
  { src: moodboard3, alt: "Detalhe de costura à mão" },
  { src: moodboard4, alt: "Fita métrica elegante" },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Universo <span className="text-primary italic">Môr</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Inspiração, delicadeza e elegância em cada detalhe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-marsala/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

