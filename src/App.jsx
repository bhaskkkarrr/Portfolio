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

function App() {
  return (
    <div className="relative bg-linear-120 from-dark-amethyst-800 via-dusty-grape-600 to-amethyst-smoke-400 text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Testimonial />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
