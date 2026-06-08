"use client";

import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-right",
          {
            x: 100,
            opacity: 0,
            duration: 1.6,
            ease: "power4.out",
          },
          "<"
        )
        .from(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4"
        );

      gsap.to(".profile-card", {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-100 px-6 py-20 text-slate-900"
    >
      <div className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-14 md:grid-cols-2">
        <div className="hero-left">
          <p className="hero-text mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Portfolio
          </p>

          <h2 className="hero-text text-4xl font-bold leading-tight md:text-5xl">
            Hi, I&apos;m a software developer building practical digital
            products.
          </h2>

          <p className="hero-text mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I am passionate about full-stack development, real-time systems,
            DevOps, and AI automation. I enjoy building projects that solve real
            problems and can grow into production-ready applications.
          </p>

          <div className="hero-text mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-text mt-8 flex items-center gap-5 text-slate-500">
            <a
              href="mailto:your-email@gmail.com"
              className="transition hover:text-cyan-600"
            >
              <Mail />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="transition hover:text-cyan-600"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="transition hover:text-cyan-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right flex flex-col items-center md:items-end">
         <div className="profile-card mb-8 h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-white shadow-2xl shadow-cyan-500/20 md:h-80 md:w-80">
  <img
    src="/profile.jpg"
    alt="May Thet Naing Bo"
    className="h-full w-full object-cover"
  />
</div>

          <h1 className="hero-text whitespace-nowrap text-center text-4xl font-extrabold tracking-tight text-slate-950 md:text-right md:text-6xl">
  May Thet Naing Bo
</h1>
          <p className="hero-text mt-4 text-center text-xl text-lg leading-8 text-slate-600 md:text-right">
            Software Developer • DevOps Learner • AI Automation Engineer
          </p>
        </div>
      </div>
    </section>
  );
}