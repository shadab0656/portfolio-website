"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "JavaScript (ES6+)" },
  { skill: "TypeScript" },
  { skill: "Git & GitHub" },
  { skill: "Redux & Redux Toolkit" },
  { skill: "Responsive Web Design" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Axios" },
  { skill: "REST API" },
  { skill: "Framer Motion" },
  { skill: "React Hook Form" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "MongoDB" },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
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
      <section id="about" className="bg-white dark:bg-gray-950 pt-1">
        <div className="max-w-6xl mx-auto my-12 px-6 md:px-12 lg:px-20 pb-20">
          <div className="flex flex-col-reverse md:flex-row md:space-x-12 items-center">
            {/* LEFT SECTION: TEXT */}
            <motion.div
              className="md:w-1/2 text-gray-700 dark:text-gray-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-4 leading-relaxed">
                Hi, my name is{" "}
                <span className="text-green-600 font-bold">Shadab Hussain</span>.
                I’m a{" "}
                <span className="font-bold text-red-600">
                  Frontend Developer
                </span>{" "}
                based in Delhi, India with over 2 years of experience building
                high-performance and responsive web applications.
              </p>
              <p className="mb-4 leading-relaxed">
                I'm currently working at{" "}
                <span className="font-semibold text-purple-500">
                  SAT Sukrit Media Pvt. Ltd.
                </span>{" "}
                as a React Developer. I’ve led the development of{" "}
                <span className="text-blue-600 font-bold">educationpost.in</span>{" "}
                and contributed to{" "}
                <span className="text-blue-600 font-bold">iirfranking.com</span>{" "}
                — leveraging{" "}
                <span className="font-bold text-blue-600">Next.js</span>,{" "}
                <span className="font-bold text-blue-600">React</span>, and{" "}
                <span className="font-bold text-blue-600">Redux Toolkit</span>{" "}
                to build scalable and SEO-friendly platforms.
              </p>
              <p className="mb-4 leading-relaxed">
                I’ve improved page performance by 20% through optimization
                strategies and developed reusable components to enhance
                maintainability. My internship at OyeBusy Pvt. Ltd. helped
                sharpen my skills in API integration and responsive UI.
              </p>
              <p className="mb-4 leading-relaxed">
                Passionate about clean code, modern UX, and frontend tools like{" "}
                <span className="text-teal-600 font-bold">Tailwind CSS</span>{" "}
                and <span className="text-teal-600 font-bold">TypeScript</span>,
                I love building smooth, scalable interfaces with powerful state
                management.
              </p>
              <p className="leading-relaxed">
                Always eager to grow and innovate, I thrive in collaborative
                environments and aim to contribute to projects that deliver
                real-world impact.
              </p>
            </motion.div>

            {/* RIGHT SECTION: SKILLS + IMAGE */}
            <motion.div
              className="md:w-1/2 flex flex-col items-center mb-12 md:mb-0"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                My Tech Stack
              </h2>
              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-3 max-w-lg"
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((item, idx) => (
                  <motion.span
                    key={idx}
                    variants={fadeInUp}
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 text-sm font-medium"
                  >
                    {item.skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* IMAGE ANIMATION */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 md:mt-12 rounded-xl shadow-lg hidden md:block animate-zoom-in"
              >
                <Image
                  src="/developer.png"
                  alt="Developer Illustration"
                  width={320}
                  height={320}
                  // className="rounded-xl"
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


// import React from "react";
// import Image from "next/image";

// const skills = [
//   { skill: "HTML" },
//   { skill: "CSS" },
//   { skill: "JavaScript" },
//   { skill: "React" },
//   { skill: "Next.js" },
//   { skill: "Redux and Redux Toolkit" },
//   { skill: "TypeScript" },
//   { skill: "Tailwind CSS" },
//   { skill: "Bootstrap" },
//   { skill: "Git" },
//   { skill: "GitHub" },
//   { skill: "Node js" },
//   { skill: "Express js" },
//   { skill: "Mongo Db" },
// ];

// const AboutSection = () => {
//   return (
//     <section id="about">
//       <div className="my-12 pb-12 md:pt-16 md:pb-48">
//         <h1 className="text-center font-bold text-4xl">
//           About Me
//           <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//         </h1>

//         <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
//           <div className="md:w-1/2 ">
//             {/* <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
//               Get to know me!
//             </h1> */}
//             <p>
//               Hi, my name is{" "}
//               <span className="text-green-700 font-bold">Shadab Hussain</span>,
//               and I am an{" "}
//               <span className="font-bold text-red-600">
//                 experienced developer
//               </span>{" "}
//               with a strong proficiency in{" "}
//               <span className="font-bold text-blue-600">React.js</span>,{" "}
//               <span className="font-bold text-blue-600">Next.js</span>, and{" "}
//               <span className="font-bold text-blue-600">Redux</span>. I
//               specialize in crafting efficient, dynamic, and high-performance
//               web applications.
//             </p>
//             <br />
//             <p>
//               With a proven track record of delivering seamless user experiences
//               and driving project success, I excel in utilizing these
//               technologies to create innovative solutions that meet and exceed
//               client expectations.
//             </p>
//             <br />
//             <p>
//               I am passionate about technology and am continuously seeking to
//               push the boundaries of what is possible. My commitment to{" "}
//               <span className="font-bold text-teal-600">
//                 continuous growth and learning
//               </span>{" "}
//               drives me to embrace new challenges and stay ahead of industry
//               trends. I thrive in dynamic environments where I can apply my
//               skills to solve complex problems and contribute to meaningful
//               projects.
//             </p>
//           </div>

//           <div className="text-center md:w-1/2 md:text-left">
//             <h1 className="text-2xl font-bold mb-6">My Skills</h1>
//             <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
//               {skills.map((item, idx) => {
//                 return (
//                   <p
//                     key={idx}
//                     className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
//                   >
//                     {item.skill}
//                   </p>
//                 );
//               })}
//             </div>
//             <Image
//               src="/developer.png"
//               alt=""
//               width={325}
//               height={325}
//               className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

//older code

// <p>
// My professional journey includes my current role as a React
// Developer at SAT Sukrit Media Pvt. Ltd. since July 2023 in Delhi,
// India. Here, I led the development of the educationpost.in web
// application using cutting-edge technologies including ReactJS,
// Next.js, server-side rendering, and Redux.js.
// </p>
// <br />
// <p>
// Additionally, I implemented performance optimization strategies
// resulting in a remarkable 20% enhancement in page load time. I was
// also a key player in developing the pivotal study-abroad section
// of iirfranking.com, leveraging Redux.js for precise state
// management, facilitating smooth data flow, and enhancing user
// interaction.
// </p>
// <br />
// <p>
// Previously, I worked as a Web Developer Intern at OyeBusy Pvt.
// Ltd. from March 2023 to June 2023 in Gurgaon, India. During this
// time, I collaborated with cross-functional teams, resulting in the
// timely delivery of high-quality, user-friendly web applications. I
// successfully contributed to the Astrotalki project by implementing
// API integration, responsive web design, and server-side rendering
// techniques.
// </p>
// <br />
