/* ==========================================================
   main.js — JavaScript compartit entre totes les pàgines
   Hyrule Codex
   ========================================================== */

/* ---- Cursor glow (index only — no és crític si l'element no existeix) ---- */
function initGlowCursor() {
    const glowCursor = document.getElementById('glow-cursor');
    if (!glowCursor) return;

    document.addEventListener('mousemove', (e) => {
        glowCursor.style.left = e.clientX + 'px';
        glowCursor.style.top  = e.clientY + 'px';
    });
}

/* ---- Scroll header shrink ---- */
function initScrollHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2', 'shadow-md');
            header.classList.remove('py-4', 'shadow-sm');
        } else {
            header.classList.add('py-4', 'shadow-sm');
            header.classList.remove('py-2', 'shadow-md');
        }
    });
}

/* ---- Navigation drawer (games, game-detail, theories) ---- */
function initDrawer() {
    const menuBtn = document.querySelector('header button');

    // Support both naming conventions used across pages
    const drawer =
        document.getElementById('side-drawer') ||
        document.getElementById('nav-drawer');
    const overlay = document.getElementById('drawer-overlay');

    if (!menuBtn || !drawer) return;

    function openDrawer() {
        drawer.classList.remove('translate-x-[-100%]', '-translate-x-full');
        drawer.classList.add('translate-x-0');
        if (overlay) {
            overlay.classList.remove('hidden', 'opacity-0');
            setTimeout(() => overlay.classList.add('opacity-100'), 10);
        }
    }

    function closeDrawer() {
        drawer.classList.remove('translate-x-0');
        drawer.classList.add('translate-x-[-100%]', '-translate-x-full');
        if (overlay) {
            overlay.classList.remove('opacity-100');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }
    }

    function toggleDrawer() {
        const isOpen =
            drawer.classList.contains('translate-x-0') ||
            !drawer.classList.contains('translate-x-[-100%]') &&
            !drawer.classList.contains('-translate-x-full');
        isOpen ? closeDrawer() : openDrawer();
    }

    menuBtn.addEventListener('click', toggleDrawer);

    if (overlay) {
        overlay.addEventListener('click', closeDrawer);
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
        const isOpen = drawer.classList.contains('translate-x-0');
        if (isOpen && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
            closeDrawer();
        }
    });

    // Expose globally for onclick= attributes (game-detail uses onclick="toggleDrawer()")
    window.toggleDrawer = toggleDrawer;
}

/* ---- Timeline floating animation ---- */
function initTimelineFloat() {
    document.querySelectorAll('.parchment-card').forEach((card, index) => {
        const delay = index * 0.2;
        card.style.animation      = `float ${3 + index % 2}s ease-in-out infinite alternate`;
        card.style.animationDelay = `${delay}s`;
    });
}

/* ---- Bootstrap on DOM ready ---- */
document.addEventListener('DOMContentLoaded', () => {
    initGlowCursor();
    initScrollHeader();
    initDrawer();
    initTimelineFloat();
});
