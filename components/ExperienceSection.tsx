import React from "react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-panel">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl text-paper md:text-4xl">
            Experience
          </h2>
          <div className="mt-1 h-px w-12 bg-amber" />
        </Reveal>

        <ol className="mt-12 space-y-16">
          {experience.map((role, idx) => (
            <li key={role.company} className="relative pl-8 md:pl-10">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-amber" />
              {idx !== experience.length - 1 && (
                <span className="absolute left-[4px] top-4 h-[calc(100%+2.5rem)] w-px bg-line" />
              )}

              <p className="font-mono text-sm text-teal">{role.period}</p>
              <h3 className="mt-2 font-display text-xl text-paper md:text-2xl">
                {role.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">
                {role.company} — {role.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                  >
                    <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
