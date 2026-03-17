import { useEffect, useMemo, useRef, useState } from "react";
import Digi from "../assets/DIGI.png";
import digi1 from "../assets/digi1.png";
import Echo from "../assets/ECHO.png";
import echo1 from "../assets/echo1.png";
import weather from "../assets/WEATHER.png";
import weather1 from "../assets/weather1.png";

const useIsMobile = (query = "(max-width:639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches,
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return isMobile;
};

const Project = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);
  const projects = useMemo(
    () => [
      {
        title: "DigiThali",
        link: "https://tasty-tokens.vercel.app/",
        bgColor: "#0d4d3d",
        image: isMobile ? digi1 : Digi,
      },
      {
        title: "Echo",
        link: "https://echo-a-chat-app.vercel.app/",
        bgColor: "#000",
        image: isMobile ? echo1 : Echo,
      },
      {
        title: "Weather Forecast",
        link: "https://weather-forecast-dashboards.netlify.app/",
        bgColor: "#0d4d3d",
        image: isMobile ? weather1 : weather,
      },
    ],
    [isMobile],
  );
  return (
    <section id="projects" className="w-full h-screen p-20">
      {/* {projects.map((project, i) => {
        return (
          <div key={i} className={`bg-[${project.bgColor}] w-full`}>
            <span>{project.title}</span>
            <img src={project.image} alt="" />
          </div>
        );
      })} */}
      <div className="">Project</div>
    </section>
  );
};

export default Project;
