"use client";
import React from "react";

const techs = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "TanStack Query",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT Auth",
  "Jest",
  "Razorpay",
  "Gemini API",
];

const TechMarquee = () => {
  const track = [...techs, ...techs];

  return (
    <div className="overflow-hidden border-y border-line bg-panel py-5">
      <div className="marquee-track flex w-max gap-10">
        {track.map((tech, idx) => (
          <span
            key={`${tech}-${idx}`}
            className="font-mono text-sm text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: scroll 32s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
