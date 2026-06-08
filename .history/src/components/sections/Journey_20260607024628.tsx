



// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function EducationJourney() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".edu-photo", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//         x: -120,
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

//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           <div className="edu-photo overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-cyan-500/20">
//             <img
//               src="/graduation-1.jpg"
//               alt="Graduation"
//               className="h-auto w-full"
//             />
//           </div>

//           <div className="edu-content">
//             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
//               Temasek Polytechnic
//             </p>

//             <h3 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950">
//               Diploma in Information Technology
//             </h3>

//             <p className="mt-2 text-lg font-medium text-slate-500">
//               Software Development
//             </p>

//             <div className="mt-5 h-1 w-20 rounded-full bg-cyan-400" />

//             <p className="mt-6 text-lg leading-8 text-lg leading-8 text-slate-600">
//               My education journey at Temasek Polytechnic strengthened my
//               foundation in software development, web applications, databases,
//               teamwork, and real-world project building.
//             </p>

//             <p className="mt-4 text-lg leading-8 text-lg leading-8 text-slate-600">
//               Through coursework, internship experience, and portfolio projects,
//               I developed practical skills in full-stack development, DevOps
//               basics, and AI automation.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

