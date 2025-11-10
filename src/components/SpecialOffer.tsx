import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const SpecialOffer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-8 right-8 z-50 max-w-sm"
        >
          <div className="bg-card border-2 border-metallic rounded-lg shadow-[0_0_40px_rgba(192,192,192,0.4)] p-6 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-metallic/20 to-transparent animate-shine" />

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-metallic" size={24} />
                <h3 className="font-orbitron font-bold text-lg text-metallic">
                  Limited Offer
                </h3>
              </div>

              <p className="text-foreground mb-4">
                💎 Get <span className="font-bold text-metallic">10% Off</span> Your First Detail
              </p>

              <Button
                onClick={scrollToContact}
                className="w-full bg-metallic text-primary-foreground hover:bg-metallic/90 font-orbitron"
              >
                Book Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpecialOffer;
