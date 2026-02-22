import { useId } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TypewriterText } from "@/components/ui/typewriter-text";

export function SellerInfoCard() {
    const patternId1 = useId();
    return (
        <div className="max-lg:border-base-border-2 flex max-lg:flex-col max-lg:border-y lg:h-[80vh] lg:gap-2 w-full lg:w-auto shrink-0">
            <div className="h-full w-0 lg:w-24 shrink-0"></div>

            <div className="bg-background border-base-border-2 flex w-full flex-col overflow-hidden max-lg:border-x-0 border-x lg:w-157 shrink-0">
                <div className="p-6 overflow-hidden">
                    <ScrollReveal variant="slideLeft" delay={0.2}>
                        <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 whitespace-nowrap rounded-sm">
                            For Sellers
                        </div>
                    </ScrollReveal>
                </div>
                <div className="border-base-border-2 flex h-full flex-col gap-4 border-y p-6 max-lg:min-h-75 max-lg:justify-center">
                    <h2 className="text-pumpkin-100 text-[32px] font-bold uppercase lg:text-right">
                        <TypewriterText text="SECURE ESCROW" />
                    </h2>
                    <p className="text-text-tertiary font-medium lg:text-right">
                        <TypewriterText text="Smart contracts ensure your assets are safely held until the raffle is complete, protecting both buyers and sellers." />
                    </p>
                </div>
                <div className="border-base-border-2 flex h-full flex-col gap-4 p-6 max-lg:min-h-75 max-lg:justify-center max-lg:border-b">
                    <h2 className="text-pumpkin-100 text-[32px] font-bold uppercase">
                        <TypewriterText text="Instant Liquidity" />
                    </h2>
                    <p className="text-text-tertiary font-medium">
                        <TypewriterText text="Sell out your raffles in hours, not months. More buyers = faster sales, and quicker cash flow." />
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
                            id={patternId1}
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
                        fill={`url(#${patternId1})`}
                    ></rect>
                </svg>
                <img
                    alt="More liquid than opensea"
                    loading="lazy"
                    width="900"
                    height="900"
                    decoding="async"
                    className="absolute bottom-0 left-0 z-10 h-full w-auto object-cover"
                    src="/images/assets/img-info-card-1.svg"
                />
                <h1 className="text-primary relative z-10 text-4xl font-bold uppercase max-lg:m-auto max-lg:text-center lg:ml-auto lg:max-w-122 lg:text-right lg:text-[56px] leading-[1.1]">
                    <TypewriterText text="More liquid than opensea" />
                </h1>
            </div>
        </div>
    );
}
