import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Education Post",
    description:
      "Education Post is a news application primarily focused on delivering the latest updates in the education sector. Utilizing cutting-edge technologies like Next.js, React.js, Redux Toolkit (RTK), Bootstrap, Node.js, and MongoDB, I have built a robust platform that ensures a seamless user experience, efficient state management, and rapid content delivery.",
    image: "/educationpost.png",
    github: "",
    link: "https://educationpost.in/",
  },
  {
    name: "Education Post Admin Dashboard",
    description:
      "Education Post Admin Dashboard is a robust tool built with React, Redux, Node.js, MongoDB, Bootstrap, and Tailwind CSS. It streamlines content management and user administration for the Education Post news app, enhancing efficiency and user engagement.",
    image: "/epn.png",
    github: "",
    link: "https://admin.educationpost.in/",
  },
  {
    name: "IIRF Ranking Study Abroad",
    description:
      "IIRF Ranking Study Abroad is a dynamic platform developed with React, utilizing Redux for efficient state management. It offers seamless navigation and enhanced user interaction, providing up-to-date information for students seeking study abroad opportunities.",
    image: "/iirf.png",
    github: "",
    link: "https://iirfranking.com/study-abroad/",
  },
];
const personalProjects = [
  {
    name: "E-commerce Website",
    description:
      "Built an E-commerce platform using Next.js, React, MongoDB, Node.js, Tailwind CSS, and RTK for state management. This project showcases advanced full-stack development skills and a keen focus on user experience and performance.",
    image: "/Ecomm.png",
    github: "https://github.com/codekarshadab",
    link: "https://github.com/codekarshadab",
  },
  // {
  //   name: "Chat App",
  //   description:
  //     "IIRF Ranking Study Abroad is a dynamic platform developed with React, utilizing Redux for efficient state management. It offers seamless navigation and enhanced user interaction, providing up-to-date information for students seeking study abroad opportunities.",
  //   image: "/chat.png",
  //   github: "",
  //   link: "",
  // },
  {
    name: "React To-Do List",
    description:
      "Developed a React-based To-Do List application with full CRUD functionality. Utilized local storage to persist data, ensuring a seamless and efficient user experience.",
    image: "/todo.png",
    github: "https://github.com/codekarshadab",
    link: "https://github.com/codekarshadab",
  },
  {
    name: "Responsive Websites",
    description:
      "Crafted dynamic and fully responsive websites using modern JavaScript frameworks and libraries. Focused on delivering seamless user experiences across all devices, ensuring accessibility and performance optimization.",
    image: "/resp.png",
    github: "https://github.com/codekarshadab",
    link: "https://github.com/codekarshadab",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        <h1 className=" font-bold text-3xl text-orange-500">Live Projects</h1>

        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className=" md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        {/* <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        /> */}
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col space-y-28">
        <h1 className=" my-5 font-bold text-3xl text-orange-500">
          Personal Projects
        </h1>
        {personalProjects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className=" md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        {/* <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        /> */}
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
