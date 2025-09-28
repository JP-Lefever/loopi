"use client"
import { useEffect, useMemo, useRef, useState } from "react"
import styles from "./header.module.css"
import dataHeader from "@/assets/data/header.json"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {

    const [index, setIndex] = useState(0)

    const slogans = useMemo(() => ["créatifs", "performants", "interactifs", "modernes", "responsives"], [])

    const wordRef = useRef(null)
    const textRef = useRef(null)
    const videoRef = useRef(null)
    const headerRef = useRef(null)

    // Change word
    useEffect(() => {
        const interval = setInterval(() => {
            if (!wordRef.current) return
            gsap.to(wordRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    setIndex((prev) => (prev + 1) % slogans.length)
                    gsap.fromTo(
                        wordRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
                    )
                },
            })
        }, 2000)
        return () => clearInterval(interval)
    }, [slogans.length])

    // Timeline scroll : text + vidéo
    useEffect(() => {
        if (!headerRef.current || !textRef.current || !videoRef.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: true,
            },
        })


        tl.to(textRef.current, { y: -800, opacity: 0, ease: "power1.out" }, 0)

        tl.to(videoRef.current, { scale: 1.05, y: -400, ease: "power1.out" }, 0)

        return () => {
            if (tl) tl.kill()
            ScrollTrigger.getAll().forEach(st => st.kill && st.kill())
        }
    }, [])

    return (
        <header ref={headerRef} className={styles.header}>

            <article className={styles.videoWrapper}>
                <video
                    ref={videoRef}
                    className={styles.video}
                    src="/videos/loopi.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </article>

            <article ref={textRef} className={styles.textBlock}>
                <h3 className={styles.slogans}>
                    {dataHeader.title} <span ref={wordRef}>{slogans[index]}</span>
                </h3>
                <h3 className={styles.h3}>{dataHeader.description}</h3>
            </article>

        </header>
    )
}
