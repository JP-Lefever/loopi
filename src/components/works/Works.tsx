
import styles from "./works.module.css"
import data from "@/assets/data/projects.json"
import CardProject from "@/components/works/cardProject/CardProject";
import {ProjectProps} from "@/types/definitions";

export default function Works() {


    return (
        <>

            <article className={styles.sectionProject}>
                {data.map((project : ProjectProps) => (
                    <CardProject key={project.id} dataProject={project}/>
                ))}
            </article>

        </>
    )
}