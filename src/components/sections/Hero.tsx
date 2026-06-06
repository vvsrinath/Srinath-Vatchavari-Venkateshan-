import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@assets/profile.png";

const ROLES = [
  "AI Developer",
  "Full-Stack Engineer",
  "CAD Designer",
  "Entrepreneur",
  "ML Engineer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 30);
      mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 30);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const floatingParticles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ x: springX, y: springY }}
      />

      {/* Floating particles */}
      {floatingParticles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30 pointer-events-none"
          style={{
            width: Math.random() * 6 + 3,
            height: Math.random() * 6 + 3,
            left: `${10 + (i * 7.5) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: Text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open for Internships
              <span className="text-foreground/40">·</span>
              <MapPin size={12} className="text-foreground/50" />
              <span className="text-foreground/60 text-xs">Tamil Nadu, India</span>
            </motion.div>

            <div className="space-y-3">
              {["Srinath", "Vatchavari", "Venkateshan"].map((word, wi) => (
                <div key={wi} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 + wi * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className={`block font-bold font-sans tracking-tight leading-none ${
                      wi === 0
                        ? "text-6xl md:text-8xl lg:text-[7rem] text-foreground"
                        : wi === 1
                        ? "text-4xl md:text-6xl lg:text-7xl text-gradient"
                        : "text-2xl md:text-4xl lg:text-5xl text-foreground/40 font-medium tracking-widest uppercase"
                    }`}>
                      {word}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-2xl font-mono text-muted-foreground flex items-center gap-3 h-9"
            >
              <span className="text-primary font-bold">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="font-bold text-foreground"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                _
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-foreground/60 max-w-xl leading-relaxed"
            >
              Building technology-driven solutions at the intersection of AI, engineering, and entrepreneurship. From computer vision pipelines to full-stack apps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
                data-testid="button-view-work"
              >
                View My Work <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-input text-foreground rounded-full font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                data-testid="button-contact"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-6"
            >
              {[
                { href: "https://www.linkedin.com/in/srinath-vatchavari-venkateshan-a26b372b7", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:vvsrinath0@gmail.com", icon: Mail, label: "Email" },
                { href: "https://github.com/vvsrinath", icon: Github, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground transition-colors"
                  data-testid={`link-${label.toLowerCase()}`}
                >
                  <Icon size={22} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0 hidden lg:block"
          >
            {/* Spinning dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary/30"
            />
            {/* Counter-spin ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-38px] rounded-full border border-dashed border-primary/15"
            />

            {/* Orbit dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50" />
            </motion.div>

            {/* Glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
            />

            {/* Avatar image */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={profileImage}
                alt="Srinath Vatchavari Venkateshan"
                className="w-full h-full object-cover object-top"
                data-testid="img-avatar"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-xl border border-border flex items-center gap-2"
            >
              <span className="text-lg">🚀</span>
              <div>
                <div className="text-xs font-bold text-foreground">Building the future</div>
                <div className="text-xs text-muted-foreground">AI + Engineering</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
            >
              <Github size={14} />
              <span className="text-xs font-bold">8 Repos</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-[28px] h-[46px] rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
