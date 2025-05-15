"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Projects", page: "projects" },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-5 md:px-10">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} offset={-80}>
          <motion.h2
            className="text-2xl font-bold cursor-pointer hover:opacity-80 transition"
            whileHover={{ scale: 1.05 }}
          >
            Shadab Hussain
          </motion.h2>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>

        {/* Menu Items */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={`${
            navbar ? "block" : "hidden"
          } absolute left-0 top-16 w-full bg-white dark:bg-stone-900 px-6 py-4 md:static md:flex md:w-auto md:items-center md:space-x-8 md:bg-transparent md:p-0`}
        >
          <div className="space-y-6 md:space-y-0 md:flex md:space-x-8 items-center">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className="block text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="mailto:shadab.hussain.tech@gmail.com"
              className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact Me
            </a>

            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-gray-800 transition hover:scale-105"
              aria-label="Toggle Theme"
            >
              {currentTheme === "dark" ? (
                <RiSunLine size={22} color="white" />
              ) : (
                <RiMoonFill size={22} />
              )}
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}


// "use client";
// import React, { useState } from "react";
// import { Link } from "react-scroll/modules";
// import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";
// import { RiMoonFill, RiSunLine } from "react-icons/ri";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { motion } from "framer-motion";
// import { FaReact } from "react-icons/fa"; // Import a decorative icon

// interface NavItem {
//   label: string;
//   page: string;
// }

// const NAV_ITEMS: Array<NavItem> = [
//   { label: "Home", page: "home" },
//   { label: "About", page: "about" },
//   { label: "Experience", page: "experience" },
//   { label: "Projects", page: "projects" },
// ];

// export default function Navbar() {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const currentTheme = theme === "system" ? systemTheme : theme;
//   const pathname = usePathname();
//   const [navbar, setNavbar] = useState(false);

//   const containerVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <header className="fixed top-0 z-50 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm transition-all">
//     {/* <header className="fixed top-0 z-50 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm transition-all"> */}
//       <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 md:py-5 md:px-10">
//         {/* Hamburger Icon */}
//         <div className="absolute right-4 md:hidden">
//           <button
//             className="text-gray-700 dark:text-gray-200 focus:outline-none"
//             onClick={() => setNavbar(!navbar)}
//           >
//             {navbar ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
//           </button>
//         </div>

//         {/* Menu Items */}
//         <motion.nav
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className={`${
//             navbar ? "block" : "hidden"
//           } absolute left-0 top-16 w-full bg-white dark:bg-stone-900 px-6 py-4 shadow-md md:static md:flex md:w-auto md:items-center md:space-x-8 md:bg-transparent md:p-0`}
//         >
//           <div className="space-y-6 md:space-y-0 md:flex md:space-x-8 items-center">
//             {NAV_ITEMS.map((item, idx) => (
//               <Link
//                 key={idx}
//                 to={item.page}
//                 className="block text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
//                 activeClass="active"
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 onClick={() => setNavbar(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <a
//               href="mailto:shadab.hussain.tech@gmail.com"
//               className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
//             >
//               Contact Me
//             </a>

//             <button
//               onClick={() =>
//                 setTheme(currentTheme === "dark" ? "light" : "dark")
//               }
//               className="p-2 rounded-full bg-slate-100 dark:bg-gray-800 transition hover:scale-105"
//               aria-label="Toggle Theme"
//             >
//               {currentTheme === "dark" ? (
//                 <RiSunLine size={22} color="white" />
//               ) : (
//                 <RiMoonFill size={22} />
//               )}
//             </button>
//           </div>
//         </motion.nav>
//       </div>
//     </header>
//   );
// }


