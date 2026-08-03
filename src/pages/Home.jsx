import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/base.css';

export default function Home() {

    // Cursor glow effect — previously initGlowCursor() in main.js
    useEffect(() => {
        const glowCursor = document.getElementById('glow-cursor');
        if (!glowCursor) return;
        const handleMouseMove = (e) => {
            glowCursor.style.left = e.clientX + 'px';
            glowCursor.style.top  = e.clientY + 'px';
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/* ── Hero Section ── */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        data-alt="Epic panoramic view of Hyrule field"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzAmLnm4HhQNV0Hq_Kmd1QT9T9pBGPIR0lLk6RFVFkIMwL2h3CjJPNFrj_NqzI5BAbJ8F4gEA7rRqbz2-KJgkWE0Oz7yjBGFMHT5wOQb8pXhaCF0-EkaBqnNvBHXHnXXA_6tSrB_jD3UkLhX7Zyar5HmGPr6EfaYSmWxrgeTNHMJxFCjQOomJL2cHMQK1iqRGSJNZkVw6lIVEIB3TOoNjR_p_GBVz0pRSw5G23JEBl1jf43L1EcLhA"
                    />
                </div>
                <div className="absolute inset-0 hero-gradient"></div>
                <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto pt-24">
                    <p className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] mb-4 opacity-80">
                        The Legend of Zelda · Encyclopedia
                    </p>
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight italic">
                        Chronicles of<br/>a Shattered Kingdom
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
                        Explore the fractured timelines, legendary heroes, and ancient lore of Hyrule — from Skyward Sword to Tears of the Kingdom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-md justify-center">
                        <Link
                            to="/games"
                            className="px-xl py-4 bg-primary text-on-primary font-label-md text-label-md rounded-full hover:bg-primary/90 transition-all active:scale-95 shadow-lg"
                        >
                            Explore the Archive
                        </Link>
                        <Link
                            to="/timeline"
                            className="px-xl py-4 bg-surface/20 backdrop-blur-sm text-on-surface font-label-md text-label-md rounded-full border border-outline/30 hover:bg-surface/30 transition-all active:scale-95"
                        >
                            View Timeline
                        </Link>
                    </div>
                </div>
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                    <span className="font-label-md text-label-md text-on-surface-variant text-[11px] uppercase tracking-widest">Scroll</span>
                    <span className="material-symbols-outlined text-on-surface-variant animate-bounce">expand_more</span>
                </div>
            </section>

            {/* ── Bento Cards ── */}
            <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl relative">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">

                    {/* Timeline card (wide) */}
                    <Link
                        to="/timeline"
                        className="group md:col-span-2 relative overflow-hidden rounded-xl border border-primary/20 bg-on-secondary-container hover:border-primary/50 transition-all duration-500 min-h-[280px] flex flex-col justify-end p-lg"
                    >
                        <div className="absolute inset-0">
                            <img
                                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                data-alt="Hyrule timeline visualization"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7MT-DPF6ooCokTQV1gzkXxWz9-1NlEuArVjGh7lAVn8TucTqNwlmP5IXpGE-oIHD7DyEKnOJ4kYpHs_zsaWOV1CjJCFfa6E2RhpbSwAOFsiSzxL1lfcIIQkGImkvrU6ntU5SZIHhlYyFLl2ZNMkatDRkLNvOxRyeDuwyLp9ZcsjQ28iSmUN3wmi6HijYUw6nV06frgtGRFXEVAu4vNHW5XhL3tYlIL5BiCbX8Xlvf78ewjBbSNSPh_A"
                            />
                        </div>
                        <div className="relative z-10">
                            <p className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-widest mb-2">The Great Timeline</p>
                            <h2 className="font-headline-md text-headline-md text-primary-fixed mb-2">Shattered Chronology</h2>
                            <p className="font-body-md text-body-md text-on-secondary/70 max-w-sm">Trace the three branching timelines born from the Hero's triumph and defeat.</p>
                        </div>
                    </Link>

                    {/* Games card */}
                    <Link
                        to="/games"
                        className="group relative overflow-hidden rounded-xl border border-primary/20 bg-surface-container-high parchment-texture hover:border-primary/50 transition-all duration-500 min-h-[280px] flex flex-col justify-end p-lg"
                    >
                        <div className="absolute inset-0">
                            <img
                                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                                data-alt="Legend of Zelda game collection"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy-V8UqC9QEDvRGHnlo2XrHYSGG8uyZAMB_xM0VqSJuIajgdNmh7F3uz8JKoGrWf-Rjv0bYOJqq8q6yA7_K_s1s9yfwCWaibpzIXnmrrwDtIvUO5EEHutlDO1JSYdWmDlHZvxMNJ2dMXLhoAOXnh8z0mVtwSvkJUcOZpS_zNl95myfEJhLe2eIozqFerv6aEV2GP3IL4i6tDWbIcONR4mBUnda9g__AW4bXUOiEJaDODrDu7d-zR_sDA"
                            />
                        </div>
                        <div className="relative z-10">
                            <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">29 Titles</p>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">The Legend Archive</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Every game, every era, every hero meticulously chronicled.</p>
                        </div>
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">

                    {/* Theories card */}
                    <Link
                        to="/theories"
                        className="group relative overflow-hidden rounded-xl border border-primary/20 bg-surface-container parchment-texture hover:border-primary/50 transition-all duration-500 min-h-[220px] flex flex-col justify-end p-lg"
                    >
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">Ancient Theories</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Scholar-verified hypotheses and fan discoveries.</p>
                        </div>
                    </Link>

                    {/* Connections Explorer card (wide) */}
                    <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-primary/20 bg-surface-container-low parchment-texture min-h-[220px] flex flex-col justify-center p-lg engraved-gold">
                        <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">Coming Soon</p>
                        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Connections Explorer</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">An interactive web of lore connections — characters, artifacts, and locations across all timelines.</p>
                    </div>

                </div>

                {/* Triforce divider */}
                <div className="triforce-divider my-xl"></div>

                {/* Featured Lore Section */}
                <section>
                    <div className="flex items-center justify-between mb-lg">
                        <h2 className="font-headline-md text-headline-md text-on-surface">Featured Lore</h2>
                        <Link to="/theories" className="font-label-md text-label-md text-primary hover:underline flex items-center gap-xs">
                            View all <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                        {[
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMUp4VZyuICo1_U_CSDZbB8W5mKE4npy7SwU9yapBr5WqDE5CbZWHz3c5QWXq3XxR2Mgzl39Nka_tDgngfMs1upDEhMxt0lSytju1khvrlvB1YtoP8sCS3Xi_7NrfFA7Egebe0pmxaQqqWTc592OfNWRDHLhh6ijqBNxw37UVNNqhPZLkDnHoWunBdo6fICIoNCPC-WwPGbwIYl6CZYIzbTnLQ896ModebAtLip2g5w7tjF5H6RQzrhA',
                                tag: 'Zonai',
                                title: 'The Secret of the Zonai',
                                excerpt: 'Did the Zonai descend from the heavens or emerge from the depths?'
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-kPrEQu5H5vwR9RRi4Of6dAb36Zm2GE6mJY84UdSweorCdTEnv_6S6yHo6uKIPgBcvYuEX5z02_MW_8V0qoaZ7HvHY1TBchtqCVC_kX4GXqfeCJtFHNVY8wStL8MadtMw3FYv6YKII9gte01TDLL0oGPanygo4houQ7hwZLznGYB_4Py6MEqoXlpwQcw8225v9v1n7hFQa3EsO5TzCZV2W_XxwPZjFKAy8BbYOFODlgP0qKYjJoT-aA',
                                tag: 'Koroks',
                                title: 'Korok Seeds: A Magical Grid?',
                                excerpt: 'Is Hestu\'s dance more than a celebration? A lore deep-dive.'
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQBHV3EojN3xIK8pMZ6Ua7Es4YtuB-H6SOO8h7jbRCoSr1AozpKUC46nuSzZIcVjhDpEkbP3g5W9Gl8yuhhOlsXkBlRbduJty5igYy70ihLSTfJ7ei1v7-Ud_Vaj5OsHHSjNm-KvRs0QkD4jk-5_V38D72uxxPUcPPOLwy1rBNnbez6uB-6i410xk5Y_TG6ICJLVgNYIgJndxZ_fWRSn_27N2NUNJtZznYnxu7AumuISbX-GrlZVgv8g',
                                tag: 'Master Sword',
                                title: "The Sword's Sentience",
                                excerpt: 'Does the spirit of Fi still echo across timelines within the blade?'
                            }
                        ].map((entry, i) => (
                            <Link key={i} to="/theories" className="group bg-surface-container-low parchment-texture border border-outline/10 rounded-xl overflow-hidden hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
                                <div className="aspect-video overflow-hidden">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt={entry.title} src={entry.img} />
                                </div>
                                <div className="p-lg">
                                    <span className="font-label-md text-label-md text-primary uppercase tracking-wider text-[11px]">{entry.tag}</span>
                                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2 group-hover:text-primary transition-colors">{entry.title}</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">{entry.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </main>

            {/* Glow cursor element — positioned fixed, controlled by useEffect */}
            <div
                id="glow-cursor"
                className="pointer-events-none fixed top-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-[100px] z-[-1] transform -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
}
