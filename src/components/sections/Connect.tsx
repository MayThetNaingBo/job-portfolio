"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    label: "Email",
    value: "maythetnaingbo.contact@gmail.com",
    href: "mailto:maythetnaingbo.contact@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/may-thet-naing-bo",
    href: "https://www.linkedin.com/in/may-thet-naing-bo/",
  },
  {
    label: "GitHub",
    value: "github.com/MayThetNaingBo",
    href: "https://github.com/MayThetNaingBo",
  },
  
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
            toggleActions: "play reverse play reverse",
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
    const endpoint = "https://api.web3forms.com/submit";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        setStatus("Message sent successfully!");
      } else {
        setStatus("Something went wrong. Please check your access key.");
      }
    } catch {
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 text-slate-900 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.35em]">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl md:text-5xl">
            Let&apos;s Connect ◡̈
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-4xl sm:leading-9 lg:text-xl lg:leading-10">
            Feel free to connect for professional discussions, collaborations, or career opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div className="contact-motion flex flex-col justify-center">
            <p className="text-center text-xl font-semibold text-slate-950 lg:text-left">
              Find me here ⤵︎⤵
            </p>

          <div className="relative mx-auto mt-6 w-full max-w-xl space-y-5 pl-6 lg:mx-0">
  <span className="absolute left-0 top-3 bottom-3 w-[2px] bg-cyan-200" />
  {contacts.map((item) => (
    <a
      key={item.label}
      href={item.href}
      target={item.label === "Email" ? undefined : "_blank"}
      rel={item.label === "Email" ? undefined : "noopener noreferrer"}
      className="group relative block"
    >
      <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.8)]" />

      <p className="text-base font-semibold text-slate-950 transition group-hover:text-cyan-600 sm:text-lg">
        {item.label}
      </p>

      <p className="mt-1 break-words text-sm leading-7 text-slate-600 sm:text-base">
        {item.value}
      </p>
    </a>
  ))}
</div>
</div>
          <form
            onSubmit={handleSubmit}
            className="contact-motion rounded-[1.5rem] border border-white/80 bg-white/60 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-md sm:p-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="04162a69-0366-4ec3-a721-ee23e0539b6c"
            />

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-serif text-xl font-semibold italic tracking-tight text-slate-800 sm:text-2xl">
                  Drop me a message ☻
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  Send a message directly from this website.
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <Send size={22} />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                placeholder="Name (Optional)"
                className="w-full rounded-2xl border border-cyan-100 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 sm:text-base"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-2xl border border-cyan-100 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 sm:text-base"
              />
            </div>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message ...."
              className="mt-4 w-full resize-none rounded-2xl border border-cyan-100 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 sm:text-base"
            />

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-400 sm:w-auto sm:text-base"
            >
              Send Message
              <ArrowUpRight size={18} />
            </button>

            {status && (
              <p className="mt-4 break-words text-sm text-slate-600 sm:text-base">
                {status}
              </p>
            )}
          </form>
        </div>

        <p className="mt-12 text-center text-sm leading-7 text-slate-600 sm:mt-14">
          © 2026 MAY THET NAING BO. Built with Next.js, Tailwind CSS, and GSAP.
        </p>
      </div>
    </section>
  );
}