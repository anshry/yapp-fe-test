import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

const HeroTexture = lazy(() =>
    import("@/components/ui/hero-texture").then((m) => ({
        default: m.HeroTexture,
    })),
);
interface LoadingScreenProps {
    onLoadingComplete?: () => void;
    isChunksLoaded: boolean;
}

export function LoadingScreen({
    onLoadingComplete,
    isChunksLoaded,
}: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    const phrases = [
        "where NFT dreams\ncome true",
        "Raffle rare NFTs and win big\nwith every ticket",
        "Decentralized, transparent and always fair",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 800); // Change phrase every 0.8 seconds for faster animation
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const assetsToPreload = [
            "/images/assets/img-logo.webp",
            "/images/assets/on base chain/WETH on BASE.webp",
            "/images/assets/on base chain/cbbtc on base.webp",
            "/images/assets/ASSETS (NFT:TOKEN)/Pudgy penguins.webp",
            "/images/assets/ASSETS (NFT:TOKEN)/DOODLES.webp",
            "/images/assets/ASSETS (NFT:TOKEN)/Moonbirds.webp",
            // You can add more critical assets here as needed
        ];

        let loadedCount = 0;
        const totalAssets = assetsToPreload.length;

        if (totalAssets === 0) {
            setProgress(100);
            setAssetsLoaded(true);
            return;
        }

        const handleAssetLoaded = () => {
            loadedCount++;
            setProgress((loadedCount / totalAssets) * 100);
            if (loadedCount >= totalAssets) {
                setAssetsLoaded(true);
            }
        };

        // Start loading all assets
        assetsToPreload.forEach((src) => {
            const img = new Image();
            // Handle both success and error to prevent hanging on a bad URL
            img.onload = handleAssetLoaded;
            img.onerror = handleAssetLoaded;
            img.src = src;
        });

        // Fallback timeout: Target completion after 10s if images hang
        const fallbackTimer = setTimeout(() => {
            if (loadedCount < totalAssets) {
                console.warn(
                    "Loading screen fallback timeout triggered. Some initial assets may not have loaded.",
                );
                setProgress(100);
                setAssetsLoaded(true);
            }
        }, 10000);

        return () => clearTimeout(fallbackTimer);
    }, []);

    // Synchronize both independent loading sources (Images + Lazy JS Chunks)
    useEffect(() => {
        if (assetsLoaded && isChunksLoaded && isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 400); // Small delay to show 100%
            return () => clearTimeout(timer);
        }
    }, [assetsLoaded, isChunksLoaded, isVisible]);

    // Prevent scrolling while loading screen is active
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);

    return (
        <AnimatePresence onExitComplete={onLoadingComplete}>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="bg-background fixed inset-0 z-[200] grid h-screen w-full items-center px-5 lg:grid-cols-3 lg:px-16"
                >
                    {/* Background Texture with Gradient Fade */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute top-0 left-0 w-full h-[25dvh] min-h-[40px] overflow-hidden pointer-events-none"
                        style={{
                            maskImage:
                                "linear-gradient(to bottom, black 0%, transparent 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to bottom, black 0%, transparent 100%)",
                        }}
                    >
                        <div className="absolute top-0 left-0 h-[100vh] w-full pointer-events-auto">
                            <Suspense fallback={null}>
                                <HeroTexture disableHover={true} />
                            </Suspense>
                        </div>
                    </motion.div>

                    {/* Desktop Left Text */}
                    <div className="max-w-75 h-12 max-lg:hidden z-10 flex items-center relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentPhraseIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="text-primary font-medium uppercase absolute w-full whitespace-pre-line leading-tight"
                            >
                                {phrases[currentPhraseIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Desktop Center (Spinning Circle) */}
                    <div className="flex h-20 items-center justify-center max-lg:hidden z-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="size-20 rounded-full"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, #FF7300, #FFE600, #FF7300)",
                                padding: "8px",
                            }}
                        >
                            <div className="w-full h-full bg-background rounded-full"></div>
                        </motion.div>
                    </div>

                    {/* Desktop Right Percentage */}
                    <p className="text-primary ml-auto w-fit font-medium max-lg:hidden z-10">
                        {Math.floor(progress)}%
                    </p>

                    {/* Mobile Layout */}
                    <div className="flex items-center justify-center gap-8 max-lg:flex-col lg:hidden z-10 w-full px-4">
                        <div className="flex h-20 items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="size-20 rounded-full"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, #FF7300, #FFE600, #FF7300)",
                                    padding: "8px",
                                }}
                            >
                                <div className="w-full h-full bg-background rounded-full"></div>
                            </motion.div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 w-full">
                            <div className="h-20 flex items-center relative overflow-hidden w-full max-w-[280px]">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentPhraseIndex}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                        className="text-primary text-center font-medium whitespace-pre-line uppercase absolute w-full leading-tight"
                                    >
                                        {phrases[currentPhraseIndex]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <p className="text-primary w-fit font-medium lg:ml-auto">
                                {Math.floor(progress)}%
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
