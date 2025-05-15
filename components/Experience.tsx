"use client";
import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="dark:text-white bg-white dark:bg-gray-900 py-20"
    >
      <div className="mx-auto px-4 border-none max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-extrabold text-4xl mb-16"
        >
          Professional Experience
          <hr className="w-24 h-1 mx-auto mt-4 bg-teal-500 border-0 rounded" />
        </motion.h1>

        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-500"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience 1 */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-colors duration-300 hover:bg-teal-50 dark:hover:bg-teal-900 relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 bg-teal-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-1">
                React Developer —
                <span className="text-teal-600 dark:text-teal-300 ml-1">
                  SAT Sukrit Media Pvt. Ltd.
                </span>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Jul 2023 – Present | Delhi, India
              </p>

              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                <li>
                  <span className="font-medium">
                    Owned the full frontend architecture
                  </span>{" "}
                  for{" "}
                  <span className="text-indigo-600 dark:text-indigo-300 font-semibold">
                    educationpost.in
                  </span>
                  , implementing{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    role-based architecture, payment gateway integration, and
                    authentication
                  </span>{" "}
                  to enable secure and scalable user experiences.
                </li>
                <li>
                  Built reusable and scalable components using{" "}
                  <span className="text-blue-600 dark:text-blue-300">
                    React
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-300">
                    Next.js
                  </span>
                  , and{" "}
                  <span className="text-blue-600 dark:text-blue-300">
                    Redux
                  </span>
                  , following best practices.
                </li>
                <li>
                  Optimized app performance, achieving a{" "}
                  <span className="text-green-600 dark:text-green-300 font-semibold">
                    20% faster load time
                  </span>{" "}
                  through server-side rendering, lazy loading, and code
                  splitting.
                </li>
                <li>
                  Designed and enhanced{" "}
                  <span className="text-indigo-600 dark:text-indigo-300 font-semibold">
                    iirfranking.com
                  </span>{" "}
                  with a focus on delivering a comprehensive, user-friendly
                  platform for institutional ranking, improving overall
                  engagement and usability.
                </li>
                <li>
                  Ensured mobile-first design and accessibility compliance
                  across all core pages.
                </li>
              </ul>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-colors duration-300 hover:bg-teal-50 dark:hover:bg-teal-900 relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 bg-teal-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-1">
                Web Developer Intern —
                <span className="text-teal-600 dark:text-teal-300 ml-1">
                  OyeBusy Pvt. Ltd.
                </span>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Mar 2023 – Jun 2023 | Gurgaon, India
              </p>

              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                <li>
                  Built responsive and reusable UI components using React while
                  contributing to the{" "}
                  <span className="text-indigo-600 dark:text-indigo-300 font-semibold">
                    Astrotalki
                  </span>{" "}
                  platform.
                </li>
                <li>
                  Integrated REST APIs and implemented SSR techniques to enhance
                  SEO and initial load time.
                </li>
                <li>
                  Improved design consistency and reusability by adopting
                  component-based architecture and Tailwind CSS.
                </li>
                <li>
                  Collaborated closely with designers and backend teams, helping
                  deploy 3 major features in production.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// import React from "react";
// import Image from "next/image";

// const Experience = () => {
//   return (
//     <section id="experience" className=" dark:text-white">
//       <div className="my-12 pb-12 md:pt-16 md:pb-48">
//         <h1 className="text-center font-bold text-4xl">
//           Professional Experience
//           <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//         </h1>

//         <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
//           <div className="md: p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
//             {/* <h1 className="text-3xl font-bold mb-4 text-green-900 dark:text-green-400">
//               Professional Experience
//             </h1> */}

//             <div className="mb-8">
//               <h2 className="text-2xl font-bold mb-2 text-yellow-700 dark:text-yellow-300">
//                 React Developer At{" "}
//                 <span className="text-teal-600 dark:text-teal-300">
//                   Sat Sukrit Media Pvt. Ltd.
//                 </span>
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300">
//                 My professional journey includes my current role as a React
//                 Developer at SAT Sukrit Media Pvt. Ltd. since July 2023 in
//                 Delhi, India. Here, I led the development of the{" "}
//                 <span className="font-bold text-indigo-600 dark:text-indigo-300">
//                   educationpost.in
//                 </span>{" "}
//                 web application using cutting-edge technologies including{" "}
//                 <span className="font-bold text-blue-600 dark:text-blue-300">
//                   ReactJS
//                 </span>
//                 ,{" "}
//                 <span className="font-bold text-blue-600 dark:text-blue-300">
//                   Next.js
//                 </span>
//                 , server-side rendering, and{" "}
//                 <span className="font-bold text-blue-600 dark:text-blue-300">
//                   Redux.js
//                 </span>
//                 .
//               </p>
//               <br />
//               <p className="text-gray-700 dark:text-gray-300">
//                 Additionally, I implemented performance optimization strategies
//                 resulting in a remarkable{" "}
//                 <span className="font-bold text-green-600 dark:text-green-300">
//                   20% enhancement
//                 </span>{" "}
//                 in page load time. I was also a key player in developing the
//                 pivotal study-abroad section of{" "}
//                 <span className="font-bold text-indigo-600 dark:text-indigo-300">
//                   iirfranking.com
//                 </span>
//                 , leveraging{" "}
//                 <span className="font-bold text-blue-600 dark:text-blue-300">
//                   Redux.js
//                 </span>{" "}
//                 for precise state management, facilitating smooth data flow, and
//                 enhancing user interaction.
//               </p>
//             </div>
//             <hr />
//             <div className="mt-2">
//               <h2 className="text-2xl font-bold mb-2 text-yellow-700 dark:text-yellow-300">
//                 Web Developer Intern At{" "}
//                 <span className="text-teal-600 dark:text-teal-300">
//                   OyeBusy Pvt. Ltd.
//                 </span>
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300">
//                 Previously, I worked as a Web Developer Intern at OyeBusy Pvt.
//                 Ltd. from March 2023 to June 2023 in Gurgaon, India. During this
//                 time, I collaborated with cross-functional teams, resulting in
//                 the timely delivery of high-quality, user-friendly web
//                 applications. I successfully contributed to the{" "}
//                 <span className="font-bold text-indigo-600 dark:text-indigo-300">
//                   Astrotalki
//                 </span>{" "}
//                 project by implementing{" "}
//                 <span className="font-bold text-blue-600 dark:text-blue-300">
//                   API integration
//                 </span>
//                 , responsive web design, and server-side rendering techniques.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
