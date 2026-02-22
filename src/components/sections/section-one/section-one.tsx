
import { NftCard } from "@/components/ui/nft-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { HeroSection } from "./components/hero-section";
import { MarqueeStrip } from "./components/marquee-strip";

const SLOT_CARDS = [
    {
        id: crypto.randomUUID(),
        imageSrc: "/images/assets/on base chain/cbbtc on base.webp",
        title: "CBTC ON BASE",
        price: 10,
        className: "max-lg:border-b-0",
    },
    {
        id: crypto.randomUUID(),
        imageSrc: "/images/assets/ASSETS (NFT:TOKEN)/Pudgy penguins.webp",
        title: "PUDGY PENGUINS",
        price: 10,
        className: "max-lg:border-b-0 max-lg:border-r-0",
    },
    {
        id: crypto.randomUUID(),
        imageSrc: "/images/assets/ASSETS (NFT:TOKEN)/DOODLES.webp",
        title: "DOODLES",
        price: 10,
        className: "max-lg:hidden",
        wrapperClass: "max-lg:hidden",
    },
    {
        id: crypto.randomUUID(),
        imageSrc: "/images/assets/ASSETS (NFT:TOKEN)/Moonbirds.webp",
        title: "MOONBIRDS",
        price: 10,
        className: "max-lg:hidden",
        wrapperClass: "max-lg:hidden",
    },
    {
        id: crypto.randomUUID(),
        imageSrc: "/images/assets/on base chain/WETH on BASE.webp",
        title: "WETH ON BASE",
        price: 10,
        hideRightBorder: true,
        className: "max-lg:hidden",
        wrapperClass: "max-lg:hidden",
    },
];

export function SectionOne() {
    return (
        <section className="bg-background sticky top-15 z-0 h-[calc(100vh-3.75rem)] overflow-hidden">
            <div className="bg-base-dark-secondary h-full flex flex-col">
                <MarqueeStrip animationVariant="fadeIn" />
                <div className="flex-1 grid lg:grid-cols-8 mx-auto w-full">
                    <div className="max-lg:hidden w-full h-full border-r border-base-placeholder/0"></div>
                    <div className="border-base-placeholder col-span-6 w-full lg:border-x flex flex-col">
                        <HeroSection />
                        <div className="border-base-placeholder grid min-h-56.25 grid-cols-2 lg:grid-cols-5 border-y">
                            {SLOT_CARDS.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`flex h-full w-full ${card.wrapperClass || ""}`}
                                >
                                    <ScrollReveal
                                        variant="fadeIn"
                                        delay={0.1 + index * 0.15}
                                        className="w-full h-full flex"
                                    >
                                        <NftCard
                                            imageSrc={card.imageSrc}
                                            title={card.title}
                                            price={card.price}
                                            hideRightBorder={
                                                card.hideRightBorder
                                            }
                                            className={card.className}
                                        />
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 grid grid-cols-5">
                            <div className="border-base-placeholder col-span-2 h-full border-r px-6 pt-22.5">
                                <div className="text-text-tertiary text-right text-sm font-medium uppercase min-h-[1em]">
                                    <TypewriterText text="Try your luck today" />
                                </div>
                            </div>
                            <div className="col-span-3 overflow-hidden">
                                <div className="border-base-placeholder w-full border-b px-6 py-7 lg:px-14">
                                    <div className="text-pumpkin-100 ml-auto max-w-125 text-right text-2xl leading-[120%] font-medium uppercase lg:text-5xl min-h-[1.2em]">
                                        <TypewriterText text="Starting as low as $10!" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:hidden w-full h-full border-l border-base-placeholder/0"></div>
                </div>
            </div>
        </section>
    );
}
