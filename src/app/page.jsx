"use client";

import "src/app/globals.css";

import React, { useEffect } from "react";
import { gsap } from "libs/gsap.js";
import Lenis from "@studio-freight/lenis";
import HeroSection from "src/app/components/HeroSection/HeroSection.jsx";
import NavBar from "src/app/components/NavBar/NavBar.jsx";
import AboutSection from "src/app/components/AboutSection/AboutSection.jsx";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: "vertical",
    });
    window.lenis = lenis;

    //get scroll value
    lenis.on("scroll", ({ scroll, limit }) => {
      console.log({ scroll, limit });
    });

    function raf() {
      lenis.raf();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      id="smooth-wrapper"
      className="overflow-hidden flex min-h-screen flex-col items-center justify-between p-24 bg-black"
    >
      <div
        id="smooth-content"
        className="overflow-hidden flex min-h-screen flex-col items-center"
      >
        <NavBar />
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
