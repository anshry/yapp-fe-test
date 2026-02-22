import { type HTMLMotionProps, motion } from "framer-motion";

export type AnimationVariant =
    | "fadeUp"
    | "slideLeft"
    | "slideRight"
    | "scaleUp"
    | "fadeIn";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "variants"> {
    children: React.ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    duration?: number;
    amount?: "some" | "all" | number;
    once?: boolean;
    className?: string;
}

const variantsMap = {
    fadeUp: {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        // Starts on the left (negative x), moves to 0
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        // Starts on the right (positive x), moves to 0
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function ScrollReveal({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.5,
    amount = "some", // trigger when any pixel is visible
    once = true,
    className,
    ...props
}: ScrollRevealProps) {
    return (
        <motion.div
            variants={variantsMap[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
