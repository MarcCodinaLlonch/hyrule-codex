import { Link } from 'react-router-dom';
import '../styles/game-detail.css';
import '../styles/base.css';

export default function GameDetail() {
    return (
        <div className="game-detail-page">
            <main className="pt-20">

                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
                    <div className="absolute inset-0 hero-mask">
                        <img
                            className="w-full h-full object-cover"
                            data-alt="Epic panoramic illustration of Link overlooking Hyrule"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkPgopiY3VjPSCQUMO1eo7EXnihCBRSqQjlXcpiJyOaFCthc6YcgMZk0xbEazFsEHtGC7d8rVBa_BXQWjTaSR2E6T1CPGx4eEpBHoB-UXV4G2DtPHJIlgteTQAEiDqZC0cy6xL9Us6Qd0gFoJhUhiGQcWHV6k-s2cKo2jCW34fxvt2z5LIIX2yOACDwfoVeVMFA2j49PyjmK6YefAHEFUHHXSqnXOLexdkK44zcebi-lGi186s2pKKcw"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-margin-mobile md:p-margin-desktop z-10 max-w-7xl mx-auto">
                        <div className="inline-block bg-primary-container/90 backdrop-blur-sm px-4 py-1 rounded-sm mb-4 border border-on-primary-container/20">
                            <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">Masterpiece</span>
                        </div>
                        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2 leading-tight">
                            The Legend of Zelda:<br />Breath of the Wild
                        </h1>
                        <div className="flex flex-wrap gap-md items-center mt-4">
                            <div className="flex items-center gap-xs px-3 py-1 bg-surface-container-highest/80 rounded-sm border border-outline/20">
                                <span className="material-symbols-outlined text-outline text-sm">calendar_today</span>
                                <span className="font-label-md text-label-md text-outline">2017</span>
                            </div>
                            <div className="flex items-center gap-xs px-3 py-1 bg-surface-container-highest/80 rounded-sm border border-outline/20">
                                <span className="material-symbols-outlined text-outline text-sm">videogame_asset</span>
                                <span className="font-label-md text-label-md text-outline">Switch / Wii U</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Canvas */}
                <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl">

                    {/* Main Column */}
                    <div className="lg:col-span-8 space-y-xl">

                        {/* Synopsis Card */}
                        <article className="parchment-texture bg-surface-container-low p-lg md:p-xl rounded-lg shadow-sm border border-outline/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-9xl">auto_stories</span>
                            </div>
                            <div className="flex items-center gap-sm mb-6">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest">The Legend Begins</h2>
                                <div className="w-10 h-[1px] bg-primary"></div>
                            </div>
                            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant italic">"Wake up, Link..."</p>
                            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant mt-4">
                                After a slumber lasting an entire century, the Hero awakens to a shattered kingdom reclaimed by nature and haunted by a lingering evil. In this unprecedented open-world journey, the boundaries of Hyrule are limited only by the horizon. From the highest, snow-capped peaks to the deepest valleys, every corner of this ruined land holds a secret waiting to be uncovered by the intrepid explorer.
                            </p>
                            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant mt-4">
                                Without the rigid constraints of destiny, you are free to chart your own course. Scavenge for survival, master forgotten ancient technologies, and decipher the fragmented memories of a fallen era before facing the Calamity that festers at the heart of the kingdom.
                            </p>
                        </article>

                        {/* Protagonists Bento */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                            {[
                                {
                                    name: 'Link', role: 'The Champion',
                                    desc: 'Awakened from a 100-year slumber to reclaim his destiny.',
                                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbnBIik9Tv125wINkPaj99LwD0AKr8AJGJ5XkN8PRTPKFw6ZSjHgPA-qEAuXPYdQq6hH5sCnalw4NpbYm85IpNgJ8nXcX9sQTOwsJLXMpbHgcCEYR68p0RgAC1yEpz2XlYPowS0OU1HYhGBpigY2lGV_HIMIm78DbwTLYCWyu05RcDAjl5K_QPaU43_-BZhB65ypMSqUlBDMVvhofyh1BYpy_mPYcketomAn-jClbxTH2sNCrl5kv9OQ'
                                },
                                {
                                    name: 'Zelda', role: 'The Princess',
                                    desc: 'A brilliant scholar struggling to unlock her sealing power.',
                                    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-5GX98w2jU9MPzA_QlKS4_vYAGOOCszV1Cs01Eeq_l1BYgfjq_lkSHYP6-8LWeP-gxaa3J4LzNK_Xu4xG0IeCZgMdl4gf9YVtUZ1M8moaRNP972IMd1I-enQS7anJ26lIrL8ponAWgF9dGT6OXQw4Rm0O3aG7ZERaAYu30wGsIWSHu0A9LH-DcSCVYLZdphI7pA2VZb7CHbEpjXnpiFbXqvJfnnSOFh0CGHh7LkvHGOs4fZZiXED1rA'
                                },
                            ].map((char, i) => (
                                <div key={i} className="parchment-texture bg-surface-container-high p-lg rounded-xl flex items-center gap-lg border-2 border-primary/5 hover:border-primary/20 transition-all duration-300">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
                                        <img className="w-full h-full object-cover" data-alt={char.name} src={char.src} />
                                    </div>
                                    <div>
                                        <h3 className="font-headline-sm text-headline-sm text-primary">{char.name}</h3>
                                        <p className="font-label-md text-label-md text-secondary uppercase">{char.role}</p>
                                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{char.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Villain Section */}
                        <div className="parchment-texture bg-on-secondary-container p-xl rounded-xl text-on-secondary relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 opacity-20">
                                <span className="material-symbols-outlined text-[200px] text-error">volcano</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-headline-md text-headline-md text-primary-fixed mb-4">Calamity Ganon</h3>
                                <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl">
                                    A primal force of pure malice that brought Hyrule to its knees a century ago. It remains trapped within Hyrule Castle, its corruption spreading like a blight across the land, waiting for the moment of its final rebirth.
                                </p>
                                <div className="mt-6 flex gap-sm">
                                    <span className="px-3 py-1 bg-error/20 border border-error/50 rounded-full text-xs font-bold tracking-widest uppercase text-error-container">Ancient Threat</span>
                                    <span className="px-3 py-1 bg-error/20 border border-error/50 rounded-full text-xs font-bold tracking-widest uppercase text-error-container">Malice Embodied</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-xl">

                        {/* Details Card */}
                        <div className="parchment-texture bg-surface-container p-lg rounded-lg border-2 border-primary/10">
                            <h4 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-primary/20 pb-2">Codex Entry</h4>
                            <div className="space-y-4">
                                {[
                                    { label: 'Publisher', value: 'Nintendo' },
                                    { label: 'Genre',     value: 'Action-Adventure' },
                                    { label: 'Director',  value: 'Hidemaro Fujibayashi' },
                                    { label: 'Producer',  value: 'Eiji Aonuma' },
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex justify-between border-b border-outline/10 pb-2">
                                        <span className="font-label-md text-label-md text-outline">{label}</span>
                                        <span className="font-body-md text-body-md font-semibold text-secondary">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chronology */}
                        <div className="space-y-md">
                            <h4 className="font-headline-sm text-headline-sm text-primary flex items-center gap-sm">
                                <span className="material-symbols-outlined">link</span>
                                Chronology
                            </h4>
                            <div className="triforce-divider my-4"></div>
                            {[
                                { rel: 'Prequel (Timeline)', title: 'Skyward Sword',       src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7QkrtBhk81OfPwU6HzGweCf179rd9rEmE0ZiH5qIMs8uY7OvLpn65o3njnwph0ZbYAAvbAVgHyBOaGvE8p2RTz9mM8YinIBJTZ9424sE6rOfTxHRI6KLgQgQbDcXsepNgaVt8Nwbg9eUkN957IJuTcjIzvkxt0GOZYtS_VK4Il3vyEX9-Xr1_rrpXmBmvfrc1W0rHBm5Z4k6uY8tFVQKqCLGrSonyHo-W4keEKDAgSa2vggAFP_1pbQ' },
                                { rel: 'Direct Sequel',      title: 'Tears of the Kingdom', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvhrhC10ONJ-3WQMi6NjtQzfIYvgcXC_6u3pIBsS8KFBxRe5QrU2w-PGszrIIA5OWsijPuX9_YNg4yDLszeeL4INUVtXHURaf_PduKvcKTSmbzzDHAr3QhYZOWJsS0dkoLGpv9vei_8MAwAkbyIOA3be9tnmq1tDzFqF--n6CVVp8vH9PkcY8ivqN-8AvcZR3D3rjUNkme8idJWdSYL-RwgZVkyt2roSCx3drfIm4n1rXjV0ph9MN4DA' },
                            ].map(({ rel, title, src }) => (
                                <Link key={title} to="/games/breath-of-the-wild" className="group flex items-center gap-md p-md bg-surface-container-lowest hover:bg-primary-container/10 rounded-lg transition-all duration-300 border border-outline/5 hover:border-primary/30">
                                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                        <img className="w-full h-full object-cover" data-alt={title} src={src} />
                                    </div>
                                    <div>
                                        <p className="font-label-md text-label-md text-outline mb-1 uppercase">{rel}</p>
                                        <p className="font-headline-sm text-[18px] text-on-surface group-hover:text-primary transition-colors">{title}</p>
                                    </div>
                                    <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
                                </Link>
                            ))}
                        </div>

                    </aside>
                </div>

            </main>
        </div>
    );
}
