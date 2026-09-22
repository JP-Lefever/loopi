
import styles from "./works.module.css"
import data from "@/assets/data/projects.json"
import CardProject from "@/components/works/cardProject/CardProject";
import {ProjectProps} from "@/types/definitions";

export default function Works() {


    return (
        <>
            <article className={styles.sectionProject}>
            <h1 className={styles.h1}>{"Les derniers projets"}</h1>
                {data.map((project : ProjectProps) => (
                    <CardProject key={project.id} dataProject={project}/>
                ))}
            </article>

        </>
    )
}