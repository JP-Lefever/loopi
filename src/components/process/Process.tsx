"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./process.module.css"
import dataServices from "@/assets/data/services.json"
import CardProcess from "@/components/process/cardProcess/CardProcess"
import { ServicesProps } from "@/types/definitions"

export default function Process() {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const section = sectionRef.current
        const track = trackRef.current
        if (!section || !track) return

        let rafId: number

        const handleScroll = () => {
            rafId = requestAnimationFrame(() => {
                const rect = section.getBoundingClientRect()
                const viewportHeight = window.innerHeight

                // distance totale scrollable dans la section (hauteur section - 1 viewport qui reste "sticky")
                const scrollableDistance = section.offsetHeight - viewportHeight

                // combien on a déjà scrollé depuis que le haut de la section touche le haut du viewport
                const scrolled = -rect.top

                // SPEED_MULTIPLIER > 1 = le défilement horizontal va plus vite
                // que le scroll vertical (il "rattrape" avant la fin de la section).
                const SPEED_MULTIPLIER = 2

                let p = (scrolled / scrollableDistance) * SPEED_MULTIPLIER
                p = Math.min(Math.max(p, 0), 1)

                setProgress(p)
            })
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
            cancelAnimationFrame(rafId)
        }
    }, [])

    // translation horizontale = progress * (largeur de la piste - largeur visible)
    const trackStyle = trackRef.current
        ? {
            transform: `translateX(-${
                progress * (trackRef.current.scrollWidth - trackRef.current.parentElement!.offsetWidth)
            }px)`,
        }
        : undefined

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.sticky}>


                <div className={styles.viewport}>
                    <div className={styles.frame}>
                        <p className={styles.frameText}>
                            {"Nous accompagnons chaque projet de l’idée jusqu’à la mise en ligne avec une approche simple et maîtrisée."}</p>
                    </div>
                    <div ref={trackRef} className={styles.track} style={trackStyle}>

                        {dataServices.map((service: ServicesProps, index: number) => (
                            <CardProcess key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
