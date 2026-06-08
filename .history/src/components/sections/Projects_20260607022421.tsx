"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Concert Booking System",
    description:
      "Full-stack ticket booking platform with real-time seat reservation, Stripe payment, QR tickets, and admin check-in.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
  },
  {
    title: "WDiGi Store",
    description:
      "Production-level game top-up platform with supplier API, payment flow, admin dashboard, queue, and refund handling.",
    tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    title: "CodeGuard AI",
    description:
      "Security scanning backend with authentication, scan history, and AI-focused code review workflow.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "TypeScript"],
  },
  {
    title: "IoT Smart Water Bottle",
    description:
      "IoT project with device connection, web interface, and cloud-based monitoring concept.",
    tech: ["IoT", "AWS IoT", "HTML", "JavaScript"],
  },
  {
    title: "MayLingo",
    description:
      "Real-time speech translation app concept with polite translation and emergency phrase mode.",
    tech: ["AI", "Mobile App", "Speech API", "Translation"],
  },
  {
    title: "Portfolio Website",
    description:
      "Animated personal portfolio website for job hunting with GSAP motion effects and responsive UI.",
    tech: ["Next.js", "Tailwind CSS", "GSAP", "TypeScript"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        {
          scale: 0.75,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.16,
          ease: "back.out(1.8)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [showMore]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            My Work
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A collection of full-stack, real-time, DevOps, AI, and
            production-minded projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="project-card rounded-3xl border border-white/80 bg-white/80 p-7 shadow-xl shadow-cyan-500/10 backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl font-bold text-slate-950">
                {project.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowMore(true)}
              className="font-semibold text-cyan-600 underline underline-offset-4 transition hover:text-cyan-500"
            >
              See more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}