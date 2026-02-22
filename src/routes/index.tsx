import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";

// Async chunks
const importNavbar = () => import("@/components/layout/navbar");
const importFooter = () => import("@/components/layout/footer");
const importS1 = () => import("@/components/sections/section-one/section-one");
const importS2 = () => import("@/components/sections/section-two/section-two");
const importS3 = () =>
    import("@/components/sections/section-three/section-three");
const importS4 = () =>
    import("@/components/sections/section-four/section-four");
const importS5 = () =>
    import("@/components/sections/section-five/section-five");
const importS6 = () => import("@/components/sections/section-six/section-six");
const importS7 = () =>
    import("@/components/sections/section-seven/section-seven");
const importS8 = () =>
    import("@/components/sections/section-eight/section-eight");

// Lazy components
const Navbar = lazy(() => importNavbar().then((m) => ({ default: m.Navbar })));
const Footer = lazy(() => importFooter().then((m) => ({ default: m.Footer })));
const SectionOne = lazy(() =>
    importS1().then((m) => ({ default: m.SectionOne })),
);
const SectionTwo = lazy(() =>
    importS2().then((m) => ({ default: m.SectionTwo })),
);
const SectionThree = lazy(() =>
    importS3().then((m) => ({ default: m.SectionThree })),
);
const SectionFour = lazy(() =>
    importS4().then((m) => ({ default: m.SectionFour })),
);
const SectionFive = lazy(() =>
    importS5().then((m) => ({ default: m.SectionFive })),
);
const SectionSix = lazy(() =>
    importS6().then((m) => ({ default: m.SectionSix })),
);
const SectionSeven = lazy(() =>
    importS7().then((m) => ({ default: m.SectionSeven })),
);
const SectionEight = lazy(() =>
    importS8().then((m) => ({ default: m.SectionEight })),
);

export const Route = createFileRoute("/")({ component: App });

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isChunksLoaded, setIsChunksLoaded] = useState(false);

    useEffect(() => {
        // Preload chunks in the background concurrently while the loading screen displays
        Promise.all([
            importNavbar(),
            importFooter(),
            importS1(),
            importS2(),
            importS3(),
            importS4(),
            importS5(),
            importS6(),
            importS7(),
            importS8(),
        ]).then(() => {
            setIsChunksLoaded(true);
        });
    }, []);

    return (
        <>
            <LoadingScreen
                isChunksLoaded={isChunksLoaded}
                onLoadingComplete={() => setIsLoaded(true)}
            />

            {isLoaded && (
                <Suspense fallback={null}>
                    <div className="animate-in fade-in duration-1000">
                        <Navbar />

                        <main className="min-h-screen w-full flex-1 overflow-x-clip pt-15">
                            {/* Sticky Context Wrapper for Section One folder illusion */}
                            <div className="relative w-full">
                                <SectionOne />
                                <SectionTwo />
                            </div>

                            <SectionThree />
                            <SectionFour />
                            <SectionFive />
                            <SectionSix />
                            <SectionSeven />
                            <SectionEight />
                        </main>
                        <Footer />
                    </div>
                </Suspense>
            )}
        </>
    );
}
