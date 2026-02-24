"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const THEMES = [
  { id: "filip-mode", label: "Filip" },
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
] as const;

export function ThemePills() {
  const { theme, setTheme } = useTheme();
  // Avoid hydration mismatch: don't render active state server-side
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className="flex items-center gap-0.5 p-1 rounded-full border"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {THEMES.map(({ id, label }) => {
        const isActive = mounted && theme === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            aria-pressed={isActive}
            className="relative px-3 py-1 rounded-full text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              color: isActive
                ? "var(--color-bg)"
                : "var(--color-text-muted)",
              outlineColor: "var(--color-accent)",
              // Override global * transition for the button text color
              // so it flips immediately with the sliding pill, not slowly
              transition: "color 150ms ease",
              cursor: "none",
            }}
          >
            {/* Animated background pill slides between active states */}
            {isActive && (
              <motion.span
                layoutId="theme-pill-bg"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              />
            )}
            {/* relative keeps the label above the absolute background span */}
            <span className="relative">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
