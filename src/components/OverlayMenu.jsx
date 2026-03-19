import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FiX } from "react-icons/fi";

const OverlayMenu = ({ isOpen, close }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <button
            onClick={close}
            className="cursor-pointer absolute top-6 right-6 text-white text-3xl"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Education",
              "Contact",
            ].map((item, i) => {
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={close}
                    className="text-3xl text-white font-semibold hover:text-amethyst-smoke-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;
