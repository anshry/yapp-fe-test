import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";
import ClockIcon from "@/assets/icons/clock.svg?react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

function AnimatedValue({ value }: { value: number }) {
    return (
        <span className="relative inline-grid">
            <AnimatePresence initial={false}>
                <motion.span
                    key={value}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="tabular-nums col-start-1 row-start-1 block"
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

export interface RaffleData {
    title: string;
    image: string;
    endTime: number; // Unix timestamp in ms
    price: number;
    progressPercent: number; // 0 to 100
    date: string;
}

export function RaffleCard({ data }: { data: RaffleData }) {
    const [timeLeft, setTimeLeft] = useState(() =>
        Math.max(0, data.endTime - Date.now()),
    );
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(Math.max(0, data.endTime - Date.now()));
        }, 1000);
        return () => clearInterval(interval);
    }, [data.endTime]);

    useEffect(() => {
        const checkTruncation = () => {
            if (titleRef.current) {
                // If scrollWidth is strictly greater than clientWidth, it's visibly truncated
                setIsTruncated(
                    titleRef.current.scrollWidth > titleRef.current.clientWidth,
                );
            }
        };

        checkTruncation();
        window.addEventListener("resize", checkTruncation);
        return () => window.removeEventListener("resize", checkTruncation);
    }, []);

    const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const m = Math.floor((timeLeft / 1000 / 60) % 60);
    const s = Math.floor((timeLeft / 1000) % 60);
    return (
        <div className="border-base-border-2 flex h-[580px] w-[calc(100vw-48px)] flex-col border border-t-0 border-l-0 lg:w-[380px] lg:min-w-[380px]">
            <div className="bg-background-2 border-base-border-2 flex w-full flex-col items-end gap-2.5 border-b px-7 py-4">
                <div className="text-primary flex w-fit items-center justify-center gap-2 text-sm font-medium">
                    <div className="relative inline-flex items-center overflow-hidden text-center min-w-6">
                        <AnimatedValue value={d} />
                        <span>D</span>
                    </div>
                    <span>:</span>
                    <div className="relative inline-flex items-center overflow-hidden text-center min-w-6">
                        <AnimatedValue value={h} />
                        <span>H</span>
                    </div>
                    <span>:</span>
                    <div className="relative inline-flex items-center overflow-hidden text-center min-w-6">
                        <AnimatedValue value={m} />
                        <span>M</span>
                    </div>
                    <span>:</span>
                    <div className="relative inline-flex items-center overflow-hidden text-center min-w-6">
                        <AnimatedValue value={s} />
                        <span>S</span>
                    </div>
                </div>
                <div className="bg-pumpkin-950 relative h-1.5 w-full rounded-full">
                    <div
                        style={{
                            boxShadow: "rgb(255, 115, 0) 0px 0px 4px 2px",
                            width: `${data.progressPercent}%`,
                            background: "rgb(255, 214, 181)",
                        }}
                        className="absolute inset-0 h-full rounded-full"
                    ></div>
                </div>
            </div>
            <div className="bg-background-2 flex h-full flex-col justify-between px-7 py-5">
                <div className="space-y-4">
                    <img
                        alt={data.title}
                        loading="lazy"
                        width="500"
                        height="500"
                        decoding="async"
                        className="aspect-square h-75 lg:h-80.25 w-full lg:w-80.25 object-cover"
                        src={data.image}
                    />
                    <div className="space-y-2">
                        {isTruncated ? (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <h2
                                        ref={titleRef}
                                        className="font-geist text-xl font-medium truncate w-full cursor-default text-left"
                                    >
                                        {data.title}
                                    </h2>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{data.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <h2
                                ref={titleRef}
                                className="font-geist text-xl font-medium truncate w-full cursor-default text-left"
                            >
                                {data.title}
                            </h2>
                        )}
                        <div className="font-geist text-text-secondary flex items-center gap-2 text-sm">
                            <ClockIcon />
                            <p>Sale Ended</p>
                            <p className="font-mono text-foreground text-xs font-semibold">
                                {data.date}
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="bg-primary text-primary-foreground hover:bg-primary/60 ring-offset-background focus-visible:ring-ring cursor-pointer py-[10.5px] text-xs font-semibold text-nowrap uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:bg-[#82360B] disabled:text-[#471903] disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 flex h-12 w-full items-center justify-between gap-2 px-4"
                    type="button"
                >
                    Start Raffling Now
                    <div className="text-pumpkin-300 flex items-center gap-1 text-sm">
                        {data.price}
                        <ArrowRightIcon className="mb-0.5" />
                    </div>
                </button>
            </div>
        </div>
    );
}
