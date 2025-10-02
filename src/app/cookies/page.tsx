import styles from "./page.module.css"
import data from "@/assets/data/cookies.json"
import ReactMarkdown from "react-markdown";
import {Metadata} from "next";

export const metadata : Metadata = {
    title: "Politique de cookies | Loopi Web",
    description: "Politiques de cookies du site Loopi Web",
    icons : "/images/loopi.webp",
}

type cookiesProps = {
    title: string,
    content: string,
    link?: string,
}

type cookieJson = Record<string, cookiesProps>

export default function cookiePage(){


    const dataCookie : cookieJson = data

    return (
        <>
            <section className={styles.section}>
                <div className={styles.div} role={"group"}>
                    <article className={styles.article}>
                        <h1 className={styles.h1}>{"Politique de confidentialité"}</h1>
                    </article>
                    {Object.entries(dataCookie).map(([key, value]) =>(
                        <article key={key} className={styles.article}>
                            <h2 className={styles.h2}>{value.title}</h2>
                            <div className={styles.text}>
                            <ReactMarkdown >
                                {value.content}
                            </ReactMarkdown>
                            </div>
                            {value?.link &&
                                <a className={styles.link} target={"_blank"} rel={"noreferrer"} href={"https://vercel.com/legal/privacy-policy"}>{value.link}</a>
                            }
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}