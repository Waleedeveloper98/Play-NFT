import React, { useEffect } from "react";
import Hero from "./pages/Hero";
import Lenis from "lenis";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      // easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false, 
      direction: "vertical",
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-[#060318] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Page2 />
        <Page3 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
