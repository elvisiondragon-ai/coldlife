import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-primary-foreground mb-6 leading-tight">
            Your Journey to 
            <span className="text-gradient-gold"> Mental Peace</span>
            <br />Starts Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of parents who have discovered the transformative power 
            of cold therapy. Your family deserves the best version of you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Shop Now & Save $1,000
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule a Consultation
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
            <a href="tel:+14703337995" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-5 h-5" />
              <span>(470) 333-7995</span>
            </a>
            <a href="mailto:hello@coldplunge.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-5 h-5" />
              <span>hello@coldplunge.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
