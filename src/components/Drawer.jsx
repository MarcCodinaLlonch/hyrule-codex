import { NavLink } from 'react-router-dom';

/**
 * Navigation Drawer (sidebar) component.
 * State is managed by the parent Layout component via props.
 * Previously handled by initDrawer() in main.js.
 *
 * @param {boolean} isOpen   - Whether the drawer is currently open.
 * @param {Function} onClose - Called when the drawer should close.
 */
export default function Drawer({ isOpen, onClose }) {

    // NavLink class for drawer items: highlights the active page
    const drawerLinkClass = ({ isActive }) =>
        isActive
            ? 'flex items-center gap-md bg-primary-container text-on-primary-container rounded-full px-lg py-md transition-all duration-200'
            : 'flex items-center gap-md text-on-surface-variant hover:bg-surface-variant rounded-full px-lg py-md transition-all duration-200';

    return (
        <>
            {/* Overlay — clicking it closes the drawer */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            />

            {/* Drawer panel */}
            <aside
                className={`fixed left-0 top-0 h-full w-80 z-[60] p-lg flex flex-col gap-sm bg-surface dark:bg-surface-dim shadow-xl transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="flex items-center gap-md mb-xl">
                    <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
                    <span className="font-headline-sm text-headline-sm text-primary">Legend Archive</span>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col gap-sm">
                    <NavLink className={drawerLinkClass} to="/" end onClick={onClose}>
                        <span className="material-symbols-outlined">home</span>
                        <span className="font-body-lg text-body-lg">Home</span>
                    </NavLink>
                    <NavLink className={drawerLinkClass} to="/games" onClick={onClose}>
                        <span className="material-symbols-outlined">videogame_asset</span>
                        <span className="font-body-lg text-body-lg">Games</span>
                    </NavLink>
                    <NavLink className={drawerLinkClass} to="/timeline" onClick={onClose}>
                        <span className="material-symbols-outlined">history_toggle_off</span>
                        <span className="font-body-lg text-body-lg">Timeline</span>
                    </NavLink>
                    <NavLink className={drawerLinkClass} to="/theories" onClick={onClose}>
                        <span className="material-symbols-outlined">lightbulb</span>
                        <span className="font-body-lg text-body-lg">Theories</span>
                    </NavLink>
                </nav>
            </aside>
        </>
    );
}
