import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const RandomLetterText = ({
    text,
    className = "",
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const [displayedChars, setDisplayedChars] = useState(() =>
        text
            .split("")
            .map((c) =>
                c === " " || c === ","
                    ? c
                    : CHARS[Math.floor(Math.random() * CHARS.length)],
            ),
    );

    useEffect(() => {
        if (!isInView) return;

        let timeout: ReturnType<typeof setTimeout>;
        let interval: ReturnType<typeof setInterval>;

        const startAnimation = () => {
            let iteration = 0;
            interval = setInterval(() => {
                setDisplayedChars((prev) =>
                    prev.map((_char, index) => {
                        if (text[index] === " " || text[index] === ",")
                            return text[index];
                        if (index < iteration) return text[index];
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    }),
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 2; // Speed of decoding
            }, 30);
        };

        if (delay > 0) {
            timeout = setTimeout(startAnimation, delay * 1000);
        } else {
            startAnimation();
        }

        return () => {
            if (timeout) clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [text, isInView, delay]);

    return (
        <span ref={ref} className={className}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true" className="overflow-hidden">
                {displayedChars.map((char, i) => (
                    <span
                        key={`char-${i}`}
                        className={char === " " ? "w-3 inline-block" : ""}
                    >
                        {char}
                    </span>
                ))}
            </span>
        </span>
    );
};
