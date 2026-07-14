"use client"
import { useMemo } from "react"
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

function generateBubbles() {
    const rand = mulberry32(42)
    return Array.from({ length: BUBBLE_COUNT }, () => {
        const angle = rand() * 360
        const distance = 35 + rand() * 60 // 45–105px : chevauche volontairement le cercle avant
        const size = 3 + rand() * 9
        const opacity = 0.3 + rand() * 0.6
        const duration = 22 + rand()  // orbite rapide : 0.8–2.2s
        const direction = rand() > 0.5 ? 1 : -1 // sens horaire / anti-horaire mélangés
        return { angle, distance, size, opacity, duration, direction }
    })
}

export default function GetInTouchButton() {
    const bubbles = useMemo(generateBubbles, [])

    return (
        <Link href={"/contact"} className={styles.button}  aria-label="Contact">
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
                    left: b.distance,
                    width: b.size,
                    height: b.size,
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