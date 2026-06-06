import { motion, useMotionValue, useSpring } from "framer-motion";
import { Award } from "lucide-react";
import { SiSiemens, SiInfosys } from "react-icons/si";

const CERTIFICATIONS = [
  { title: "AWS Solutions Architecture Job Simulation", issuer: "Amazon Web Services (AWS)", icon: Award, color: "#FF9900" },
  { title: "Explore Electrical Engineering Job Simulation", issuer: "GE Aerospace", icon: Award, color: "#005EB8" },
  { title: "Operations Industrial Engineer Job Simulation", issuer: "Siemens Mobility", icon: SiSiemens, color: "#009999" },
  { title: "AutoCAD – Beginners", issuer: "Infosys Springboard", icon: SiInfosys, color: "#007CC3" },
  { title: "Front-End Software Engineering Job Simulation", issuer: "Skyscanner", icon: Award, color: "#0770E3" },
  { title: "Distinction Award in Web Development", issuer: "Bharathidasan University", icon: Award, color: "#8B0000" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92, rotateX: -8 },
  visible: {
    opacity: 1, y: 0, scale: 1, rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function CertCard({ cert, index }: { cert: typeof CERTIFICATIONS[0]; index: number }) {
  const Icon = cert.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 12);
    y.set(-((e.clientY - rect.top) / rect.height - 0.5) * 12);
  };

  return (
    <motion.div
      variants={cardVariants}
      style={{ perspective: 800 }}
      data-testid={`card-cert-${index}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        whileHover={{ y: -8, boxShadow: `0 20px 40px -8px ${cert.color}30` }}
        transition={{ duration: 0.3 }}
        className="group bg-white p-6 rounded-2xl border border-border flex items-start gap-4 relative overflow-hidden cursor-default"
      >
        {/* Shimmer sweep on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "200%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ background: `linear-gradient(90deg, transparent, ${cert.color}18, transparent)` }}
        />

        {/* Animated icon container */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-secondary relative z-10"
          style={{ color: cert.color }}
          whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={24} />
        </motion.div>

        <div className="relative z-10">
          <h3 className="font-bold text-foreground leading-tight mb-1 text-sm md:text-base">{cert.title}</h3>
          <p className="text-muted-foreground text-xs font-medium">{cert.issuer}</p>

          {/* Animated underline on hover */}
          <motion.div
            className="h-[2px] mt-2 rounded-full origin-left"
            style={{ background: cert.color }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.35 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Floating decorative blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-400/8 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Licenses & <span className="text-gradient">Certifications</span>
            </h2>
            <motion.div
              className="w-20 h-1 bg-primary rounded-full mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <p className="text-foreground/70 max-w-lg">
              Continuous learning and professional development through industry-recognized programs and job simulations.
            </p>
          </motion.div>

          {/* Animated count */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
            className="shrink-0 flex items-baseline gap-1"
          >
            <motion.span
              className="text-7xl font-bold font-mono text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              6
            </motion.span>
            <span className="text-foreground/50 font-medium">credentials</span>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
