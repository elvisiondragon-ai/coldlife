import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import productImage from "@/assets/cold-plunge-product.jpg";

const features = [
  "Aerospace-grade aluminum construction",
  "Whisper-quiet cooling system",
  "Temperature range: 39°F - 104°F",
  "Built-in filtration & sanitation",
  "Easy setup in under 30 minutes",
  "12-month included warranty",
];

const ProductShowcase = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={productImage}
                alt="Ultimate Cold Plunge"
                className="w-full h-auto rounded-3xl shadow-elevated"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
              Our Premium Collection
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              The Ultimate Plunge
              <span className="block text-gradient-gold">Your Home Sanctuary</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Handcrafted in the USA with aerospace-grade materials. This isn't just 
              a cold plunge—it's an investment in your mental health, designed to 
              fit seamlessly into your home and your life as a parent.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-sage-dark" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <p className="text-4xl font-serif font-semibold text-foreground">
                  $3,499
                </p>
                <p className="text-sm text-accent mt-1">0% APR Financing Available</p>
              </div>
              <Button variant="premium" size="xl" className="group sm:ml-auto">
                View Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
