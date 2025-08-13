import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Lenis from "lenis";
import BrandsMarque from "./components/BrandsMarque";
import Page2 from "./pages/Page2";

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
      <Page2 />

    </div>
  );
};

export default App;
