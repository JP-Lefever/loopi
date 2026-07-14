"use client"

import { useState } from "react"
import { ProjectProps } from "@/types/definitions"
import styles from "./cardProject.module.css"
import Image from "next/image"

export default function CardProject({ dataProject }: { dataProject: ProjectProps }) {
    const { name, image, type, synopsis, web, year } = dataProject

    const [isHovered, setIsHovered] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setMousePos({ x: e.clientX, y: e.clientY })
    }

    return (

        <a
            href={web}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.sectionCard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
            >
            <article className={styles.sectionInfo}>
            <h2 className={styles.h2}>{name}</h2>
        <p className={styles.syno}>{synopsis}</p>
        <p className={styles.year}>{year}</p>
    </article>

        <article
            className={styles.imageWrapper}
            style={{
                left: mousePos.x,
                top: mousePos.y,
                opacity: isHovered ? 1 : 0,
            }}
        >
            <Image className={styles.image} src={image} alt={name} width={320} height={220} />
        </article>
    </a>
    )
    }