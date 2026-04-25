/**
 * HeroParticles — floating particle system for hero sections
 * Pure CSS animations, zero runtime cost
 */
import React, { useMemo } from 'react';

export default function HeroParticles({ count = 35 }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 4,
      duration: 8 + Math.random() * 14,
      delay: Math.random() * 10,
      color: Math.random() > 0.6
        ? 'rgba(245, 158, 11, 0.5)'
        : Math.random() > 0.5
          ? 'rgba(43, 142, 150, 0.4)'
          : 'rgba(255, 255, 255, 0.25)',
    })), [count]
  );

  return (
    <div className="hero-particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="hero-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
