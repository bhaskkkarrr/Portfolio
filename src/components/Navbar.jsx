import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import OverlayMenu from "./OverlayMenu";
import { motion } from "motion/react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  let lastScrollY = useRef(0);
  let timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setShowNavbar(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 },
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setShowNavbar(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setShowNavbar(false);
        }, 3000);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-semibold hidden sm:block">Bhaskar</div>
        </div>
        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 ">
          <button onClick={() => setMenuOpen(true)}>
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>
        <motion.div
          className="hidden lg:block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#contact"
            className="bg-linear-90 from-[#87a330] to-[#cad593] border-white font-medium shadow-2xl rounded-full text-white px-2 py-1"
          >
            Reach Out
          </a>
        </motion.div>
      </nav>
      <OverlayMenu isOpen={menuOpen} close={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
