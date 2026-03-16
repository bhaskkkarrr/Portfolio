import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const IntroAnimation = ({ onFinish }) => {
  const greetings = useMemo(
    () => [
      "Hello",
      "Hola",
      "Bonjour",
      "Ciao",
      "Olá",
      "Здравствуйте",
      "Γειά",
      "Hej",
      "Hallo",
      "नमस्ते",
    ],
    [],
  );
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setTimeout(() => setIndex((i) => i + 1), 180);
      return () => clearInterval(id);
    } else {
      const t = setTimeout(() => setVisible(false), 800);
      return () => clearInterval(t);
    }
  }, [index, greetings.length]);
  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-linear-40 from-dark-amethyst-800 to-amethyst-smoke-400 w-full z-9999 overflow-hidden flex justify-center items-center"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <motion.div
            className="text-5xl md:text-6xl lg:text8xl text-white font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {greetings[index]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
