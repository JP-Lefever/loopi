"use client"

import styles from "./header.module.css"
import dataHeader from "@/assets/data/header.json"
import TiltCard from "@/components/ui/3D/TiltCard";



export default function Header() {


    return (
        <header  className={styles.header}>
            <article>
                <h3 className={styles.h3}>{dataHeader.description}</h3>
            </article>
            <TiltCard>
            <video
                className={styles.video}
                src="/videos/head.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            </TiltCard>
        </header>
    )
}
