import React from "react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Experience", value: "3+ years" },
  { label: "Focus", value: "React.js & Next.js" },
  { label: "Range", value: "Full-stack (MERN)" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-ink">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl text-paper md:text-4xl">About</h2>
          <div className="mt-1 h-px w-12 bg-amber" />
        </Reveal>

        <div className="mt-10 flex flex-col gap-14 md:flex-row md:gap-16">
          <div className="md:w-3/5">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {profile.summary}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {profile.extendedSummary}
            </p>
          </div>

          <div className="md:w-2/5">
            <dl className="divide-y divide-line border-t border-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[8rem_1fr] items-center gap-4 py-4"
                >
                  <dt className="font-mono text-sm text-teal">{fact.label}</dt>
                  <dd className="text-sm text-paper sm:text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
