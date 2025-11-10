import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const basePackage = {
    title: "Base Detailing Package",
    prices: [
      { type: "Coupes", price: "$145" },
      { type: "SUVs", price: "$165" },
      { type: "Trucks (3+ Rows)", price: "$195" },
    ],
    features: [
      "Exterior/Interior",
      "Hand Wash & Dry",
      "Wheel & Tire Cleaning",
      "Tire Shine",
      "Interior Clean/Scrub",
      "Windows Cleaned",
      "Interior Shine",
      "Car Fragrance Application",
    ],
  };

  const premiumPackage = {
    title: "Premium Detailing Package",
    prices: [
      { type: "Coupes", price: "$235" },
      { type: "SUVs", price: "$275" },
      { type: "Trucks (3+ Rows)", price: "$315" },
    ],
    features: [
      "Full Base Package",
      "Deep Interior Cleaning",
      "Leather Conditioning",
      "Engine Bay Detailing",
      "Pet Hair Removal",
      "Clay Bar & Wax",
    ],
  };

  const addOns = [
    { name: "Headlight Restoration", price: "$50" },
    { name: "Engine Bay Detail", price: "$45" },
    { name: "Trim Restoration", price: "$30" },
    { name: "Pet Hair Removal", price: "$50" },
    { name: "Leather Conditioning", price: "$10–$30" },
    { name: "Stain Removal/Extraction", price: "$30–$60" },
    { name: "Clay Bar", price: "$50–$75" },
    { name: "Wax", price: "$30–$50" },
  ];

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-4">
            Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent pricing for premium detailing services
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Base Package */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-background border-2 border-metallic/30 hover:border-metallic transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,192,192,0.3)]">
              <h3 className="text-2xl font-orbitron font-bold text-metallic mb-6">
                {basePackage.title}
              </h3>
              
              <div className="mb-6 space-y-2">
                <p className="text-sm text-muted-foreground font-semibold mb-3">Starting At:</p>
                {basePackage.prices.map((price) => (
                  <div key={price.type} className="flex justify-between items-center">
                    <span className="text-foreground">{price.type}</span>
                    <span className="text-xl font-orbitron font-bold text-metallic">
                      {price.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground font-semibold mb-4">Includes:</p>
                <ul className="space-y-3">
                  {basePackage.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-metallic flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-background border-2 border-metallic hover:shadow-[0_0_40px_rgba(192,192,192,0.4)] transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-orbitron font-bold text-metallic">
                  {premiumPackage.title}
                </h3>
                <span className="text-xs font-semibold px-3 py-1 bg-metallic text-primary-foreground rounded-full">
                  PREMIUM
                </span>
              </div>

              <div className="mb-6 space-y-2">
                <p className="text-sm text-muted-foreground font-semibold mb-3">Starting At:</p>
                {premiumPackage.prices.map((price) => (
                  <div key={price.type} className="flex justify-between items-center">
                    <span className="text-foreground">{price.type}</span>
                    <span className="text-xl font-orbitron font-bold text-metallic">
                      {price.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground font-semibold mb-4">Includes:</p>
                <ul className="space-y-3">
                  {premiumPackage.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-metallic flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Add-Ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-background border-2 border-metallic/30 hover:shadow-[0_0_30px_rgba(192,192,192,0.3)] transition-all duration-300">
            <h3 className="text-2xl font-orbitron font-bold text-metallic mb-6 text-center">
              Add-Ons
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-card hover:bg-secondary transition-colors duration-300"
                >
                  <p className="text-foreground font-medium mb-2">{addon.name}</p>
                  <p className="text-metallic font-orbitron font-bold">{addon.price}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
