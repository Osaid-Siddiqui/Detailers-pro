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
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold dark:text-white text-black mb-8">
            Service Area
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Professional car detailing services in Torrance, California
          </p>

          <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
            {/* Map on Left */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="rounded-lg overflow-hidden dark:border-gray-700 border border-gray-300 dark:hover:border-white hover:border-black transition-all duration-300 h-full min-h-[400px]"
              >
                <iframe
                  title="Service Area Map - Torrance CA"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.559444!2d-118.34262!3d33.84643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b1c5c0000001%3A0x8c1b1c5c0000001!2s17500%20Prairie%20Ave%2C%20Torrance%2C%20CA%2090504!5e0!3m2!1sen!2sus!4v1700000000000"
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
                className="p-6 dark:bg-gray-900 bg-white rounded-lg dark:border-gray-700 border border-gray-300 dark:hover:border-white hover:border-black transition-all duration-300"
              >
                <h3 className="text-lg font-orbitron font-bold dark:text-white text-black mb-3">
                  Service Coverage
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Detailers Pro is located in Torrance, California 90504 and provides professional mobile car detailing and ceramic coating services to the local area. We bring premium automotive care directly to your driveway with expertise and quality craftsmanship.
                </p>
              </motion.div>

              <div className="space-y-3">
                {areas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 dark:bg-gray-900 bg-white rounded-lg dark:border-gray-700 border border-gray-300 dark:hover:border-white hover:border-black transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5 dark:text-white text-black flex-shrink-0" />
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
