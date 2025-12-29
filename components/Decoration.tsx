"use client";

import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

export default function Decoration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      hue: { min: 0, max: 360 },
      delay: { min: 60, max: 100 },
      rocketsPoint: { min: 0, max: 100 }, // Bắn từ mọi vị trí theo chiều ngang
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      traceLength: 3,
      traceSpeed: 5,
      explosion: 5,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
      lineWidth: { 
        explosion: { min: 1, max: 3 }, 
        trace: { min: 1, max: 2 } 
      },
      autoresize: true,
      brightness: { min: 50, max: 80 },
      decay: { min: 0.015, max: 0.03 },
      mouse: { click: false, move: false, max: 1 },
      // Xóa boundaries hoặc để giá trị lớn để pháo hoa lan tỏa tự nhiên
    });

    fireworks.start();

    return () => {
      fireworks.stop();
      // Đảm bảo xóa sạch các canvas cũ khi component bị gỡ bỏ
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw', // Sử dụng viewport width/height cho chắc chắn
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1000,
        background: 'transparent' // Đảm bảo nền trong suốt
      }}
    />
  );
}