import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "AI-Based Cotton Grade Analysis Tool",
    description: "AI-powered cotton quality analysis system built with Python and OpenCV — no external APIs. Analyzes cotton images to grade quality using Computer Vision, Image Processing, and AI-based Classification. A practical solution for the agricultural industry.",
    tech: ["Python", "OpenCV", "FastAI", "Computer Vision", "Image Processing"],
    featured: true,
    github: "https://github.com/vvsrinath",
    accent: "hsl(var(--primary))"
  },
  {
    title: "BASE-CAD v0.001",
    description: "A TypeScript-based CAD utility platform designed for rapid design prototyping and engineering workflows. Available live on Vercel.",
    tech: ["TypeScript", "React", "CAD", "Fusion 360"],
    featured: false,
    github: "https://github.com/vvsrinath/BASE-CAD-Version-0.001",
    link: "https://base-cad-version-0-001.vercel.app",
    accent: "#6366f1"
  },
  {
    title: "Industrial Automation System",
    description: "Simulated workflow for an automated manufacturing pipeline integrating PLC logic concepts and predictive maintenance models using Python and data analytics.",
    tech: ["Python", "Data Analytics", "Automation", "Pandas"],
    featured: false,
    github: "https://github.com/vvsrinath",
    accent: "#0ea5e9"
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Comprehensive data visualization tool for analyzing market trends and business performance metrics with automated reporting capabilities.",
    tech: ["React", "Pandas", "Matplotlib", "Node.js", "SQL"],
    featured: false,
    github: "https://github.com/vvsrinath",
    accent: "#10b981"
  }
];

function TiltCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        className="group relative h-full flex flex-col justify-between bg-white border border-border p-8 rounded-3xl cursor-default overflow-hidden"
        whileHover={{ boxShadow: `0 25px 60px -10px ${project.accent}30, 0 4px 20px rgba(0,0,0,0.08)` }}
        transition={{ duration: 0.3 }}
        data-testid={`card-project-${index}`}
      >
        {/* Animated gradient top-line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Glow on hover */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: project.accent }}
        />

        <div>
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
              Featured Work
            </motion.div>
          )}

          <h3 className={`font-bold mb-4 text-foreground leading-tight ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, ti) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + ti * 0.05 }}
                whileHover={{ scale: 1.08, backgroundColor: project.accent + "15" }}
                className="px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-full cursor-default transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-demo-${index}`}
            >
              <ExternalLink size={15} /> Live Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-github-${index}`}
            >
              <Github size={15} /> Source Code
            </motion.a>
          )}
        </div>

        {/* Arrow decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ background: project.accent }}
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </motion.div>

          <motion.a
            href="https://github.com/vvsrinath"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors self-start md:self-auto"
            data-testid="link-github-all"
          >
            <Github size={16} /> View all on GitHub
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
