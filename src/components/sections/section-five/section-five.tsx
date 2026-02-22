import { ScrollReveal } from "@/components/ui/scroll-reveal";

const MARQUEE_GROUPS = Array.from({ length: 2 }).map(() => crypto.randomUUID());
const MARQUEE_ITEMS = Array.from({ length: 10 }).map(() => crypto.randomUUID());

export function SectionFive() {
    return (
        <section className="border-base-border-2 flex h-70 items-center justify-center border-b overflow-hidden">
            <ScrollReveal variant="scaleUp" className="w-full">
                <div
                    className="group flex gap-(--gap) overflow-hidden flex-row p-0"
                    style={
                        {
                            animationDuration: "300s",
                            "--gap": "200px",
                        } as React.CSSProperties
                    }
                >
                    {MARQUEE_GROUPS.map((groupId) => (
                        <div
                            key={groupId}
                            className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row"
                            style={{ animationDuration: "120s" }}
                        >
                            {MARQUEE_ITEMS.map((itemId) => (
                                <div
                                    key={`${groupId}-${itemId}`}
                                    className="flex shrink-0 gap-(--gap)"
                                >
                                    <div className="relative h-fit w-full max-w-95 max-lg:space-y-4 lg:max-w-173.75">
                                        <p className="text-text-tertiary top-4 right-4 text-sm lg:absolute lg:max-w-35.75 lg:text-right">
                                            {"// EVM COMPATIBLE(BASE)"}
                                        </p>
                                        <p className="text-pumpkin-100 text-4xl font-semibold uppercase lg:text-[72px]">
                                            Fair. transparent. fun
                                        </p>
                                    </div>
                                    <div className="relative h-fit w-full max-w-95 max-lg:space-y-4 lg:max-w-173.75">
                                        <p className="text-text-tertiary bottom-4 right-4 text-sm lg:absolute lg:max-w-30.75 lg:text-right">
                                            {"// CHAINLINK VRF"}
                                        </p>
                                        <p className="text-pumpkin-100 text-4xl font-semibold uppercase lg:text-[72px]">
                                            Trusted Randomness
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
