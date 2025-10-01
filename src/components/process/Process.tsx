"use client"
import styles from "./process.module.css"
import dataServices from "@/assets/data/services.json"
import CardProcess from "@/components/process/cardProcess/CardProcess";
import {ServicesProps} from "@/types/definitions";


export default function Process() {



    return (
        <>


                    <section className={styles.section}>
                        <article  className={styles.sectionCard}>
                            {dataServices.map((service : ServicesProps)=>
                                    <CardProcess key={service.id} service = {service}/>

                            )}

                        </article>

                    </section>


        </>
    )
}