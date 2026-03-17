import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonial";
import IntroAnimation from "./components/IntroAnimation";
import { motion } from "motion/react";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {!loading && <IntroAnimation onFinish={() => setLoading(true)} />}
      {loading && (
        <motion.div className="relative bg-linear-120 from-dark-amethyst-800 via-dusty-grape-600 to-amethyst-smoke-400 text-white overflow-x-hidden">
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
