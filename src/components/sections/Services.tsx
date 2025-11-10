import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Car, Sparkles, Droplets, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Interior Cleaning",
    description: "Deep cleaning and restoration of your vehicle's interior with premium products",
  },
  {
    icon: Car,
    title: "Exterior Cleaning",
    description: "Professional wash, polish, and protection for your vehicle's exterior paint",
  },
  {
    icon: Sparkles,
    title: "Full Detail",
    description: "Complete interior and exterior transformation for your vehicle",
  },
  {
    icon: Wrench,
    title: "Paint Correction",
    description: "Professional removal of swirls, scratches, and paint imperfections",
  },
  {
    icon: Zap,
    title: "Headlights Restoration",
    description: "Restore clarity and brightness to oxidized or cloudy headlights",
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "Professional ceramic coating application for long-lasting protection and shine",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold dark:text-white text-black mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium detailing services tailored to your vehicle's needs
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full dark:bg-gray-900 bg-white dark:border-2 dark:border-gray-700 border-2 border-gray-300 dark:hover:border-white hover:border-black transition-all duration-300 group relative overflow-hidden hover:shadow-lg">
                <service.icon className="w-12 h-12 dark:text-white text-black mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-orbitron font-semibold dark:text-white text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
