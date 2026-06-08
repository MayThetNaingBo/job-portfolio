"use client";

import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-left", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-right", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="hero-left">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Hi, I&apos;m a software developer building practical digital products.
          </h2>

          <p className="mt-6 max-w-xl text-gray-400">
            I am passionate about full-stack development, real-time systems,
            DevOps, and AI automation. I enjoy building projects that solve real
            problems and can grow into production-ready applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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

          <div className="mt-8 flex gap-5 text-gray-400">
            <a href="mailto:your-email@gmail.com" className="transition hover:text-white">
              <Mail />
            </a>
            <a href="https://github.com/" target="_blank" className="transition hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right flex flex-col items-center md:items-end">
          <div className="mb-8 h-64 w-64 overflow-hidden rounded-full border border-cyan-400/40 bg-gray-900 md:h-80 md:w-80">
            <img
              src="/profile.jpg"
              alt="May Thet Naing Bo"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-center text-5xl font-bold tracking-tight md:text-right md:text-7xl">
            May Thet Naing Bo
          </h1>

          <p className="mt-4 text-center text-xl text-gray-300 md:text-right">
            Software Developer • DevOps Learner • AI Automation Engineer
          </p>
        </div>
      </div>
    </section>
  );
}