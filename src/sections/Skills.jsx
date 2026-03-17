import { motion } from "motion/react";
import { useState } from "react";
import { DiNodejsSmall } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaGithub />, name: "Github" },
    { icon: <VscVscode />, name: "VS Code" },
  ];
  const repeated = [...skills, ...skills];
  return (
    <section
      id="skills"
      className="w-full h-fit flex my-7 lg:my-25 flex-col justify-center items-center relative text-white overflow-hidden gap-5"
    >
      <div className="w-full flex justify-center mt-10 mb-5">
        <div className="h-px w-2/3 bg-linear-to-r from-transparent via-amethyst-smoke-100 to-transparent opacity-60" />
      </div>
      <div className="">
        <motion.div
          className="text-4xl text-white font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My Skills
        </motion.div>
      </div>
      <div className="relative w-full overflow-hidden px-10 ">
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-amethyst-smoke-800 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-amethyst-smoke-800 to-transparent z-10"></div>
        <motion.div
          className="flex items-center text-6xl w-max text-amethyst-smoke-200 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ animationPlayState: "running" }}
        >
          {repeated.map((skill, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 min-w-30 my-3"
              >
                <span className="hover:scale-125 transition-all duration-300">
                  {skill.icon}
                </span>
                <span className="flex text-sm text-whi">{skill.name}</span>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="flex items-center text-6xl w-max text-amethyst-smoke-200"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ animationPlayState: "running" }}
        >
          {repeated.map((skill, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 min-w-30 my-3"
              >
                <span className="hover:scale-125 transition-all duration-300">
                  {skill.icon}
                </span>
                <span className="flex text-sm text-white">{skill.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
