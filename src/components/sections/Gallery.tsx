import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1517521791897-0c3688726fe2?w=500&h=400&fit=crop",
      alt: "Professional Car Detailing",
    },
    {
      url: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=400&fit=crop",
      alt: "Car Wash Service",
    },
    {
      url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=400&fit=crop",
      alt: "Vehicle Detailing",
    },
    {
      url: "https://images.unsplash.com/photo-1494976866556-6812c3fb0c4f?w=500&h=400&fit=crop",
      alt: "Car Paint Protection",
    },
    {
      url: "https://images.unsplash.com/photo-1486432690212-cd0a52efb14f?w=500&h=400&fit=crop",
      alt: "Interior Car Cleaning",
    },
    {
      url: "https://images.unsplash.com/photo-1552830820-6eac92e65b10?w=500&h=400&fit=crop",
      alt: "Professional Car Polishing",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg">
            See the premium results we deliver
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden bg-card border border-border hover:border-metallic transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
