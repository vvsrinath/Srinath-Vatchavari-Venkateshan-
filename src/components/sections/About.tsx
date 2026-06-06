import { motion } from "framer-motion";
import { Code, Cpu, LineChart, Server, Zap, Globe, Database, Layers } from "lucide-react";
import profileImage from "@assets/profile.png";

const WHAT_I_DO = [
  { icon: Cpu, label: "AI & ML Developer", desc: "Python · OpenCV · FastAI · MMDetection" },
  { icon: Code, label: "Full-Stack Developer", desc: "React · Node.js · JavaScript · SQL" },
  { icon: Layers, label: "CAD & Engineering", desc: "AutoCAD · Fusion 360 · Design" },
  { icon: Server, label: "Cloud (AWS)", desc: "Solutions Architecture · Certified" },
  { icon: LineChart, label: "Financial Analyst", desc: "Pandas · Excel · Data Analytics" },
  { icon: Zap, label: "Entrepreneur", desc: "Industrial Automation · FinTech · Energy" },
];

const TIMELINE = [
  { year: "2024", event: "Started GitHub — first repositories in TypeScript & Python" },
  { year: "2025", event: "Completed GE Aerospace & Siemens Mobility job simulations" },
  { year: "2025", event: "Earned AWS Solutions Architecture certification" },
  { year: "2025", event: "Distinction Award in Web Dev — Bharathidasan University" },
  { year: "2026", event: "Higher Secondary +2 (PCM+CS) — Open for Internships" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.04),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Top: Photo + Bio side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative background block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl"
              />

              {/* Photo */}
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Srinath Vatchavari Venkateshan"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-about-photo"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-3 shadow-xl border border-border whitespace-nowrap"
              >
                <div className="text-center">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">Open for</div>
                  <div className="text-sm font-bold text-foreground">Internships 2026</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio + what I do column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-8 pt-4 lg:pt-0"
          >
            <div className="space-y-5 text-lg text-foreground/75 leading-relaxed">
              <p>
                I am a young entrepreneur, developer, and aspiring engineer passionate about building technology-driven solutions that solve real-world problems. My interests span <strong className="text-foreground font-semibold">artificial intelligence, industrial automation, financial technology, renewable energy,</strong> and engineering innovation.
              </p>
              <p>
                From an early age I developed a strong curiosity for computers, engineering systems, and business strategy. I believe innovation happens at the intersection of technology, engineering, and entrepreneurship.
              </p>
              <p>
                My vision is to build innovative companies that leverage AI, engineering, and automation to create meaningful impact — improving efficiency, accessibility, and sustainability across industries.
              </p>
            </div>

            {/* What I do grid */}
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5 text-foreground/40">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHAT_I_DO.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/40 hover:bg-secondary/80 border border-transparent hover:border-primary/15 transition-all cursor-default"
                    data-testid={`card-whatido-${index}`}
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mt-0.5 shrink-0"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-semibold text-foreground leading-tight">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Journey timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-8 text-foreground/40">Journey</h3>
          <div className="relative">
            {/* Horizontal line on desktop */}
            <div className="hidden md:block absolute top-4 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-start md:items-center text-left md:text-center relative"
                >
                  {/* Dot on horizontal line */}
                  <motion.div
                    whileInView={{ scale: [0, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    className="w-3 h-3 rounded-full bg-primary shadow-md shadow-primary/40 mb-4 shrink-0 relative z-10"
                    style={{ marginTop: "-1px" }}
                  />
                  <span className="text-xs font-bold text-primary font-mono mb-2">{item.year}</span>
                  <p className="text-xs text-foreground/60 leading-relaxed">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
