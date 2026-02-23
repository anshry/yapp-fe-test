import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { AnimatedCard } from "./components/animated-card";

const BG_GROUPS = ["group-1", "group-2"];
const BG_ITEMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const cardsData = [
    {
        image: "/images/assets/img-card-1.svg",
        label: "// NFT TICKETS",
        title: "NFT Tickets You Control",
        description:
            "Every ticket is minted as an NFT on-chain. You can buy just one or as many as you want",
    },
    {
        image: "/images/assets/img-card-2.svg",
        label: "// GET HIGHER ODDS",
        title: "More Tickets, Higher Odds",
        description:
            "Each ticket is an entry. The more you hold, the better your chance to win.",
    },
    {
        image: "/images/assets/img-card-3.svg",
        label: "// EVM COMPATIBLE(BASE)",
        title: "Fairness Guaranteed by Chainlink VRF",
        description:
            "Even if you buy many tickets, the winner is always chosen randomly and provably fair using Chainlink VRF",
    },
];

export function SectionSix() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const isDesktop = useIsDesktop();

    // Phase 1 (0.0 to 0.4): Expand horizontally and straighten simultaneously.
    // Init state from user HTML: Left(+100x, +25y, -10deg), Center(-25y), Right(-100x, +25y, +10deg)
    const rawLeftX = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
    const rawLeftY = useTransform(scrollYProgress, [0, 0.4], [25, 0]);
    const rawLeftRotateZ = useTransform(scrollYProgress, [0, 0.4], [-10, 0]);

    const rawCenterY = useTransform(scrollYProgress, [0, 0.4], [-25, 0]);

    const rawRightX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
    const rawRightY = useTransform(scrollYProgress, [0, 0.4], [25, 0]);
    const rawRightRotateZ = useTransform(scrollYProgress, [0, 0.4], [10, 0]);

    // Phase 2 (0.45 to 0.85): Flip around Y axis completely cleanly
    const rawRotateYCard = useTransform(
        scrollYProgress,
        [0.45, 0.85],
        [0, 180],
    );
    const rotateYCard = useTransform(rawRotateYCard, (v) =>
        isDesktop ? v : 180,
    );

    // Map desktop responsiveness dynamically
    const xLeft = useTransform(rawLeftX, (v) => (isDesktop ? v : 0));
    const yLeft = useTransform(rawLeftY, (v) => (isDesktop ? v : 0));
    const yCenter = useTransform(rawCenterY, (v) => (isDesktop ? v : 0));
    const xRight = useTransform(rawRightX, (v) => (isDesktop ? v : 0));
    const yRight = useTransform(rawRightY, (v) => (isDesktop ? v : 0));
    const rotateZLeft = useTransform(rawLeftRotateZ, (v) =>
        isDesktop ? v : 0,
    );
    const rotateZRight = useTransform(rawRightRotateZ, (v) =>
        isDesktop ? v : 0,
    );

    const getCardStyle = (idx: number) => {
        if (idx === 0) {
            return {
                x: xLeft,
                y: yLeft,
                rotateZ: rotateZLeft,
                rotateY: rotateYCard,
                transformStyle: "preserve-3d" as const,
                zIndex: 10,
            };
        } else if (idx === 1) {
            return {
                x: 0,
                y: yCenter,
                rotateZ: 0,
                rotateY: rotateYCard,
                transformStyle: "preserve-3d" as const,
                zIndex: 20,
            };
        } else {
            return {
                x: xRight,
                y: yRight,
                rotateZ: rotateZRight,
                rotateY: rotateYCard,
                transformStyle: "preserve-3d" as const,
                zIndex: 10,
            };
        }
    };

    return (
        <section
            ref={sectionRef}
            className="lg:h-[250vh] w-full bg-base-dark-secondary relative"
        >
            <div className="flex max-lg:flex-col max-lg:relative gap-6 lg:gap-8 max-lg:p-6 w-full lg:sticky top-0 items-center justify-center lg:h-screen overflow-hidden">
                {/* Background Marquee Text */}
                <motion.div
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-0 pointer-events-none overflow-hidden select-none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.03 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.15 }}
                >
                    <div
                        className="flex gap-(--gap) w-full"
                        style={{ "--gap": "2rem" } as React.CSSProperties}
                    >
                        {BG_GROUPS.map((groupId) => (
                            <div
                                key={groupId}
                                className="flex shrink-0 min-w-full justify-around animate-marquee gap-(--gap)"
                                style={
                                    {
                                        "--duration": "40s",
                                    } as React.CSSProperties
                                }
                            >
                                {BG_ITEMS.map((itemId) => (
                                    <div
                                        key={itemId}
                                        className="text-muted text-[80px] uppercase font-medium"
                                    >
                                        Raflux
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="absolute inset-0 z-0">
                    <GridPattern />
                </div>

                {cardsData.map((card, idx) => (
                    <AnimatedCard
                        key={card.title}
                        card={card}
                        style={getCardStyle(idx)}
                    />
                ))}
            </div>
        </section>
    );
}
