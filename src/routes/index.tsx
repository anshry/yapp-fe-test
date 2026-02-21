import { createFileRoute } from "@tanstack/react-router";
import { TypewriterText } from "@/components/animations/TypewriterText";
import { NftCard } from "@/components/cards/NftCard";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { OurMissionSection } from "@/components/ui/OurMissionSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen w-screen flex-1 overflow-x-clip pt-15">
                <section className="bg-background relative z-0">
                    <div className="bg-base-dark-secondary min-h-[calc(100vh-60px)] flex flex-col">
                        {/* Infinite Marquee Strip */}
                        <MarqueeStrip />

                        {/* Main 8-Column Grid Layout */}
                        <div className="flex-1 grid lg:grid-cols-8 mx-auto w-full">
                            {/* Left gutter */}
                            <div className="max-lg:hidden w-full h-full border-r border-base-placeholder/0"></div>

                            {/* Center Content span 6 */}
                            <div className="border-base-placeholder col-span-6 w-full lg:border-x flex flex-col">
                                {/* Hero / Buying Section Row */}
                                <HeroSection />

                                {/* Cards Top Row Grid */}
                                <div className="border-base-placeholder grid min-h-56.25 grid-cols-2 lg:grid-cols-5 border-y">
                                    <NftCard
                                        imageSrc="/images/assets/on base chain/cbbtc on base.webp"
                                        title="CBTC ON BASE"
                                        price={10}
                                        className="max-lg:border-b-0"
                                    />
                                    <NftCard
                                        imageSrc="/images/assets/ASSETS (NFT:TOKEN)/Pudgy penguins.webp"
                                        title="PUDGY PENGUINS"
                                        price={10}
                                        className="max-lg:border-b-0 max-lg:border-r-0"
                                    />
                                    <NftCard
                                        imageSrc="/images/assets/ASSETS (NFT:TOKEN)/DOODLES.webp"
                                        title="DOODLES"
                                        price={10}
                                        className="max-lg:hidden"
                                    />
                                    <NftCard
                                        imageSrc="/images/assets/ASSETS (NFT:TOKEN)/Moonbirds.webp"
                                        title="MOONBIRDS"
                                        price={10}
                                        className="max-lg:hidden"
                                    />
                                    <NftCard
                                        imageSrc="/images/assets/on base chain/WETH on BASE.webp"
                                        title="WETH ON BASE"
                                        price={10}
                                        hideRightBorder={true}
                                        className="max-lg:hidden"
                                    />
                                </div>

                                {/* Bottom section Scaffolding */}
                                <div className="flex-1 grid grid-cols-5">
                                    <div className="border-base-placeholder col-span-2 h-full border-r px-6 pt-[90px]">
                                        <div className="text-text-tertiary text-right text-sm font-medium uppercase min-h-[1em]">
                                            <TypewriterText text="Try your luck today" />
                                        </div>
                                    </div>
                                    <div className="col-span-3 overflow-hidden">
                                        <div className="border-base-placeholder w-full border-b px-6 py-7 lg:px-14">
                                            <div className="text-pumpkin-100 ml-auto max-w-[500px] text-right text-2xl leading-[120%] font-medium uppercase lg:text-5xl min-h-[1.2em]">
                                                <TypewriterText text="Starting as low as $10!" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right gutter */}
                            <div className="max-lg:hidden w-full h-full border-l border-base-placeholder/0"></div>
                        </div>
                    </div>
                </section>

                {/* Second Section: Our Mission Scroll Over */}
                <OurMissionSection />
            </main>
        </>
    );
}
