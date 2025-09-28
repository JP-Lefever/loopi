"use client"

import styles from "./navBar.module.css"
import Image from "next/image";
import dataNav from "@/assets/data/navBar.json"
import {useEffect, useState} from "react";
import clsx from "clsx";

export default function NavBar() {

    const [activeSection, setActiveSection] = useState<string>("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {  rootMargin: "-40% 0px -40% 0px" }
        );

        dataNav.forEach((item) => {
            const element = document.querySelector(item.link);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);


    return (
        <>
            <nav className={styles.nav}>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={"/images/loopi.png"} width={120} height={120} alt={"logo entreprise, gobelet de café pc à la main, casque a la tete, avec inscrit le nom de l'entreprise web & moka"}/>
                </figure>
                <ul>
                    {dataNav.map((item) => (
                        <li className={clsx(styles.link,{
                            [styles.active] : activeSection === item.link})} key={item.id}>
                            <a href={item.link} onClick={()=> setActiveSection(item.link)} className={clsx(styles.link,{
                                [styles.active] : activeSection === item.link})} >{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}