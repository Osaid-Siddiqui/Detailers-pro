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
          <div className="dark:bg-gray-900 bg-white dark:border-2 dark:border-white border-2 border-black rounded-lg shadow-lg p-6 relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="dark:text-white text-black" size={24} />
                <h3 className="font-orbitron font-bold text-base dark:text-white text-black">
                  Limited Offer
                </h3>
              </div>

              <p className="dark:text-white text-black mb-4">
                💎 Get <span className="font-bold dark:text-white text-black">10% Off</span> Your First Detail
              </p>

              <Button
                onClick={scrollToContact}
                className="w-full dark:bg-white dark:text-black dark:hover:bg-gray-200 bg-black text-white hover:bg-gray-800 font-orbitron"
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
