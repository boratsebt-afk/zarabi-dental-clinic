'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ZLazyLoaderProps {
  onAnimationComplete: () => void;
  onZoomStart?: () => void;
}

export default function ZLazyLoader({ onAnimationComplete, onZoomStart }: ZLazyLoaderProps) {
  const [drawDone, setDrawDone] = useState(false);
  const [zoomDone, setZoomDone] = useState(false);

  // Prevent scroll during loader
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      {!zoomDone && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]"
          // Fade out the backdrop just after the zoom fires
          animate={drawDone ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          {/* ── Particle glow backdrop ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 55% at 50% 48%, rgba(202,138,4,0.12) 0%, transparent 70%)',
            }}
            animate={drawDone ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* ── The SVG container that zooms through ── */}
          <motion.div
            animate={
              drawDone
                ? { scale: 14, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={
              drawDone
                ? { duration: 0.85, ease: [0.33, 1, 0.68, 1] }
                : { duration: 0 }
            }
            onAnimationComplete={() => {
              if (drawDone) {
                setZoomDone(true);
                onAnimationComplete();
              }
            }}
          >
            <svg
              viewBox="0 0 280 360"
              width="180"
              height="231"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gold gradient – polished gold feel */}
                <linearGradient id="zGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#F9E07A" />
                  <stop offset="25%"  stopColor="#D4A017" />
                  <stop offset="55%"  stopColor="#FEF3A0" />
                  <stop offset="80%"  stopColor="#B8860B" />
                  <stop offset="100%" stopColor="#7A5C00" />
                </linearGradient>

                {/* Silver gradient – brushed titanium feel */}
                <linearGradient id="zSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#CCCCCC" />
                  <stop offset="30%"  stopColor="#888888" />
                  <stop offset="60%"  stopColor="#EEEEEE" />
                  <stop offset="100%" stopColor="#555555" />
                </linearGradient>

                {/* Glow filter for stroke shimmer */}
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ── 1. OUTER TOOTH / SHIELD SHAPE ── */}
              <motion.path
                d={`
                  M 55 18
                  C 30 18 8 42 8 72
                  C 8 108 22 148 48 192
                  C 62 215 76 240 82 265
                  C 88 288 92 308 100 324
                  C 110 342 125 354 140 354
                  C 155 354 170 342 180 324
                  C 188 308 192 288 198 265
                  C 204 240 218 215 232 192
                  C 258 148 272 108 272 72
                  C 272 42 250 18 225 18
                  C 208 18 192 28 175 36
                  C 162 43 152 46 140 46
                  C 128 46 118 43 105 36
                  C 88 28 72 18 55 18 Z
                `}
                stroke="url(#zGold)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.8, ease: 'circOut', delay: 0.1 }}
              />

              {/* ── 2. Z – TOP HORIZONTAL BAR ── */}
              <motion.path
                d="M 85 96 C 95 88 115 84 140 84 C 165 84 190 88 205 96"
                stroke="url(#zGold)"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: 'circOut', delay: 0.6 }}
              />

              {/* ── 3. Z – TOP WING / FLAME (right serif) ── */}
              <motion.path
                d="M 198 84 C 218 68 228 52 220 36 C 212 22 195 18 180 28"
                stroke="url(#zGold)"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'circOut', delay: 1.1 }}
              />

              {/* ── 4. Z – DIAGONAL STROKE ── */}
              <motion.path
                d="M 205 96 L 85 258"
                stroke="url(#zGold)"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'circOut', delay: 1.35 }}
              />

              {/* ── 5. Z – BOTTOM HORIZONTAL BAR ── */}
              <motion.path
                d="M 78 258 C 92 272 116 278 140 278 C 164 278 188 272 205 262"
                stroke="url(#zGold)"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: 'circOut', delay: 2.2 }}
              />

              {/* ── 6. IMPLANT NECK & THREADS (silver) ── */}
              {/* Neck */}
              <motion.path
                d="M 126 285 L 126 298 M 154 285 L 154 298"
                stroke="url(#zSilver)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'circOut', delay: 2.55 }}
              />

              {/* Thread coils – 5 arcs widening then narrowing */}
              {[
                { y: 300, w: 28 },
                { y: 312, w: 22 },
                { y: 324, w: 17 },
                { y: 336, w: 12 },
                { y: 347, w:  7 },
              ].map(({ y, w }, i) => (
                <motion.path
                  key={i}
                  d={`M ${140 - w} ${y} Q 140 ${y - 4} ${140 + w} ${y}`}
                  stroke="url(#zSilver)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 0.28,
                    ease: 'circOut',
                    delay: 2.65 + i * 0.12,
                  }}
                  // Trigger the zoom on the LAST thread completing
                  onAnimationComplete={i === 4 ? () => {
                    setDrawDone(true);
                    onZoomStart?.();
                  } : undefined}
                />
              ))}
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
