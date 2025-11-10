import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Award, Star, CheckCircle, Sparkles, Wrench } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold dark:text-white text-black mb-12 text-center">
            About Detailer's Pro
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Image with Guarantee Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6872152/pexels-photo-6872152.jpeg"
                  alt="Professional Car Detailing"
                  className="w-full h-96 object-cover"
                />

                {/* Quality Badge */}
                <div className="absolute bottom-4 right-4 dark:bg-white dark:text-black bg-white text-black px-6 py-4 rounded-lg shadow-lg border-2 border-background">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    <div>
                      <p className="font-orbitron font-bold text-base">Premium</p>
                      <p className="text-xs font-semibold">Quality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features Icons */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="dark:bg-gray-900 bg-gray-100 backdrop-blur-sm dark:border-gray-700 border border-gray-300 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 dark:text-white text-black mx-auto mb-2" />
                  <p className="text-xs font-semibold dark:text-white text-black">Expert Team</p>
                </div>
                <div className="dark:bg-gray-900 bg-gray-100 backdrop-blur-sm dark:border-gray-700 border border-gray-300 rounded-lg p-4 text-center">
                  <Sparkles className="w-8 h-8 dark:text-white text-black mx-auto mb-2" />
                  <p className="text-xs font-semibold dark:text-white text-black">Premium Care</p>
                </div>
                <div className="dark:bg-gray-900 bg-gray-100 backdrop-blur-sm dark:border-gray-700 border border-gray-300 rounded-lg p-4 text-center">
                  <CheckCircle className="w-8 h-8 dark:text-white text-black mx-auto mb-2" />
                  <p className="text-xs font-semibold dark:text-white text-black">Guaranteed</p>
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
                Detailer's Pro is a locally owned and operated mobile detailing business based in Torrance, California. We specialize in professional automotive detailing and ceramic coating services for the local community.
              </p>

              <p>
                With a commitment to precision and professionalism, we deliver high-quality car detailing services directly to your driveway. From interior detailing and exterior cleaning to paint correction and ceramic coating, every vehicle receives meticulous care and attention to detail.
              </p>

              <p>
                Our team uses only the finest products and proven techniques to ensure your vehicle receives the premium treatment it deserves. Whether you're looking for a basic wash or a complete detail with ceramic protection, we're here to exceed your expectations.
              </p>

              <p className="font-semibold dark:text-gray-300 text-gray-700">
                Convenience, consistency, and craftsmanship are the foundation of Detailer's Pro.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-background rounded-lg p-8 md:p-12 border border-border relative overflow-hidden"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/10463764/pexels-photo-10463764.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold dark:text-white text-white mb-12 text-center">
                  Why Choose Detailer's Pro
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="dark:bg-gray-900/90 bg-white/90 rounded-lg p-6 dark:border-gray-700 border border-gray-300"
                  >
                    <Sparkles className="w-10 h-10 dark:text-white text-black mb-4" />
                    <h4 className="text-base font-orbitron font-bold dark:text-white text-black mb-2">Premium Products</h4>
                    <p className="text-sm dark:text-gray-300 text-gray-700">We use only professional-grade detailing products for superior results</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="dark:bg-gray-900/90 bg-white/90 rounded-lg p-6 dark:border-gray-700 border border-gray-300"
                  >
                    <Award className="w-10 h-10 dark:text-white text-black mb-4" />
                    <h4 className="text-base font-orbitron font-bold dark:text-white text-black mb-2">Expert Team</h4>
                    <p className="text-sm dark:text-gray-300 text-gray-700">Experienced professionals dedicated to your vehicle's appearance</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="dark:bg-gray-900/90 bg-white/90 rounded-lg p-6 dark:border-gray-700 border border-gray-300"
                  >
                    <CheckCircle className="w-10 h-10 dark:text-white text-black mb-4" />
                    <h4 className="text-base font-orbitron font-bold dark:text-white text-black mb-2">Quality Guarantee</h4>
                    <p className="text-sm dark:text-gray-300 text-gray-700">100% satisfaction guarantee on all our detailing services</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="dark:bg-gray-900/90 bg-white/90 rounded-lg p-6 dark:border-gray-700 border border-gray-300"
                  >
                    <Star className="w-10 h-10 dark:text-white text-black mb-4" />
                    <h4 className="text-base font-orbitron font-bold dark:text-white text-black mb-2">Mobile Service</h4>
                    <p className="text-sm dark:text-gray-300 text-gray-700">We come to your driveway for ultimate convenience and care</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="dark:bg-gray-900/90 bg-white/90 rounded-lg p-6 dark:border-gray-700 border border-gray-300"
                  >
                    <Wrench className="w-10 h-10 dark:text-white text-black mb-4" />
                    <h4 className="text-base font-orbitron font-bold dark:text-white text-black mb-2">Paint Protection</h4>
                    <p className="text-sm dark:text-gray-300 text-gray-700">Professional ceramic coating and paint correction services</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="dark:bg-gray-900/90 bg-white/90 rounded-lg p-6 dark:border-gray-700 border border-gray-300"
                  >
                    <Shield className="w-10 h-10 dark:text-white text-black mb-4" />
                    <h4 className="text-base font-orbitron font-bold dark:text-white text-black mb-2">Local Trusted</h4>
                    <p className="text-sm dark:text-gray-300 text-gray-700">Serving the Torrance community with integrity and excellence</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
