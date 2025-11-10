const dpLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='none' stroke='%23000' stroke-width='8'/%3E%3Cg fill='%23000'%3E%3Cpath d='M55 75 L55 135 Q55 155 75 155 L85 155 Q105 155 105 135 L105 75 Z M75 95 L85 95 L85 135 Q85 145 75 145 L75 145 Q75 145 75 135 Z'/%3E%3Cpath d='M125 75 L115 75 L115 95 Q115 105 125 105 L135 105 Q145 105 145 95 L145 85 Q145 75 135 75 Z M125 95 L125 85 L135 85 Q135 85 135 95 Q135 105 125 105 L125 105 Q125 105 125 95 Z'/%3E%3C/g%3E%3C/svg%3E";

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
              <img src={dpLogo} alt="Detailer's Pro" className="h-12 w-12" />
              <h3 className="font-orbitron font-bold text-metallic text-lg">Detailer's Pro</h3>
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
