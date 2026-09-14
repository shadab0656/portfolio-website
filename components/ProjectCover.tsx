import React from "react";

const ProjectCover = ({
  name,
  accent,
}: {
  name: string;
  accent: "amber" | "teal";
}) => {
  const color = accent === "amber" ? "#E7A33E" : "#5FC7B9";
  const initials = name
    .replace(/\.(in|com|net)$/, "")
    .split(/[\s-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-panel transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${color}14 0px, ${color}14 1px, transparent 1px, transparent 14px)`,
      }}
    >
      <span
        className="font-display text-5xl transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ color }}
        aria-hidden="true"
      >
        {initials}
      </span>
    </div>
  );
};

export default ProjectCover;
