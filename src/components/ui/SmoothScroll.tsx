'use client';

import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

function isTouchDevice() {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(any-pointer: coarse)').matches ||
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(hover: none)').matches
  );
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [useSmoothScroll, setUseSmoothScroll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setUseSmoothScroll(!isTouchDevice());
  }, []);

  if (!mounted || !useSmoothScroll) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
