"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "IIRF Ranking",
    description:
      "India's leading institutional ranking platform. Contributed to the Study Abroad section and core ranking pages — optimizing state management with Redux Toolkit, improving data flow, and boosting Lighthouse scores from 60 to 90+.",
    image: "/iirf.png",
    link: "https://iirfranking.com/study-abroad/",
    tags: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "SSR/ISR/CSR",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Razorpay",
    ],
    badge: "Live · Production",
  },
  {
    name: "Education Post",
    description:
      "A high-traffic education news platform serving thousands of daily users. Built with Next.js, React, Redux Toolkit, Node.js, and MongoDB — featuring SSR/ISR for SEO, Razorpay payments, RBAC auth, and a custom admin dashboard.",
    image: "/educationpost.png",
    link: "https://educationpost.in/",
    tags: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "SSR/ISR/CSR",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Razorpay",
    ],
    badge: "Live · Production",
  },
  {
    name: "Icosa",
    description:
      "A school accreditation management platform streamlining workflows for institutions and administrators. Built with Next.js and React, focused on dynamic dashboards, role-based access, and scalable data management.",
    image: "/icosa.png",
    link: "https://icosaonline.com/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    badge: "Live · Production",
  },

  {
    name: "Education Post Admin Dashboard",
    description:
      "A powerful internal admin dashboard for managing content, users, and analytics across EducationPost. Built with React, Redux, Node.js, MongoDB, and Tailwind CSS — with real-time data and role-based access control.",
    image: "/epn.png",
    link: "https://admin.educationpost.in/",
    tags: [
      "React",
      "Redux",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "RBAC",
    ],
    badge: "Internal Tool",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4"
      >
        Projects
        <hr className="w-16 h-1 mx-auto mt-4 bg-teal-500 rounded border-0" />
      </motion.h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-14 text-base">
        Production platforms and client work I've built or contributed to
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-52">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Badge */}
              <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/90 text-white backdrop-blur-sm">
                {project.badge}
              </span>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.name}
                </h2>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="shrink-0 text-teal-500 hover:text-teal-600 hover:-translate-y-0.5 transition-all"
                >
                  <BsArrowUpRightSquare size={22} />
                </Link>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
