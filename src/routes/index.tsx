import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/layout/Navbar'
import { NftCard } from '../components/cards/NftCard'
import { MarqueeStrip } from '../components/ui/MarqueeStrip'
import { HeroSection } from '../components/ui/HeroSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-screen flex-1 overflow-x-clip pt-[60px]">
        <section className="bg-background relative h-[400vh]">
          <div className="bg-base-dark-secondary sticky top-[58px] h-[100vh] flex flex-col">
            
            {/* Infinite Marquee Strip */}
            <MarqueeStrip />

            {/* Main 8-Column Grid Layout */}
            <div className="flex-1 grid lg:grid-cols-8 mx-auto w-full">
              {/* Left gutter */}
              <div className="max-lg:hidden w-full h-full border-r border-base-placeholder/0"></div>

              {/* Center Content span 6 */}
              <div className="border-base-placeholder col-span-6 w-full lg:border-x flex flex-col">
                
                {/* Hero / Buying Section Row */}
                <HeroSection />

                {/* Cards Top Row Grid */}
                <div className="border-base-placeholder grid min-h-[225px] grid-cols-2 lg:grid-cols-5 border-y">
                  <NftCard imageSrc="/images/assets/on base chain/cbbtc on base.webp" title="CBTC ON BASE" price={10} />
                  <NftCard imageSrc="/images/assets/ASSETS (NFT:TOKEN)/Pudgy penguins.webp" title="PUDGY PENGUINS" price={10} />
                  <NftCard imageSrc="/images/assets/ASSETS (NFT:TOKEN)/DOODLES.webp" title="DOODLES" price={10} />
                  <NftCard imageSrc="/images/assets/ASSETS (NFT:TOKEN)/Moonbirds.webp" title="MOONBIRDS" price={10} />
                  <NftCard imageSrc="/images/assets/on base chain/WETH on BASE.webp" title="WETH ON BASE" price={10} hideRightBorder={true} />
                </div>

                {/* Bottom section Scaffolding */}
                <div className="flex-1 grid grid-cols-5">
                  <div className="border-base-placeholder col-span-2 h-full border-r px-6 pt-[90px]">
                    <p className="text-text-tertiary text-right text-sm font-medium uppercase">
                      Try your luck today
                    </p>
                  </div>
                  <div className="col-span-3 overflow-hidden">
                    <div className="border-base-placeholder w-full border-b px-6 py-7 lg:px-14">
                      <div>
                        <p className="text-pumpkin-100 ml-auto max-w-[500px] text-right text-2xl leading-[120%] font-medium uppercase lg:text-5xl">
                          Starting as low as $10!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right gutter */}
              <div className="max-lg:hidden w-full h-full border-l border-base-placeholder/0"></div>
            </div>
            
          </div>
        </section>
      </main>
    </>
  )
}
