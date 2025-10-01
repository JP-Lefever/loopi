import styles from "./page.module.css"
import ContactForm from "@/features/contact/component/form/ContactForm";

import React from "react";


export default function ContactPage(){


    return (
        <>
            <section className={styles.section}>
                <ContactForm/>
            </section>
        </>
    )
}