import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Unified header component for all pages.
 * Handles scroll-shrink behaviour (previously in main.js → initScrollHeader).
 *
 * @param {Function} onMenuClick - Called when the hamburger button is clicked (opens Drawer).
 */
export default function Header({ onMenuClick }) {
    const headerRef = useRef(null);

    // Scroll shrink effect — previously initScrollHeader() in main.js
    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'shadow-md');
                header.classList.remove('py-4', 'shadow-sm');
            } else {
                header.classList.add('py-4', 'shadow-sm');
                header.classList.remove('py-2', 'shadow-md');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // NavLink class: active vs inactive state
    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim font-label-md text-label-md py-1'
            : 'text-on-secondary/80 hover:text-primary-fixed transition-colors font-label-md text-label-md py-1';

    return (
        <header
            ref={headerRef}
            className="bg-on-secondary-container/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-primary/20 shadow-sm transition-all duration-300"
        >
            <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-7xl mx-auto">

                {/* Left: hamburger + logo */}
                <div className="flex items-center gap-md">
                    <button
                        onClick={onMenuClick}
                        className="text-primary-fixed hover:bg-primary/10 transition-all duration-300 active:scale-95 p-2 rounded-full"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <Link
                        to="/"
                        className="font-headline-md text-headline-md font-bold text-primary-fixed tracking-widest hover:opacity-80 transition-opacity"
                    >
                        HYRULE CODEX
                    </Link>
                </div>

                {/* Centre: desktop navigation */}
                <nav className="hidden md:flex gap-lg">
                    {/* `end` prop ensures Home is only active on exact "/" */}
                    <NavLink className={navLinkClass} to="/" end>Home</NavLink>
                    <NavLink className={navLinkClass} to="/games">Games</NavLink>
                    <NavLink className={navLinkClass} to="/timeline">Timeline</NavLink>
                    <NavLink className={navLinkClass} to="/theories">Theories</NavLink>
                </nav>

                {/* Right: search */}
                <div className="flex items-center gap-sm">
                    <button className="text-primary-fixed hover:bg-primary/10 transition-all duration-300 active:scale-95 p-2 rounded-full">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>

            </div>
        </header>
    );
}
