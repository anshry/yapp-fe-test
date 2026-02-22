import { useTransform } from "framer-motion";

export const useResponsiveTransform = (
    scrollYProgress: any,
    isMobile: boolean,
    desktopStartPx: number,
    mobileStartVw: number,
) => {
    return useTransform(scrollYProgress, (p: number) => {
        if (isMobile) {
            // Mobile uses VW and a 0 to 0.8 progress band
            let progress = p / 0.8;
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;
            return `${mobileStartVw * (1 - progress)}vw`;
        } else {
            // Desktop uses PX and a 0.1 to 0.8 progress band
            let progress = (p - 0.1) / 0.7;
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;
            return `${desktopStartPx * (1 - progress)}px`;
        }
    });
};
