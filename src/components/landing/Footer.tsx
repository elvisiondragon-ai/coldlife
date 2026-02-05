import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-semibold text-primary-foreground">
                Cold<span className="text-gold">Calm</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Premium cold plunge solutions for parents seeking mental clarity, 
              stress relief, and a daily sanctuary of peace.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-gold fill-gold" />
              <span>for busy parents</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-medium text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Cold Plunges", "Science", "For Parents", "Financing", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-medium text-primary-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Shipping", "Returns", "Warranty", "HSA/FSA"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 ColdCalm. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-primary-foreground/50 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
