import React from "react";
import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-panel">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl text-paper md:text-4xl">
            Skills
          </h2>
          <div className="mt-1 h-px w-12 bg-amber" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-t border-line pt-4">
              <h3 className="font-mono text-sm text-teal">{group.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper sm:text-base">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
