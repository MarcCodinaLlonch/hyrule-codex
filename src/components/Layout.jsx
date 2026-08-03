import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Drawer from './Drawer';

/**
 * Global page layout wrapper.
 * Manages drawer open/close state and composes Header + Drawer + content + Footer.
 *
 * Usage in App.jsx:
 *   <Layout><HomePage /></Layout>
 */
export default function Layout({ children }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <Header onMenuClick={() => setIsDrawerOpen(true)} />
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            {children}
            <Footer />
        </>
    );
}
