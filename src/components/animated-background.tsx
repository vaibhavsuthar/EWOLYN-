"use client";

import React, { useEffect, useRef } from 'react';

const items = [
  "🇮🇳", "🦁", "⚙️", "🏭", "🏗️", "🔧", "🚜", "🧪", "📦",
  "Textile", "Electronics", "Food Processing", "Agriculture",
  "Handicrafts", "Automobile", "Jewelry", "Leather", "Tourism",
  "Pharma", "Engineering", "Plastic", "Solar", "Renewables"
];

export function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const createFloatItem = () => {
      if (!backgroundRef.current) return;

      const div = document.createElement('div');
      div.className = 'float-item';
      div.innerText = items[Math.floor(Math.random() * items.length)];

      div.style.left = Math.random() * 100 + 'vw';
      div.style.animationDuration = (6 + Math.random() * 6) + 's';
      div.style.fontSize = (12 + Math.random() * 18) + 'px';

      backgroundRef.current.appendChild(div);

      setTimeout(() => {
        if (backgroundRef.current?.contains(div)) {
          backgroundRef.current.removeChild(div);
        }
      }, 15000);
    };

    intervalRef.current = setInterval(createFloatItem, 300);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <div ref={backgroundRef} className="animated-background-container"></div>;
}
