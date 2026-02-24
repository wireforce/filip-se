"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Spring physics create the organic trailing lag on the ring
  const x = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.5 });

  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only activate on fine-pointer devices (mouse/trackpad); skip touch screens
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsPointerDevice(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Use rAF to batch updates and avoid over-rendering
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rawX.set(e.clientX);
        rawY.set(e.clientY);

        const target = e.target as Element;
        setIsPointer(
          window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null
        );
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [rawX, rawY]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Outer ring — follows with spring lag */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border-2"
          animate={{
            width: isPointer ? 48 : 32,
            height: isPointer ? 48 : 32,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            borderColor: "var(--color-cursor)",
            transition: "border-color var(--transition-theme)",
          }}
        />
      </motion.div>

      {/* Inner dot — exact mouse position, no lag */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--color-cursor)",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
