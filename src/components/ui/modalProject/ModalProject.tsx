"use client"
import styles from "./modalProject.module.css"
import {ProjectProps} from "@/types/definitions";
import {useEffect, useState} from "react";
import Image from "next/image";
import { X } from 'lucide-react';



export default function ModalProject({dataProject , id, closeAction }: {dataProject: ProjectProps[], id: number, closeAction : () => void}) {

const project = dataProject.filter((d) => d.id === id)


    useEffect(() => {
        document.body.style.overflow = "hidden"
        document.body.style.overflowX = "hidden"

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setClosing(true)
        }
        window.addEventListener("keydown", handleEsc)

        return () => {
            document.body.style.overflowX = "hidden"
            document.body.style.overflowY = "auto"
            window.removeEventListener("keydown", handleEsc)
        }
    }, [])

    const [closing, setClosing] = useState(false)

    const handleClose = () => {
        setClosing(true)
    }
    const handleAnimationEnd = () => {
        if (closing) {
            closeAction()
        }
    }
    return (
        <>
            <section  className={`${styles.section} ${closing ?  styles.close : styles.open}`}
                      onAnimationEnd={handleAnimationEnd}>

                {project.map((p) => (
                    <div className={styles.div} key={p.id} >
                        <article className={styles.article}>
                            <h1>{p.label}</h1>
                            <button className={styles.button} type={"button"} onClick={handleClose}><X size={42}/></button>
                        </article>
                        <article className={styles.info}>
                            <h2 className={styles.p}>{p.description}</h2>
                            <a className={styles.a} target="_blank" rel="noopener noreferrer"   href={p.link}>{"Découvrir le site"}</a>
                            <figure className={styles.figure}>
                                <Image className={styles.image} src={p.image} alt={p.label} fill={true} />
                            </figure>

                        </article>
                    </div>
                ))}
            </section>

    </>
    )
}