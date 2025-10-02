import styles from "./page.module.css"
import ContactForm from "@/features/contact/component/form/ContactForm";

import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact | Loopi Web",
    description:
        "Contactez Loopi Web pour la création de votre site internet. Disponible dans le Lot, proche de Figeac. Parlons de votre projet !",
    openGraph: {
        title: "Contact | Loopi Web",
        description:
            "Besoin d’un site web sur-mesure ? Contactez Loopi Web, basé près de Figeac dans le Lot.",
        url: "#",
        siteName: "Loopi Web",
        images: [
            {
                url: "/images/loopi.webp",
                width: 1200,
                height: 630,
                alt: "Loopi Web - Contact",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function ContactPage(){


    return (
        <>
            <section className={styles.section}>
                <ContactForm/>
            </section>
        </>
    )
}