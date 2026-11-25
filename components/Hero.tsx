"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";

const HeroSculpture = dynamic(() => import("@/components/hero/HeroSculpture"), {
  ssr: false,
});

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .to(".hero-line > span", {
          y: 0,
          duration: 1.1,
          stagger: 0.085,
        }, 0.1)
        .to(".hero-fade", {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.075,
        }, 0.32);
    }, root);

    return () => context.revert();
  }, [reduced]);

  const spring = { type: "spring" as const, stiffness: 380, damping: 26 };

  return (
    <section
      id="home"
      ref={root}
      className="relative overflow-hidden bg-paper pb-16 pt-[118px] sm:pt-[132px] lg:pb-12 lg:pt-[150px]"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="paper-grain absolute inset-0" aria-hidden="true" />

      <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,.96fr)] lg:gap-8 xl:gap-14">
        <div className="relative z-10">
          <p className="eyebrow hero-fade flex flex-wrap items-center gap-x-3 gap-y-2 text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest" />
            </span>
            <span className="text-forest">Independent Thinker</span>
            <span className="text-line">/</span>
            <span>Emerging Researcher</span>
          </p>

          <h1 className="display-type mt-8 text-[clamp(2.7rem,5.3vw,5.6rem)] sm:mt-10">
            <span className="hero-line block overflow-hidden">
              <span>Srinath</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span>Vatchavari</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span>Venkateshan<span className="text-forest">.</span></span>
            </span>
          </h1>

          <div className="hero-fade mt-9 border-l border-forest pl-5 sm:mt-11">
            <p className="font-display text-[clamp(1.25rem,2.05vw,1.85rem)] leading-[1.4] text-ink-soft">
              Independent Thinker.
              <br />
              Interdisciplinary Explorer.
              <br />
              Builder of Ideas.
            </p>
          </div>

          <blockquote className="hero-fade mt-8 font-display text-[clamp(1.5rem,2.5vw,2.15rem)] italic text-forest">
            &ldquo;{site.tagline}&rdquo;
          </blockquote>

          <p className="hero-fade mt-6 max-w-[34rem] text-[14px] leading-[1.85] text-ink-soft sm:text-[15px]">
            I explore ideas across engineering, science, technology and research,
            connecting different disciplines to understand problems and build
            meaningful solutions.
          </p>

          <div className="hero-fade mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={reduced ? undefined : { y: -2 }}
              transition={spring}
              className="group inline-flex items-center gap-4 bg-forest px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white"
            >
              Explore My Work
              <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reduced ? undefined : { y: -2 }}
              transition={spring}
              className="group inline-flex items-center gap-4 border border-line px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-forest hover:text-forest"
            >
              Connect With Me
              <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
            </motion.a>
          </div>

          <p className="hero-fade mt-8 inline-flex flex-wrap items-center gap-2.5 border border-line bg-white/60 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            Open to R&amp;D engineering internship opportunities
          </p>
        </div>

        <div className="hero-fade relative mx-auto aspect-square w-full max-w-[540px] lg:max-w-none">
          <div className="pointer-events-none absolute inset-[6%] rounded-full border border-line" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-[18%] rounded-full border border-line/70" aria-hidden="true" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(36,82,64,0.055),transparent_68%)]"
            aria-hidden="true"
          />

          <HeroSculpture />

          <p className="pointer-events-none absolute right-0 top-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:right-2">
            Fig. 01 — Connected Disciplines
          </p>

          <figure className="absolute bottom-2 left-0 flex items-center gap-3 border border-line bg-[rgba(252,251,248,0.94)] px-3 py-2 backdrop-blur-sm sm:left-2">
            <Image
              src="/images/srinath-portrait.png"
              alt="Portrait of Srinath Vatchavari Venkateshan"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover grayscale"
            />
            <figcaption className="font-mono text-[8px] uppercase leading-[1.6] tracking-[0.14em] text-muted sm:text-[9px]">
              Srinath V. V.
              <br />
              <span className="text-forest">Independent Thinker</span>
            </figcaption>
          </figure>

          <p className="pointer-events-none absolute bottom-4 right-2 hidden font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:block">
            Interactive Study
          </p>
        </div>
      </div>

      <div className="page-shell relative mt-16 flex items-center justify-between border-t border-line pt-6 lg:mt-20">
        <p className="eyebrow text-muted">Scroll to explore</p>
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-16 bg-line" />
          <span className="h-2 w-2 rounded-full border border-forest" />
        </div>
      </div>
    </section>
  );
}
