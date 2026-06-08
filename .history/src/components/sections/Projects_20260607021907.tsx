"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Concert Booking System",
    description:
      "Full-stack ticket booking platform with real-time seat reservation, Stripe payment, QR tickets, and admin check-in.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
  },
  {
    title: "WDiGi Store",
    description:
      "Production-level game top-up platform with supplier API, payment flow, admin dashboard, queue, and refund handling.",
    tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    title: "CodeGuard AI",
    description:
      "Security scanning backend with authentication, scan history, and AI-focused code review workflow.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "TypeScript"],
  },
  {
    title: "IoT Smart Water Bottle",
    description:
      "Io