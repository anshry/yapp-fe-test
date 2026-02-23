import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export interface NftCardProps {
    imageSrc: string;
    title: string;
    price: number;
    hideRightBorder?: boolean;
    className?: string;
}

type ReelItem = NftCardProps & { instanceId: string };

const AVAILABLE_ASSETS: NftCardProps[] = [
    {
        imageSrc: "/images/assets/on base chain/cbbtc on base.webp",
        title: "CBTC ON BASE",
        price: 10,
    },
    {
        imageSrc: "/images/assets/ASSETS (NFT:TOKEN)/Pudgy penguins.webp",
        title: "PUDGY PENGUINS",
        price: 10,
    },
    {
        imageSrc: "/images/assets/ASSETS (NFT:TOKEN)/DOODLES.webp",
        title: "DOODLES",
        price: 10,
    },
    {
        imageSrc: "/images/assets/ASSETS (NFT:TOKEN)/Moonbirds.webp",
        title: "MOONBIRDS",
        price: 10,
    },
    {
        imageSrc: "/images/assets/on base chain/WETH on BASE.webp",
        title: "WETH ON BASE",
        price: 10,
    },
];

const NftCardInner = ({
    imageSrc,
    title,
    price,
}: {
    imageSrc: string;
    title: string;
    price: number;
}) => (
    <div className="flex items-center justify-center w-full min-h-55.75 max-h-55.75">
        <div className="flex items-center bg-background-2 w-full relative justify-center shadow-sm h-full">
            <div className="flex flex-col gap-2.5 items-center justify-center w-full relative h-55.75">
                <div className="size-2.5 border-l border-t absolute top-2 left-2 border-pumpkin-800"></div>
                <div className="size-2.5 border-r border-t absolute top-2 right-2 border-pumpkin-800"></div>
                <div className="size-2.5 border-l border-b absolute bottom-2 left-2 border-pumpkin-800"></div>
                <div className="size-2.5 border-r border-b absolute bottom-2 right-2 border-pumpkin-800"></div>

                <img
                    src={imageSrc}
                    alt={title}
                    className="object-cover w-20 h-20 rounded"
                />

                <div>
                    <p className="text-pumpkin-100 font-bold uppercase text-center text-sm">
                        {title}
                    </p>
                    <p className="text-pumpkin-800 text-xs uppercase text-center line-through tracking-widest mt-0.5">
                        $200,000
                    </p>
                </div>

                <div className="flex gap-2 items-center justify-center text-primary mt-0.5">
                    <svg
                        width="17"
                        height="13"
                        viewBox="0 0 17 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19562 0.78125H13.3584C13.5771 0.78125 13.779 0.886045 13.8881 1.05606L16.5576 5.21853C16.696 5.4344 16.6549 5.70685 16.4575 5.88189L9.10955 12.3956C8.87152 12.6066 8.48862 12.6066 8.25059 12.3956L0.912661 5.89069C0.71061 5.71158 0.672775 5.43117 0.821353 5.21397L3.67484 1.04271C3.78597 0.880253 3.98318 0.78125 4.19562 0.78125ZM12.1754 2.63965V3.80757H9.56525V4.61733C11.3984 4.70386 12.7738 5.05928 12.784 5.48528L12.7839 6.37334C12.7737 6.79934 11.3984 7.15474 9.56525 7.24128V9.22851H7.83209V7.24128C5.99892 7.15474 4.62355 6.79934 4.61335 6.37334L4.61342 5.48528C4.62361 5.05928 5.99892 4.70386 7.83209 4.61733V3.80757H5.22197V2.63965H12.1754ZM8.69867 6.63117C10.655 6.63117 12.2901 6.33064 12.6903 5.9293C12.3509 5.58897 11.1235 5.32113 9.56525 5.24757V6.09538C9.28594 6.10857 8.99601 6.11552 8.69867 6.11552C8.40131 6.11552 8.11138 6.10857 7.83209 6.09538V5.24757C6.2738 5.32113 5.04637 5.58897 4.70703 5.9293C5.1072 6.33064 6.74234 6.63117 8.69867 6.63117Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <p className="font-semibold uppercase text-center text-sm">
                        {price}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export const NftCard: React.FC<NftCardProps> = ({
    imageSrc,
    title,
    price,
    hideRightBorder,
    className,
}) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const isSpinningRef = useRef(false);
    const [spinIndex, setSpinIndex] = useState(0);
    const [reelItems, setReelItems] = useState<ReelItem[]>([
        { imageSrc, title, price, instanceId: Math.random().toString() },
    ]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!isSpinningRef.current) {
            setReelItems([
                {
                    imageSrc,
                    title,
                    price,
                    instanceId: Math.random().toString(),
                },
            ]);
        }
    }, [imageSrc, title, price]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (isSpinningRef.current) return;

        isSpinningRef.current = true;
        setIsSpinning(true);

        const jump = Math.floor(Math.random() * 30) + 40;

        const newItems = [...reelItems];
        for (let i = 0; i < jump; i++) {
            const asset =
                AVAILABLE_ASSETS[
                    Math.floor(Math.random() * AVAILABLE_ASSETS.length)
                ];
            newItems.push({
                ...asset,
                instanceId: Math.random().toString(),
            });
        }

        setReelItems(newItems);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setSpinIndex(jump);
        }, 50);
    };

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;

        const currentItem = reelItems[spinIndex];

        isSpinningRef.current = false;
        setIsSpinning(false);
        setReelItems([
            { ...currentItem, instanceId: Math.random().toString() },
        ]);
        setSpinIndex(0);
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center gap-3 w-full border-base-placeholder border-b lg:border-b-0",
                !hideRightBorder && "border-r",
                className,
            )}
        >
            {/* biome-ignore lint/a11y/noStaticElementInteractions: Visual hover spin effect */}
            <div
                className="relative overflow-hidden w-full h-55.75"
                onMouseEnter={handleMouseEnter}
            >
                <div
                    className="flex flex-col items-center will-change-transform"
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                        transform: `translateY(-${spinIndex * 223}px)`,
                        transition: isSpinning
                            ? "transform 3000ms cubic-bezier(0.1, 0, 0, 1)"
                            : "none",
                    }}
                >
                    {reelItems.map((item) => (
                        <NftCardInner
                            key={item.instanceId}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
