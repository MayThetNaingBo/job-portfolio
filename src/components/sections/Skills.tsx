"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillNodes = [
  {
    title: "Frontend",
    position: "lg:left-[0%] lg:top-[30%]",
    skills: [
      "HTML/CSS",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Flutter/Dart",
    ],
  },
  {
    title: "Backend",
    position: "lg:right-[0%] lg:top-[30%]",
    skills: ["Node.js", "Express.js", "NestJS", "Python", "REST API", "JWT Auth"],
  },
  {
    title: "Generic Skills",
    position: "lg:left-[10%] lg:top-[75%]",
    skills: [
      "Analytical problem-solving",
      "Time management & Multitasking",
      "Adaptability & Teamwork",
    ],
  },
  {
    title: "DevOps",
    position: "lg:right-[8%] lg:bottom-[8%]",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render"],
  },
  {
    title: "Security",
    position: "lg:left-[40%] lg:top-[75%] lg:-translate-x-1/2",
    skills: ["OWASP Top 10", "Application Hardening"],
  },
  {
    title: "Databases",
    position: "lg:right-[38%] lg:top-[-6%] lg:-translate-x-1/2",
    skills: [
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "Prisma",
      "AWS Cloud Deployment",
      "Google Cloud Platform",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-center",
        { scale: 0.6, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(1.8)",
        }
      );

      gsap.fromTo(
        ".skill-line",
        { scaleX: 0, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
          scaleX: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".skill-node",
        { scale: 0.6, opacity: 0, y: 30 },
        {
          scrollTrigger: {
  trigger: sectionRef.current,
  start: "top 75%",
  toggleActions: "play reverse play reverse",
},
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.7)",
        }
      );

      gsap.to(".float-node", {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-20 text-slate-900 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.35em]">
            Capability
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl md:text-5xl">
            Skills Dashboard
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9 lg:text-2xl lg:leading-10">
            A combination of technical skills and soft skills I use to build,
            communicate, and solve real software problems.
          </p>
        </div>

        <div className="relative mx-auto hidden h-[760px] w-full max-w-6xl lg:block">
          <div className="skill-line absolute left-1/2 top-1/2 h-px w-[35%] origin-left bg-cyan-300/70" />
          <div className="skill-line absolute right-1/2 top-1/2 h-px w-[35%] origin-right bg-cyan-300/70" />
          <div className="skill-line absolute left-1/2 top-[20%] h-[30%] w-px origin-top bg-cyan-300/70" />
          <div className="skill-line absolute left-1/2 top-1/2 h-[30%] w-px origin-top bg-cyan-300/70" />

          <div className="skill-line absolute left-[28%] top-[42%] h-px w-[22%] rotate-[-28deg] origin-right bg-cyan-300/70" />
          <div className="skill-line absolute right-[28%] top-[42%] h-px w-[22%] rotate-[28deg] origin-left bg-cyan-300/70" />
          <div className="skill-line absolute left-[30%] bottom-[28%] h-px w-[22%] rotate-[28deg] origin-right bg-cyan-300/70" />
          <div className="skill-line absolute right-[30%] bottom-[28%] h-px w-[22%] rotate-[-28deg] origin-left bg-cyan-300/70" />

          <div className="skill-center absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/80 bg-white/70 text-center shadow-2xl shadow-cyan-500/25 backdrop-blur-md xl:h-52 xl:w-52">
            <div className="absolute inset-[-18px] -z-10 rounded-full bg-cyan-300/30 blur-2xl" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600 xl:text-sm xl:tracking-[0.25em]">
              Core
            </p>

            <h3 className="mt-3 px-3 text-xl font-extrabold leading-tight text-slate-950 xl:text-2xl">
              Full Stack Developer
            </h3>

            <p className="mt-2 text-sm text-slate-500 xl:text-base">
              Software • DevOps • AI
            </p>
          </div>

          {skillNodes.map((group) => (
            <div
              key={group.title}
              className={`skill-node float-node absolute ${group.position} w-56 rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-md transition hover:-translate-y-2 hover:shadow-cyan-500/25 xl:w-64 xl:rounded-[2rem] xl:p-6`}
            >
              <h3 className="text-xl font-extrabold text-slate-950 xl:text-2xl">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2 xl:mt-5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 xl:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:hidden sm:grid-cols-2">
          {skillNodes.map((group) => (
            <div
              key={group.title}
              className="skill-node rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-xl shadow-cyan-500/10 backdrop-blur-md sm:rounded-[2rem] sm:p-6"
            >
              <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 sm:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}