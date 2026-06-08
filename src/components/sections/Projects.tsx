"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const romanNumbers = ["I", "II", "III", "IV", "V", "VI"];

const projects = [
  {
    title: "ConcertHub",
    category: "Full-Stack / Real-Time",
    description:
      "A full-stack concert ticket booking web application that allows users to browse concerts, select seats, reserve tickets, complete payment, and receive QR-code tickets. It also includes admin features for managing concerts and booking operations.",
    image: "/concerthub.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Cloudinary"],
    liveUrl: "https://concert-booking-system-liart.vercel.app/",
    githubUrl: "https://github.com/MayThetNaingBo/concert-booking-system.git",
  },
  {
    title: "CodeGuard AI",
    category: "Backend / Production Design",
    description:
      "A backend security scanning application that allows users to scan code repositories, detect potential security issues, manage scan history, and review vulnerabilities and generate AI reports through authenticated user accounts.",
    image: "/devops.png",
    tech: ["NestJS", "TypeScript", "Prisma", "Swagger"],
    liveUrl: "https://devops-scanner.vercel.app/",
    githubUrl: "https://github.com/MayThetNaingBo/devops_scanner.git",
  },
  {
    title: "Merlion FX",
    category: "Python / Flask Web App",
    description:
      "Merlion FX is a Flask foreign exchange web application for currency rates, conversion, PayPal sandbox payments, historical charts, forex news, and simple exchange-rate forecasting.",
    image: "/merlionfx.png",
    tech: ["Python", "JavaScript", "Flask", "PayPal Sandbox", "Polygon.io API"],
    liveUrl: "",
    githubUrl: "https://github.com/MayThetNaingBo/MerlionFX-app.git",
  },
  {
    title: "CCN Carnival",
    category: "Blockchain / Smart Contract",
    description:
      "CCN Carnival is a blockchain-based carnival stall management system with organizer, stall owner, and buyer roles. It supports stall registration, item purchases, donations, refunds, and secure fund withdrawals using smart contracts.",
    image: "/ccn.png",
    tech: ["Solidity", "MetaMask", "Sepolia"],
    liveUrl: "",
    githubUrl: "https://github.com/MayThetNaingBo/CCN_Carnival.git",
  },
  {
    title: "Arising Starlights",
    category: "Web Application",
    description:
      "Arising Starlights is a Theatre CCA web application for admins, members, and public users. It supports role-based access, event registration, notifications, search, profile editing, and public browsing.",
    image: "/cca.png",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/MayThetNaingBo/Arising-Starlight.git",
  },
  {
    title: "Aqua-IQ",
    category: "IoT / Cloud Concept",
    description:
      "Aqua-IQ is an IoT smart water bottle concept designed for hydration tracking, liquid monitoring, environmental sensing, and real-time safety alerts. The project explores how AWS cloud services can process IoT sensor data and deliver useful notifications.",
    image: "/iot.png",
    tech: [
      "AWS IoT Core",
      "AWS Lambda",
      "DynamoDB",
      "Amazon SNS",
      "Bluetooth",
      "Sensors",
    ],
    liveUrl: "",
    githubUrl:
      "https://github.com/MayThetNaingBo/aqua-iq-smart-water-bottle.git",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".project-row");

rows.forEach((row, index) => {
  const fromLeft = index % 2 === 0;

  gsap.fromTo(
    row,
    {
      opacity: 0,
      x: fromLeft ? -120 : 120,
      scale: 0.92,
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      ease: "power3.out",
      scrollTrigger: {
        trigger: row,
        start: "top 95%",
        end: "top 35%",
        scrub: 2.5,
      },
    }
  );
});
    }, sectionRef);

    return () => ctx.revert();
  }, [showMore]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-20 text-slate-900 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.35em]">
            My Work
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-cyan-400 sm:w-44" />

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
            Below is a showcase of the projects I have built so far for software
            engineering, DevOps, AI, and cloud learning.
          </p>
        </div>

        <div className="relative mx-auto w-full">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-cyan-300/60 lg:block" />

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {visibleProjects.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={project.title}
                  className={`project-row relative grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20 ${
                    isLeft ? "" : "lg:[&>div:first-child]:order-2"
                  }`}
                >
                  <div
                    className={`relative flex justify-center pb-8 ${
                      isLeft ? "lg:pr-10" : "lg:pl-10"
                    }`}
                  >
                    <div className="group relative w-full max-w-[620px] rounded-[1.5rem] border-[6px] border-white bg-white shadow-2xl shadow-cyan-500/20 sm:rounded-[2rem] sm:border-[8px]">
                      <div className="overflow-hidden rounded-[1rem] bg-slate-950 sm:rounded-[1.5rem]">
                        <div className="aspect-[16/10] w-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="absolute -bottom-14 left-5 z-20 flex w-fit max-w-[85%] items-center rounded-full border border-cyan-300/60 bg-cyan-500 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-cyan-500/30 sm:left-7 sm:px-6 sm:py-2.5 sm:text-xs sm:tracking-[0.2em]">
                        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_10px_rgba(255,255,255,1)]" />
                        {project.category}
                      </div>
                    </div>

                    <div
                      className={`absolute top-1/2 hidden -translate-y-1/2 items-center lg:flex ${
                        isLeft ? "-right-14" : "-left-14 rotate-180"
                      }`}
                    >
                      <div className="relative flex items-center">
                        <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,1)]" />

                        <span className="h-[2px] w-16 bg-gradient-to-r from-cyan-300 via-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.9)] xl:w-20" />

                        <span className="relative h-9 w-9 rounded-full border border-cyan-300/70 bg-white/40 shadow-[0_0_18px_rgba(34,211,238,0.8)] backdrop-blur-md">
                          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-cyan-500" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative w-full max-w-[650px] text-center lg:text-left ${
                      isLeft ? "lg:pl-16 xl:pl-20" : "lg:pr-16 xl:pr-20"
                    }`}
                  >
                    <p className="project-roman mb-2 text-4xl font-black tracking-wider text-cyan-500 sm:text-5xl lg:text-6xl">
                      {romanNumbers[index]}
                    </p>

                    <h3 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950 sm:text-3xl md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-cyan-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-400"
                        >
                          URL Link
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!showMore && (
          <div className="mt-14 text-center sm:mt-16">
            <button
              onClick={() => setShowMore(true)}
              className="group inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-500"
            >
              Show More Projects
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}