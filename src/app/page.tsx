
import Header from "@/components/layout/header/Header";
import Works from "@/components/works/Works";
import Process from "@/components/process/Process";
import Prices from "@/components/prices/Prices";
import About from "@/components/about/About";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Loopi Web | Création de site web vitrine & sur-mesure",
    description:
        "Loopi Web crée des sites modernes, rapides et personnalisés. Basé dans le Lot, près de Figeac. Accompagnement sur-mesure et référencement optimisé.",
    keywords: ["création site web", "développeur web Lot", "site vitrine", "Figeac", "Loopi Web"],
    icons: {
        icon: "/images/loopi.webp",
    },
    openGraph: {
        title: "Loopi Web | Création de site web sur-mesure",
        description:
            "Création de site web professionnel près de Figeac. Design, développement, référencement et accompagnement.",
        url: "#",
        siteName: "Loopi Web",
        images: [
            {
                url: "/images/loopi.webp",
                width: 1200,
                height: 630,
                alt: "Loopi Web - Création de site internet",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
}




export default function HomePage() {

    return (
        <>

            <header>
                    <Header />
            </header>
            <main>
               <section id={"about"} >
                   <About/>
               </section>
                <section id={"process"}>
                    <Process />
                </section>
                <section id={"realisations"} >
                    <Works/>
                </section>
                <section id={"tarifs"}>
                    <Prices/>
                </section>

            </main>

        </>
    );
}
