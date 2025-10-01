
import styles from "./works.module.css"
import data from "@/assets/data/projects.json"
import CardProject from "@/components/works/cardProject/CardProject";
import {ProjectProps} from "@/types/definitions";

export default function Works() {


    return (
        <>
        <section className={styles.section}>
            <h2 className={styles.h2}>{"Dernières réalisations"}</h2>
            <article className={styles.sectionProject}>
                {data.map((project : ProjectProps) => (
                    <CardProject key={project.id} dataProject={project}/>
                ))}
            </article>
        </section>
        </>
    )
}