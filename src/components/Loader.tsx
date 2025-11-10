import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center gradient-metallic"
    >
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-orbitron font-bold text-metallic mb-2">
            DETAILERS PRO
          </h2>
          <p className="text-muted-foreground text-sm">Premium Detailing</p>
        </div>
        <div className="relative h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-metallic to-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="text-center mt-4">
          <span className="text-2xl font-orbitron font-bold text-metallic">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
