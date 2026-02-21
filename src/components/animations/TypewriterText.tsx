import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TypewriterText = ({
    text,
    className = "",
    cursorClassName = "bg-white",
    delay = 0,
}: {
    text: string;
    className?: string;
    cursorClassName?: string;
    delay?: number;
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: "some" });
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        if (!isInView) return;

        let index = -1;
        let timeout: ReturnType<typeof setTimeout>;
        let interval: ReturnType<typeof setInterval>;

        const startTyping = () => {
            interval = setInterval(() => {
                if (index < text.length) {
                    index++;
                    setCurrentIndex(index);
                } else {
                    clearInterval(interval);
                }
            }, 40); // typing speed matches the visual block sequence
        };

        if (delay > 0) {
            timeout = setTimeout(startTyping, delay * 1000);
        } else {
            startTyping();
        }

        return () => {
            if (timeout) clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [text, isInView, delay]);

    const words = text.split(" ");
    let charCounter = 0;

    // Pre-map words to their global character starting indices to track sequence timing.
    // E.g [ { word: "Try", start: 0 }, { word: "your", start: 4 } ]
    const wordObjects = words.map((word) => {
        const start = charCounter;
        charCounter += word.length + 1; // +1 includes the empty space increment
        return { word, start };
    });

    return (
        <span ref={ref} className={className}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">
                {wordObjects.map((wordObj, wordIndex) => {
                    const isLastWord = wordIndex === wordObjects.length - 1;
                    return (
                        <span key={wordIndex}>
                            <span className="inline-block whitespace-nowrap">
                                {wordObj.word
                                    .split("")
                                    .map((char, charIndex) => {
                                        const charGlobalIndex =
                                            wordObj.start + charIndex;
                                        const isVisible =
                                            currentIndex >= charGlobalIndex;
                                        const isFlashing =
                                            currentIndex === charGlobalIndex;

                                        return (
                                            <span
                                                key={charGlobalIndex}
                                                className="relative inline-block"
                                            >
                                                <span
                                                    style={{
                                                        opacity: isVisible
                                                            ? 1
                                                            : 0,
                                                    }}
                                                >
                                                    {char}
                                                </span>
                                                <span
                                                    className={`absolute top-[3px] right-0 bottom-[3px] left-[1px] transition-opacity duration-75 ${cursorClassName}`}
                                                    style={{
                                                        opacity: isFlashing
                                                            ? 1
                                                            : 0,
                                                    }}
                                                />
                                            </span>
                                        );
                                    })}
                            </span>
                            {!isLastWord && <span> </span>}
                        </span>
                    );
                })}
            </span>
        </span>
    );
};
