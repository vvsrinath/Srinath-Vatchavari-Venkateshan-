import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const CONTACT_ITEMS = [
  { href: "mailto:vvsrinath0@gmail.com", icon: Mail, label: "Email", value: "vvsrinath0@gmail.com" },
  { href: "tel:9342140720", icon: Phone, label: "Phone", value: "+91 9342140720" },
  { href: null, icon: MapPin, label: "Location", value: "Rajapalayam, Tamil Nadu, India" },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/srinath-vatchavari-venkateshan-a26b372b7", icon: Linkedin, label: "LinkedIn Profile" },
  { href: "https://github.com/vvsrinath", icon: Github, label: "GitHub Repository" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet-400/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Let's build something <span className="text-primary">extraordinary.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-md">
                I'm always open to discussing new projects, creative ideas, internships, or opportunities to be part of your visions.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              {CONTACT_ITEMS.map(({ href, icon: Icon, label, value }) => {
                const Wrapper = href ? motion.a : motion.div;
                const wrapperProps = href ? { href } : {};
                return (
                  <Wrapper
                    key={label}
                    {...wrapperProps}
                    variants={itemVariants}
                    whileHover={{ x: 8, backgroundColor: "hsl(var(--secondary))", borderColor: "hsl(var(--border))" }}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent transition-colors cursor-pointer"
                    data-testid={`contact-${label.toLowerCase()}`}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.15, rotate: 8, backgroundColor: "hsl(var(--primary))", color: "white" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium mb-0.5">{label}</div>
                      <div className="font-bold text-foreground">{value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Social card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-foreground text-background p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Animated corner glow */}
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary/25 rounded-full blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold mb-6 font-sans"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Connect with me online
              </motion.h3>
              <p className="text-background/70 mb-12">
                Find my professional experience, latest projects, and code repositories on these platforms.
              </p>

              <div className="space-y-4">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    whileHover={{ backgroundColor: "hsl(var(--primary))", x: 4 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-background/10 transition-colors group"
                    data-testid={`link-social-${label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div whileHover={{ rotate: 12, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Icon size={22} />
                      </motion.div>
                      <span className="font-medium">{label}</span>
                    </div>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-background/20 relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.3)" }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Available for opportunities
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
