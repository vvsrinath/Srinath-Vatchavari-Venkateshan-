"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: reduced ? 0 : 0.3 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
          }
          className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center border border-forest bg-forest text-white transition-colors duration-300 hover:border-ink hover:bg-ink"
        >
          <Arrow className="h-4 w-4 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
