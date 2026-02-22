import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionEight } from "@/components/sections/section-eight/section-eight";
import { SectionFive } from "@/components/sections/section-five/section-five";
import { SectionFour } from "@/components/sections/section-four/section-four";
import { SectionOne } from "@/components/sections/section-one/section-one";
import { SectionSeven } from "@/components/sections/section-seven/section-seven";
import { SectionSix } from "@/components/sections/section-six/section-six";
import { SectionThree } from "@/components/sections/section-three/section-three";
import { SectionTwo } from "@/components/sections/section-two/section-two";

export const Route = createFileRoute("/")({ component: App });

function App() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen w-screen flex-1 overflow-x-clip pt-15">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <SectionEight />
            </main>
            <Footer />
        </>
    );
}
