"use client"
import {ProjectProps} from "@/types/definitions"
import styles from "./cardProject.module.css"
import Image from "next/image";
import {CircleArrowRight} from "lucide-react";


export default function CardProject({dataProject}: {dataProject: ProjectProps}) {

            const {name, image, type,  synopsis, web, year} = dataProject


    return (


                    <a href={web} rel={"noopener noreferrer "} target={"_blank"} className={styles.sectionCard}>
                        <article className={styles.sectionInfo}>
                            <h2 className={styles.h2}>{name}</h2>
                            <p className={styles.syno}>{synopsis}</p>
                            <p className={styles.year}>{year}</p>
                        </article>
                    </a>


    )
}