const dpLogoUrl = "https://cdn.builder.io/api/v1/image/assets%2F3c98d4ac468a498ea650d71972550e62%2F5fd8916f422049019c94adbfc4e9b266?format=webp&width=100";

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
            <div className="flex items-center gap-2 mb-4">
              <img src={dpLogoUrl} alt="Detailer's Pro" className="h-10 w-10" />
              <h3 className="font-orbitron font-bold dark:text-white text-black text-sm">Detailer's Pro</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium mobile car detailing, ceramic coating, and paint correction services in Torrance, CA.
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="font-orbitron font-bold text-metallic mb-4 text-lg">Open Hours</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-foreground">7 AM - 7 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">8 AM - 6 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">9 AM - 5 PM</span>
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
                <p className="font-semibold text-foreground">Primary</p>
                <a
                  href="tel:+15627468437"
                  className="hover:text-metallic transition-colors"
                >
                  (562) 746-8437
                </a>
              </li>
              <li>
                <p className="font-semibold text-foreground">Alternative</p>
                <a
                  href="tel:+13107209427"
                  className="hover:text-metallic transition-colors"
                >
                  (310) 720-9427
                </a>
              </li>
              <li>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-muted-foreground">
                  17500 Prairie Ave<br/>
                  Torrance, CA 90504
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Detailers Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
