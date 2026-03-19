import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <section id="footer" className="w-full h-fit  overflow-hidden my-15 ">
      <div className="flex flex-col items-center justify-center gap-2 space-y-4">
        <span className="text-center text-4xl font-semibold name ">
          Bhaskar Chauhan
        </span>
        <span className="h-1 w-30 bg-amethyst-smoke-800 text-center "></span>
        <div className="flex gap-5 text-3xl xl:text-4xl justify-center items-center mb-0">
          <motion.a
            whileHover={{
              scale: 1.2,
              filter: "drop-shadow(0 0 8px #fff)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
            href="https://github.com/bhaskkkarrr"
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
            target="_blank"
            href="https://www.instagram.com/bhaskkkarr"
          >
            <FaInstagram />
            {console.log(<FaInstagram />)}
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              filter: "drop-shadow(0 0 8px #fff)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
            href="https://www.linkedin.com/in/bhaskkkarrr"
          >
            <FaLinkedinIn />
          </motion.a>
        </div>
        <p></p>
        <p className="text-center text-sm text-gray-200 ">
          &copy; 2026 Bhaskar Chauhan. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
