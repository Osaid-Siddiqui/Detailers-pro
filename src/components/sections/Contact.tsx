import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carType: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", phone: "", carType: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to experience premium detailing? Contact us today
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+15627468437"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-metallic transition-all duration-300 group"
                >
                  <Phone className="w-6 h-6 text-metallic group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="text-lg font-medium text-foreground">(562) 746-8437</p>
                  </div>
                </a>

                <a
                  href="tel:+13107209427"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-metallic transition-all duration-300 group"
                >
                  <Phone className="w-6 h-6 text-metallic group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">Alternative</p>
                    <p className="text-lg font-medium text-foreground">(310) 720-9427</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 p-6 bg-card rounded-lg border border-border space-y-4">
                <div>
                  <h4 className="font-orbitron font-semibold text-metallic mb-2">
                    Address
                  </h4>
                  <p className="text-muted-foreground">
                    17500 Prairie Ave<br/>
                    Torrance, CA 90504<br/>
                    <span className="text-sm mt-2 block">Service Area: Torrance, CA</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="font-orbitron font-semibold text-metallic mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="text-foreground font-medium">Monday - Friday:</span> 7:00 AM - 7:00 PM</p>
                <p><span className="text-foreground font-medium">Saturday:</span> 8:00 AM - 6:00 PM</p>
                <p><span className="text-foreground font-medium">Sunday:</span> 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-metallic"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-card border-border focus:border-metallic"
                />
              </div>

              <div>
                <Input
                  placeholder="Car Type (e.g., Coupe, SUV, Truck)"
                  value={formData.carType}
                  onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                  required
                  className="bg-card border-border focus:border-metallic"
                />
              </div>

              <div>
                <Input
                  placeholder="Desired Service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  className="bg-card border-border focus:border-metallic"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Additional Details or Questions"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-card border-border focus:border-metallic resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-metallic text-primary-foreground hover:bg-metallic/90 font-orbitron"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
