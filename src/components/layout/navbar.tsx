import { Link } from "@tanstack/react-router";

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-base-dark-secondary border-b-base-placeholder fixed z-100 flex h-15 w-full items-center justify-between border-b px-4 text-white transition-colors duration-300 lg:px-6">
            <div>
                <Link to="/" className="flex items-center">
                    <img
                        src="/images/assets/img-logo.webp"
                        alt="Raflux Logo"
                        className="h-5.5 w-auto object-contain"
                    />
                </Link>
            </div>
            <button
                className="bg-primary text-primary-foreground hover:bg-primary/60 ring-offset-background focus-visible:ring-ring inline-flex h-9 cursor-pointer items-center justify-center gap-2 px-2 py-[10.5px] text-xs font-semibold text-nowrap uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:bg-[#82360B] disabled:text-[#471903] disabled:opacity-50"
                type="button"
            >
                Get Started
            </button>
        </nav>
    );
};
