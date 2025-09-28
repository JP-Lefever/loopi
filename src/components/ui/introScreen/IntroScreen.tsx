"use client";
import styles from "./introScreen.module.css";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen({onFinishAction}: { onFinishAction: () => void }) {

    const [mounted, setMounted] = useState(false);
    const [showPanels, setShowPanels] = useState(false);

    const panelCount = 32;
    const panels = useMemo(() => Array.from({ length: panelCount }), []);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!mounted) return;
        const timer = setTimeout(() => setShowPanels(true), 2500);
        return () => clearTimeout(timer);
    }, [mounted]);


    useEffect(() => {
        if (showPanels) {
            const totalTime = panelCount * 0.02 * 1000;
            const timeout = setTimeout(() => onFinishAction(), totalTime);
            return () => clearTimeout(timeout);
        }
    }, [showPanels, onFinishAction, panelCount]);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {!showPanels ? (
                <motion.div
                    key="intro"
                    className={styles.container}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <p className={styles.p}>Loading...</p>
                </motion.div>
            ) : (
                <motion.div key="panels" className={styles.panelsWrapper}>
                    {panels.map((_, i) => (
                        <motion.div
                            key={i}
                            className={styles.panel}
                            style={{
                                top: `${(i * 100) / panelCount}%`,
                                height: `${100 / panelCount}%`,
                            }}
                            initial={{ rotateX: 0, opacity: 1 }}
                            animate={{ rotateX: -90, opacity: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: i * 0.02,
                                ease: "easeInOut",
                            }}
                        >
                            <div className={styles.panelInner}></div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
