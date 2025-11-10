import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/10463764/pexels-photo-10463764.jpeg?w=500&h=400&fit=crop",
      alt: "Professional Ceramic Coating Application",
    },
    {
      url: "https://images.pexels.com/photos/6872152/pexels-photo-6872152.jpeg?w=500&h=400&fit=crop",
      alt: "Luxury Car Detailing",
    },
    {
      url: "https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg?w=500&h=400&fit=crop",
      alt: "Professional Car Washing",
    },
    {
      url: "https://images.pexels.com/photos/6872150/pexels-photo-6872150.jpeg?w=500&h=400&fit=crop",
      alt: "Exterior Detail and Polish",
    },
    {
      url: "https://images.pexels.com/photos/6873020/pexels-photo-6873020.jpeg?w=500&h=400&fit=crop",
      alt: "Car Wash Detailing Service",
    },
    {
      url: "https://images.pexels.com/photos/5233268/pexels-photo-5233268.jpeg?w=500&h=400&fit=crop",
      alt: "Headlight Restoration",
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
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold dark:text-white text-black mb-4">
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
