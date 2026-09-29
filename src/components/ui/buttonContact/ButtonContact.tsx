"use client"
import { useEffect, useMemo, useState } from "react"
import styles from "./buttonContact.module.css"
import Link from "next/link";

function mulberry32(seed: number) {
    return function () {
        seed |= 0
        seed = (seed + 0x6d2b79f5) | 0
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

const BUBBLE_COUNT = 500
const BASE_SIZE = 320 // taille de référence desktop, doit matcher .button en CSS

function generateBubbles() {
    const rand = mulberry32(42)
    return Array.from({ length: BUBBLE_COUNT }, () => {
        const angle = rand() * 360
        const distance = 35 + rand() * 60
        const size = 3 + rand() * 9
        const opacity = 0.3 + rand() * 0.6
        const duration = 22 + rand()
        const direction = rand() > 0.5 ? 1 : -1
        return { angle, distance, size, opacity, duration, direction }
    })
}

export default function GetInTouchButton() {
    const bubbles = useMemo(generateBubbles, [])
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const mqlTablet = window.matchMedia("(min-width: 568px) and (max-width: 1024px)")
        const mqlMobile = window.matchMedia("(max-width: 568px)")

        const updateScale = () => {
            if (mqlMobile.matches) setScale(180 / BASE_SIZE)
            else if (mqlTablet.matches) setScale(240 / BASE_SIZE)
            else setScale(1)
        }

        updateScale()
        mqlTablet.addEventListener("change", updateScale)
        mqlMobile.addEventListener("change", updateScale)
        return () => {
            mqlTablet.removeEventListener("change", updateScale)
            mqlMobile.removeEventListener("change", updateScale)
        }
    }, [])

    return (
        <Link href={"/contact"} className={styles.button} aria-label="Contact">
            <span className={styles.bubbles}>
                {bubbles.map((b, i) => (
                    <span
                        key={i}
                        className={styles.orbit}
                        style={{
                            ["--angle" as string]: `${b.angle}deg`,
                            ["--spin" as string]: `${360 * b.direction}deg`,
                            animationDuration: `${b.duration}s`,
                        } as React.CSSProperties}
                    >
                        <span
                            className={styles.bubble}
                            style={{
                                left: b.distance * scale,
                                width: b.size * scale,
                                height: b.size * scale,
                                opacity: b.opacity,
                            }}
                        />
                    </span>
                ))}
            </span>

            <span className={styles.circle}>
                <span className={styles.label}>{"Un projet ?"}</span>
            </span>
        </Link>
    )
}