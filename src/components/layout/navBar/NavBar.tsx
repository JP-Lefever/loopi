"use client";

import styles from "./navBar.module.css";
import Image from "next/image";
import dataNav from "@/assets/data/navBar.json";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Equal, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("accueil");
    const [open, setOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const [pendingSection, setPendingSection] = useState<string | null>(null);

    const pathname = usePathname();
    const router = useRouter();

    const handleMenuOpen = () => {
        setOpen(!open);
    };

    // Mesure la hauteur réelle de la nav
    useEffect(() => {
        const nav = document.querySelector("nav");
        if (!nav) return;

        const updateNavHeight = () => {
            const height = nav.offsetHeight;
            setNavHeight(height);
            document.documentElement.style.setProperty(
                "--nav-height",
                `${height}px`
            );
        };

        updateNavHeight();

        window.addEventListener("resize", updateNavHeight);

        return () => window.removeEventListener("resize", updateNavHeight);
    }, []);

    // Observer uniquement sur la Home
    useEffect(() => {
        if (pathname !== "/") return;
        if (navHeight === 0) return;

        const sections = document.querySelectorAll<HTMLElement>(
            "header[id], main section[id]"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: `-${navHeight}px 0px -60% 0px`,
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname, navHeight]);

    // Toujours accueil en haut
    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            if (window.scrollY < 10) {
                setActiveSection("accueil");
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const getSectionId = (href: string) =>
        href.split("#").pop() ?? href;

    const performScroll = (id: string) => {
        if (id === "accueil") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            const section = document.getElementById(id);

            if (!section) return;

            const y =
                section.getBoundingClientRect().top +
                window.scrollY -
                navHeight;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }

        setActiveSection(id);
    };

    // Dès qu'on revient sur la Home, on lance le scroll demandé
    useEffect(() => {
        if (pathname !== "/") return;
        if (!pendingSection) return;

        // Petit délai pour laisser la page finir son rendu
        const timeout = setTimeout(() => {
            performScroll(pendingSection);
            setPendingSection(null);
        }, 50);

        return () => clearTimeout(timeout);
    }, [pathname, pendingSection, navHeight]);

    const scrollToSection = (id: string) => {
        setOpen(false);

        if (pathname !== "/") {
            setPendingSection(id);
            router.push("/");
            return;
        }

        performScroll(id);
    };

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <figure className={styles.figure}>
                    <Image
                        className={styles.image}
                        src="/images/loopi.webp"
                        width={120}
                        height={120}
                        alt="Logo Loopi Web"
                    />
                </figure>
            </Link>

            <Equal
                className={styles.buttonMenu}
                onClick={handleMenuOpen}
                size={48}
                color="white"
            />

            <ul
                className={`${styles.menu} ${
                    open ? styles.open : styles.close
                }`}
            >
                <div className={styles.div}>
                    <figure className={styles.figure}>
                        <Image
                            className={styles.image}
                            src="/images/loopi.webp"
                            width={120}
                            height={120}
                            alt="Logo Loopi Web"
                        />
                    </figure>

                    <X
                        className={styles.closeMenu}
                        onClick={handleMenuOpen}
                        size={48}
                        color="white"
                    />
                </div>

                {dataNav.map((item) => {
                    const sectionId = getSectionId(item.link);
                    const isActive = activeSection === sectionId;

                    return (
                        <li
                            key={item.id}
                            className={clsx(styles.link, {
                                [styles.active]: isActive,
                            })}
                        >
                            <button
                                type="button"
                                onClick={() => scrollToSection(sectionId)}
                                className={clsx(styles.link, {
                                    [styles.active]: isActive,
                                })}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}