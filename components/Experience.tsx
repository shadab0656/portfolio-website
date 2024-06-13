import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className=" dark:text-white">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Professional Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md: p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-green-900 dark:text-green-400">
              Professional Experience
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-yellow-700 dark:text-yellow-300">
                React Developer At{" "}
                <span className="text-teal-600 dark:text-teal-300">
                  Sat Sukrit Media Pvt. Ltd.
                </span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                My professional journey includes my current role as a React
                Developer at SAT Sukrit Media Pvt. Ltd. since July 2023 in
                Delhi, India. Here, I led the development of the{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-300">
                  educationpost.in
                </span>{" "}
                web application using cutting-edge technologies including{" "}
                <span className="font-bold text-blue-600 dark:text-blue-300">
                  ReactJS
                </span>
                ,{" "}
                <span className="font-bold text-blue-600 dark:text-blue-300">
                  Next.js
                </span>
                , server-side rendering, and{" "}
                <span className="font-bold text-blue-600 dark:text-blue-300">
                  Redux.js
                </span>
                .
              </p>
              <br />
              <p className="text-gray-700 dark:text-gray-300">
                Additionally, I implemented performance optimization strategies
                resulting in a remarkable{" "}
                <span className="font-bold text-green-600 dark:text-green-300">
                  20% enhancement
                </span>{" "}
                in page load time. I was also a key player in developing the
                pivotal study-abroad section of{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-300">
                  iirfranking.com
                </span>
                , leveraging{" "}
                <span className="font-bold text-blue-600 dark:text-blue-300">
                  Redux.js
                </span>{" "}
                for precise state management, facilitating smooth data flow, and
                enhancing user interaction.
              </p>
            </div>
            <hr />
            <div className="mt-2">
              <h2 className="text-2xl font-bold mb-2 text-yellow-700 dark:text-yellow-300">
                Web Developer Intern At{" "}
                <span className="text-teal-600 dark:text-teal-300">
                  OyeBusy Pvt. Ltd.
                </span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Previously, I worked as a Web Developer Intern at OyeBusy Pvt.
                Ltd. from March 2023 to June 2023 in Gurgaon, India. During this
                time, I collaborated with cross-functional teams, resulting in
                the timely delivery of high-quality, user-friendly web
                applications. I successfully contributed to the{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-300">
                  Astrotalki
                </span>{" "}
                project by implementing{" "}
                <span className="font-bold text-blue-600 dark:text-blue-300">
                  API integration
                </span>
                , responsive web design, and server-side rendering techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
