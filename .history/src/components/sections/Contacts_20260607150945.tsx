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
        label: "Github",
        
    }
]