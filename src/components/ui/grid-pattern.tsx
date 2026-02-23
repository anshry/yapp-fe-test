import { useId } from "react";
import { cn } from "@/utils/cn";

export interface GridPatternProps {
    className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
    const patternId = useId();

    return (
        <svg
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-base-placeholder/20 stroke-base-placeholder/20 mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]",
                className,
            )}
        >
            <defs>
                <pattern
                    id={patternId}
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                >
                    <path
                        d="M.5 40V.5H40"
                        fill="none"
                        strokeDasharray="0"
                    ></path>
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill={`url(#${patternId})`}
            ></rect>
        </svg>
    );
}
