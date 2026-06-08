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
          scale: 0.75,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 py-28 text-slate-900"
    >
      < className="mx-auto max-w-6xl">
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

       
        <div className="contact-card mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-8 md:flex-row">
  {contacts.map((item) => (
    <a
      key={item.label}
      href={item.href}
      target={item.label === "Email" ? undefined : "_blank"}
      className="group flex items-center gap-3 text-lg font-semibold text-lg leading-8 text-slate-600 transition hover:text-cyan-600"
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400 transition group-hover:scale-150" />
      {item.label}
      <ArrowUpRight
        size={18}
        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  ))}
</div>

        <p className="mt-16 text-center text-base text-slate-500">
          © 2026 May Thet Naing Bo. Built with Next.js, Tailwind CSS, and GSAP.
        </p>
      </div>
    </section>
  );
}