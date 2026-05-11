"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "React.js & Next.js Engineer",
  "Node.js & MongoDB Expert",
  "Performance & SEO Specialist",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
      }, 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/shadabdashboard",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/shadabhussain",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "mailto:shadab.hussain.tech@gmail.com",
      icon: <MdEmail size={20} />,
      label: "Email",
    },
  ];

  return (
    <section id="home" className="w-full bg-white dark:bg-stone-900">
      <div className="flex flex-col-reverse items-center justify-center text-center md:flex-row md:text-left px-6 py-20 sm:py-32 md:py-48 max-w-7xl mx-auto gap-10">
        {/* Text Section */}
        <motion.div
          className="md:w-3/5 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full border border-teal-200 dark:border-teal-800">
              👋 Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Hey, I'm <span className="text-teal-600">Shadab Hussain</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 h-8"
            variants={itemVariants}
          >
            <span className="text-teal-600">{displayed}</span>
            <span className="animate-pulse text-teal-400">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            variants={itemVariants}
          >
            Building scalable, high-performance web applications end-to-end —
            from React.js & Next.js on the frontend to Node.js, Express &
            MongoDB on the backend. Based in Delhi, India —{" "}
            <span className="text-teal-600 font-medium">
              open to remote opportunities globally.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            variants={itemVariants}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="px-6 py-3 bg-teal-600 text-white rounded-md shadow hover:bg-teal-700 active:scale-95 transition-all cursor-pointer font-medium"
            >
              View Projects
            </Link>
            <a
              href="/shadab_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 active:scale-95 transition-all font-medium"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4 pt-2"
            variants={itemVariants}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all"
              >
                {social.icon}
              </a>
            ))}
            <span className="text-sm text-gray-400 dark:text-gray-500 ml-1">
              shadab.hussain.tech@gmail.com
            </span>
          </motion.div>
        </motion.div>

        {/* Image Section — fixed to md:w-2/5 for proper balance */}
        <motion.div
          className="mb-10 md:mb-0 md:w-2/5 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative p-2 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-stone-700 dark:to-stone-800 rounded-full shadow-xl">
            <div className="absolute inset-0 border-4 border-dashed border-teal-300 dark:border-teal-700 rounded-full animate-spin-slow" />
            <Image
              src="/hero-img.png"
              alt="Shadab Hussain - Full Stack Developer"
              width={350}
              height={350}
              className="w-[220px] md:w-[350px] rounded-full hover:scale-105 transition duration-300 relative z-10"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center pb-8">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <HiArrowDown size={32} className="animate-bounce text-teal-600" />
        </Link>
      </div>
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
