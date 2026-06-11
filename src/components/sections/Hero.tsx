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
            y: 40,
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
      className="relative min-h-screen overflow-hidden px-4 py-12 text-slate-900 sm:px-6 lg:py-14"
    >
      <div className="pointer-events-none absolute left-10 top-28 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-20 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[82vh] w-full max-w-[1500px] items-center gap-10 px-2 md:grid-cols-[1.6fr_0.55fr] lg:px-10 xl:px-14">
        <div className="hero-left md:pl-2 lg:pl-4">
          <p className="hero-text mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 sm:text-sm sm:tracking-[0.35em]">
            May&apos;s Portfolio •ᴗ•
          </p>

          <h2 className="hero-text max-w-5xl text-[clamp(1.45rem,2.55vw,2.45rem)] font-bold leading-[1.15] text-slate-950">
            Hi, I&apos;m{" "}
            <span className="relative inline-block pb-1">
              <span className="absolute -inset-1 rounded-lg bg-cyan-500/15 blur-md" />

              <span className="relative bg-gradient-to-r from-cyan-600 to-sky-700 bg-clip-text text-transparent">
                May
              </span>
            </span>
            ,{" "}
            <br />
            <span className="relative inline">
              <span className="absolute -inset-1 rounded-2xl bg-cyan-300/10 blur-xl" />

              <span className="relative bg-gradient-to-r from-slate-950 via-cyan-800 to-slate-950 bg-clip-text text-transparent drop-shadow-[0_0_3px_rgba(34,211,238,0.08)]">
                A Junior Software Developer who enjoys building innovative and
                impactful software solutions.
              </span>
            </span>
          </h2>

          <div className="hero-text mt-5 h-1 w-32 rounded-full bg-cyan-400 sm:w-44" />

          <p className="hero-text mt-4 max-w-xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9 xl:text-xl xl:leading-10">
            I am passionate about full-stack development, real-time systems,
            DevOps, and AI automation. I enjoy building projects that solve real
            problems and can grow into production-ready applications.
          </p>

          <div className="hero-text mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              View Resume
            </a>

            <a
              href="#education"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600"
            >
              View My Journey
            </a>
          </div>

          <div className="hero-text mt-7 flex items-center gap-5 text-base text-slate-500">
            <a
              href="mailto:your-email@gmail.com"
              className="font-extrabold transition hover:text-cyan-600"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition hover:text-cyan-600"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition hover:text-cyan-600"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-right flex flex-col items-center md:items-center">
          <div className="profile-card relative mb-5 h-56 w-56 rounded-full bg-white p-2 shadow-2xl shadow-cyan-500/30 sm:h-64 sm:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
            <div className="absolute inset-[-18px] -z-10 rounded-full bg-cyan-300/30 blur-2xl" />

            <img
              src="/profile.jpg"
              alt="May Thet Naing Bo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="hero-text whitespace-nowrap text-center text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
            <span className="bg-gradient-to-r from-cyan-700 to-sky-400 bg-clip-text text-transparent">
              MAY THET NAING BO
            </span>
          </h1>

          <p className="hero-text mt-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm sm:tracking-[0.28em] lg:text-base">
            Full Stack • DevOps • AI Automation
          </p>
        </div>
      </div>
    </section>
  );
}