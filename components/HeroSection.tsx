"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="w-full bg-white dark:bg-stone-900">
      <div className="flex flex-col-reverse items-center justify-center text-center md:flex-row md:text-left px-6 py-20 sm:py-32 md:py-48 max-w-7xl mx-auto">
        {/* Text Section */}
        <motion.div
          className="md:w-3/5 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Hey, I'm <span className="text-teal-600">Shadab Hussain</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            I'm a{" "}
            <span className="font-semibold text-teal-600">
              Front-End Developer
            </span>{" "}
            crafting elegant, high-performance web experiences. I specialize in
            building fast, scalable UIs using React, Next.js, and modern
            JavaScript.
          </motion.p>
          <motion.p
            className="text-md md:text-lg text-gray-600 dark:text-gray-400"
            variants={itemVariants}
          >
            Passionate about clean code, seamless design systems, and
            performance-first development. Based in Delhi, India — open to
            remote opportunities globally.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4"
            variants={itemVariants}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="px-6 py-3 bg-teal-600 text-white rounded-md shadow hover:bg-teal-700 transition cursor-pointer"
            >
              View Projects
            </Link>
            <a
              href="/shadab_CV.pdf"
              target="_blank"
              className="px-6 py-3 bg-gray-800 text-white rounded-md shadow hover:bg-gray-900 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mb-10 md:mb-0 md:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative p-2 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-stone-700 dark:to-stone-800 rounded-full shadow-xl">
            <div className="absolute inset-0 border-4 border-dashed border-teal-300 rounded-full"></div>
            <Image
              src="/hero-img.png"
              alt="Shadab Hussain - Front-End Developer"
              width={350}
              height={350}
              className=" w-[220px] md:w-[350px] rounded-full hover:scale-105 transition duration-300 relative z-10"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center mt-2">
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

// "use client"; // this is a client component
// import React from "react";
// import Image from "next/image";
// import { Link } from "react-scroll/modules";
// import { HiArrowDown } from "react-icons/hi";

// const HeroSection = () => {
//   return (
//     <section id="home">
//       <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
//         <div className="md:mt-2 md:w-1/2">
//           <Image
//             src="/hero-img.png"
//             alt=""
//             width={300}
//             height={700}
//             className="rounded-full shadow-2xl"
//           />
//         </div>
//         <div className="md:mt-2 md:w-3/5">
//           <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
//             Hi, I&#39;m Shadab!
//           </h1>
//           <p className="text-lg mt-4 mb-6 md:text-2xl">
//             I&#39;m a{" "}
//             <span className="font-semibold text-teal-600">
//               Software Engineer{" "}
//             </span>
//             based in Delhi, India. Working towards creating software that makes
//             life easier and more meaningful.
//           </p>
//           <Link
//             to="projects"
//             className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//           >
//             Projects
//           </Link>
//           <a
//             // to="projects"
//             href="/shadab_CV.pdf"
//             className="text-neutral-100 font-semibold px-6 py-3 bg-red-600 rounded shadow hover:bg-red-700 mx-2"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//       <div className="flex flex-row items-center text-center justify-center ">
//         <Link
//           to="about"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={500}
//         >
//           <HiArrowDown size={35} className="animate-bounce" />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
