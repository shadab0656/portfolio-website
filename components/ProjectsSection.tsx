"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { projects, projectCategories } from "@/lib/data";
import ProjectCover from "./ProjectCover";
import Reveal from "./Reveal";

type Category = (typeof projectCategories)[number];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Category>("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-ink">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl text-paper md:text-4xl">
            Projects
          </h2>
          <div className="mt-1 h-px w-12 bg-amber" />
        </Reveal>

        <div className="mt-8 flex gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === cat
                  ? "border-amber bg-amber text-ink"
                  : "border-line text-muted hover:border-teal hover:text-teal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-20">
          {visible.map((project, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={project.name}
                className={`flex flex-col gap-8 md:items-center md:gap-12 ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="group md:w-1/2">
                  <ProjectCover
                    name={project.name}
                    accent={project.accent as "amber" | "teal"}
                  />
                </div>

                <div className="md:w-1/2">
                  <p className="font-mono text-xs text-teal">{project.type}</p>
                  <h3 className="mt-2 font-display text-2xl text-paper md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper transition-colors hover:text-amber"
                  >
                    Visit project
                    <BsArrowUpRightSquare size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
