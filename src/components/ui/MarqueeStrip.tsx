

const ITEMS = [
  "NFTs starting from just $10!",
  "Join the wave",
  "More liquid than opensea",
  "Start selling on raflux"
];

// Duplicate items to ensure a smooth scrolling effect
const MARQUEE_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS];

export const MarqueeStrip = () => {
  return (
    <div className="border-base-placeholder flex h-10.5 w-screen items-center justify-center border-y overflow-hidden">
      <div className="flex gap-[100px] lg:gap-[200px] animate-marquee uppercase text-text-secondary text-[10px] whitespace-nowrap px-4 py-2">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};
