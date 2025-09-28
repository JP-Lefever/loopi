import styles from "./about.module.css"
import ReactMarkdown from "react-markdown";
import dataAbout from "@/assets/data/about.json"

export default function About(){

    return (
        <>
            <section className={styles.aboutSection}>
                <h2 className={styles.h2}>{dataAbout.title}</h2>
                <h2 className={styles.h2sub}>{dataAbout.subtitle}</h2>
                <article className={styles.article}>
                    <ReactMarkdown>{dataAbout.description}</ReactMarkdown>
                </article>
            </section>
        </>
    )
}