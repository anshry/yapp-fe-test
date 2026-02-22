import DiscordIcon from "@/assets/icons/discord.svg?react";
import SupportIcon from "@/assets/icons/support.svg?react";
import TwitterIcon from "@/assets/icons/twitter.svg?react";

export function Footer() {
    return (
        <div className="bg-base-dark-secondary relative z-20">
            <footer className="bg-base-dark-secondary border-t-base-placeholder flex w-full items-center justify-between gap-1 rounded-t-xl border-t py-2 text-xs text-white max-lg:flex-col lg:h-8 lg:px-6">
                <div className="text-primary flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Client Network Status</title>
                            <circle cx="6" cy="6" r="6" fill="#471903"></circle>
                            <circle cx="6" cy="6" r="3" fill="#FF7300"></circle>
                        </svg>
                        <span>Client Network</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Websocket Connection Status</title>
                            <circle cx="6" cy="6" r="6" fill="#471903"></circle>
                            <circle cx="6" cy="6" r="3" fill="#FF7300"></circle>
                        </svg>
                        <span>Websocket Connection</span>
                    </div>
                </div>
                <div className="text-text-secondary flex items-center gap-4 text-xs leading-[120%]">
                    <button type="button">
                        <TwitterIcon className="cursor-pointer transition-all duration-300 hover:text-white" />
                    </button>
                    <button type="button">
                        <DiscordIcon className="cursor-pointer transition-all duration-300 hover:text-white" />
                    </button>
                    <button
                        type="button"
                        className="hidden cursor-pointer transition-all duration-300 hover:text-white lg:flex"
                    >
                        Terms of Service
                    </button>
                    <button
                        type="button"
                        className="flex cursor-pointer items-center gap-2 transition-all duration-300 hover:text-white"
                    >
                        <SupportIcon />
                        <span className="hidden lg:flex">Help and Support</span>
                    </button>
                </div>
            </footer>
        </div>
    );
}
