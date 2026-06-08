"use client";

import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const snowflakes = Array.from({ length: 55 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-left", {
        x: -120,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
      })
        .from(
          ".hero-right",
          {
            x: 120,
            opacity: 0,
            duration: 1.8,
            ease: "power4.out",
          },
          "<"
        )
        .from(
          ".hero-text",
          {
            y: 35,
            opacity: 0,
            duration: 1,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.6"
        );

      gsap.to(".profile-card", {
        y: -12,
        duration: 2.8,
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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-100 px-6 py-20 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {snowflakes.map((_, i) => (
           ))}
      </div>

      <div className="pointer-events-none absolute left-10 top-28 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-20 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-6xl items-center gap-14 md:grid-cols-2">
        <div className="hero-left">
          <p className="hero-text mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Portfolio
          </p>

          <h2 className="hero-text text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Hi, I&apos;m a software developer building practical digital
            products.
          </h2>

          <div className="hero-text mt-5 h-1 w-16 rounded-full bg-cyan-400" />

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
              <Mail size={20} />
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

        <div className="hero-right flex flex-col items-center">
          <div className="profile-card relative mb-8 h-72 w-72 rounded-full bg-white p-2 shadow-2xl shadow-cyan-500/30 md:h-80 md:w-80">
            <div className="absolute inset-[-18px] -z-10 rounded-full bg-cyan-300/30 blur-2xl" />

            <img
              src="/profile.jpg"
              alt="May Thet Naing Bo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="hero-text whitespace-nowrap text-center text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            May Thet Naing Bo
          </h1>

          <div className="hero-text mt-3 h-1 w-20 rounded-full bg-cyan-400" />

          <p className="hero-text mt-5 text-center text-lg text-lg leading-8 text-slate-600 md:text-xl">
            Software Developer • DevOps Learner • AI Automation Engineer
          </p>
        </div>
      </div>
    </section>
  );
}