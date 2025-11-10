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

          <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
            {/* Map on Left */}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.0558341932523!2d-118.34!3d33.8!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5c5c5c5c5c5%3A0x1234567890!2sTorrance%2C%20CA%2090504!5e0!3m2!1sen!2sus!4v1700000000000"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>

            {/* Description and Areas on Right */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-6 bg-background rounded-lg border border-border hover:border-metallic transition-all duration-300"
              >
                <h3 className="text-xl font-orbitron font-bold text-metallic mb-3">
                  Service Coverage
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Detailers Pro proudly serves the greater Los Angeles area and surrounding regions with professional mobile detailing services. From Torrance to the surrounding coastal communities, we bring premium car care directly to your door.
                </p>
              </motion.div>

              <div className="space-y-3">
                {areas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-metallic transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5 text-metallic flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Areas;
