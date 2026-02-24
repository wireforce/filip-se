"use client";

import { motion } from "framer-motion";
import { sectionContainer, scrollReveal, scrollRevealDelayed } from "@/lib/animations";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <motion.div
        className="max-w-2xl mx-auto"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section label */}
        <motion.p
          variants={scrollReveal}
          className="text-xs font-mono uppercase tracking-[0.3em] mb-8"
          style={{ color: "var(--color-text-muted)" }}
        >
          [ About me ]
        </motion.p>

        {/* Bio paragraph */}
        <motion.p
          variants={scrollRevealDelayed}
          className="text-lg leading-relaxed"
          style={{ color: "var(--color-text)" }}
        >
          Outside of work I have three main food groups: actual food (I take it
          very seriously), running and gym (mostly so I can justify the food),
          and golf — where I&rsquo;ve learned that expensive clubs don&rsquo;t
          fix a bad swing, but I keep trying. Life is about balance.
        </motion.p>
      </motion.div>
    </section>
  );
}
