"use client"
import {ReactNode, useRef} from "react";
import {motion, useInView} from "framer-motion";

type ScrollAnimationType = {
    children: ReactNode;
    className?: string;
    id?: string;
};

export const ScrollAnimation = ({ children, className }: ScrollAnimationType) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            className={className}
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export const ScrollAnimation1 = ({ children, className }: ScrollAnimationType) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return <motion.div className={className} variants={itemVariants}>{children}</motion.div>;
};
