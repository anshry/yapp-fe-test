import { HeroTexture } from "@/components/ui/hero-texture";
import { MarqueeStrip } from "@/components/ui/marquee-strip";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TypewriterText } from "@/components/ui/typewriter-text";

export function SectionEight() {
    return (
        <section className="bg-base-dark-secondary relative block w-full">
            <div className="border-b-base-placeholder grid border-b lg:h-[calc(100vh-42px)] lg:grid-cols-8 2xl:h-[75vh]">
                <div className="border-base-placeholder border-r"></div>

                <div className="border-base-placeholder col-span-6 flex flex-col justify-end border-r">
                    <div className="relative flex flex-col justify-end px-6 py-10.5 max-lg:gap-6 lg:pl-15 2xl:w-fit">
                        <h1 className="text-pumpkin-100 text-4xl font-semibold uppercase lg:text-[64px] min-h-[1.5em]">
                            <TypewriterText text="DECENTRALIZED RAFFLES FOR DIGITAL ASSET" />
                        </h1>
                        <ScrollReveal
                            variant="slideRight"
                            delay={0.2}
                            className="-top-12 -bottom-15 flex h-12 items-center lg:absolute lg:right-0 lg:justify-center z-20"
                        >
                            <div className="relative max-lg:hidden">
                                <div className="border-primary absolute -bottom-12 -left-6 flex size-13 items-center justify-center rounded-full border border-dashed">
                                    <div className="border-primary flex size-9 items-center justify-center rounded-full border">
                                        <div className="bg-primary size-4 rounded-full"></div>
                                    </div>
                                </div>
                                <svg
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 224 50"
                                    className="h-12 translate-y-1/2 lg:w-[160px] 2xl:w-[224px]"
                                >
                                    <title>Decorative Line SVG</title>
                                    <path
                                        d="M1 49.5L42 1H224"
                                        stroke="#FF7300"
                                        vectorEffect="non-scaling-stroke"
                                    ></path>
                                </svg>
                            </div>
                            <button
                                className="bg-primary text-primary-foreground hover:bg-primary/60 ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 px-2 py-[10.5px] font-semibold text-nowrap uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:bg-[#82360B] disabled:text-[#471903] disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-12 w-[262px] text-sm"
                                type="button"
                            >
                                Get Started
                            </button>
                        </ScrollReveal>
                    </div>

                    <div className="border-base-placeholder grid border-y lg:h-20 lg:grid-cols-3">
                        <div className="flex flex-col items-start justify-center gap-1.5 px-6 max-lg:py-4">
                            <p className="text-primary text-sm uppercase min-h-[1.5em]">
                                <TypewriterText text="RAFLUX @2026 COPYRIGHT" />
                            </p>
                            <p className="text-text-secondary text-[10px] uppercase min-h-[1.5em]">
                                <TypewriterText text="ALL RIGHT RESERVED" />
                            </p>
                        </div>
                        <div className="border-base-placeholder flex items-start px-6 max-lg:border-y max-lg:py-4 lg:items-center lg:justify-center lg:border-x">
                            <p className="max-w-56.25 text-xs font-medium uppercase lg:text-center min-h-[1.5em] lg:min-h-auto">
                                <TypewriterText text="// Stop waiting months on traditional marketplaces" />
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center px-6 max-lg:py-4 lg:items-end">
                            <p className="text-text-tertiary text-sm uppercase min-h-[1.5em]">
                                <TypewriterText text="CONTACT" />
                            </p>
                            <button
                                type="button"
                                className="text-text-secondary hover:text-foreground cursor-pointer text-[10px] uppercase transition-all duration-300 min-h-[1.5em]"
                            >
                                <TypewriterText text="hi@raflux.io" />
                            </button>
                        </div>
                    </div>

                    <div className="relative h-52.5 w-full lg:h-52.5 2xl:h-100 overflow-hidden">
                        <HeroTexture />
                    </div>
                </div>

                <div className="border-base-placeholder border-r max-lg:hidden"></div>
            </div>

            <MarqueeStrip withBorders={false} animationVariant="scaleUp" />
        </section>
    );
}
