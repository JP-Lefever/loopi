"use client"
import styles from "./realisation.module.css"
import dataRealisation from "@/assets/data/projects.json"
import { useRef, useState, useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {createPortal} from "react-dom";
import ModalProject from "@/components/ui/modalProject/ModalProject";

gsap.registerPlugin(ScrollTrigger)

export default function Realisation() {
    const [id, setId] = useState<number>(0)
    const [open, setOpen] = useState(false)

    const sectionRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)

    console.log(id)
    console.log(open)

    const handleOpen = (id: number) => {
        setOpen(true)
        setId(id)
    }

    useEffect(() => {
        if (!sectionRef.current || !contentRef.current) return

        const ctx = gsap.context(() => {
            gsap.to(contentRef.current, {
                yPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => "+=2000" ,
                    pin: true,
                    scrub: true,
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className={styles.sectionProject}>

            <article ref={contentRef} className={styles.article}>
                {dataRealisation.map((d, i) => (
                    <ul className={styles.ul} key={d.id}>
                        <li onClick={() => handleOpen(d.id)}>
                            <h2>{d.label}</h2>
                        </li>
                    </ul>
                ))}
            </article>
           <article>
               {open &&
                createPortal(<ModalProject dataProject={dataRealisation} id={id} closeAction={()=>setOpen(false)}/>, document.body)
               }
           </article>
        </section>
    )
}
