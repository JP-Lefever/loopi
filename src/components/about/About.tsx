import styles from "./about.module.css"
import ReactMarkdown from "react-markdown";
import dataAbout from "@/assets/data/about.json"
import Image from "next/image";

export default function About(){

    return (
        <>
            <section className={styles.aboutSection}>
                <article className={styles.title}>
                    <h2 className={styles.h2}>{dataAbout.title}</h2>
                </article>
                <article className={styles.article}>
                    <ReactMarkdown>{dataAbout.description}</ReactMarkdown>
                </article>
                <article className={styles.article}>
                    <ReactMarkdown>{dataAbout.description2}</ReactMarkdown>
                </article>
                <article className={styles.article}>
                    <ReactMarkdown>{dataAbout.description3}</ReactMarkdown>
                </article>
            </section>
        </>
    )
}