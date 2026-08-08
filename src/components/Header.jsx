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
            className="bg-on-secondary-container/90 backdrop-blur-md sticky top-0 w-full z-50 border-b border-primary/20 shadow-sm transition-all duration-300"
        >
            <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-7xl mx-auto">

                {/* Left: hamburger + logo */}
                <div className="flex items-center gap-md">
                    <button
                        onClick={onMenuClick}
                        className="md:hidden text-primary-fixed hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95 p-2 rounded-full"
                    >
                        
                        <span className="material-symbols-outlined relative -top-[-5px]">menu</span>
                    </button>
                    <Link
                        to="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                        aria-label="Hyrule Codex Home"
                    >
                        <div 
                            className="bg-primary-fixed h-8 w-40 md:h-10 md:w-56"
                            style={{
                                WebkitMaskImage: 'url(/images/hyrulecodexlogo.png)',
                                maskImage: 'url(/images/hyrulecodexlogo.png)',
                                WebkitMaskSize: 'contain',
                                maskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'left center',
                                maskPosition: 'left center'
                            }}
                        />
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
                <div className="flex items-center">
                    {/* Camp de cerca per a escriptori (S'amaga en mòbils) */}
                    <div className="relative group hidden md:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-secondary/50 group-focus-within:text-primary-fixed transition-colors pointer-events-none text-[20px]">
                            search
                        </span>
                        <input 
                            type="text" 
                            placeholder="Search in this site..." 
                            className="bg-black/10 border border-primary/20 text-on-secondary placeholder:text-on-secondary/40 font-body-sm text-sm rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed/50 focus:bg-black/20 transition-all duration-300 w-48 lg:w-64"
                        />
                    </div>
                    {/* Icona de cerca per a mòbils (Es mostra només en mides petites) */}
                    <button className="md:hidden text-primary-fixed hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95 p-2 rounded-full">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
                

            </div>
        </header>
    );
}
