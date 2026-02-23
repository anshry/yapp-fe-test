import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useIsMobile } from "@/hooks/useIsDesktop";
import { useResponsiveTransform } from "@/hooks/useResponsiveTransform";

export function SectionTwo() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Provide a single source of truth for scrolling progress against the container.
    // Instead of relying on a React useState `isMobile` that causes layout hydration mismatch
    // (Framer Motion often stubbornly caches the `style={{ x }}` MotionValue passed at first render),
    // we use a single mapping string that queries the real DOM width every frame.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const isMobile = useIsMobile();

    // Row 1 (Odd: Moves entirely from Left)
    const empowerX = useResponsiveTransform(scrollYProgress, isMobile, 0, -100);
    const communitiesX = useResponsiveTransform(
        scrollYProgress,
        isMobile,
        -630,
        -100,
    );

    // Row 2 (Even: Moves entirely from Right)
    const aX = useResponsiveTransform(scrollYProgress, isMobile, 930, 100);
    const fairX = useResponsiveTransform(scrollYProgress, isMobile, 465, 100);
    const chanceX = useResponsiveTransform(scrollYProgress, isMobile, 0, 100);

    // Row 3 (Odd: Moves entirely from Left)
    const toX = useResponsiveTransform(scrollYProgress, isMobile, 0, -100);
    const winX = useResponsiveTransform(scrollYProgress, isMobile, -275, -100);
    const ownX = useResponsiveTransform(scrollYProgress, isMobile, -560, -100);
    const andX = useResponsiveTransform(scrollYProgress, isMobile, -850, -60);

    // Row 4 (Even: Moves entirely from Right)
    const growX = useResponsiveTransform(scrollYProgress, isMobile, 890, 100);
    const togetherX = useResponsiveTransform(scrollYProgress, isMobile, 0, 100);

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
                    <div className="border-base-placeholder col-span-6 flex items-center justify-between gap-4 px-6 lg:border-x overflow-hidden">
                        <ScrollReveal variant="slideLeft" delay={0.1}>
                            <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap">
                                Our Mission
                            </div>
                        </ScrollReveal>
                        <ScrollReveal
                            variant="slideRight"
                            delay={0.2}
                            className="max-lg:hidden"
                        >
                            <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap">
                                Our Mission
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
                <div className="border-base-placeholder bg-base-dark-secondary relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-t px-6 md:px-12">
                    <GridPattern />

                    <img
                        alt="Hero Decoration 1"
                        loading="lazy"
                        className="object-contain absolute top-0 right-0 h-auto w-50"
                        src="/images/assets/img-decoration-1.svg"
                    />
                    <img
                        alt="Hero Decoration 2"
                        loading="lazy"
                        className="object-contain absolute bottom-0 left-0 h-auto w-62.5"
                        src="/images/assets/img-decoration-2.svg"
                    />

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
}
