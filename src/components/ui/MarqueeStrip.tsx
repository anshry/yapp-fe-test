const ITEMS = [
    "NFTs starting from just $10!",
    "Join the wave",
    "More liquid than opensea",
    "Start selling on raflux",
];

// Replicate the exact DOM structure from the real site (10 repetitions)
const MARQUEE_BLOCKS = Array.from({ length: 10 });

export const MarqueeStrip = () => {
    return (
        <div
            className="border-base-placeholder -mt-[1px] flex h-10.5 w-screen items-center justify-center border-y"
            style={{ opacity: 1 }}
        >
            <div className="group flex [gap:var(--gap)] overflow-hidden [--duration:40s] flex-row p-0 [--gap:100px] lg:[--gap:200px]">
                {MARQUEE_BLOCKS.map((_, blockIndex) => (
                    <div
                        key={blockIndex}
                        className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                    >
                        {ITEMS.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
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
};
