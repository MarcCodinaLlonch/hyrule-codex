import { Link } from 'react-router-dom';

/**
 * Unified footer component for all pages.
 */
export default function Footer() {
    return (
        <footer className="bg-on-secondary-container w-full mt-xl border-t-2 border-primary/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-lg p-xl max-w-7xl mx-auto">

                {/* Brand */}
                <div className="flex flex-col gap-sm">
                    <span className="font-headline-sm text-headline-sm text-primary-fixed">HYRULE CODEX</span>
                    <p className="font-label-md text-label-md text-on-secondary/80 max-w-xs text-center md:text-left">
                        © 2024 Hyrule Codex. All rights reserved. May the Goddess smile upon you.
                    </p>
                </div>

                {/* Navigation links */}
                <div className="flex gap-lg">
                    <Link className="text-on-secondary/80 hover:text-primary-fixed transition-transform hover:translate-y-[-2px] font-label-md text-label-md" to="/games">Games</Link>
                    <Link className="text-on-secondary/80 hover:text-primary-fixed transition-transform hover:translate-y-[-2px] font-label-md text-label-md" to="/timeline">Timeline</Link>
                    <Link className="text-on-secondary/80 hover:text-primary-fixed transition-transform hover:translate-y-[-2px] font-label-md text-label-md" to="/theories">Theories</Link>
                </div>

                {/* Social buttons */}
                <div className="flex gap-md">
                    <button className="w-10 h-10 rounded-full bg-primary/20 text-primary-fixed flex items-center justify-center hover:bg-primary/40 transition-all">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary/20 text-primary-fixed flex items-center justify-center hover:bg-primary/40 transition-all">
                        <span className="material-symbols-outlined">mail</span>
                    </button>
                </div>

            </div>
        </footer>
    );
}
