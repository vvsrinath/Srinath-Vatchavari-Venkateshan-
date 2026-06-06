import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const SKILL_CATEGORIES = [
  {
    title: "AI & Machine Learning",
    description: "Computer vision, data analysis, model training",
    skills: ["Python", "OpenCV", "NumPy", "Pandas", "FastAI", "PyTorch", "MMDetection", "Seaborn"],
    accent: "hsl(var(--primary))"
  },
  {
    title: "Full-Stack Development",
    description: "Building responsive, scalable web applications",
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "SQL", "REST APIs", "Tailwind CSS", "HTML/CSS"],
    accent: "#6366f1"
  },
  {
    title: "Engineering & CAD",
    description: "Industrial design and 3D modeling",
    skills: ["AutoCAD", "Fusion 360", "Mechanical Engineering", "Industrial Automation"],
    accent: "#0ea5e9"
  },
  {
    title: "Data & Cloud",
    description: "Business analysis and cloud architecture",
    skills: ["AWS Solutions Architecture", "Excel", "VBA", "Data Analytics", "Data Visualization"],
    accent: "#10b981"
  }
];

const CS_BADGES = ["C++", "DSA", "OOP"];

function SkillCard({ category, index }: { category: typeof SKILL_CATEGORIES[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        whileHover={{ boxShadow: `0 20px 50px -10px ${category.accent}25` }}
        className="group bg-white p-8 rounded-3xl border border-border relative overflow-hidden cursor-default h-full"
        data-testid={`card-skill-${index}`}
      >
        {/* Top accent line animates in on hover */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] origin-left"
          style={{ background: `linear-gradient(90deg, ${category.accent}, transparent)` }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner glow */}
        <motion.div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: category.accent }}
        />

        <motion.h3
          className="text-2xl font-bold mb-2 relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {category.title}
        </motion.h3>
        <p className="text-muted-foreground mb-6 text-sm relative z-10">{category.description}</p>

        <div className="flex flex-wrap gap-2 relative z-10">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.08 + i * 0.06,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              whileHover={{
                scale: 1.12,
                backgroundColor: category.accent,
                color: "white",
                y: -3,
              }}
              className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-full cursor-default transition-colors border border-border/50"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle background pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <motion.div
            className="w-20 h-1 bg-primary rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-foreground/70 max-w-2xl">
            A comprehensive toolkit combining software development, artificial intelligence, and mechanical engineering principles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* CS Fundamentals bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 p-8 bg-foreground text-background rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: "linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%)", backgroundSize: "8px 8px" }}
          />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">CS Fundamentals</h3>
            <p className="text-background/70 text-sm max-w-md">Solid foundation in Data Structures, Algorithms, Object-Oriented Programming (C++, Python), and Generative AI concepts.</p>
          </div>
          <div className="flex gap-4 relative z-10">
            {CS_BADGES.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
                whileHover={{ scale: 1.15, rotate: 8, borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }}
                className={`w-16 h-16 rounded-full flex items-center justify-center font-mono font-bold cursor-default transition-colors ${
                  i === 2 ? "border-2 border-primary text-primary" : "border-2 border-background/30 text-background"
                }`}
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
