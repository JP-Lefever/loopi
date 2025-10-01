"use client"

import styles from "./header.module.css"
import dataHeader from "@/assets/data/header.json"
import TiltCard from "@/components/ui/3D/TiltCard";



export default function Header() {


    return (
        <header  className={styles.header}>
            <article>
                <h1 className={styles.h1}>{dataHeader.description}</h1>
            </article>
            <TiltCard>
                <div className={styles.videoWrapper}>
                    <video
                        className={styles.video}
                        src="/videos/head.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </TiltCard>
        </header>
    )
}
