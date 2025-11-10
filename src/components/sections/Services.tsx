import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Car, Sparkles, Droplets, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Interior Detail",
    description: "Deep cleaning and restoration of your vehicle's interior",
  },
  {
    icon: Car,
    title: "Exterior Detail",
    description: "Premium wash, polish, and protection for your paint",
  },
  {
    icon: Sparkles,
    title: "Full Detail",
    description: "Complete interior and exterior transformation",
  },
  {
    icon: Wrench,
    title: "Paint Correction",
    description: "Professional removal of swirls, scratches, and imperfections",
  },
  {
    icon: Zap,
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to oxidized headlights",
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
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-4">
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
              <Card className="p-8 h-full bg-card border-2 border-metallic/30 hover:border-metallic transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-metallic/50 before:via-metallic/30 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 hover:shadow-[0_0_40px_rgba(192,192,192,0.5)]">
                <service.icon className="w-12 h-12 text-metallic mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
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
