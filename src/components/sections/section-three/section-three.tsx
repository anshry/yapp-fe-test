import { RandomLetterText } from "@/components/ui/random-letter-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { AssetMarquee } from "./components/asset-marquee";

const TOP_MARQUEE_ITEMS = [
    {
        name: "Pudgy penguins",
        src: "/images/assets/ASSETS (NFT:TOKEN)/Pudgy penguins.webp",
    },
    {
        name: "Moonbirds",
        src: "/images/assets/ASSETS (NFT:TOKEN)/Moonbirds.webp",
    },
    { name: "DOODLES", src: "/images/assets/ASSETS (NFT:TOKEN)/DOODLES.webp" },
    { name: "MILADY", src: "/images/assets/ASSETS (NFT:TOKEN)/MILADY.webp" },
    { name: "AZUKI", src: "/images/assets/ASSETS (NFT:TOKEN)/AZUKI.webp" },
];

const BOTTOM_MARQUEE_ITEMS = [
    {
        name: "USDC ON BASE",
        src: "/images/assets/on base chain/USDC ON BASE.webp",
    },
    {
        name: "cbbtc on base",
        src: "/images/assets/on base chain/cbbtc on base.webp",
    },
    {
        name: "WETH on BASE",
        src: "/images/assets/on base chain/WETH on BASE.webp",
    },
    {
        name: "WBTC on BASE",
        src: "/images/assets/on base chain/WBTC on BASE.webp",
    },
    {
        name: "BSX oN BASE",
        src: "/images/assets/on base chain/BSX oN BASE.webp",
    },
];


export const SectionThree = () => {
    return (
        <section className="bg-background relative border-t border-base-placeholder">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-6">
                <div className="border-base-border-2 h-full border-r"></div>
                <div className="border-base-border-2 col-span-2 h-full border-r"></div>
                <div className="border-base-border-2  col-span-2 h-full border-r"></div>
                <div className="border-base-border-2  h-full border-r"></div>
            </div>

            <div className="relative z-10 flex h-full w-full flex-col py-10 lg:justify-end">
                {/* Top Section */}
                <div className="grid lg:h-109 lg:grid-cols-6">
                    <div className="max-lg:hidden"></div>
                    <div className="relative lg:col-span-4 flex h-full gap-3 p-6 max-lg:flex-col lg:items-center">
                        <p className="text-text-tertiary top-6 right-6 text-sm uppercase max-lg:order-1 lg:absolute lg:mr-2 lg:max-w-50 lg:text-right">
                            <TypewriterText text="LET'S TO BE THE NEXT GENERATION OF NFT RAFFLES" />
                        </p>
                        <ScrollReveal variant="fadeUp" delay={0.2}>
                            <div className="space-y-3 lg:-translate-x-1/2">
                                <div
                                    className="bg-base-placeholder w-fit p-px"
                                    style={{
                                        clipPath:
                                            "polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)",
                                    }}
                                >
                                    <div
                                        className="bg-background flex h-20.75 w-85.25 items-center justify-center"
                                        style={{
                                            clipPath:
                                                "polygon(100% 0px, 100% 70%, 90% 100%, 0px 100%, 0px 30%, 10% 0px)",
                                        }}
                                    >
                                        <h1 className="text-pumpkin-100 text-4xl font-semibold uppercase lg:text-5xl">
                                            <RandomLetterText text="THE FUTURE" />
                                        </h1>
                                    </div>
                                </div>
                                <div className="text-pumpkin-100 text-4xl font-semibold uppercase lg:text-5xl">
                                    <RandomLetterText text="NFT MARKETPLACE" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Middle Support Section with Top Marquee */}
                <div className="relative">
                    <div className="grid items-center lg:grid-cols-6">
                        <div className="flex justify-end">
                            <div className="bg-background border-base-placeholder flex h-56.25 w-56.25 items-center justify-center border border-b-0 p-4">
                                <p className="text-text-tertiary max-w-37 text-right text-sm font-medium">
                                    <TypewriterText text="RAFLUX SUPPORT ALL NFT AND TOKEN" />
                                </p>
                            </div>
                        </div>
                        <AssetMarquee
                            items={TOP_MARQUEE_ITEMS}
                            className="border-t"
                            revealDelay={0.3}
                        />
                    </div>
                </div>

                <div className="relative">
                    <div className="grid items-center lg:grid-cols-6">
                        <AssetMarquee
                            items={BOTTOM_MARQUEE_ITEMS}
                            reverse={true}
                            className="border-t border-r border-b"
                            revealDelay={0.4}
                        />
                        <div className="flex">
                            <div className="bg-background border-base-border-2 flex h-56.25 w-56.25 items-center justify-center border-t border-r border-b p-4">
                                <p className="text-text-tertiary max-w-37 text-sm font-medium">
                                    <TypewriterText text="ON BASE CHAIN" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
