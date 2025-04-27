'use client';

import { useEffect, useRef } from 'react';

interface BackgroundCanvasProps {
  color?: string;
  particleCount?: number;
}

export default function BackgroundCanvas({ 
  color = 'rgba(255, 255, 255, 0.5)',
  particleCount = 15
}: BackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸为窗口大小
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // 监听窗口调整大小
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // 花瓣粒子类
    class Petal {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 10 + 5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.01 - 0.005;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (canvas && this.y > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * (canvas.width || window.innerWidth);
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = color;
        ctx.globalAlpha = this.opacity;

        // 绘制花瓣形状
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 花瓣内部花纹
        ctx.globalAlpha = this.opacity * 0.7;
        ctx.beginPath();
        ctx.arc(this.size / 8, -this.size / 8, this.size / 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // 创建花瓣数组
    const petals: Petal[] = [];
    for (let i = 0; i < particleCount; i++) {
      petals.push(new Petal());
    }

    // 动画循环
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      petals.forEach(petal => {
        petal.update();
        petal.draw();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    // 清理函数
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, particleCount]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
} 