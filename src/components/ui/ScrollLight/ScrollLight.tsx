"use client";

import { useEffect } from "react";

export default function ScrollLight() {
    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const max = 600;

            const value = Math.min(scrollY / max, 1) * 0.25;

            console.log("scroll light:", value);
            document.documentElement.style.setProperty(
                "--scroll-light",
                value.toString()
            );
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return null;
}