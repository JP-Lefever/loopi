
import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";



export default function Footer(){


    const items = ["☺︎" ,"Loopi Web", "☺︎", "Création site web"]
    const repeated = Array(10).fill(items).flat()

    return (
        <>
            <article className={styles.marque}>
                <div className={styles.track}>
                    {repeated.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                    {repeated.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}

                </div>
            </article>
            <footer className={styles.footer}>
                <section className={styles.container}>
                    <article className={styles.top}>
                        <Link href="/" className={styles.brand}>
                            <Image
                                src="/images/loopi.webp"
                                width={128}
                                height={128}
                                alt="Logo Loopi Web"
                                className={styles.logo}
                            />
                        </Link>

                        <article>
                            <ul className={styles.navList}>
                                <li><Link href="/cookies" className={styles.navLink}>Politique de confidentialité</Link></li>
                                <li><a href="#" className={styles.navLink}>Mentions légales</a></li>
                                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                            </ul>
                        </article>
                    </article>

                    <hr className={styles.separator} />

                    <p className={styles.copy}>
                        © 2025 <Link href="/" className={styles.copyLink}>Loopi Web</Link>. Tous droits réservés.
                    </p>
                </section>
            </footer>
        </>
    )
}