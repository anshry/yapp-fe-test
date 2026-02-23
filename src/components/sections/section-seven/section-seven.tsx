import { useEffect, useState } from "react";
import ArrowDiagonalIcon from "@/assets/icons/arrow-diagonal.svg?react";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg?react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { RaffleCard, type RaffleData } from "./components/raffle-card";

const TIME_NOW = Date.now();
const createEndTime = (d: number, h: number, m: number, s: number) => {
    return TIME_NOW + (d * 86400 + h * 3600 + m * 60 + s) * 1000;
};

const rafflesData: RaffleData[] = [
    {
        title: "25 USD Coin (USDC)",
        image: "/images/assets/raffles/usdc_25.webp",
        endTime: createEndTime(29, 6, 53, 13),
        price: 0.3,
        progressPercent: 0,
        date: "March 23, 2026",
    },
    {
        title: "Coco",
        image: "/images/assets/raffles/coco.webp",
        endTime: createEndTime(4, 8, 20, 3),
        price: 0.2,
        progressPercent: 20,
        date: "February 26, 2026",
    },
    {
        title: "0.08 ETH",
        image: "/images/assets/raffles/eth_0_08.webp",
        endTime: createEndTime(26, 6, 23, 31),
        price: 0.18,
        progressPercent: 2,
        date: "March 20, 2026",
    },
    {
        title: "0.1 ETH",
        image: "/images/assets/raffles/eth_0_08.webp",
        endTime: createEndTime(26, 6, 22, 38),
        price: 0.22,
        progressPercent: 3,
        date: "March 20, 2026",
    },
    {
        title: "Get Based - Primitives Edition",
        image: "/images/assets/raffles/based_primitives.webp",
        endTime: createEndTime(3, 5, 54, 12),
        price: 1,
        progressPercent: 0,
        date: "February 25, 2026",
    },
    {
        title: "XOXO Minties #527",
        image: "/images/assets/raffles/xoxo_minties.webp",
        endTime: createEndTime(3, 5, 53, 21),
        price: 1,
        progressPercent: 0,
        date: "February 25, 2026",
    },
    {
        title: "R3gular B0ts # 2816",
        image: "/images/assets/raffles/myk_bois.webp",
        endTime: createEndTime(3, 5, 50, 28),
        price: 1,
        progressPercent: 0,
        date: "February 25, 2026",
    },
    {
        title: "516779 DebtReliefBot (DRB)",
        image: "/images/assets/raffles/drb.webp",
        endTime: createEndTime(20, 7, 43, 56),
        price: 0.7,
        progressPercent: 27,
        date: "March 14, 2026",
    },
];

export function SectionSeven() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(380);
    const [isHovered, setIsHovered] = useState(false);
    const [maxVisible, setMaxVisible] = useState(3);

    const maxIndex = Math.max(0, rafflesData.length - maxVisible);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3500); // Auto-slide interval
        return () => clearInterval(interval);
    }, [isHovered, maxIndex]);

    useEffect(() => {
        function updateWidth() {
            const isDesktop = window.innerWidth >= 1024;
            setCardWidth(isDesktop ? 380 : window.innerWidth - 24); // 24 is max-lg gap offset approx
            setMaxVisible(isDesktop ? 3 : 1);
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <TooltipProvider delayDuration={300}>
            <section className="relative z-10 w-full block">
                <div className="border-base-border-2 w-full grid border-y bg-background">
                    {/* Header Subgrid */}
                    <div className="relative grid gap-6 max-lg:px-6 lg:h-145 lg:grid-cols-8">
                        {/* Background scaffold lines */}
                        <div className="absolute inset-0 grid grid-cols-6 lg:grid-cols-8 pointer-events-none">
                            <div className="border-base-border-2 h-full border-r"></div>
                            <div className="border-base-border-2 col-span-2 grid h-full grid-cols-2 border-r lg:col-span-3">
                                <div className="border-base-border-2 h-full lg:border-r"></div>
                            </div>
                            <div className="border-base-border-2 col-span-2 grid h-full grid-cols-2 border-r lg:col-span-3">
                                <div className="border-base-border-2 h-full lg:border-r"></div>
                            </div>
                            <div className="border-base-border-2 h-full lg:border-r"></div>
                        </div>

                        <div className="h-full w-full max-lg:hidden"></div>

                        {/* Header Content */}
                        <div className="relative z-10 lg:col-span-6 flex h-full w-full items-center justify-between py-14.5 max-lg:flex-col max-lg:gap-6">
                            <div className="flex w-full gap-6 max-lg:flex-col lg:gap-34">
                                <ScrollReveal
                                    variant="slideLeft"
                                    delay={0.1}
                                    className="w-full lg:-ml-5 lg:max-w-115.5"
                                >
                                    <div className="border-base-placeholder bg-background-2 w-full space-y-11 border px-8 py-6">
                                        <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 text-nowrap">
                                            For Sellers
                                        </div>
                                        <h1 className="text-pumpkin-100 text-4xl leading-[120%] font-semibold uppercase lg:text-[80px]">
                                            DON'T MISS OUT
                                        </h1>
                                    </div>
                                </ScrollReveal>
                                <p className="text-text-tertiary text-right text-sm uppercase max-lg:hidden lg:max-w-35.75">
                                    <TypewriterText text="// EVM COMPATIBLE (BASE)" />
                                </p>
                            </div>

                            <div className="flex flex-col justify-between max-lg:w-full max-lg:gap-2 lg:h-full lg:items-end">
                                <button
                                    type="button"
                                    className="group text-primary hover:text-pumpkin-100 transition-colors flex cursor-pointer items-center gap-4 text-2xl font-medium text-nowrap uppercase"
                                >
                                    <TypewriterText text="BROWSE RAFLUX" />
                                    <div className="border-base-placeholder bg-background-2 border p-2 group-hover:bg-primary group-hover:text-background transition-colors">
                                        <ArrowDiagonalIcon />
                                    </div>
                                </button>
                                <p className="text-text-tertiary mr-2 text-right text-sm uppercase max-lg:hidden lg:max-w-25.25">
                                    <TypewriterText text="// CHAINLINK VRF" />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sliding Horizontal Grid */}
                    <div className="border-base-border-2 relative grid overflow-x-hidden border-t max-lg:w-full max-lg:py-6 lg:h-145 lg:grid-cols-8">
                        {/* Background scaffold lines */}
                        <div className="absolute inset-0 grid grid-cols-6 lg:grid-cols-8 pointer-events-none">
                            <div className="border-base-border-2 h-full border-r"></div>
                            <div className="border-base-border-2 col-span-2 grid h-full grid-cols-2 border-r lg:col-span-3">
                                <div className="border-base-border-2 h-full lg:border-r"></div>
                            </div>
                            <div className="border-base-border-2 col-span-2 grid h-full grid-cols-2 border-r lg:col-span-3">
                                <div className="border-base-border-2 h-full lg:border-r"></div>
                            </div>
                            <div className="border-base-border-2 h-full lg:border-r"></div>
                        </div>

                        <div className="max-lg:hidden"></div>

                        {/* biome-ignore lint/a11y/noStaticElementInteractions: UI carousel wrapper handles mouse events */}
                        <div
                            className="relative z-10 lg:col-span-7 flex w-full gap-6 max-lg:flex-col max-lg:justify-center lg:items-center"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="z-10 flex items-center -space-x-px max-lg:px-6 lg:-translate-x-[calc(50%+0.5px)]">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="bg-base-dark-secondary hover:border-primary group border-base-border-2 flex h-37.5 w-15 cursor-pointer items-center justify-center border-x border-y transition-all duration-300 hover:z-10"
                                >
                                    <ArrowLeftIcon className="group-hover:text-primary transition-all duration-300" />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="bg-base-dark-secondary hover:border-primary group border-base-border-2 flex h-37.5 w-15 cursor-pointer items-center justify-center border-x border-y transition-all duration-300"
                                >
                                    <ArrowLeftIcon className="group-hover:text-primary rotate-180 transition-all duration-300" />
                                </button>
                            </div>

                            <div className="border-base-border-2 relative w-full overflow-hidden border-l">
                                <ScrollReveal
                                    variant="scaleUp"
                                    delay={0.2}
                                    className="w-full"
                                >
                                    <div
                                        className="flex h-145 max-lg:gap-6 max-lg:px-6 transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(-${currentIndex * cardWidth}px)`,
                                        }}
                                    >
                                        {rafflesData.map((raffle) => (
                                            <div
                                                key={raffle.title}
                                                className="shrink-0"
                                            >
                                                <RaffleCard data={raffle} />
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Scaffolding */}
                <div className="relative z-10 grid h-50 grid-cols-8 max-lg:hidden w-full bg-background border-base-border-2 border-b">
                    <div className="border-base-border-2 col-span-3 border-r h-full"></div>
                    <div className="border-base-border-2 relative col-span-4 flex items-center justify-center border-r h-full">
                        <div
                            className="bg-background absolute top-full h-12 w-137.5"
                            style={{
                                clipPath:
                                    "polygon(0px 0%, 100% 0px, 90% 100%, 10% 100%)",
                            }}
                        ></div>
                    </div>
                </div>
            </section>
        </TooltipProvider>
    );
}
