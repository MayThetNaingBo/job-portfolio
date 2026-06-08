// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function EducationJourney() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".edu-photo-left", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//         x: -120,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power4.out",
//       });

//       gsap.from(".edu-photo-right", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//         x: 120,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power4.out",
//       });

//       gsap.from(".edu-content", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//         scale: 0.85,
//         opacity: 0,
//         duration: 1,
//         ease: "back.out(1.7)",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="education"
//       ref={sectionRef}
//       className="relative px-6 py-24 text-slate-900"
//     >
//       <div className="mx-auto max-w-6xl">
//         <div className="mb-14 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
//             Journey
//           </p>

//           <h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">
//             Education Journey
//           </h2>
//         </div>

//         <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
//           <div>
//             <img
//               src="/graduation-1.jpg"
//               alt="Graduation photo 1"
//               className="edu-photo-left w-full rounded-[2rem] shadow-2xl shadow-cyan-500/20"
//             />

//             <div className="edu-content mt-10 text-center">
//               <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
//                 Temasek Polytechnic
//               </p>

//               <h3 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950">
//                 Diploma in Information Technology
//               </h3>

//               <p className="mt-2 text-lg font-medium text-slate-500">
//                 Software Development
//               </p>

//               <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400" />

//               <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-lg leading-8 text-slate-600">
//                 My education journey at Temasek Polytechnic strengthened my
//                 foundation in software development, web applications, databases,
//                 teamwork, and real-world project building.
//               </p>

//               <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-lg leading-8 text-slate-600">
//                 Through coursework, internship experience, and portfolio
//                 projects, I developed practical skills in full-stack
//                 development, DevOps basics, and AI automation.
//               </p>
//             </div>
//           </div>

//           <img
//             src="/graduation-2.jpg"
//             alt="Graduation photo 2"
//             className="edu-photo-right w-full rounded-[2rem] shadow-2xl shadow-cyan-500/20"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
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
      className="relative px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">
            My Journey Here!
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="edu-photo overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-cyan-500/20">
            <img
              src="/graduation-2.jpg"
              alt="Graduation"
              className="h-auto w-full"
            />
          </div>

          <div className="edu-content">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Temasek Polytechnic, SINGAPORE
            </p>

            <h3 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950">
              Diploma in <br></br>Information Technology
            </h3>

            <p className="mt-3 text-xl font-medium text-slate-500">
              April 2023 - May 2026
            </p>

            <div className="mt-3 h-1 w-60 rounded-full bg-cyan-400" />

           <p className="hero-text mt-5 max-w-xl text-[20px] leading-[44px] text-slate-750">
              My education journey at Temasek Polytechnic strengthened my
              foundation in software development, web applications, databases,
              teamwork, and real-world project building.
            </p>

          <p className="mx-auto mt-2 max-w-2xl text-lg leading-8 text-xl leading-9 text-slate-600">
  Through coursework, internship experience, and portfolio projects, I developed
  practical skills in full-stack development, DevOps basics, and AI automation.
</p>

<div className="mx-auto text-xl mt-7 max-w-5xl border-t border-cyan-200 pt-4">
  <p className="text-base text-xl font-semibold text-cyan-700">
    AI Automation Engineer Intern
  </p>

  <p className="mt-1 text-xl text-slate-500">
    Tertiary Infotech Academy Pte Ltd.
  </p>
</div>

<p className="hero-text mt-6 max-w-xl text-[20px] leading-[44px] text-slate-750">
  During my internship as an AI Automation Engineer Intern, I gained hands-on
  experience working with automation workflows, AI tools, problem-solving, and
  practical software development tasks.
</p>    </div>
        </div>
      </div>
    </section>
  );
}

