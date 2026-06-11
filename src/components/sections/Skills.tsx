"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillIcons: Record<string, string[]> = {
  HTML: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  ],
  CSS: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  ],
  React: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  ],
  "Next.js": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  ],
  JavaScript: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ],
  TypeScript: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  ],
  "Tailwind CSS": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  ],
  "Flutter/Dart": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  ],
  "Node.js": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  ],
  "Express.js": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  ],
  NestJS: ["https://cdn.simpleicons.org/nestjs/E0234E"],
  Python: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  ],
  Java: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  ],
  "REST API": ["https://cdn.simpleicons.org/fastapi/009688"],
  "JWT Auth": ["https://cdn.simpleicons.org/jsonwebtokens/000000"],
  Git: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
  GitHub: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  ],
  Docker: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  ],
  Vercel: ["https://cdn.simpleicons.org/vercel/000000"],
  Render: ["https://cdn.simpleicons.org/render/46E3B7"],
  MongoDB: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  ],
  Firebase: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  ],
  PostgreSQL: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  ],
  Prisma: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  ],
  "AWS Cloud Deployment": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  ],
  "Google Cloud Platform": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  ],
  "OWASP Top 10": ["https://cdn.simpleicons.org/owasp/000000"],
};

const skillNodes = [
  {
    title: "Frontend",
    position: "lg:left-[8%] lg:top-[32%]",
    skills: [
      "HTML",
      "CSS",
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
    position: "lg:right-[8%] lg:top-[32%]",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "Java",
      "REST API",
      "JWT Auth",
    ],
  },
  {
    title: "Generic Skills",
    position: "lg:left-[20%] lg:top-[80%]",
    skills: [
      "Analytical problem-solving",
      "Time management & Multitasking",
      "Adaptability & Teamwork",
    ],
  },
  {
    title: "DevOps",
    position: "lg:right-[17%] lg:top-[80%]",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render"],
  },
  {
    title: "Security",
    position: "lg:left-[42%] lg:top-[73%] lg:-translate-x-1/2",
    skills: ["OWASP Top 10", "Application Hardening"],
  },
  {
    title: "Databases",
    position: "lg:left-[42%] lg:bottom-[73%] lg:-translate-x-1/2",
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
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderSkill = (skill: string) => (
    <span
      key={skill}
      className="flex items-center gap-1 rounded-full bg-cyan-100 px-2 py-1 text-[11px] font-medium text-cyan-700 sm:text-xs"
    >
      {skillIcons[skill]?.map((icon) => (
        <img key={icon} src={icon} alt={skill} className="h-3.5 w-3.5" />
      ))}
      {skill}
    </span>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-14 text-slate-900 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-25 text-center sm:mb-30 lg:mb-30">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.35em]">
            Capability
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl md:text-5xl">
            Skills Dashboard
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-4xl sm:leading-9 lg:text-xl lg:leading-10">
            A combination of technical skills and soft skills I use to build,
            communicate, and solve real software problems.
          </p>
        </div>

        <div className="relative mx-auto hidden h-[560px] w-full max-w-5xl lg:block">
          <div className="skill-line absolute left-1/2 top-1/2 h-px w-[30%] origin-left bg-cyan-300/70" />
          <div className="skill-line absolute right-1/2 top-1/2 h-px w-[30%] origin-right bg-cyan-300/70" />
          <div className="skill-line absolute left-1/2 top-[22%] h-[28%] w-px origin-top bg-cyan-300/70" />
          <div className="skill-line absolute left-1/2 top-1/2 h-[28%] w-px origin-top bg-cyan-300/70" />

          <div className="skill-line absolute left-[32%] top-[44%] h-px w-[18%] rotate-[-28deg] origin-right bg-cyan-300/70" />
          <div className="skill-line absolute right-[32%] top-[44%] h-px w-[18%] rotate-[28deg] origin-left bg-cyan-300/70" />
          <div className="skill-line absolute left-[33%] bottom-[30%] h-px w-[18%] rotate-[28deg] origin-right bg-cyan-300/70" />
          <div className="skill-line absolute right-[33%] bottom-[30%] h-px w-[18%] rotate-[-28deg] origin-left bg-cyan-300/70" />

          <div className="skill-center absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/80 bg-white/70 text-center shadow-2xl shadow-cyan-500/25 backdrop-blur-md xl:h-36 xl:w-36">
            <div className="absolute inset-[-14px] -z-10 rounded-full bg-cyan-300/30 blur-2xl" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-600 xl:text-xs">
              Core
            </p>

            <h3 className="mt-2 px-2 text-base font-extrabold leading-tight text-slate-950 xl:text-lg">
              Full Stack Developer
            </h3>

            <p className="mt-1 text-[11px] text-slate-500 xl:text-xs">
              Software • DevOps
            </p>
          </div>

          {skillNodes.map((group) => (
            <div
              key={group.title}
              className={`skill-node float-node absolute ${group.position} w-44 rounded-[1.25rem] border border-white/80 bg-white/75 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-md transition hover:-translate-y-2 hover:shadow-cyan-500/25 xl:w-48 xl:rounded-[1.5rem]`}
            >
              <h3 className="text-lg font-extrabold text-slate-950 xl:text-xl">
                {group.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => renderSkill(skill))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:hidden sm:grid-cols-2">
          {skillNodes.map((group) => (
            <div
              key={group.title}
              className="skill-node rounded-[1.25rem] border border-white/80 bg-white/75 p-4 shadow-xl shadow-cyan-500/10 backdrop-blur-md sm:rounded-[1.5rem] sm:p-5"
            >
              <h3 className="text-lg font-extrabold text-slate-950 sm:text-xl">
                {group.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                {group.skills.map((skill) => renderSkill(skill))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}