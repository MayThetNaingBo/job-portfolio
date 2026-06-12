"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EducationJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edu-photo",
        {
          x: -160,
          opacity: 0,
          scale: 0.92,
          filter: "blur(10px)",
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 98%",
            end: "top 10%",
            scrub: 7,
          },
        }
      );

      gsap.fromTo(
        ".edu-content",
        {
          x: 160,
          opacity: 0,
          scale: 0.92,
          filter: "blur(10px)",
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 98%",
            end: "top 10%",
            scrub: 7,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative px-4 py-16 text-slate-900 sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="highlight text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 sm:text-sm">
            Education
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl md:text-5xl">
            My Journey Here
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-4 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            After completing my matriculation education in Myanmar, I moved to Singapore to pursue a Diploma in Information Technology and grow my passion for technology.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="edu-photo overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white shadow-2xl shadow-cyan-500/20">
            <img
              src="/graduation-2.JPG"
              alt="Graduation"
              className="h-auto w-full"
            />
          </div>

          <div className="edu-content">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600 sm:text-sm">
              Temasek Polytechnic, SINGAPORE
            </p>

            <h3 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
              Diploma in <br /> Information Technology
            </h3>

            <p className="mt-3 text-base font-medium text-slate-500 sm:text-lg">
              April 2023 - May 2026
            </p>

            <div className="mt-3 h-1 w-44 rounded-full bg-cyan-400" />

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              My education journey at Temasek Polytechnic strengthened my
              foundation in software development, web applications, databases,
              teamwork, and real-world project building.
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              Through coursework, internship experience, and portfolio projects,
              I developed practical skills in full-stack development, DevOps
              basics, and AI automation.
            </p>

            <div className="mx-auto mt-6 max-w-5xl border-t border-cyan-200 pt-4">
              <p className="text-base font-semibold text-cyan-700">
                AI Automation Engineer Intern
              </p>

              <p className="mt-1 text-base text-slate-500 sm:text-lg">
                Tertiary Infotech Academy Pte Ltd.
              </p>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              During my internship as an AI Automation Engineer Intern, I gained
              hands-on experience working with automation workflows, AI tools,
              problem-solving, and practical software development tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}