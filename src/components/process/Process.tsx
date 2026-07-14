"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./process.module.css"
import dataServices from "@/assets/data/services.json"
import CardProcess from "@/components/process/cardProcess/CardProcess"
import { ServicesProps } from "@/types/definitions"

// END_SPACE_RATIO : proportion de la largeur d'écran laissée "vide"
// après la dernière carte, avant que le scroll horizontal s'arrête.
// 0 = la dernière carte vient à ras du bord droit (comportement actuel)
// 0.5 = la dernière carte s'arrête pile au milieu de l'écran
const END_SPACE_RATIO = 0.3

export default function Process() {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)
    const [sectionHeight, setSectionHeight] = useState<number | null>(null)

    // Calcule la hauteur de section en fonction de la distance horizontale
    // RÉELLE à parcourir (avec l'espace de fin inclus), pour que le scroll
    // vertical et le scroll horizontal se terminent exactement ensemble.
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const computeHeight = () => {
            const viewportHeight = window.innerHeight
            const viewportWidth = track.parentElement!.offsetWidth
            const endSpace = viewportWidth * END_SPACE_RATIO
            const horizontalDistance = Math.max(
                track.scrollWidth - viewportWidth + endSpace,
                0
            )

            setSectionHeight(viewportHeight + horizontalDistance)
        }

        computeHeight()

        const resizeObserver = new ResizeObserver(computeHeight)
        resizeObserver.observe(track)
        window.addEventListener("resize", computeHeight)

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener("resize", computeHeight)
        }
    }, [])

    useEffect(() => {
        const section = sectionRef.current
        if (!section || sectionHeight === null) return

        let rafId: number

        const handleScroll = () => {
            rafId = requestAnimationFrame(() => {
                const rect = section.getBoundingClientRect()
                const viewportHeight = window.innerHeight
                const scrollableDistance = section.offsetHeight - viewportHeight

                if (scrollableDistance <= 0) return

                const scrolled = -rect.top
                let p = scrolled / scrollableDistance
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
    }, [sectionHeight])

    // translation horizontale = progress * distance réelle (avec l'espace de fin inclus)
    const trackStyle = trackRef.current
        ? {
            transform: `translateX(-${
                progress *
                (trackRef.current.scrollWidth -
                    trackRef.current.parentElement!.offsetWidth +
                    trackRef.current.parentElement!.offsetWidth * END_SPACE_RATIO)
            }px)`,
        }
        : undefined

    return (
        <section
            ref={sectionRef}
            className={styles.section}
            style={sectionHeight ? { height: `${sectionHeight}px` } : undefined}
        >
            <div className={styles.sticky}>
                <div className={styles.viewport}>
                    <div className={styles.frame}>
                        <p className={styles.frameText}>
                            {"Nous accompagnons chaque projet de l'idée jusqu'à la mise en ligne avec une approche simple et maîtrisée."}
                        </p>
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