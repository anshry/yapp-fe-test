import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/utils/cn";

interface AssetMarqueeItem {
    name: string;
    src: string;
}

interface AssetMarqueeProps {
    items: AssetMarqueeItem[];
    reverse?: boolean;
    revealDelay?: number;
    className?: string;
}

const MARQUEE_BLOCKS = Array.from({ length: 4 }).map(() => crypto.randomUUID());

export function AssetMarquee({
    items,
    reverse = false,
    revealDelay = 0.3,
    className,
}: AssetMarqueeProps) {
    return (
        <div
            className={cn(
                "bg-background border-base-placeholder lg:col-span-5 flex h-full items-center overflow-hidden",
                className,
            )}
        >
            <ScrollReveal
                variant="fadeUp"
                delay={revealDelay}
                className="w-full"
            >
                <div className="group flex flex-row p-0 [--gap:1rem] gap-(--gap)">
                    {MARQUEE_BLOCKS.map((blockId) => (
                        <div
                            key={blockId}
                            className="animate-marquee flex flex-row shrink-0 justify-around gap-(--gap)"
                            style={{
                                animationDuration: "10s",
                                animationDirection: reverse
                                    ? "reverse"
                                    : "normal",
                            }}
                        >
                            {items.map((item) => (
                                <div
                                    key={`${blockId}-${item.name}`}
                                    className="border-base-placeholder flex h-45 w-52.5 flex-col items-center justify-center gap-4 border-x"
                                >
                                    <div className="relative flex h-27 w-27 items-center justify-center">
                                        <div className="border-pumpkin-800 size-2.5 absolute top-0 left-0 border-t border-l"></div>
                                        <div className="border-pumpkin-800 size-2.5 absolute top-0 right-0 border-t border-r"></div>
                                        <div className="border-pumpkin-800 size-2.5 absolute bottom-0 left-0 border-b border-l"></div>
                                        <div className="border-pumpkin-800 size-2.5 absolute bottom-0 right-0 border-b border-r"></div>
                                        <img
                                            alt={item.name}
                                            loading="lazy"
                                            className="h-20 w-20 rounded object-cover"
                                            src={item.src}
                                        />
                                    </div>
                                    <p className="text-pumpkin-100 text-sm uppercase">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
    );
}
