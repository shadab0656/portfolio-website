"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { profile, stats } from "@/lib/data";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2A3244 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 90%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 pb-16 pt-8 md:pb-24 md:pt-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          <span className="font-mono text-xs text-muted">
            Open to new roles
          </span>
        </div>

        <p className="mt-6 font-mono text-sm text-teal">
          <span aria-hidden="true">&gt; </span>
          const focus ={" "}
          <span key={roleIndex} className="role-fade text-amber">
            &quot;{profile.roles[roleIndex]}&quot;
          </span>
          ;
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-paper sm:text-5xl md:text-6xl">
          I build fast, production-grade interfaces — and the systems behind
          them.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="projects"
            smooth
            duration={400}
            offset={-80}
            className="cursor-pointer rounded-md bg-amber px-6 py-3 font-medium text-ink shadow-sm transition-colors hover:bg-amber/90"
          >
            View work
          </Link>
          <a
            href="/Shadab_Hussain_Frontend_Resume.pdf"
            className="rounded-md border border-line px-6 py-3 font-medium text-paper transition-colors hover:border-teal hover:text-teal"
          >
            Download resume
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl text-paper md:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-xs leading-snug text-muted md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex justify-center pb-10">
        <Link
          to="about"
          smooth
          duration={400}
          offset={-80}
          className="cursor-pointer text-teal"
          aria-label="Scroll to about section"
        >
          <HiArrowDown size={24} className="animate-bounce motion-reduce:animate-none" />
        </Link>
      </div>

      <style jsx>{`
        .role-fade {
          display: inline-block;
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

// "use client";
// import React from "react";
// import Image from "next/image";
// import { Link } from "react-scroll/modules";
// import { HiArrowDown } from "react-icons/hi";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section id="home" className="w-full bg-white dark:bg-stone-900">
//       <div className="flex flex-col-reverse items-center justify-center text-center md:flex-row md:text-left px-6 py-20 sm:py-32 md:py-48 max-w-7xl mx-auto">
//         {/* Text Section */}
//         <motion.div
//           className="md:w-3/5 space-y-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold leading-tight"
//             variants={itemVariants}
//           >
//             Hey, I'm <span className="text-teal-600">Shadab Hussain</span>
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
//             variants={itemVariants}
//           >
//             I'm a{" "}
//             <span className="font-semibold text-teal-600">
//               Front-End Developer
//             </span>{" "}
//             crafting elegant, high-performance web experiences. I specialize in
//             building fast, scalable UIs using React, Next.js, and modern
//             JavaScript.
//           </motion.p>
//           <motion.p
//             className="text-md md:text-lg text-gray-600 dark:text-gray-400"
//             variants={itemVariants}
//           >
//             Passionate about clean code, seamless design systems, and
//             performance-first development. Based in Delhi, India — open to
//             remote opportunities globally.
//           </motion.p>
//           <motion.div
//             className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4"
//             variants={itemVariants}
//           >
//             <Link
//               to="projects"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               className="px-6 py-3 bg-teal-600 text-white rounded-md shadow hover:bg-teal-700 transition cursor-pointer"
//             >
//               View Projects
//             </Link>
//             <a
//               href="/shadab_CV.pdf"
//               target="_blank"
//               className="px-6 py-3 bg-gray-800 text-white rounded-md shadow hover:bg-gray-900 transition"
//             >
//               Download Resume
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           className="mb-10 md:mb-0 md:w-1/2 flex justify-center"
//           variants={itemVariants}
//         >
//           <div className="relative p-2 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-stone-700 dark:to-stone-800 rounded-full shadow-xl">
//             <div className="absolute inset-0 border-4 border-dashed border-teal-300 rounded-full"></div>
//             <Image
//               src="/hero-img.png"
//               alt="Shadab Hussain - Front-End Developer"
//               width={350}
//               height={350}
//               className=" w-[220px] md:w-[350px] rounded-full hover:scale-105 transition duration-300 relative z-10"
//               priority
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Arrow Down */}
//       <div className="flex justify-center mt-2">
//         <Link
//           to="about"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={500}
//           className="cursor-pointer"
//         >
//           <HiArrowDown size={32} className="animate-bounce text-teal-600" />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
