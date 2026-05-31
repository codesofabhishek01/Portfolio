import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home';
import Loading from "./components/Loading.jsx";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Refresh ScrollTrigger after content is visible
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Lenis + GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;