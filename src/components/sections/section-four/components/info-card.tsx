import { GridPattern } from "@/components/ui/grid-pattern";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { cn } from "@/utils/cn";

export interface InfoCardFeature {
    title: string;
    description: string;
}

export interface InfoCardProps {
    tagText: string;
    revealDelay?: number;
    spacerPosition?: "start" | "end" | "none";
    features: [InfoCardFeature, InfoCardFeature];
    mainImageSrc: string;
    mainTitle: string;
}

export function InfoCard({
    tagText,
    revealDelay = 0.2,
    spacerPosition = "none",
    features,
    mainImageSrc,
    mainTitle,
}: InfoCardProps) {
    return (
        <div className="max-lg:border-base-border-2 flex max-lg:flex-col max-lg:border-y lg:h-[80vh] lg:gap-2 w-full lg:w-auto shrink-0">
            {spacerPosition === "start" && (
                <div className="h-full w-0 lg:w-24 shrink-0"></div>
            )}

            <div className="bg-background border-base-border-2 flex w-full flex-col overflow-hidden max-lg:border-x-0 border-x lg:w-157 shrink-0">
                <div className="p-6 overflow-hidden">
                    <ScrollReveal variant="slideLeft" delay={revealDelay}>
                        <div className="bg-primary/10 font-semibold text-lg uppercase text-primary flex items-center w-fit justify-center gap-2 px-4.5 py-1.4 whitespace-nowrap rounded-sm">
                            {tagText}
                        </div>
                    </ScrollReveal>
                </div>
                <div className="border-base-border-2 flex h-full flex-col gap-4 border-y p-6 max-lg:min-h-75 max-lg:justify-center">
                    <h2 className="text-pumpkin-100 text-[32px] font-bold uppercase lg:text-right">
                        <TypewriterText text={features[0].title} />
                    </h2>
                    <p className="text-text-tertiary font-medium lg:text-right">
                        <TypewriterText text={features[0].description} />
                    </p>
                </div>
                <div
                    className={cn(
                        "border-base-border-2 flex h-full flex-col gap-4 p-6 max-lg:min-h-75 max-lg:justify-center max-lg:border-b",
                    )}
                >
                    <h2 className="text-pumpkin-100 text-[32px] font-bold uppercase">
                        <TypewriterText text={features[1].title} />
                    </h2>
                    <p className="text-text-tertiary font-medium">
                        <TypewriterText text={features[1].description} />
                    </p>
                </div>
            </div>

            <div className="bg-base-dark-secondary border-base-border-2 relative flex h-full w-full items-start justify-end max-lg:border-x-0 border-x p-8 max-lg:min-h-75 lg:w-217.25 lg:p-16 shrink-0 overflow-hidden">
                <GridPattern />
                <img
                    alt={mainTitle}
                    loading="lazy"
                    width="900"
                    height="900"
                    decoding="async"
                    className="absolute bottom-0 left-0 z-10 h-full w-auto object-cover"
                    src={mainImageSrc}
                />
                <h1 className="text-primary relative z-10 text-4xl font-bold uppercase max-lg:m-auto max-lg:text-center lg:ml-auto lg:max-w-122 lg:text-right lg:text-[56px] leading-[1.1]">
                    <TypewriterText text={mainTitle} />
                </h1>
            </div>

            {spacerPosition === "end" && (
                <div className="h-full w-0 lg:w-24 shrink-0"></div>
            )}
        </div>
    );
}
