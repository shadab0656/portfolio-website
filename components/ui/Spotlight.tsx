import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({ className, fill = "white" }) => {
  return (
    <svg
      className={cn("pointer-events-none absolute z-10 h-[60rem] w-[60rem] opacity-50 blur-[200px]", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      fill="none"
    >
      <circle cx="400" cy="400" r="400" fill={fill} />
    </svg>
  );
};
