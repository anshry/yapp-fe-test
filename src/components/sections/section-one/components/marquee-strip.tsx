import {
    type AnimationVariant,
    ScrollReveal,
} from "@/components/ui/scroll-reveal";

const ITEMS = [
    "NFTs starting from just $10!",
    "Join the wave",
    "More liquid than opensea",
    "Start selling on raflux",
];

const MARQUEE_BLOCKS = Array.from({ length: 10 }).map(() =>
    crypto.randomUUID(),
);

export const MarqueeStrip = ({
    withBorders = true,
    animationVariant,
}: {
    withBorders?: boolean;
    animationVariant?: AnimationVariant;
}) => {
    const content = (
        <div
            className={`flex h-10.5 w-full items-center justify-center ${withBorders ? "border-base-placeholder -mt-px border-y" : ""}`}
            style={{ opacity: 1 }}
        >
            <div className="group flex gap-(--gap) overflow-hidden flex-row p-0 [--gap:100px] lg:[--gap:200px]">
                {MARQUEE_BLOCKS.map((blockId) => (
                    <div
                        key={blockId}
                        className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row"
                        style={{ animationDuration: "40s" }}
                    >
                        {ITEMS.map((item) => (
                            <div
                                key={`${blockId}-${item}`}
                                className="text-text-secondary text-[10px] uppercase"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

    if (animationVariant) {
        return (
            <ScrollReveal variant={animationVariant} className="w-full">
                {content}
            </ScrollReveal>
        );
    }

    return content;
};
