"use client";

import { useState } from "react";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import Skills from "@/src/components/sections/Skills";
import EducationJourney from "@/src/components/sections/Journey";
import Connect from "@/src/components/sections/Connect";

const snowflakes = Array.from({ length: 70 });
const stars = Array.from({ length: 90 });

export default function Home() {
  const [nightMode, setNightMode] = useState(false);

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-700 ${
        nightMode
          ? "night-mode bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white"
          : "bg-gradient-to-br from-white via-sky-50 to-cyan-100 text-slate-900"
      }`}
    >
      <button
        onClick={() => setNightMode(!nightMode)}
        className="fixed right-6 top-6 z-50 rounded-full border border-white/60 bg-white/70 px-5 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-cyan-500/20 backdrop-blur-md transition hover:-translate-y-1"
      >
        {nightMode ? "☀ Day Mode" : "🌌 Night Mode"}
      </button>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {!nightMode &&
          snowflakes.map((_, i) => (
            <span
              key={i}
              className="absolute text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.9)]"
              style={{
                left: `${(i * 17) % 100}%`,
                top: "-20px",
                fontSize: `${13 + (i % 5)}px`,
                animationName: "crystalSnowFall",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDelay: `${(i * 0.35) % 6}s`,
                animationDuration: `${8 + (i % 9)}s`,
              }}
            >
              ❅ 
            </span>
          ))}

        {nightMode &&
          stars.map((_, i) => (
            <span
  key={i}
  className="absolute text-center"
  style={{
    left: `${(i * 23) % 100}%`,
    top: `${(i * 37) % 100}%`,
    fontSize: `${4 + (i % 4)}px`,
    color:
      i % 3 === 0
        ? "#67e8f9"
        : i % 3 === 1
        ? "#ffffff"
        : "#a78bfa",
   textShadow:
  i % 3 === 0
    ? "0 0 12px #67e8f9, 0 0 24px #22d3ee"
    : i % 3 === 1
    ? "0 0 12px #ffffff, 0 0 24px #ffffff"
    : "0 0 12px #a78bfa, 0 0 24px #8b5cf6",
    animationName: "starTwinkle",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDelay: `${(i * 0.25) % 5}s`,
    animationDuration: `${1.8 + (i % 4)}s`,
  }}
>
  🟅
</span>
          ))}
      </div>

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <EducationJourney />
        <Connect />
      </div>

      <style jsx global>{`
      @keyframes starTwinkle {
  0% {
    opacity: 0.25;
    transform: scale(0.7) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.7) rotate(12deg);
  }
  100% {
    opacity: 0.35;
    transform: scale(0.8) rotate(0deg);
  }
}
        .night-mode section {
          color: #f8fafc;
        }

        .night-mode [class*="text-slate-950"],
        .night-mode [class*="text-slate-900"],
        .night-mode [class*="text-slate-800"] {
          color: #f8fafc !important;
        }

        .night-mode [class*="text-slate-700"],
        .night-mode [class*="text-slate-600"],
        .night-mode [class*="text-slate-500"],
        .night-mode [class*="text-slate-400"] {
          color: #f1f5f9 !important;
        }

        .night-mode p {
          color: #f1f5f9 !important;
        }

        .night-mode h1,
        .night-mode h2,
        .night-mode h3,
        .night-mode h4 {
          color: #ffffff !important;
        }

        .night-mode [class*="bg-white"] {
          background-color: rgba(15, 23, 42, 0.82) !important;
        }

        .night-mode [class*="border-white"] {
          border-color: rgba(103, 232, 249, 0.45) !important;
        }

        .night-mode [class*="bg-cyan-100"] {
          background-color: rgba(34, 211, 238, 0.22) !important;
        }

        .night-mode [class*="text-cyan-700"] {
          color: #67e8f9 !important;
        }

        .night-mode a[class*="bg-white"],
        .night-mode button[class*="bg-white"] {
          background-color: rgba(255, 255, 255, 0.95) !important;
          color: #0f172a !important;
        }

        .night-mode input,
        .night-mode textarea {
          background-color: rgba(248, 250, 252, 0.95) !important;
          color: #0f172a !important;
        }

        .night-mode input::placeholder,
        .night-mode textarea::placeholder {
          color: #64748b !important;
        }
          .night-mode input,
.night-mode textarea {
  background-color: rgba(15, 23, 42, 0.95) !important;
  color: #ffffff !important;
  caret-color: #22d3ee !important;
}

.night-mode input::placeholder,
.night-mode textarea::placeholder {
  color: #94a3b8 !important;
}
  .night-mode .project-roman {
  color: #22d3ee !important;
  text-shadow:
    0 0 8px rgba(34, 211, 238, 0.8),
    0 0 16px rgba(34, 211, 238, 0.7),
    0 0 32px rgba(34, 211, 238, 0.5),
    0 0 48px rgba(34, 211, 238, 0.3);
}
    .night-mode .hero-left h2,
.night-mode .hero-left h2 span {
  color: #f8fafc !important;
  -webkit-text-fill-color: #f8fafc !important;
}

.night-mode .hero-left h2 span span:last-child {
  background: linear-gradient(to right, #67e8f9, #ffffff, #38bdf8) !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
}
      `}</style>
    </main>
  );
}