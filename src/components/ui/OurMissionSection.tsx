import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

export const OurMissionSection = () => {
    const patternId = useId();
    const containerRef = useRef<HTMLDivElement>(null);

    // Provide a single source of truth for scrolling progress against the container.
    // Instead of relying on a React useState `isMobile` that causes layout hydration mismatch
    // (Framer Motion often stubbornly caches the `style={{ x }}` MotionValue passed at first render),
    // we use a single mapping string that queries the real DOM width every frame.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Using "start start" makes progress 0 instantly when the tab hits the navbar.
        // If we want mobile to "start 60px", we just use "start start" but delay the mobile
        // multiplier by 60px worth of scroll percent internally.
        offset: ["start start", "end end"],
    });

    const useWindowSize = () => {
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const checkSize = () => {
                setIsMobile(window.innerWidth < 1024);
            };

            checkSize(); // Intial check
            window.addEventListener("resize", checkSize);
            return () => window.removeEventListener("resize", checkSize);
        }, []);

        return isMobile;
    };

    const isMobile = useWindowSize();

    // Define a custom mapping function that handles both desktop and mobile routing reactively
    const useResponsiveTransform = (
        desktopStartPx: number,
        mobileStartVw: number,
    ) => {
        return useTransform(scrollYProgress, (p) => {
            if (isMobile) {
                // Mobile uses VW and a 0 to 0.8 progress band
                let progress = p / 0.8;
                if (progress < 0) progress = 0;
                if (progress > 1) progress = 1;
                return `${mobileStartVw * (1 - progress)}vw`;
            } else {
                // Desktop uses PX and a 0.1 to 0.8 progress band
                let progress = (p - 0.1) / 0.7;
                if (progress < 0) progress = 0;
                if (progress > 1) progress = 1;
                return `${desktopStartPx * (1 - progress)}px`;
            }
        });
    };

    // Row 1 (Odd: Moves entirely from Left)
    const empowerX = useResponsiveTransform(0, -100);
    const communitiesX = useResponsiveTransform(-630, -100);

    // Row 2 (Even: Moves entirely from Right)
    const aX = useResponsiveTransform(930, 100);
    const fairX = useResponsiveTransform(465, 100);
    const chanceX = useResponsiveTransform(0, 100);

    // Row 3 (Odd: Moves entirely from Left)
    const toX = useResponsiveTransform(0, -100);
    const winX = useResponsiveTransform(-275, -100);
    const ownX = useResponsiveTransform(-560, -100);
    const andX = useResponsiveTransform(-850, -60);

    // Row 4 (Even: Moves entirely from Right)
    const growX = useResponsiveTransform(890, 100);
    const togetherX = useResponsiveTransform(0, 100);

    return (
        <div
            ref={containerRef}
            className="bg-background relative z-10 h-[200vh]"
        >
            <div
                style={{
                    clipPath: "polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)",
                }}
                className="bg-background absolute bottom-full left-25 h-12 w-137.5 rotate-180"
            ></div>
            <div className="h-20 w-full"></div>
            <div className="sticky top-14.5 flex h-[calc(100vh-60px)] flex-col">
                <div className="border-base-placeholder grid h-20 w-full border-t lg:grid-cols-8">
                    <div className="max-lg:hidden"></div>
                    <div className="border-base-placeholder col-span-6 flex items-center justify-between gap-4 px-6 lg:border-x">
                        <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap">
                            Our Mission
                        </div>
                        <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap max-lg:hidden">
                            Our Mission
                        </div>
                    </div>
                </div>
                <div className="border-base-placeholder bg-base-dark-secondary relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-t px-6 md:px-12">
                    <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full fill-base-placeholder/20 stroke-base-placeholder/20 mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
                    >
                        <defs>
                            <pattern
                                id={patternId}
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                                x="-1"
                                y="-1"
                            >
                                <path
                                    d="M.5 40V.5H40"
                                    fill="none"
                                    strokeDasharray="0"
                                ></path>
                            </pattern>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            strokeWidth="0"
                            fill={`url(#${patternId})`}
                        ></rect>
                    </svg>
                    <div className="w-full max-w-360">
                        {/* Row 1 */}
                        <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-pumpkin-100 uppercase lg:text-[72px]">
                            <motion.div style={{ x: empowerX }}>
                                <div className="overflow-hidden">
                                    <span>E</span>
                                    <span>M</span>
                                    <span>P</span>
                                    <span>O</span>
                                    <span>W</span>
                                    <span>E</span>
                                    <span>R</span>
                                </div>
                            </motion.div>
                            <motion.div style={{ x: communitiesX }}>
                                <div className="overflow-hidden">
                                    <span>C</span>
                                    <span>O</span>
                                    <span>M</span>
                                    <span>M</span>
                                    <span>U</span>
                                    <span>N</span>
                                    <span>I</span>
                                    <span>T</span>
                                    <span>I</span>
                                    <span>E</span>
                                    <span>S</span>
                                </div>
                            </motion.div>
                        </div>
                        {/* Row 2 */}
                        <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-pumpkin-100 uppercase lg:text-[72px]">
                            <motion.div style={{ x: aX }}>
                                <div className="overflow-hidden">
                                    <span>A</span>
                                </div>
                            </motion.div>
                            <motion.div style={{ x: fairX }}>
                                <div className="overflow-hidden">
                                    <span>F</span>
                                    <span>A</span>
                                    <span>I</span>
                                    <span>R</span>
                                </div>
                            </motion.div>
                            <motion.div style={{ x: chanceX }}>
                                <div className="overflow-hidden">
                                    <span>C</span>
                                    <span>H</span>
                                    <span>A</span>
                                    <span>N</span>
                                    <span>C</span>
                                    <span>E</span>
                                </div>
                            </motion.div>
                        </div>
                        {/* Row 3 */}
                        <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-pumpkin-100 uppercase lg:text-[72px]">
                            <motion.div style={{ x: toX }}>
                                <div className="overflow-hidden">
                                    <span>T</span>
                                    <span>O</span>
                                </div>
                            </motion.div>
                            <motion.div style={{ x: winX }}>
                                <div className="overflow-hidden">
                                    <span>W</span>
                                    <span>I</span>
                                    <span>N</span>
                                    <span>,</span>
                                </div>
                            </motion.div>
                            <motion.div style={{ x: ownX }}>
                                <div className="overflow-hidden">
                                    <span>O</span>
                                    <span>W</span>
                                    <span>N</span>
                                    <span>,</span>
                                </div>
                            </motion.div>
                            <motion.div style={{ x: andX }}>
                                <div className="overflow-hidden">
                                    <span>A</span>
                                    <span>N</span>
                                    <span>D</span>
                                </div>
                            </motion.div>
                        </div>
                        {/* Row 4 */}
                        <div className="relative z-10 flex w-full justify-between text-[32px] font-semibold text-pumpkin-100 uppercase lg:text-[72px]">
                            <motion.div style={{ x: growX }}>
                                <div className="overflow-hidden">
                                    <span>G</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>W</span>
                                </div>
                            </motion.div>
                            <motion.div style={{ x: togetherX }}>
                                <div className="overflow-hidden">
                                    <span>T</span>
                                    <span>O</span>
                                    <span>G</span>
                                    <span>E</span>
                                    <span>T</span>
                                    <span>H</span>
                                    <span>E</span>
                                    <span>R</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
