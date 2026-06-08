"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  { label: "Email", value: "your-email@gmail.com", href: "mailto:your-email@gmail.com" },
  { label: "GitHub", value: "github.com/your-username", href: "https://github.com/your-username" },
  { label: "LinkedIn", value: "linkedin.com/in/your-username", href: "https://linkedin.com/in/your-username" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-motion",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Replace this later with your real Formspree/Web3Forms endpoint
    const endpoint = "YOUR_FORM_ENDPOINT_HERE";

    if (endpoint === "YOUR_FORM_ENDPOINT_HERE") {
      setStatus("Form UI ready. Add your real form endpoint to send messages.");
      return;
    }

    await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    form.reset();
    setStatus("Message sent successfully!");
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 py-28 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950 md:text-5xl">
            Let&apos;s Build Something
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Reach out for software development roles, collaborations, or project
            opportunities.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="contact-motion flex flex-col justify-center">
            <p className="text-lg font-semibold text-slate-950">
              Find me here
            </p>

            <div className="mt-8 space-y-7 border-l-2 border-cyan-200 pl-6">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  className="group relative block"
                >
                  <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.8)]" />

                  <p className="font-semibold text-slate-950 transition group-hover:text-cyan-600">
                    {item.label}
                  </p>

                  <p className="mt-1 text-base text-slate-500">{item.value}</p>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-motion rounded-[2rem] border border-white/80 bg-white/60 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-md"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Drop me a message
                </h3>
                <p className="mt-2 text-base text-slate-500">
                  Send a message directly from this website.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <Send size={22} />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                
                placeholder="Your name"
                className="rounded-2xl border border-cyan-100 bg-white/80 px-5 py-4 outline-none transition focus:border-cyan-400"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="rounded-2xl border border-cyan-100 bg-white/80 px-5 py-4 outline-none transition focus:border-cyan-400"
              />
            </div>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Write your message..."
              className="mt-5 w-full resize-none rounded-2xl border border-cyan-100 bg-white/80 px-5 py-4 outline-none transition focus:border-cyan-400"
            />

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Send Message
              <ArrowUpRight size={18} />
            </button>

            {status && <p className="mt-4 text-base text-slate-500">{status}</p>}
          </form>
        </div>

        <p className="mt-20 text-center text-base text-slate-500">
          © 2026 May Thet Naing Bo. Built with Next.js, Tailwind CSS, and GSAP.
        </p>
      </div>
    </section>
  );
}