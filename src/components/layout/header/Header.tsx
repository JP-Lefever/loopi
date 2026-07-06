"use client"

import styles from "./header.module.css"
import dataHeader from "@/assets/data/header.json"
import { CircleArrowDown } from 'lucide-react';



export default function Header() {


    return (
        <header  className={styles.header}>
            <article>
                <h1 className={styles.h1}>{dataHeader.title}</h1>
                <h1 className={styles.h1b}>{dataHeader.subTitle}</h1>
                <h2 className={styles.subtitle}>{dataHeader.description}</h2>
            </article>
            <article className={styles.article}>
                <CircleArrowDown size={70} />
            </article>
        </header>
    )
}
