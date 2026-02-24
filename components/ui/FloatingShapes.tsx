"use client";

import { motion } from "framer-motion";

interface ShapeConfig {
  id: string;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  rotationStart: number;
  type: "orb" | "triangle" | "ring" | "square";
  colorVar: string;
}

const shapes: ShapeConfig[] = [
  {
    id: "orb-1",
    left: "8%",
    top: "12%",
    size: 300,
    duration: 16,
    delay: 0,
    rotationStart: 0,
    type: "orb",
    colorVar: "--color-shape-a",
  },
  {
    id: "tri-1",
    left: "72%",
    top: "55%",
    size: 200,
    duration: 20,
    delay: 2.5,
    rotationStart: 15,
    type: "triangle",
    colorVar: "--color-shape-b",
  },
  {
    id: "ring-1",
    left: "78%",
    top: "10%",
    size: 140,
    duration: 14,
    delay: 1,
    rotationStart: 0,
    type: "ring",
    colorVar: "--color-shape-a",
  },
  {
    id: "orb-2",
    left: "18%",
    top: "68%",
    size: 110,
    duration: 18,
    delay: 4,
    rotationStart: 0,
    type: "orb",
    colorVar: "--color-shape-b",
  },
  {
    id: "sq-1",
    left: "55%",
    top: "20%",
    size: 80,
    duration: 22,
    delay: 3,
    rotationStart: 30,
    type: "square",
    colorVar: "--color-shape-b",
  },
];

function OrbSvg({ size, colorVar, id }: { size: number; colorVar: string; id: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" fill="none">
      <defs>
        <radialGradient id={`rg-${id}`} cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor={`var(${colorVar})`} stopOpacity="0.9" />
          <stop offset="60%" stopColor={`var(${colorVar})`} stopOpacity="0.35" />
          <stop offset="100%" stopColor={`var(${colorVar})`} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#rg-${id})`} />
      {/* Subtle inner highlight ring for depth */}
      <circle cx="50" cy="50" r="28" fill="none" stroke={`var(${colorVar})`} strokeWidth="0.6" strokeOpacity="0.25" />
    </svg>
  );
}

function TriangleSvg({ size, colorVar, id }: { size: number; colorVar: string; id: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" fill="none">
      <defs>
        <clipPath id={`clip-${id}`}>
          <polygon points="50,6 96,90 4,90" />
        </clipPath>
      </defs>
      {/* Filled triangle with low opacity */}
      <polygon
        points="50,6 96,90 4,90"
        fill={`var(${colorVar})`}
        fillOpacity="0.08"
        stroke={`var(${colorVar})`}
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      {/* Inner grid lines clipped to triangle shape */}
      <g clipPath={`url(#clip-${id})`} opacity="0.3">
        {[32, 47, 62, 77].map((yVal) => (
          <line key={`h-${yVal}`} x1="0" y1={yVal} x2="100" y2={yVal} stroke={`var(${colorVar})`} strokeWidth="0.6" />
        ))}
        {[28, 42, 57, 72].map((xVal) => (
          <line key={`v-${xVal}`} x1={xVal} y1="0" x2={xVal} y2="100" stroke={`var(${colorVar})`} strokeWidth="0.6" />
        ))}
      </g>
    </svg>
  );
}

function RingSvg({ size, colorVar }: { size: number; colorVar: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" fill="none">
      <circle cx="50" cy="50" r="44" stroke={`var(${colorVar})`} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="50" cy="50" r="34" stroke={`var(${colorVar})`} strokeWidth="0.5" strokeOpacity="0.25" />
    </svg>
  );
}

function SquareSvg({ size, colorVar }: { size: number; colorVar: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" fill="none">
      <rect x="10" y="10" width="80" height="80" stroke={`var(${colorVar})`} strokeWidth="1.5" strokeOpacity="0.45" fill={`var(${colorVar})`} fillOpacity="0.04" />
      <rect x="25" y="25" width="50" height="50" stroke={`var(${colorVar})`} strokeWidth="0.5" strokeOpacity="0.25" />
    </svg>
  );
}

export function FloatingShapes() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{ left: shape.left, top: shape.top }}
          animate={{
            y: [0, -20, 10, -14, 0],
            x: [0, 14, -10, 18, 0],
            rotate: [
              shape.rotationStart,
              shape.rotationStart + 6,
              shape.rotationStart - 4,
              shape.rotationStart + 2,
              shape.rotationStart,
            ],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
            // Each keyframe segment uses its own timing
            times: [0, 0.3, 0.55, 0.8, 1],
          }}
        >
          {shape.type === "orb" && (
            <OrbSvg size={shape.size} colorVar={shape.colorVar} id={shape.id} />
          )}
          {shape.type === "triangle" && (
            <TriangleSvg size={shape.size} colorVar={shape.colorVar} id={shape.id} />
          )}
          {shape.type === "ring" && (
            <RingSvg size={shape.size} colorVar={shape.colorVar} />
          )}
          {shape.type === "square" && (
            <SquareSvg size={shape.size} colorVar={shape.colorVar} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
