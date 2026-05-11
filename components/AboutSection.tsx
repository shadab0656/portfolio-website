"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { skill: "React.js", icon: "⚛️" },
  { skill: "Next.js", icon: "▲" },
  { skill: "TypeScript", icon: "🔷" },
  { skill: "JavaScript", icon: "🟨" },
  { skill: "Node.js", icon: "🟢" },
  { skill: "Express.js", icon: "🚂" },
  { skill: "MongoDB", icon: "🍃" },
  { skill: "Redux Toolkit", icon: "🔮" },
  { skill: "Tailwind CSS", icon: "🎨" },
  { skill: "REST APIs", icon: "🔗" },
  { skill: "Framer Motion", icon: "✨" },
  { skill: "Git & GitHub", icon: "🐙" },
  { skill: "HTML5 & CSS3", icon: "🌐" },
  { skill: "Razorpay / Stripe", icon: "💳" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.7 },
  },
};

const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const AboutSection = () => {
  return (
    <>
      <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white mb-8">
        About Me
        <hr className="w-12 h-1 mx-auto mt-4 bg-teal-500 border-0 rounded" />
      </h1>

      <section id="about" className="bg-white dark:bg-gray-950  pt-1">
        <div className="max-w-6xl mx-auto my-12 px-6 md:px-12 lg:px-20 pb-20">
          <div className="flex flex-col-reverse md:flex-row md:space-x-12 items-center">

            {/* LEFT: TEXT */}
            <motion.div
              className="md:w-1/2 text-gray-700 dark:text-gray-300 space-y-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="leading-relaxed">
                Hi, I'm{" "}
                <span className="text-teal-600 font-bold">Shadab Hussain</span>{" "}
                — a{" "}
                <span className="font-bold text-teal-600">
                  Full Stack Developer
                </span>{" "}
                based in Delhi, India with{" "}
                <span className="font-semibold">3 years of experience</span>{" "}
                building scalable, high-performance web applications.
              </p>

              <p className="leading-relaxed">
                At{" "}
                <span className="font-semibold text-teal-600">
                  SAT Sukrit Media Pvt. Ltd.
                </span>
                , I've led development on{" "}
                <span className="font-semibold">EducationPost.in</span> and{" "}
                <span className="font-semibold">IIRFRanking.com</span> —
                improving Lighthouse scores from 60 to 90+, cutting page load
                times by 20% using SSR/ISR, and shipping Razorpay & Stripe
                payment integrations in production.
              </p>

              <p className="leading-relaxed">
                I work across the full stack — React.js & Next.js on the
                frontend, Node.js, Express & MongoDB on the backend — with a
                strong focus on performance, clean architecture, and reusable
                component systems.
              </p>

              <p className="leading-relaxed">
                I've also led small dev teams, owned architecture decisions, and
                consistently shipped maintainable code that scales. Always
                excited to work on products that make a real-world difference.
              </p>

              {/* Stats row */}
              <div className="flex gap-6 pt-2">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "20%", label: "Load Time Improved" },
                  { value: "90+", label: "Lighthouse Score" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-teal-600">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: SKILLS + IMAGE */}
            <motion.div
              className="md:w-1/2 flex flex-col items-center mb-12 md:mb-0"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Tech Stack
              </h2>

              <motion.div
                className="flex flex-wrap justify-center gap-2 max-w-lg"
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((item, idx) => (
                  <motion.span
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 hover:shadow-md transition-all duration-200 text-sm font-medium cursor-default"
                  >
                    <span>{item.icon}</span>
                    {item.skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 hidden md:block"
              >
                <Image
                  src="/developer.png"
                  alt="Developer Illustration"
                  width={280}
                  height={280}
                  className="rounded-full shadow-lg hover:scale-105 transition duration-300"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;