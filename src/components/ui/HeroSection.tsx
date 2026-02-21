

export const HeroSection = () => {
  return (
    <div className="grid lg:h-[250px] lg:grid-cols-3">
      {/* Hero Title span 2 */}
      <div className="border-base-placeholder col-span-2 flex h-full items-center p-6 lg:border-r border-b lg:border-b-0 max-lg:py-12 relative overflow-hidden">
        <h1 className="text-pumpkin-100 text-4xl font-semibold uppercase lg:max-w-[530px] lg:text-[48px] leading-13">
          OWN NFTS, TOKENS, OR RWA ASSETS
        </h1>
      </div>

      {/* Buy Tickets / Graphic span 1 */}
      <div className="grid lg:h-[250px] min-h-[250px] grid-rows-2">
        <div className="border-base-placeholder relative border-b w-full flex items-center justify-center p-4">
          {/* Empty graphic placeholder */}
          <span className="text-base-placeholder/50 text-sm uppercase">[3D Graphic Placeholder]</span>
        </div>
        <div className="flex w-full items-center justify-center px-5 py-4">
          <button 
            className="bg-primary hover:bg-primary/80 text-primary-foreground focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 px-2 py-[10.5px] text-xs font-semibold text-nowrap uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none h-12 w-full" 
            type="button"
          >
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    </div>
  );
};
