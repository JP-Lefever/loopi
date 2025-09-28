"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./scrollTriggerWrapper.module.css"

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerWrapper({ children, containerRef } : {children: React.ReactNode, containerRef: React.RefObject<HTMLDivElement | null>}) {
    const sectionRef = useRef<HTMLElement | null>(null);


    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        const styles = getComputedStyle(container);
        const marginLeft = parseFloat(styles.marginLeft);
        const totalWidth = container.scrollWidth + marginLeft


        const windowWidth = window.innerWidth;

        const ctx = gsap.context(() => {
            gsap.to(container, {
                x: -(totalWidth - windowWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 0.5,
                    end: () => `+=${totalWidth }`,
                },
            });
        }, section);

        return () => ctx.revert();
    }, [containerRef]);



    return (
        <section ref={sectionRef} className={styles.section}>
                {children}
        </section>
    );
}
