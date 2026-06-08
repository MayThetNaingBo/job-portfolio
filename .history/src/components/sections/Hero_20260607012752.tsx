"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex min-h-screen items-center justify-center bg-black px-6 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="hero-item mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Portfolio
        </p>

        <h1 className="hero-item text-5xl font-bold tracking-tight md:text-7xl">
          May Thet Naing Bo
        </h1>

        <p className="hero-item mt-6 text-xl text-gray-300 md:text-2xl">
          Software Developer • DevOps Learner • AI Automation Engineer
        </p>

        <p className="hero-item mx-auto mt-6 max-w-2xl text-gray-400">
          I build full-stack web applications, real-time systems, and
          production-minded software projects for practical business use.
        </p>

        <div className="hero-item mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </div>

       <div className="hero-item mt-8 flex justify-center gap-5 text-gray-400">
         <a href="" target="_blank" className="transition hover:text-white">
    Gmail
  </a>
  <a href="https://github.com/" target="_blank" className="transition hover:text-white">
    GitHub
  </a>

  <a href="https://linkedin.com/" target="_blank" className="transition hover:text-white">
    LinkedIn
  </a>

 
</div>
      </div>
    </section>
  );
}