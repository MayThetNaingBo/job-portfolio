import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

const snowflakes = Array.from({ length: 55 });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-100 text-slate-900">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {snowflakes.map((_, i) => (
          <span
            key={i}
            className="absolute text-cyan-200/80 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            style={{
              left: `${(i * 17) % 100}%`,
              top: "-20px",
              fontSize: `${8 + (i % 4)}px`,
              animationName: "crystalSnowFall",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `${(i * 0.35) % 6}s`,
              animationDuration: `${8 + (i % 9)}s`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}