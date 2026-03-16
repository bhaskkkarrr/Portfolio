import { motion } from "motion/react";
import profile from "../assets/avator.png";
import Typewriter from "typewriter-effect";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="w-full h-fit md:mt-5 mt-15 relative ">
      <div className="absolute inset-0">
        <div className="absolute top-1 left-1 bg-linear-60 from-amethyst-smoke-500 via-dark-amethyst-400 to-dusty-grape-500 w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw]  max-w-125 max-h-125 rounded-full opacity-10 animate-pulse blur-[60px] "></div>
        <div className=" absolute -bottom-10 -right-5 bg-linear-60 from-amethyst-smoke-500 via-dark-amethyst-400 to-dusty-grape-500 w-[70vw] h-[70vw] md:w-[20vw] md:h-[20vw]  max-w-125 max-h-125 rounded-full opacity-10 animate-pulse blur-[70px]"></div>
      </div>

      <div className="relative h-full w-full md:w-xl lg:w-5xl xl:w-7xl max-w-8xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 transition-all duration-300">
        {/* Name */}
        <div className="flex flex-col h-full justify-center text-center lg:text-left relative">
          <div className="w-full mx-auto max-w-4xl">
            <motion.div className="flex flex-col  lg:items-start space-y-6 xl:space-y-8 ">
              {/* TypeWriter Effect */}
              <div className="transition-all duration-300 name text-xl md:text-4xl lg:text-4xl">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Software Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {/* Name */}
              <div className="">
                <div className="text-dark-amethyst-200 text-4xl transition-all duration-300 font-medium lg:text-5xl">
                  Hello, I'm
                </div>
                <div className="text-5xl transition-all duration-300 md:text-5xl xl:text-6xl font-bold">
                  Bhaskar Chauhan
                </div>
              </div>
              {/* Caption */}
              <div className="text-base md:text-xl lg:text-2xl">
                I build full-stack web applications using the MERN stack,
                focusing on clean design, performance, and real-world usability.
              </div>

              {/* Button */}
              <motion.div className="flex gap-3 xl:gap-5 xl:text-xl justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-5 py-3 text-amethyst-smoke-700 font-semibold bg-linear-90 from-[#87a330] to-[#cad593] "
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-5 py-3 xl:gap-5  text-amethyst-smoke-700 font-semibold bg-white"
                >
                  My Resume
                </motion.button>
              </motion.div>

              {/* Socials */}
              <div className="flex gap-4 text-3xl xl:text-4xl justify-center items-center">
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    filter: "drop-shadow(0 0 8px #fff)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#"
                >
                  <SiGithub />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    filter: "drop-shadow(0 0 8px #fff)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    filter: "drop-shadow(0 0 8px #fff)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#"
                >
                  <FaLinkedinIn />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:flex hidden mt-15 lg:mt-0 relative justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
              filter: "drop-shadow(0 0 20px #826bc7)",
            }}
            className=""
          >
            <img
              src={profile}
              alt="profile"
              quality={100}
              className="h-[50vw]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
