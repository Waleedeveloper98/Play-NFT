import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-[#060318] min-h-screen">
      <Hero />
      <div className="h-[200vh] bg-purple-400"></div>
    </div>
  );
};

export default App;
