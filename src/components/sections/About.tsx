import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Award, Star, CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-car.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-12 text-center">
            About Us
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image with Guarantee Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Premium Car Detailing"
                  className="w-full h-72 object-cover"
                />
                
                {/* 100% Guarantee Badge */}
                <div className="absolute bottom-4 right-4 bg-metallic text-primary-foreground px-6 py-4 rounded-lg shadow-[0_0_30px_rgba(192,192,192,0.5)] border-2 border-background">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    <div>
                      <p className="font-orbitron font-bold text-xl">100%</p>
                      <p className="text-sm font-semibold">Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Icons */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-background/50 backdrop-blur-sm border border-metallic/30 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 text-metallic mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Premium Quality</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-metallic/30 rounded-lg p-4 text-center">
                  <Star className="w-8 h-8 text-metallic mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Top Rated</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-metallic/30 rounded-lg p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-metallic mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-foreground/80 text-lg leading-relaxed"
            >
              <p>
                Pinnacle Auto Spa is a locally owned mobile detailing business based in Trinity, NC,
                proudly serving Archdale, High Point, Thomasville, Asheboro, Greensboro, Lexington,
                and surrounding areas.
              </p>

              <p>
                With a dedication to precision and professionalism, Pinnacle Auto Spa delivers
                high-quality car detailing services directly to your driveway. Whether it's a deep
                interior cleaning, paint correction, or full exterior detail, every vehicle receives
                meticulous care and attention to detail.
              </p>

              <p>
                Built on convenience, consistency, and craftsmanship, Pinnacle Auto Spa ensures every
                customer drives away completely satisfied.
              </p>

              <p className="font-semibold text-metallic">
                For those seeking honest work, real results, and a trusted mobile detailer in the
                Triad area, Pinnacle Auto Spa is proud to be Randolph County's premier choice.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
