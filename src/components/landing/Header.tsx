import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Cold Plunges", href: "#products" },
    { label: "Science", href: "#science" },
    { label: "For Parents", href: "#parents" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className={`text-2xl font-serif font-semibold transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Cold<span className="text-gold">Calm</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14703337995"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-gold ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              (470) 333-7995
            </a>
            <Button variant={isScrolled ? "premium" : "hero"} size="default">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 pt-6 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-base font-medium py-2 transition-colors hover:text-gold ${
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="hero" size="lg" className="mt-4">
                  Shop Now
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
