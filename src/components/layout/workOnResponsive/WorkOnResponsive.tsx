import styles from "./workOnResponsive.module.css"

export default function WorkOnResponsive() {
    return (
        <>
            <article className={styles.mobile}>
                <h1 className={styles.h1}>{"🚧"}</h1>
                <h1 className={styles.h1b}>{"Site en construction"}</h1>
                <p className={styles.p}>{"La version mobile est actuellement en construction."}</p>
                <p className={styles.p}>{"En attendant, retrouvez le site sur ordinateur."}</p>
            </article>
        </>
    );
}