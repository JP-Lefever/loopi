"use client";
import React, { useState } from "react";
import styles from "./introWrapper.module.css"
import dynamic from "next/dynamic";

const IntroScreen = dynamic(() => import("@/components/ui/introScreen/IntroScreen"), {
    ssr: false,
    loading: () => <section className={styles.loader}/>,
});

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
    const [introDone, setIntroDone] = useState(false);

    return (
        <section className={styles.section}>

            {children}

            {!introDone && (
                <article className={styles.article}>
                    <IntroScreen onFinishAction={() => setIntroDone(true)} />
                </article>
            )}
        </section>
    );
}
