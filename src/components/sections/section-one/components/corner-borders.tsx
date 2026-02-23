import type { FC } from "react";
import { cn } from "@/utils/cn";

interface CornerBordersProps {
    className?: string;
    size?: string;
    color?: string;
}

export const CornerBorders: FC<CornerBordersProps> = ({
    className = "",
    size = "size-2.5",
    color = "border-pumpkin-800",
}) => {
    return (
        <>
            <div
                className={cn(
                    size,
                    "border-l border-t absolute top-2 left-2",
                    color,
                    className,
                )}
            ></div>
            <div
                className={cn(
                    size,
                    "border-r border-t absolute top-2 right-2",
                    color,
                    className,
                )}
            ></div>
            <div
                className={cn(
                    size,
                    "border-l border-b absolute bottom-2 left-2",
                    color,
                    className,
                )}
            ></div>
            <div
                className={cn(
                    size,
                    "border-r border-b absolute bottom-2 right-2",
                    color,
                    className,
                )}
            ></div>
        </>
    );
};
