import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Redux and Redux Toolkit" },
  { skill: "TypeScript" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Node js" },
  { skill: "Express js" },
  { skill: "Mongo Db" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is{" "}
              <span className="text-green-700 font-bold">Shadab Hussain</span>,
              and I am an{" "}
              <span className="font-bold text-red-600">
                experienced developer
              </span>{" "}
              with a strong proficiency in{" "}
              <span className="font-bold text-blue-600">React.js</span>,{" "}
              <span className="font-bold text-blue-600">Next.js</span>, and{" "}
              <span className="font-bold text-blue-600">Redux</span>. I
              specialize in crafting efficient, dynamic, and high-performance
              web applications.
            </p>
            <br />
            <p>
              With a proven track record of delivering seamless user experiences
              and driving project success, I excel in utilizing these
              technologies to create innovative solutions that meet and exceed
              client expectations.
            </p>
            <br />
            <p>
              I am passionate about technology and am continuously seeking to
              push the boundaries of what is possible. My commitment to{" "}
              <span className="font-bold text-teal-600">
                continuous growth and learning
              </span>{" "}
              drives me to embrace new challenges and stay ahead of industry
              trends. I thrive in dynamic environments where I can apply my
              skills to solve complex problems and contribute to meaningful
              projects.
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/developer.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

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
