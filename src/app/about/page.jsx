"use client";

import "src/app/globals.css";

import HeroSectionv2 from "src/app/components/HeroSection/HeroSectionv2.jsx";
import NavBar from "src/app/components/NavBar/NavBar.jsx";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <NavBar />
      <HeroSectionv2 />
    </main>
  );
}

// this is comitted v3
