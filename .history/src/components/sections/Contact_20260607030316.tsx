"use client";

import { useEffect, useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    label: "Email",
    value: "your-email@gmail.com",
    href: "mailto:your-email@gmail.com",
    icon: Mail,
    textIcon: null,
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
    icon: null,
    textIcon: "GH",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-username",
    href: "https://linkedin.com/in/your-username",
    icon: null,
    textIcon: "IN",
  },
];
export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
  ".contact-card",
  {
    scale: 0.8,
    opacity: 0,
  },
  {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 py-28 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Feel free to reach out for software development roles, internships,
            collaborations, or project opportunities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                className="contact-card group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-xl shadow-cyan-500/10 backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-200/50 blur-2xl transition group-hover:bg-cyan-300/70" />

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 shadow-inner">
                     {Icon ? <Icon size={26} /> : <span className="font-bold">{item.textIcon}</span>}
                    </div>

                    <ArrowUpRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {item.label}
                  </h3>

                  <p className="mt-3 break-words text-lg leading-8 text-slate-600">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-16 text-center text-base text-slate-500">
          © 2026 May Thet Naing Bo. Built with Next.js, Tailwind CSS, and GSAP.
        </p>
      </div>
    </section>
  );
}