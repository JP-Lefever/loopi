"use client"
import styles from "./process.module.css"
import dataServices from "@/assets/data/services.json"
import CardProcess from "@/components/process/cardProcess/CardProcess";
import ScrollTriggerWrapper from "@/components/ui/scrollTriggerWrapper/ScrollTriggerWrapper";
import {useRef} from "react";


export default function Process() {

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <>

                <ScrollTriggerWrapper containerRef={containerRef}>
                    <section className={styles.section}>
                        <article className={styles.h2}>
                            <h2>Process</h2>
                        </article>

                        <article ref={containerRef} className={styles.sectionCard}>
                            {dataServices.map((service)=>

                                <article className={styles.articleCard} key={service.id}>
                                    <CardProcess service = {service}/>
                                </article>

                            )}

                        </article>

                    </section>
                </ScrollTriggerWrapper>

        </>
    )
}