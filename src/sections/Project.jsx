import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "motion/react";
import Digi from "../assets/DIGI.png";
import Echo from "../assets/ECHO.png";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import weather from "../assets/WEATHER.png";
import auth from "../assets/auth.png";
const projects = [
  {
    sno: "01",
    category: "Fullstack",
    title: "Tasty Tokens",
    description:
      "DigitThali is a QR-based restaurant menu SaaS that allows restaurants to manage dynamic menus through a static QR code. Built using the MERN stack, it includes features like category filtering, cart management, and real-time menu updates via REST APIs.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "React",
      "Node.js",
      "Express.js",
      "React Context API",
      "REST APIs",
    ],
    live: "https://tasty-tokens.vercel.app/",
    github: "https://github.com/bhaskkkarrr/TastyTokens/",
    image: Digi,
  },
  {
    sno: "02",
    category: "Fullstack",
    title: "Echo",
    description:
      "Echo is a real-time chat application that enables users to send and receive messages instantly without page refresh. It uses WebSocket-based communication to maintain a persistent connection between the client and server, allowing real-time message broadcasting. The application provides a responsive user interface and stores user and chat data efficiently in the database.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSockets (Socket.io)",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    live: "https://echo-a-chat-app.vercel.app/",
    github: "https://github.com/bhaskkkarrr/Echo-A-chat-app",
    image: Echo,
  },
  {
    sno: "03",
    category: "Backend",
    title: "Complete Authentication Backend",
    description:
      "Secure authentication system built using Node.js, implementing user registration with OTP email verification, JWT-based login, refresh token rotation, and session management. Features include password hashing, HTTP-only cookies, and multi-device logout support for enhanced security.",
    stack: [
      "Node.js",
      "Express.js",
      "Nodemailer",
      "MongoDB",
      "JWT Authentication",
      "OAuth 2",
    ],
    live: "#",
    github: "https://github.com/bhaskkkarrr/Authentication",
    image: auth,
  },
  {
    sno: "04",
    category: "Basic APIs",
    title: "Weather Forecast",
    description:
      "Weather Forecast Dashboard is a responsive web application that displays real-time weather information for different locations using an external Weather API. It provides details such as temperature, humidity, wind speed, and weather conditions, with a user-friendly interface for searching and viewing live updates.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Weather API",
      "GitHub",
      "Netlify",
    ],
    live: "https://weather-forecast-dashboards.netlify.app/",
    github: "https://github.com/bhaskkkarrr/weather-forecast",
    image: weather,
  },
];

const Project = () => {
  const projectslength = projects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section
        id="projects"
        className="w-full h-fit my-10 flex flex-col justify-center items-center text-white px-4 md:px-10 py-10"
      >
        <h1 className="text-5xl text-amethyst-smoke-50 pb-5">My Projects</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          className="w-full max-w-8xl"
        >
          {projects.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="text-5xl md:text-7xl font-bold opacity-30">
                    {item.sno}
                  </div>

                  <div className="text-2xl md:text-3xl capitalize font-semibold">
                    {item.title}
                  </div>

                  <div className="text-sm md:text-base bg-white/5 backdrop-blur-md p-6 rounded-2xl text-gray-300">
                    {item.description}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-gray-400">Tech:</span>
                    {item.stack.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/10 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-2 px-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={item.live}
                      target={item.live === "#" ? "" : " _blank"}
                      className="bg-amethyst-smoke-400 rounded-full p-3 text-xl hover:bg-amethyst-smoke-900 transition-all duration-300"
                    >
                      <GoArrowUpRight />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={item.github}
                      target="_blank"
                      className="bg-amethyst-smoke-400 rounded-full p-3 text-xl hover:bg-amethyst-smoke-900 transition-all duration-300"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
                {/* Image */}
                <div className="w-full lg:w-1/2 p-3">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    src={item.image}
                    alt={item.title}
                    className="rounded-2xl w-full object-contain"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-2 mt-6">
          {[...Array(projectslength)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: activeIndex === i ? 1.3 : 1,
                opacity: activeIndex === i ? 1 : 0.4,
              }}
              className={`cursor-pointer ${
                activeIndex === i ? "text-amethyst-smoke-200" : "text-gray-500"
              }`}
            >
              <GoDotFill />
            </motion.div>
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="h-px w-2/3 bg-linear-to-r from-transparent via-amethyst-smoke-800 to-transparent" />
      </div>
    </>
  );
};

export default Project;
