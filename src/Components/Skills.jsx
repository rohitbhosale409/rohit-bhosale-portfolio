import React from "react";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaPython,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

import { motion } from "framer-motion";

// Skills Data
const skillsData = [
  // Row 1
  [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  ],

  // Row 2
  [
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
  ],
];

// Marquee Component
const Marquee = ({ items, direction = "left", speed = 25 }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex w-full overflow-hidden py-4 relative group">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 min-w-full flex-shrink-0"
        initial={{ x: direction === "left" ? "0%" : "-25%" }}
        animate={{ x: direction === "left" ? "-25%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4
            bg-white/10 dark:bg-slate-800/20
            backdrop-blur-md border border-white/20 dark:border-white/10
            rounded-xl shadow-lg
            hover:bg-white/20 dark:hover:bg-slate-700/40
            transition-all cursor-pointer select-none"
          >
            <span className="text-3xl filter drop-shadow-lg">
              {skill.icon}
            </span>

            <span className="text-lg font-semibold text-gray-800 dark:text-white/90 tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Tech <span className="text-blue-600">Stack</span>
        </motion.h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          The technologies, tools, and frameworks I use to architect and build
          scalable applications.
        </p>
      </div>

      <div className="flex flex-col gap-12 relative z-10">
        <Marquee items={skillsData[0]} direction="left" speed={30} />
        <Marquee items={skillsData[1]} direction="right" speed={30} />
      </div>
    </section>
  );
}

export default Skills;