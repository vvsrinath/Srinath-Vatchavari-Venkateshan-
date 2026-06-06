import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Rocket } from "lucide-react";

const PILLARS = [
  { icon: Lightbulb, word: "Curiosity", desc: "Asking the questions others overlook" },
  { icon: Target, word: "Persistence", desc: "Pushing through complexity to clarity" },
  { icon: Rocket, word: "Learning", desc: "Continuously growing across every domain" },
];

export function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const words = "My goal is to build innovative companies that leverage artificial intelligence, engineering, and automation to create meaningful impact across industries.".split(" ");

  return (
    <section id="vision" ref={sectionRef} className="relative py-32 overflow-hidden bg-foreground text-background">
      {/* Animated mesh gradient background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[100px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Vision</span>
        </motion.div>

        {/* Animated word-by-word headline */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] -mb-1">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {["artificial", "intelligence,", "engineering,", "automation"].includes(word.toLowerCase()) ? (
                    <span className="text-primary">{word}</span>
                  ) : word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        {/* Body paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {[
            "I aspire to contribute to advancements in technology while developing solutions that improve efficiency, accessibility, and sustainability across the industries that matter most.",
            "Through my projects and entrepreneurial journey, I aim to transform ideas into technologies that solve real problems and create lasting value — for businesses, communities, and the world."
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-lg text-background/65 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.5)" }}
              className="group p-7 rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm transition-all duration-300 cursor-default"
              data-testid={`card-pillar-${i}`}
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-5"
              >
                <pillar.icon className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold text-background mb-2">{pillar.word}</h3>
              <p className="text-sm text-background/50 leading-relaxed">{pillar.desc}</p>

              {/* Animated bottom bar */}
              <motion.div
                className="mt-5 h-px bg-primary/30 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
