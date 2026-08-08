import { Link } from 'react-router-dom';

/**
 * Unified footer component for all pages.
 */
export default function Footer() {
    return (
        <footer className="bg-on-secondary-container w-full border-t-2 border-primary/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-lg p-xl max-w-7xl mx-auto">

                {/* Brand */}
                <div className="flex flex-col gap-sm">
                    <span className="font-headline-sm text-headline-sm text-primary-fixed">HYRULE CODEX</span>
                    <p className="font-label-md text-[11px] leading-tight text-on-secondary/60 max-w-sm text-center md:text-left">
                        This is an unofficial fan project. The Legend of Zelda and all related characters, names, and assets are trademarks of Nintendo. This site is not affiliated with, endorsed by, or sponsored by Nintendo.
                    </p>
                </div>

                {/* Social buttons */}
                <div className="flex gap-md">
                    <button className="w-10 h-10 rounded-full bg-primary/20 text-primary-fixed flex items-center justify-center hover:bg-primary/40 transition-all duration-300 hover:scale-105 active:scale-95">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary/20 text-primary-fixed flex items-center justify-center hover:bg-primary/40 transition-all duration-300 hover:scale-105 active:scale-95">
                        <span className="material-symbols-outlined">mail</span>
                    </button>
                </div>

            </div>
        </footer>
    );
}
