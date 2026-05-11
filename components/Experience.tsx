"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "SAT Sukrit Media Pvt. Ltd.",
    period: "Jul 2023 – Present",
    location: "Delhi, India",
    tag: "Full-time",
    bullets: [
      "Led frontend architecture for EducationPost.in and IIRFRanking.com — built with Next.js, React, Redux Toolkit, and TypeScript",
      "Improved Lighthouse scores from 60 to 90+ and reduced page load times by 20% via SSR, ISR, lazy loading, and code splitting",
      "Integrated Razorpay & Stripe payment gateways and built RBAC authentication systems for secure, role-based access",
      "Built and maintained Node.js/Express REST APIs connected to MongoDB for dynamic data and admin dashboards",
      "Led a team of developers — owned code reviews, architecture decisions, and on-time delivery of production features",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "OyeBusy Technologies Pvt. Ltd.",
    period: "Mar 2023 – Jul 2023",
    location: "Gurgaon, India",
    tag: "Internship",
    bullets: [
      "Built and optimized React.js & Next.js web apps with SSR, reducing page load times by 20%",
      "Integrated REST APIs and implemented responsive UI across the Astrotalki platform using Tailwind CSS",
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="dark:text-white bg-white dark:bg-gray-900 py-20"
    >
      <div className="mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white mb-16"
        >
          Professional Experience
          <hr className="w-24 h-1 mx-auto mt-4 bg-teal-500 border-0 rounded" />
        </motion.h1>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariant}
                className="relative pl-14 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-[18px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-white dark:border-gray-900 shadow-md" />

                {/* Card */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-600 border border-transparent transition-all duration-300">

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h2>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
                      {exp.tag}
                    </span>
                  </div>

                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                    {exp.period} · {exp.location}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;