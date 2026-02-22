import { motion } from "framer-motion";
import { useId } from "react";
import { RandomLetterText } from "@/components/ui/random-letter-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal"; // Added import
import { TypewriterText } from "@/components/ui/typewriter-text";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const CardBg = () => {
    const id = useId();
    return (
        <svg
            viewBox="0 0 379 510"
            className="w-full h-full absolute inset-0 text-base-dark-secondary"
            preserveAspectRatio="none"
        >
            <title>Animated Card Front</title>
            <mask id={`mask-front-${id}`} fill="#201F1F">
                <path
                    d="M16 267L5.2267e-06 289.294L-1.4068e-05 510L379 510L379 16L345.697 -2.91142e-06L16 -3.17345e-05L16 267Z"
                    vectorEffect="non-scaling-stroke"
                />
            </mask>
            <path
                d="M16 267L5.2267e-06 289.294L-1.4068e-05 510L379 510L379 16L345.697 -2.91142e-06L16 -3.17345e-05L16 267Z"
                fill="#201F1F"
                vectorEffect="non-scaling-stroke"
            />
            <path
                d="M16 267L17 267L17 267.322L16.8124 267.583L16 267ZM5.2267e-06 289.294L-0.999995 289.294L-0.999995 288.972L-0.81242 288.711L5.2267e-06 289.294ZM-1.4068e-05 510L-1.41555e-05 511L-1.00001 511L-1.00001 510L-1.4068e-05 510ZM379 510L380 510L380 511L379 511L379 510ZM379 16L379.433 15.0986L380 15.371L380 16L379 16ZM345.697 -2.91142e-06L345.697 -1L345.925 -1L346.13 -0.901371L345.697 -2.91142e-06ZM16 -3.17345e-05L15 -3.18219e-05L15 -1.00003L16 -1.00003L16 -3.17345e-05ZM16 267L16.8124 267.583L0.812431 289.877L5.2267e-06 289.294L-0.81242 288.711L15.1876 266.417L16 267ZM5.2267e-06 289.294L1.00001 289.294L0.999986 510L-1.4068e-05 510L-1.00001 510L-0.999995 289.294L5.2267e-06 289.294ZM-1.4068e-05 510L-1.39806e-05 509L379 509L379 510L379 511L-1.41555e-05 511L-1.4068e-05 510ZM379 510L378 510L378 16L379 16L380 16L380 510L379 510ZM379 16L378.567 16.9014L345.264 0.901365L345.697 -2.91142e-06L346.13 -0.901371L379.433 15.0986L379 16ZM345.697 -2.91142e-06L345.697 0.999997L16 0.999968L16 -3.17345e-05L16 -1.00003L345.697 -1L345.697 -2.91142e-06ZM16 -3.17345e-05L17 -3.1647e-05L17 267L16 267L15 267L15 -3.18219e-05L16 -3.17345e-05Z"
                fill="#484848"
                mask={`url(#mask-front-${id})`}
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
};

const CardBgFlipped = () => {
    const id = useId();
    return (
        <svg
            viewBox="0 0 379 510"
            className="w-full h-full absolute inset-0 scale-x-[-1] text-base-dark-secondary"
            preserveAspectRatio="none"
        >
            <title>Animated Card Back</title>
            <mask id={`mask-back-${id}`} fill="#201F1F">
                <path
                    d="M16 267L5.2267e-06 289.294L-1.4068e-05 510L379 510L379 16L345.697 -2.91142e-06L16 -3.17345e-05L16 267Z"
                    vectorEffect="non-scaling-stroke"
                />
            </mask>
            <path
                d="M16 267L5.2267e-06 289.294L-1.4068e-05 510L379 510L379 16L345.697 -2.91142e-06L16 -3.17345e-05L16 267Z"
                fill="#201F1F"
                vectorEffect="non-scaling-stroke"
            />
            <path
                d="M16 267L17 267L17 267.322L16.8124 267.583L16 267ZM5.2267e-06 289.294L-0.999995 289.294L-0.999995 288.972L-0.81242 288.711L5.2267e-06 289.294ZM-1.4068e-05 510L-1.41555e-05 511L-1.00001 511L-1.00001 510L-1.4068e-05 510ZM379 510L380 510L380 511L379 511L379 510ZM379 16L379.433 15.0986L380 15.371L380 16L379 16ZM345.697 -2.91142e-06L345.697 -1L345.925 -1L346.13 -0.901371L345.697 -2.91142e-06ZM16 -3.17345e-05L15 -3.18219e-05L15 -1.00003L16 -1.00003L16 -3.17345e-05ZM16 267L16.8124 267.583L0.812431 289.877L5.2267e-06 289.294L-0.81242 288.711L15.1876 266.417L16 267ZM5.2267e-06 289.294L1.00001 289.294L0.999986 510L-1.4068e-05 510L-1.00001 510L-0.999995 289.294L5.2267e-06 289.294ZM-1.4068e-05 510L-1.39806e-05 509L379 509L379 510L379 511L-1.41555e-05 511L-1.4068e-05 510ZM379 510L378 510L378 16L379 16L380 16L380 510L379 510ZM379 16L378.567 16.9014L345.264 0.901365L345.697 -2.91142e-06L346.13 -0.901371L379.433 15.0986L379 16ZM345.697 -2.91142e-06L345.697 0.999997L16 0.999968L16 -3.17345e-05L16 -1.00003L345.697 -1L345.697 -2.91142e-06ZM16 -3.17345e-05L17 -3.1647e-05L17 267L16 267L15 267L15 -3.18219e-05L16 -3.17345e-05Z"
                fill="#484848"
                mask={`url(#mask-back-${id})`}
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
};

interface AnimatedCardProps {
    card: {
        image: string;
        label: string;
        title: string;
        description: string;
    };
    style: any;
}

export function AnimatedCard({ card, style }: AnimatedCardProps) {
    const isDesktop = useIsDesktop();
    return (
        <div className="relative w-full lg:w-[379px] h-[510px] perspective-1000 z-10">
            <motion.div className="relative w-full h-full" style={style}>
                {/* Front Face exact DOM from user */}
                <div className="absolute inset-0 w-full h-full">
                    <CardBg />
                    <div className="absolute top-0 left-0 pl-8 pr-3.5 pt-6 w-full">
                        <div className="w-full flex items-center justify-between">
                            <div className="size-2.5 border-l border-t border-pumpkin-800"></div>
                            <div className="size-2.5 border-r border-t border-pumpkin-800"></div>
                        </div>
                        <p className="text-sm uppercase ml-2 text-primary">
                            {isDesktop ? (
                                <TypewriterText text={card.label} />
                            ) : (
                                <RandomLetterText text={card.label} />
                            )}
                        </p>
                    </div>
                    <div className="absolute right-0 w-[297px] h-full flex items-center justify-center">
                        <img
                            alt={`card illustration front ${card.title}`}
                            loading="lazy"
                            width={500}
                            height={500}
                            className="w-full h-fit object-contain text-transparent"
                            src={card.image}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 space-y-6 px-3.5 pb-3.5 w-full">
                        <div className="w-[150px] h-[150px] -rotate-90">
                            <p className="text-sm uppercase text-primary text-right">
                                {isDesktop ? (
                                    <TypewriterText text={card.label} />
                                ) : (
                                    <RandomLetterText text={card.label} />
                                )}
                            </p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <div className="size-2.5 border-l border-b border-pumpkin-800"></div>
                            <div className="size-2.5 border-r border-b border-pumpkin-800"></div>
                        </div>
                    </div>
                </div>

                {/* Back Face exact DOM from user */}
                <div
                    className={`absolute inset-0 w-full h-full ${isDesktop ? "backface-hidden" : ""}`}
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <CardBgFlipped />
                    <div className="flex z-10 relative h-full flex-col justify-between pb-8 pl-7 pt-2 pr-7">
                        <div>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-8 text-primary ml-auto"
                            >
                                <title>Card Icon</title>
                                <path
                                    d="M7.51476 22.5997L9.40038 24.4853L20.7141 13.1716L22.5997 15.0573L24.4853 13.1716L22.5997 11.286L24.4853 9.4004L22.5997 7.51478L20.7141 9.4004L18.8285 7.51478L16.9429 9.4004L18.8285 11.286L7.51476 22.5997ZM13.1716 9.4004L15.0572 7.51478L16.9429 9.4004L15.0572 11.286L13.1716 9.4004ZM13.1716 9.4004L11.286 11.286L9.40038 9.4004L11.286 7.51478L13.1716 9.4004ZM22.5997 18.8285L24.4853 16.9429L22.5997 15.0573L20.7141 16.9429L22.5997 18.8285ZM22.5997 18.8285L20.7141 20.7141L22.5997 22.5997L24.4853 20.7141L22.5997 18.8285Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <h2 className="text-5xl text-primary max-w-[258px] uppercase">
                                {isDesktop ? (
                                    card.title
                                ) : (
                                    <ScrollReveal
                                        variant="fadeUp"
                                        delay={0.2}
                                        className="inline-block"
                                    >
                                        {card.title}
                                    </ScrollReveal>
                                )}
                            </h2>
                        </div>
                        <p className="text-xs max-w-[185px] text-muted-2 ml-auto">
                            {card.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
