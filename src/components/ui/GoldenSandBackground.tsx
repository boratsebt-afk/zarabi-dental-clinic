'use client';

import { useEffect, useRef } from 'react';

export default function GoldenSandBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles: { x: number; y: number; s: number; vx: number; vy: number; baseVx: number; baseVy: number; life: number; maxLife: number; alpha: number }[] = [];
    const particleCount = 100;
    const maxDistance = 150;
    
    let mouse = { x: -1000, y: -1000 };

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        s: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        baseVx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 1) * 0.8,
        baseVy: (Math.random() - 1) * 0.8,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        alpha: Math.random() * 0.5 + 0.1
      };
    }

    function drawParticles() {
      ctx!.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        ctx!.beginPath();
        // Golden color for dust particle
        ctx!.fillStyle = `rgba(202, 138, 4, ${p.alpha})`; 
        ctx!.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx!.fill();
        
        // Add dynamic glow
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = "rgba(234, 179, 8, 0.8)";
        
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Mouse interaction logic
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDistance) {
          let force = (maxDistance - dist) / maxDistance;
          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
          p.alpha = Math.min(1, p.alpha + 0.05);
        } else {
          // Return to base velocity slowly
          p.vx += (p.baseVx - p.vx) * 0.05;
          p.vy += (p.baseVy - p.vy) * 0.05;
          if (p.life > p.maxLife / 2) {
            p.alpha -= 0.005; 
          }
        }

        // Reset particle if off-screen or faded
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
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="goldenSandCanvas"
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 opacity-80 mix-blend-color-dodge"
    />
  );
}
