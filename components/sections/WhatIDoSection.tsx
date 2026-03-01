"use client";

import { motion } from "framer-motion";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { sectionContainer, scrollReveal } from "@/lib/animations";

export function WhatIDoSection() {
  return (
    <section
      id="what-i-do"
      className="relative py-32 px-6 flex items-center justify-center overflow-hidden"
      style={{ minHeight: "60vh" }}
    >
      <FloatingShapes />
      <motion.div
        className="relative z-10 max-w-3xl w-full"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Section label */}
        <motion.p
          variants={scrollReveal}
          className="text-xs font-mono uppercase tracking-[0.3em] mb-8"
          style={{ color: "var(--color-text-muted)" }}
        >
          [ What I do ]
        </motion.p>

        {/* The statement */}
        <motion.p
          variants={scrollReveal}
          className="text-2xl leading-relaxed font-medium md:text-3xl md:leading-relaxed"
          style={{ color: "var(--color-text)" }}
        >
          I lead frontend teams, write the kind of code I&rsquo;m proud of, and
          occasionally convince people that{" "}
          <span className="gradient-text font-semibold">
            good UX isn&rsquo;t optional
          </span>{" "}
          — all while moonlighting as a business developer when someone needs to
          talk strategy.
        </motion.p>
      </motion.div>
    </section>
  );
}
