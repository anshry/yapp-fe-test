import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { BuyerInfoCard } from "./components/buyer-info-card";
import { SellerInfoCard } from "./components/seller-info-card";

export function SectionFour() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const isDesktop = useIsDesktop();
    const [scrollRange, setScrollRange] = useState(0);

    useEffect(() => {
        const updateScrollRange = () => {
            if (isDesktop && scrollRef.current) {
                const maxScroll =
                    scrollRef.current.scrollWidth - window.innerWidth;
                // If maxScroll is somehow negative (screen is wider than content), we don't need to scroll
                setScrollRange(maxScroll > 0 ? -maxScroll : 0);
            } else {
                setScrollRange(0);
            }
        };

        updateScrollRange();
        // Needs a small delay on initial load for fonts/layout to settle
        const timeoutId = setTimeout(updateScrollRange, 100);

        window.addEventListener("resize", updateScrollRange);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", updateScrollRange);
        };
    }, [isDesktop]);

    const xDesktop = useTransform(scrollYProgress, [0, 1], [0, scrollRange]);

    return (
        <section
            ref={containerRef}
            className="border-base-border-2 relative border-b lg:h-[300vh]"
        >
            <div className="absolute inset-0 z-0 grid grid-cols-6 pointer-events-none">
                <div className="border-base-border-2 h-full border-r"></div>
                <div className="border-base-border-2 col-span-2 h-full border-r"></div>
                <div className="border-base-border-2 col-span-2 h-full border-r"></div>
                <div className="border-base-border-2 h-full border-r"></div>
            </div>

            <div className="relative z-10 flex w-full items-center gap-2 py-20 lg:sticky lg:top-0 lg:h-screen lg:py-100 overflow-hidden">
                <motion.div
                    ref={scrollRef}
                    className="border-base-border-2 flex max-lg:flex-col max-lg:gap-0 lg:gap-2 lg:border-y w-full lg:w-max lg:px-0"
                    style={{ x: isDesktop ? xDesktop : 0 }}
                >
                    <SellerInfoCard />
                    <BuyerInfoCard />
                </motion.div>
            </div>
        </section>
    );
}
