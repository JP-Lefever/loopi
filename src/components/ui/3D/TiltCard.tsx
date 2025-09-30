"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { ReactNode } from "react";
import styles from "./tildCard.module.css";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    maxRotate?: number;
}

export default function TiltCard({children, className, maxRotate = 8,}: TiltCardProps) {

    const rotateXRaw = useMotionValue(0);
    const rotateYRaw = useMotionValue(0);


    const rotateX = useSpring(rotateXRaw, { stiffness: 120, damping: 20 });
    const rotateY = useSpring(rotateYRaw, { stiffness: 120, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleY = Math.max(-maxRotate, Math.min(((x - centerX) / centerX) * maxRotate, maxRotate));
        const angleX = Math.max(-maxRotate, Math.min((-(y - centerY) / centerY) * maxRotate, maxRotate));

        rotateXRaw.set(angleX);
        rotateYRaw.set(angleY);
    };

    const handleMouseLeave = () => {
        rotateXRaw.set(0);
        rotateYRaw.set(0);
    };

    return (
        <motion.div
            className={`${styles.card} ${className || ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 800,
            }}
        >
            {children}
        </motion.div>
    );
}
