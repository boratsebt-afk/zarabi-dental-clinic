'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ETHEREAL_IMAGES = [
  '/images/9ddafedddb5a9686c265bf2bd149d552.jpg',
  '/images/0549ca1c75ce4cc7556ded42ae57a199.jpg',
  '/images/48b881abff4e8cfc43bc65b33faa7b67.jpg',
  '/images/32ae17477ace40d8c7ef246eb788a836.jpg'
];

export default function EtherealBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // We only show the intensely beautiful cosmic animation in dark mode.
  if (resolvedTheme !== 'dark') return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-80">
      {/* Dynamic looping ethereal images */}
      
      {/* Particle/Cosmic Cluster 1 */}
      <motion.div
        className="absolute w-[120vw] h-[120vh] -top-[10%] -left-[10%] opacity-60"
        animate={{
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.05, 1, 1.03, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Image src={ETHEREAL_IMAGES[0]} alt="Cosmic 1" fill className="object-cover mix-blend-screen" priority />
      </motion.div>

      {/* Cosmic Structure 2 */}
      <motion.div
        className="absolute w-[120vw] h-[120vh] -bottom-[20%] -right-[10%] opacity-50"
        animate={{
          rotate: [0, -8, 0, 8, 0],
          scale: [1, 1.08, 1, 1.02, 1],
          x: [0, -30, 0, 30, 0]
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image src={ETHEREAL_IMAGES[1]} alt="Cosmic 2" fill className="object-cover mix-blend-screen opacity-70" />
      </motion.div>

      {/* Nebula/Glow 3 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] opacity-30 mix-blend-screen"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image src={ETHEREAL_IMAGES[2]} alt="Cosmic 3" fill className="object-cover mix-blend-screen" />
      </motion.div>
      
      {/* Overlay gradient to ensure content remains highly readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808]/80 mix-blend-normal" />
      <div className="absolute inset-0 bg-[#080808]/50 mix-blend-normal" />
    </div>
  );
}
