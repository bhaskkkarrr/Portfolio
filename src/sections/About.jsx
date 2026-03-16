import React from "react";
import { motion } from "motion/react";
import profile from "../assets/profileeee.png";
const About = () => {
  return (
    <div className="w-full h-fit lg:mt-20 relative md:w-xl lg:w-5xl xl:w-7xl max-w-8xl mx-auto px-4 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* DP */}
        <div className="flex flex-col justify-between">
          <div className=" justify-center items-start flex my-10">
            <img
              src={profile}
              className="object-contain h-44 lg:h-60 rounded-4xl shadow-2xl  shadow-white"
              alt="dp"
            />
          </div>
          <div className="flex justify-center items-center mb-7 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
              className="border-2 border-white rounded-2xl px-3 py-2 flex justify-center items-center flex-col flex-wrap hover:bg-white/10 z-10 w-fit"
            >
              <div className="text-gray-300 text-xs">Speciality</div>
              <div className="font-semibold text-sm">Full Stack </div>
            </motion.div>
            <div className="border-2 border-white rounded-2xl px-3 py-2 flex justify-center items-center flex-col flex-wrap hover:bg-white/10 z-10 w-fit">
              <div className="text-gray-300 text-xs">Focus</div>
              <div className="font-semibold text-sm">Performance & UI</div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="space-y-2 lg:space-y-8">
          <div className="">
            <div className="font-bold text-2xl lg:text-4xl lg:mt-3">
              Bhaskar Chauhan
            </div>
            <div className="font-semibold text-dusty-grape-300 text-base lg:text-2xl">
              Full Stack Web Developer
            </div>
          </div>
          <div className="md:text-lg text-base flex flex-col justify-center items-center">
            Hi, I’m Bhaskar Chauhan — a BCA student and aspiring Full Stack
            Developer passionate about building modern web applications that
            solve real-world problems. I specialize in the MERN stack (MongoDB,
            Express.js, React.js, and Node.js).
            <br /> <br /> I have hands-on experience working with technologies
            like JavaScript,React, Node.js, MongoDB, WebSockets, HTML, CSS, and
            Tailwind.
            <br /> <br /> I actively use modern development tools and
            AI-assisted workflows to improve productivity and build better
            software.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
