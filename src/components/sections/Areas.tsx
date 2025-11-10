import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";

const Areas = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const areas = [
    "Torrance, CA 90504",
    "Los Angeles, CA",
    "Long Beach, CA",
    "Manhattan Beach, CA",
    "Hermosa Beach, CA",
    "Redondo Beach, CA",
    "Inglewood, CA",
  ];

  return (
    <section id="areas" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-8">
            Service Areas
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Proudly serving Randolph County and the Triad area
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="rounded-lg overflow-hidden border border-border hover:border-metallic transition-all duration-300 h-full min-h-[400px]"
              >
                <iframe
                  title="Service Areas Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d99646.96666221237!2d-79.8!3d35.85!3m2!1i1024!2i768!4f13.1!2m1!1sArchdale%20Greensboro%20Thomasville%20High%20Point%20Asheboro%20Trinity%20Lexington%20NC!5e0!3m2!1sen!2sus!4v1700000000000"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-4 items-start">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-metallic transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-metallic flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Areas;
