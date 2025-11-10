import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  service: string;
  review: string;
  rating: number;
  image: string;
}

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Mitchell",
      service: "Full Detail Package",
      review: "Detailers Pro absolutely transformed my vehicle! The attention to detail is incredible. My car looks showroom ready and the service was professional and efficient.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      service: "Paint Correction",
      review: "I was amazed by how they removed all the swirl marks from my paint. The results are outstanding and have lasted for months. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Michael Chen",
      service: "Interior Detail",
      review: "The interior of my car has never looked better. They cleaned every crevice and my vehicle smells fresh. Worth every penny!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Emma Davis",
      service: "Premium Package",
      review: "Outstanding service! The team was punctual, professional, and the results exceeded my expectations. My car looks better than when I bought it!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-4">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground text-lg">
            What our satisfied clients have to say
          </p>
        </motion.div>

        <div
          ref={ref}
          className="max-w-4xl mx-auto relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-lg border border-border p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-metallic shadow-lg"
                  />
                </motion.div>

                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-metallic fill-metallic"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg text-foreground/80 italic mb-4">
                    "{currentTestimonial.review}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <p className="font-orbitron font-bold text-metallic text-lg">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {currentTestimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-metallic/10 border border-metallic/30 hover:bg-metallic/20 text-metallic transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.3)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-metallic w-8"
                      : "bg-metallic/30 hover:bg-metallic/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-metallic/10 border border-metallic/30 hover:bg-metallic/20 text-metallic transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,212,0.3)]"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
