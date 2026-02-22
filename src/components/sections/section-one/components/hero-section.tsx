import { HeroTexture } from "@/components/sections/section-one/components/hero-texture";
import { RandomLetterText } from "@/components/ui/random-letter-text";

export const HeroSection = () => {
    return (
        <div className="grid lg:h-62.5 lg:grid-cols-3">
            {/* Hero Title span 2 */}
            <div className="border-base-placeholder lg:col-span-2 flex h-full items-center px-6 max-lg:border-b max-lg:py-6 lg:border-r overflow-hidden relative">
                <h1 className="text-pumpkin-100 tracking-wide text-4xl h-fit font-semibold uppercase lg:max-w-132.5 lg:text-[48px] leading-10 lg:leading-13">
                    <RandomLetterText
                        text="OWN NFTS, TOKENS, OR RWA ASSETS"
                        delay={0.1}
                    />
                </h1>
            </div>

            {/* Buy Tickets / Graphic span 1 */}
            <div className="grid lg:h-62.5 min-h-62.5 grid-rows-2">
                <div className="border-base-placeholder relative border-b w-full flex items-center justify-center overflow-hidden">
                    <HeroTexture />
                </div>
                <div className="flex w-full items-center justify-center px-5 py-4">
                    <button
                        className="bg-primary hover:bg-primary/80 text-primary-foreground focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 px-2 py-[10.5px] text-xs font-semibold text-nowrap uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none h-12 w-full"
                        type="button"
                    >
                        BUY TICKETS NOW
                    </button>
                </div>
            </div>
        </div>
    );
};
