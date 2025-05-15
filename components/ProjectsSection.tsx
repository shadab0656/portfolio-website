"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Education Post",
    description:
      "Education Post is a news platform delivering the latest updates in education. Built with Next.js, React, Redux Toolkit, Bootstrap, Node.js, and MongoDB, focusing on performance, scalability, and smooth user experience.",
    image: "/educationpost.png",
    github: "",
    link: "https://educationpost.in/",
  },
  {
    name: "Education Post Admin Dashboard",
    description:
      "A powerful admin dashboard built with React, Redux, Node.js, MongoDB, Bootstrap, and Tailwind CSS. It simplifies content and user management, improving overall efficiency.",
    image: "/epn.png",
    github: "",
    link: "https://admin.educationpost.in/",
  },
  {
    name: "IIRF Ranking Study Abroad",
    description:
      "A dynamic platform built with React and Redux providing students seamless access to study abroad opportunities with up-to-date rankings and insights.",
    image: "/iirf.png",
    github: "",
    link: "https://iirfranking.com/study-abroad/",
  },
];

const personalProjects = [
  {
    name: "E-commerce Website",
    description:
      "Full-stack e-commerce platform using Next.js, React, MongoDB, Node.js, Tailwind CSS, and Redux Toolkit, designed for high performance and great UX.",
    image: "/Ecomm.png",
    github: "https://github.com/codekarshadab",
    link: "https://github.com/codekarshadab",
  },
  {
    name: "React To-Do List",
    description:
      "React To-Do List app with full CRUD and localStorage persistence for smooth user experience.",
    image: "/todo.png",
    github: "https://github.com/codekarshadab",
    link: "https://github.com/codekarshadab",
  },
  {
    name: "Responsive Websites",
    description:
      "Crafted fully responsive websites with modern JavaScript frameworks focused on accessibility, performance, and UX.",
    image: "/resp.png",
    github: "https://github.com/codekarshadab",
    link: "https://github.com/codekarshadab",
  },
];

// Animation variants
const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-center font-extrabold text-5xl mb-12 text-gray-900 dark:text-white">
        Live Projects
        <hr className="w-16 h-1 mx-auto my-6 bg-teal-500 rounded border-0" />
      </h1>

      <div className="space-y-20">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col md:flex-row items-center md:space-x-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={700}
                  height={450}
                  className="object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
                />
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {project.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex space-x-4">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    {/* Uncomment if you want GitHub icon */}
                    {/* <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-700 dark:text-gray-300"
                    /> */}
                  </Link>
                )}
                <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link">
                  <BsArrowUpRightSquare
                    size={32}
                    className="text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h1 className="text-center font-extrabold text-5xl my-16 text-gray-900 dark:text-white">
        Personal Projects
        <hr className="w-16 h-1 mx-auto my-6 bg-teal-500 rounded border-0" />
      </h1>

      <div className="space-y-20">
        {personalProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col md:flex-row items-center md:space-x-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={700}
                  height={450}
                  className="object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
                />
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {project.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex space-x-4">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    {/* <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-700 dark:text-gray-300"
                    /> */}
                  </Link>
                )}
                <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link">
                  <BsArrowUpRightSquare
                    size={32}
                    className="text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SlideUp from "./SlideUp";
// import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

// const projects = [
//   {
//     name: "Education Post",
//     description:
//       "Education Post is a news application primarily focused on delivering the latest updates in the education sector. Utilizing cutting-edge technologies like Next.js, React.js, Redux Toolkit (RTK), Bootstrap, Node.js, and MongoDB, I have built a robust platform that ensures a seamless user experience, efficient state management, and rapid content delivery.",
//     image: "/educationpost.png",
//     github: "",
//     link: "https://educationpost.in/",
//   },
//   {
//     name: "Education Post Admin Dashboard",
//     description:
//       "Education Post Admin Dashboard is a robust tool built with React, Redux, Node.js, MongoDB, Bootstrap, and Tailwind CSS. It streamlines content management and user administration for the Education Post news app, enhancing efficiency and user engagement.",
//     image: "/epn.png",
//     github: "",
//     link: "https://admin.educationpost.in/",
//   },
//   {
//     name: "IIRF Ranking Study Abroad",
//     description:
//       "IIRF Ranking Study Abroad is a dynamic platform developed with React, utilizing Redux for efficient state management. It offers seamless navigation and enhanced user interaction, providing up-to-date information for students seeking study abroad opportunities.",
//     image: "/iirf.png",
//     github: "",
//     link: "https://iirfranking.com/study-abroad/",
//   },
// ];
// const personalProjects = [
//   {
//     name: "E-commerce Website",
//     description:
//       "Built an E-commerce platform using Next.js, React, MongoDB, Node.js, Tailwind CSS, and RTK for state management. This project showcases advanced full-stack development skills and a keen focus on user experience and performance.",
//     image: "/Ecomm.png",
//     github: "https://github.com/codekarshadab",
//     link: "https://github.com/codekarshadab",
//   },
//   // {
//   //   name: "Chat App",
//   //   description:
//   //     "IIRF Ranking Study Abroad is a dynamic platform developed with React, utilizing Redux for efficient state management. It offers seamless navigation and enhanced user interaction, providing up-to-date information for students seeking study abroad opportunities.",
//   //   image: "/chat.png",
//   //   github: "",
//   //   link: "",
//   // },
//   {
//     name: "React To-Do List",
//     description:
//       "Developed a React-based To-Do List application with full CRUD functionality. Utilized local storage to persist data, ensuring a seamless and efficient user experience.",
//     image: "/todo.png",
//     github: "https://github.com/codekarshadab",
//     link: "https://github.com/codekarshadab",
//   },
//   {
//     name: "Responsive Websites",
//     description:
//       "Crafted dynamic and fully responsive websites using modern JavaScript frameworks and libraries. Focused on delivering seamless user experiences across all devices, ensuring accessibility and performance optimization.",
//     image: "/resp.png",
//     github: "https://github.com/codekarshadab",
//     link: "https://github.com/codekarshadab",
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <section id="projects">
//       <h1 className="my-10 text-center font-bold text-4xl">
//         Live Projects
//         <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//       </h1>

//       <div className="flex flex-col space-y-28">
//         {projects.map((project, idx) => {
//           return (
//             <div key={idx}>
//               <SlideUp offset="-300px 0px -300px 0px">
//                 <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
//                   <div className=" md:w-1/2">
//                     <Link href={project.link}>
//                       <Image
//                         src={project.image}
//                         alt=""
//                         width={1000}
//                         height={1000}
//                         className="rounded-xl shadow-xl hover:opacity-70"
//                       />
//                     </Link>
//                   </div>
//                   <div className=" md:w-1/2">
//                     <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
//                     <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-row align-bottom space-x-4">
//                       <Link href={project.github} target="_blank">
//                         {/* <BsGithub
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         /> */}
//                       </Link>
//                       <Link href={project.link} target="_blank">
//                         <BsArrowUpRightSquare
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SlideUp>
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex flex-col space-y-28">
//         <h1 className="my-10 text-center font-bold text-4xl">
//           Personal Projects
//           <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//         </h1>
//         {personalProjects.map((project, idx) => {
//           return (
//             <div key={idx}>
//               <SlideUp offset="-300px 0px -300px 0px">
//                 <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
//                   <div className=" md:w-1/2">
//                     <Link href={project.link}>
//                       <Image
//                         src={project.image}
//                         alt=""
//                         width={1000}
//                         height={1000}
//                         className="rounded-xl shadow-xl hover:opacity-70"
//                       />
//                     </Link>
//                   </div>
//                   <div className=" md:w-1/2">
//                     <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
//                     <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-row align-bottom space-x-4">
//                       <Link href={project.github} target="_blank">
//                         {/* <BsGithub
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         /> */}
//                       </Link>
//                       <Link href={project.link} target="_blank">
//                         <BsArrowUpRightSquare
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SlideUp>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
