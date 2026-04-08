'use client';

import { useEffect, useRef, useState } from 'react';

function isTouchDevice() {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  );
}

export default function GoldenSandBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!isTouchDevice()) {
      setShouldRender(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles: { x: number; y: number; s: number; vx: number; vy: number; baseVx: number; baseVy: number; life: number; maxLife: number; alpha: number }[] = [];
    const particleCount = 60;
    const maxDistance = 120;
    
    let mouse = { x: -1000, y: -1000 };

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        s: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.45,
        baseVx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 1) * 0.7,
        baseVy: (Math.random() - 1) * 0.7,
        life: 0,
        maxLife: Math.random() * 180 + 80,
        alpha: Math.random() * 0.45 + 0.1,
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticles() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.beginPath();
        ctx.fillStyle = `rgba(202, 138, 4, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(234, 179, 8, 0.75)';

        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const force = (maxDistance - dist) / maxDistance;
          p.vx += (dx / dist) * force * 0.045;
          p.vy += (dy / dist) * force * 0.045;
          p.alpha = Math.min(1, p.alpha + 0.04);
        } else {
          p.vx += (p.baseVx - p.vx) * 0.05;
          p.vy += (p.baseVy - p.vy) * 0.05;
          if (p.life > p.maxLife / 2) {
            p.alpha -= 0.004;
          }
        }

        if (p.y < -10 || p.alpha <= 0.01) {
          particles[i] = createParticle();
          particles[i].y = height + 10;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      }
      requestAnimationFrame(drawParticles);
    }

    initParticles();
    drawParticles();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      id="goldenSandCanvas"
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 opacity-70 mix-blend-color-dodge"
    />
  );
}
