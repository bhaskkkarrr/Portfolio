import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  });
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-99999"
      style={{
        transform: `translate(${position.x - 38 }px , ${position.y - 38}px)`,
      }}
    >
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-dark-amethyst-500 to-dusty-grape-500 blur-3xl opacity-80" />
    </div>
  );
};

export default CustomCursor;
