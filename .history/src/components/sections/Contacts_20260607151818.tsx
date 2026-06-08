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
        value: "",
        href: "",
    },
    {
        label: "LinkedIn",
        value: "",
        href: "",
    },
];

export default function Contact(){
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

    async function handleSubmit(e: React.FormEvent<HTMLFormElemet>){
        e.preventDefault();
        setStatus("Sending...");

        const form = e.currentTarget;
        const formData =  new FormData(form);
        const endpoint = "https://api.web3forms.com/submit";

        try {
            
        }
    }