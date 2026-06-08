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
      className="relative min-h-screen overflow-hidden px-6 py-20 text-slate-900"
    >
      <div className="pointer-events-none absolute left-10 top-28 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-20 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 grid min-h-[80vh] w-full items-center gap-12 px-4 md:grid-cols-[1fr_0.9fr] lg:px-20 xl:px-28">
        <div className="hero-left md:pl-6 lg:pl-10">
          <p className="hero-text mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            May&apos;s Portfolio
          </p>

          <h2 className="hero-text text-3xl font-bold leading-tight text-slate-950 md:text-4xl xl:text-5xl">
            Hi, I'm{" "}
<span className="relative">
  <span className="absolute -inset-1 rounded-lg bg-cyan-500/20 blur-lg"></span>

  <span className="relative bg-gradient-to-r from-cyan-600 to-sky-700 bg-clip-text text-transparent">
    May
  </span>
</span>,
          <span className="relative inline-block">
  <span className="absolute -inset-2 rounded-2xl bg-cyan-300/20 blur-2xl" />

  <span className="relative bg-gradient-to-r from-slate-950 via-cyan-650 to-slate-950 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
    A Junior Software Developer who loves to build practical digital
    products.
  </span>
</span>
          </h2>

          <div className="hero-text mt-7 h-1 w-45 rounded-full bg-cyan-400" />

          <p className="hero-text mt-6 max-w-xl text-lg leading-8 xl:text-[22px] xl:leading-10 text-slate-700">
            I am passionate about full-stack development, real-time systems,
            DevOps, and AI automation. I enjoy building projects that solve real
            problems and can grow into production-ready applications.
          </p>

          <div className="hero-text mt-10 flex flex-wrap gap-4">
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

          <div className="hero-text mt-8 flex items-center gap-5 text-base text-slate-500">
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

        <div className="hero-right flex flex-col items-center md:items-center lg:pl-10">
          <div className="profile-card relative mb-8 h-72 w-72 rounded-full bg-white p-2 shadow-2xl shadow-cyan-500/30 md:h-80 md:w-80 xl:h-[400px] xl:w-[400px]">
            <div className="absolute inset-[-18px] -z-10 rounded-full bg-cyan-300/30 blur-2xl" />

            <img
              src="/profile.jpg"
              alt="May Thet Naing Bo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="hero-text text-center text-3xl font-black tracking-tight md:text-5xl xl:text-6xl">
            <span className="bg-gradient-to-r from-cyan-700 to-sky-400 bg-clip-text text-transparent">
              MAY THET NAING BO
            </span>
          </h1>

          <p className="hero-text mt-4 text-center text-base font-semibold uppercase tracking-[0.25em] text-slate-500 md:text-lg">
            Full Stack Developer • DevOps • AI Automation
          </p>
        </div>
      </div>
    </section>
  );
}