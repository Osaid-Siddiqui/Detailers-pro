import { Facebook, Instagram, Music2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Pinnacle Auto Spa" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium mobile car wash and detailing services in Trinity, NC. We bring luxury
              detailing directly to your driveway.
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="font-orbitron font-bold text-metallic mb-4 text-lg">Open Hours</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-foreground">8 AM - 6 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">9 AM - 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">Closed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron font-bold text-metallic mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-metallic transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-metallic transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-metallic transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-metallic transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-metallic transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-metallic transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-orbitron font-bold text-metallic mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <p className="font-semibold text-foreground">Phone</p>
                <a
                  href="tel:336-314-3340"
                  className="hover:text-metallic transition-colors"
                >
                  336-314-3340
                </a>
              </li>
              <li>
                <p className="font-semibold text-foreground">Email</p>
                <a
                  href="mailto:pinnacleautospa@gmail.com"
                  className="hover:text-metallic transition-colors break-all"
                >
                  pinnacleautospa@gmail.com
                </a>
              </li>
              <li>
                <p className="font-semibold text-foreground mb-2">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61570825486919"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-metallic transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/pinnacleautospa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-metallic transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@pinnacleautospa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-metallic transition-colors"
                    aria-label="TikTok"
                  >
                    <Music2 size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pinnacle Auto Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
