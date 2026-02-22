import { useId } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TypewriterText } from "@/components/ui/typewriter-text";

export function BuyerInfoCard() {
    const patternId2 = useId();
    return (
        <div className="max-lg:border-base-border-2 flex max-lg:flex-col max-lg:border-y lg:h-[80vh] lg:gap-2 w-full lg:w-auto shrink-0">
            <div className="bg-background border-base-border-2 flex w-full flex-col overflow-hidden max-lg:border-x-0 border-x lg:w-157 shrink-0">
                <div className="p-6 overflow-hidden">
                    <ScrollReveal variant="slideLeft" delay={0.4}>
                        <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 whitespace-nowrap rounded-sm">
                            For Buyers
                        </div>
                    </ScrollReveal>
                </div>
                <div className="border-base-border-2 flex h-full flex-col gap-4 border-y p-6 max-lg:min-h-75 max-lg:justify-center">
                    <h2 className="text-pumpkin-100 text-[32px] font-bold uppercase lg:text-right">
                        <TypewriterText text="LOW ENTRY COST" />
                    </h2>
                    <p className="text-text-tertiary font-medium lg:text-right">
                        <TypewriterText text="Buy tickets starting at $10 instead of paying $50K+ for premium NFTs" />
                    </p>
                </div>
                <div className="border-base-border-2 flex h-full flex-col gap-4 p-6 max-lg:min-h-75 max-lg:justify-center max-lg:border-b pl-6">
                    <h2 className="text-pumpkin-100 text-[32px] font-bold uppercase">
                        <TypewriterText text="FAIR CHANCES" />
                    </h2>
                    <p className="text-text-tertiary font-medium">
                        <TypewriterText text="Chainlink VRF ensures provably fair random selection" />
                    </p>
                </div>
            </div>

            <div className="bg-base-dark-secondary border-base-border-2 relative flex h-full w-full items-start justify-end max-lg:border-x-0 border-x p-8 max-lg:min-h-75 lg:w-217.25 lg:p-16 shrink-0 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full fill-base-placeholder/20 stroke-base-placeholder/20 mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
                >
                    <defs>
                        <pattern
                            id={patternId2}
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
                        fill={`url(#${patternId2})`}
                    ></rect>
                </svg>
                <img
                    alt="Join instantly with USDC/USDT"
                    loading="lazy"
                    width="900"
                    height="900"
                    decoding="async"
                    className="absolute bottom-0 left-0 z-10 h-full w-auto object-cover"
                    src="/images/assets/img-info-card-2.svg"
                />
                <h1 className="text-primary relative z-10 text-4xl font-bold uppercase max-lg:m-auto max-lg:text-center lg:ml-auto lg:max-w-122 lg:text-right lg:text-[56px] leading-[1.1]">
                    <TypewriterText text="Join instantly with USDC/USDT" />
                </h1>
            </div>
            <div className="h-full w-0 lg:w-24 shrink-0"></div>
        </div>
    );
}
