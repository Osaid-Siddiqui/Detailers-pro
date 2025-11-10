import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

const dpLogoUrl = "https://cdn.builder.io/api/v1/image/assets%2F3c98d4ac468a498ea650d71972550e62%2F5fd8916f422049019c94adbfc4e9b266?format=webp&width=100";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      {/* Top Info Bar - 1st Layer */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="dark:bg-black dark:border-b dark:border-gray-800 bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <span className="text-xs font-medium dark:text-white text-black">
                Detailer's Pro
              </span>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-black transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <div
        className={`dark:bg-black dark:border-gray-800 bg-white border-gray-200 backdrop-blur-xl border-b transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo and Business Name */}
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
            <img src={dpLogoUrl} alt="Detailers Pro" className="h-10 w-10" />
            <span className="text-sm font-bold dark:text-white text-black hidden sm:inline">Detailer's Pro</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-medium dark:text-gray-400 dark:hover:text-white text-gray-700 hover:text-black transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-white bg-black transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="dark:text-white dark:hover:bg-gray-900 text-black hover:bg-gray-100"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden dark:text-white text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden dark:bg-black dark:border-gray-800 bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-xs font-medium dark:text-gray-400 dark:hover:text-white text-gray-700 hover:text-black transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
