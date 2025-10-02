"use client"

import styles from "./navBar.module.css"
import Image from "next/image";
import dataNav from "@/assets/data/navBar.json"
import { useState} from "react";
import clsx from "clsx";
import { Equal, X  } from 'lucide-react';
import Link from "next/link";

export default function NavBar() {

    const [activeSection, setActiveSection] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setOpen(!open);
    }


    return (
        <>
            <nav className={styles.nav} >
                <figure className={styles.figure}>
                    <Image className={styles.image} src={"/images/loopi.png"} width={120} height={120} alt={"logo entreprise, gobelet de café pc à la main, casque a la tete, avec inscrit le nom de l'entreprise web & moka"}/>
                </figure>

                <Equal className={styles.buttonMenu} onClick={handleMenuOpen} size={48} color={"white"}/>

                <ul className={`${styles.menu} ${open ? styles.open : styles.close}`} >
                    <div className={styles.div}>
                        <figure className={styles.figure}>
                            <Image className={styles.image} src={"/images/loopi.png"} width={120} height={120} alt={"logo entreprise, gobelet de café pc à la main, casque a la tete, avec inscrit le nom de l'entreprise web & moka"}/>
                        </figure>
                        <X className={styles.closeMenu} onClick={handleMenuOpen} size={48} color={"white"}/>
                    </div>
                    {dataNav.map((item) => (
                        <li className={clsx(styles.link,{
                            [styles.active] : activeSection === item.link})} key={item.id}>
                            <Link href={item.link}
                               onClick={()=> {
                                   setActiveSection(item.link)
                                   setOpen(!open)
                               }}
                               className={clsx(styles.link,{
                                [styles.active] : activeSection === item.link})} >{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}