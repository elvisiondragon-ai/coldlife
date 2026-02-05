import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mother of 3",
    content: "As a mom of three under 5, I was running on empty. My cold plunge ritual gives me 3 minutes of complete silence and reset. I'm calmer, more patient, and actually enjoying motherhood again.",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Working Dad",
    content: "The stress from work was bleeding into family time. Now I plunge right after work—it's like hitting a reset button. My kids get the best version of me, not the exhausted one.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Single Parent",
    content: "I was skeptical, but after 2 weeks, my anxiety dropped significantly. I sleep better, have more energy, and feel like myself again. Best investment I've ever made for my mental health.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Real Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Parents Like You,
            <span className="text-gradient-gold"> Transformed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from parents who found their calm in the cold.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                  <span className="text-lg font-serif font-semibold text-sage-dark">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
