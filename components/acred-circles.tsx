"use client";

import { useRef, useEffect, useState } from "react";

const circles = [
  { letter: "A", subtitle: "Architecture", orbitRadius: 90, speed: 20 },
  { letter: "C", subtitle: "Construction", orbitRadius: 110, speed: -16 },
  { letter: "R", subtitle: "Real Estate", orbitRadius: 130, speed: 24 },
  { letter: "E", subtitle: "Engineering", orbitRadius: 110, speed: -18 },
  { letter: "D", subtitle: "Development", orbitRadius: 90, speed: 22 },
];

export function AcredCircles() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    if (!svgRef.current) return;

    let animationFrameId = 0;
    let time = 0;

    const animate = () => {
      time += 0.01;

      const newPositions = circles.map((circle) => {
        const angle = (time * circle.speed) * (Math.PI / 180);
        const x = 200 + circle.orbitRadius * Math.cos(angle);
        const y = 200 + circle.orbitRadius * Math.sin(angle);
        return { x, y };
      });

      setPositions(newPositions);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      className="w-full h-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8925A" />
          <stop offset="100%" stopColor="#D4B284" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central sun-like core */}
      <circle
        cx="200"
        cy="200"
        r="20"
        fill="none"
        stroke="#D4B284"
        strokeWidth="1.5"
        opacity="0.6"
        filter="url(#glow)"
      />
      <circle cx="200" cy="200" r="12" fill="#D4B284" opacity="0.4" filter="url(#glow)" />

      {/* Orbital paths */}
      {circles.map((circle, i) => (
        <circle
          key={`orbit-${i}`}
          cx="200"
          cy="200"
          r={circle.orbitRadius}
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="0.5"
          opacity="0.15"
          strokeDasharray="2,2"
        />
      ))}

      {/* Planets (circles) orbiting */}
      {positions.map((pos, i) => {
        const circle = circles[i];
        const color = i % 2 === 0 ? "#B8925A" : "#D4B284";
        const rotation = (Math.atan2(pos.y - 200, pos.x - 200) * 180) / Math.PI;

        return (
          <g key={`planet-${i}`}>
            {/* Outer glow ring */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="38"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
              opacity="0.3"
              filter="url(#glow)"
            />

            {/* Main circle */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="32"
              fill="#F8F5EF"
              stroke={color}
              strokeWidth="2"
              opacity="0.95"
              filter="url(#glow)"
            />

            {/* Inner ring detail */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="32"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.2"
            />

            {/* Letter */}
            <text
              x={pos.x}
              y={pos.y - 4}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#0E0D0B"
              fontSize="32"
              fontWeight="600"
              fontFamily="var(--font-serif), Georgia, serif"
            >
              {circle.letter}
            </text>

            {/* Subtitle with rotation awareness */}
            <g
              transform={`translate(${pos.x}, ${pos.y}) rotate(${rotation > 90 && rotation < 270 ? rotation + 180 : rotation})`}
            >
              <text
                x="0"
                y="18"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#706B62"
                fontSize="6"
                fontWeight="500"
                fontFamily="var(--font-mono), monospace"
                letterSpacing="0.1em"
              >
                {circle.subtitle}
              </text>
            </g>

            {/* Optional trail effect */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="1.5"
              fill={color}
              opacity="0.3"
            />
          </g>
        );
      })}

      {/* Twinkling background stars */}
      <circle cx="50" cy="60" r="1" fill="#D4B284" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="350" cy="80" r="0.8" fill="#B8925A" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="380" cy="320" r="1.2" fill="#D4B284" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="350" r="0.9" fill="#B8925A" opacity="0.35">
        <animate attributeName="opacity" values="0.15;0.55;0.15" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
