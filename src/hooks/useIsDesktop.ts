import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1024) {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () =>
            setIsDesktop(window.innerWidth >= breakpoint);

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isDesktop;
}

export function useIsMobile(breakpoint = 1024) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
}
