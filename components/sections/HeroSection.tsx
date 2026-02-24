"use client";

import { motion } from "framer-motion";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { heroContainer, heroItem } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />

      {/* Main content — centered, staggered entrance */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Roles */}
        <motion.p
          variants={heroItem}
          className="text-xs font-mono uppercase tracking-[0.3em] mb-6"
          style={{ color: "var(--color-text-muted)" }}
        >
          Frontend Developer.&nbsp; Team Leader.&nbsp; Business Developer.
        </motion.p>

        {/* Name — the centerpiece */}
        <motion.h1
          variants={heroItem}
          className="font-bold leading-[0.92] tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            color: "var(--color-heading)",
          }}
        >
          Filip Wirefors.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={heroItem}
          className="mt-6 text-lg italic"
          style={{ color: "var(--color-text-muted)" }}
        >
          &ldquo;I build the internet. You&rsquo;re welcome.&rdquo;
        </motion.p>

        {/* CTA */}
        <motion.div variants={heroItem} className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--color-accent-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--color-accent)";
            }}
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: "var(--color-text-muted)" }}>
          scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ backgroundColor: "var(--color-border-strong, var(--color-border))" }}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
