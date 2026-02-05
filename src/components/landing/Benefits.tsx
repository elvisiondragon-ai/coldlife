import { motion } from "framer-motion";
import { Brain, Moon, Heart, Zap, Shield, Smile } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Reset racing thoughts and gain crystal-clear focus in just 3 minutes of cold exposure.",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    description: "Parents using cold therapy report 47% improvement in sleep quality within 2 weeks.",
  },
  {
    icon: Heart,
    title: "Stress Relief",
    description: "Activate your parasympathetic nervous system and feel genuine calm wash over you.",
  },
  {
    icon: Zap,
    title: "Natural Energy",
    description: "Replace coffee with cold—experience sustained energy without the crash.",
  },
  {
    icon: Shield,
    title: "Immune Boost",
    description: "Strengthen your body's defenses so you can keep up with your family.",
  },
  {
    icon: Smile,
    title: "Mood Enhancement",
    description: "Cold exposure triggers dopamine release—your natural happiness hormone.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-calm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Why Cold Therapy?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Because You Deserve to Feel 
            <span className="text-gradient-gold"> Incredible</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Parenting is the hardest job in the world. Cold therapy isn't just wellness—it's 
            your daily sanctuary, your moment of peace, your reset button.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-gold/30"
            >
              <div className="w-14 h-14 rounded-xl bg-sage flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-sage-dark group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
