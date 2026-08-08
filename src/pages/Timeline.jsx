import { useEffect } from 'react';
import '../styles/timeline.css';
import '../styles/base.css';

export default function Timeline() {

    // Timeline float animation
    useEffect(() => {
        const cards = document.querySelectorAll('.parchment-card');
        cards.forEach((card, index) => {
            const delay = index * 0.1;
            card.style.animation = `float ${3 + index % 2}s ease-in-out infinite alternate`;
            card.style.animationDelay = `${delay}s`;
        });
    }, []);

    const unifiedEra = [
        { title: 'Skyward Sword', desc: 'The Creation and the Era of Hylia.', src: '/images/skywardSword.png' },
        { title: 'The Minish Cap', desc: 'The legend of the Picori and Vaati.', src: '/images/theMinishCap.jpg' },
        { title: 'Four Swords', desc: 'The hero splits to seal the wind mage.', src: '/images/fourSwordsAdventures.png' },
        { title: 'Ocarina of Time', desc: 'The era that fractured time itself.', src: '/images/ocarinaOfTime.png', isAnchor: true }
    ];

    const fallenHero = [
        { title: 'A Link to the Past', src: '/images/aLinkToThePast.png' },
        { title: "Link's Awakening", src: '/images/aLinksAwakening.png' },
        { title: 'Oracle of Seasons & Ages', src: '/images/oracleOfSeasons.png' },
        { title: 'A Link Between Worlds', src: '/images/aLinkBetweenWorlds.png' },
        { title: 'Tri Force Heroes', src: '/images/TriForceHeroes.png' },
        { title: 'Echoes of Wisdom', src: '/images/echoesOfKingdom.png' },
        { title: 'The Legend of Zelda', src: '/images/theLegendOfZeldaNes.png' },
        { title: 'The Adventure of Link', src: '/images/zelda2TheAdventureOfLink.png' }
    ];

    const childEra = [
        { title: "Majora's Mask", src: '/images/MajorasMask.png' },
        { title: 'Twilight Princess', src: '/images/twilightPrincess.png' },
        { title: 'Four Swords Adventures', src: '/images/fourSwordsAdventures.png' }
    ];

    const adultEra = [
        { title: 'The Wind Waker', src: '/images/theWindWaker.png' },
        { title: 'Phantom Hourglass', src: '/images/phantomHourglass.png' },
        { title: 'Spirit Tracks', src: '/images/spiritTracks.png' }
    ];

    const wildsEra = [
        { title: 'Breath of the Wild', src: '/images/breathOfTheWild.png' },
        { title: 'Tears of the Kingdom', src: '/images/tearsOfTheKingdom.png' }
    ];

    const GameCard = ({ game }) => (
        <div className="flex flex-col items-center">
            {/* Connector to next/prev node within a branch */}
            <div className="w-1 h-8 bg-primary-container/40 my-2 shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
            <div className={`parchment-card w-48 p-3 rounded-lg border-2 ${game.isAnchor ? 'border-primary' : 'border-primary-container/40'} hover:border-primary-container transition-all cursor-pointer relative z-10 node-glow`}>
                {game.isAnchor && (
                    <div className="absolute -top-3 -right-3 bg-primary text-on-primary rounded-full p-1.5 shadow-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                )}
                <div className="w-full h-24 bg-surface-dim rounded mb-2 overflow-hidden">
                    <img className="w-full h-full object-cover transition-all duration-500 hover:scale-105" data-alt={game.title} src={game.src} />
                </div>
                <span className={`font-label-md text-label-md ${game.isAnchor ? 'text-primary font-bold text-[16px]' : 'text-primary'}`}>{game.title.toUpperCase()}</span>
                {game.desc && (
                    <>
                        <div className="h-0.5 w-full bg-primary-container/30 my-1"></div>
                        <p className="text-[10px] text-on-surface-variant leading-tight">{game.desc}</p>
                    </>
                )}
            </div>
        </div>
    );

    return (
        <div className="timeline-page">
            <main className="pt-24 pb-20 custom-scrollbar min-h-screen">
                <div className="max-w-6xl mx-auto px-margin-desktop relative">

                    {/* Page Header */}
                    <div className="text-center mb-xl">
                        <h1 className="font-display-lg text-display-lg text-primary-fixed-dim mb-xs">Chronicles of the Ages</h1>
                        <p className="font-body-lg text-body-lg text-primary-fixed/70 max-w-2xl mx-auto">
                            Trace the shattered history of Hyrule through the legendary Hero's journey across disparate realities.
                        </p>
                        <div className="flex justify-center mt-sm">
                            <div className="w-16 h-px bg-primary-fixed/30"></div>
                            <div className="mx-4 text-primary-fixed">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>change_history</span>
                            </div>
                            <div className="w-16 h-px bg-primary-fixed/30"></div>
                        </div>
                    </div>

                    {/* Unified Era */}
                    <div className="flex flex-col items-center relative mb-4">
                        {/* Initial connector */}
                        <div className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_12px_rgba(212,175,55,0.8)]"></div>
                        
                        {unifiedEra.map((game, index) => (
                            <GameCard key={index} game={game} />
                        ))}
                    </div>

                    {/* Bifurcation SVG (Desktop only) */}
                    <div className="relative h-24 w-full justify-center mb-4 hidden md:flex">
                        <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            {/* Fallen Hero Path */}
                            <path className="timeline-path" d="M 500 0 C 500 50, 166.6 50, 166.6 100" />
                            {/* Child Era Path */}
                            <path className="timeline-path" d="M 500 0 L 500 100" />
                            {/* Adult Era Path */}
                            <path className="timeline-path" d="M 500 0 C 500 50, 833.3 50, 833.3 100" />
                        </svg>
                    </div>
                    {/* Mobile connector */}
                    <div className="md:hidden flex justify-center mb-8">
                        <div className="w-1 h-12 bg-primary-container/40"></div>
                    </div>

                    {/* Three Branches Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 mb-24 relative z-10">
                        
                        {/* Fallen Hero Branch */}
                        <div className="flex flex-col items-center relative">
                            <div className="flex flex-col items-center mb-4">
                                <div className="bg-white/20 px-6 pt-4 pb-3 rounded-full border border-white/30 mb-2 text-center">
                                    <span className="font-label-md text-label-md text-white/70 uppercase tracking-widest block">Fallen Hero</span>
                                    <span className="text-[10px] text-white/70 uppercase">The Hero is Defeated</span>
                                </div>
                            </div>
                            
                            {fallenHero.map((game, index) => (
                                <GameCard key={index} game={game} />
                            ))}
                        </div>

                        {/* Child Era Branch */}
                        <div className="flex flex-col items-center relative">
                            <div className="flex flex-col items-center mb-4">
                                <div className="bg-white/20 px-6 pt-4 pb-3 rounded-full border border-white/30 mb-2 text-center">
                                    <span className="font-label-md text-label-md text-white/70 uppercase tracking-widest block">Child Era</span>
                                    <span className="text-[10px] text-white/70 uppercase">The Hero is Triumphant</span>
                                </div>
                            </div>

                            {childEra.map((game, index) => (
                                <GameCard key={index} game={game} />
                            ))}
                        </div>

                        {/* Adult Era Branch */}
                        <div className="flex flex-col items-center relative">
                            <div className="flex flex-col items-center mb-4">
                                <div className="bg-white/20 px-6 pt-4 pb-3 rounded-full border border-white/30 mb-2 text-center">
                                    <span className="font-label-md text-label-md text-white/70 uppercase tracking-widest block">Adult Era</span>
                                    <span className="text-[10px] text-white/70 uppercase">The Hero Departs</span>
                                </div>
                            </div>

                            {adultEra.map((game, index) => (
                                <GameCard key={index} game={game} />
                            ))}
                        </div>

                    </div>

                    {/* Era of the Wilds Section */}
                    <div className="mt-20 border-t-2 border-primary-container/20 pt-16 relative">
                        {/* Convergence SVG (Desktop only) */}
                        <div className="hidden md:flex absolute -top-24 left-0 w-full h-24 justify-center pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="timeline-path" d="M 166.6 0 C 166.6 50, 500 50, 500 100" />
                                <path className="timeline-path" d="M 500 0 L 500 100" />
                                <path className="timeline-path" d="M 833.3 0 C 833.3 50, 500 50, 500 100" />
                            </svg>
                        </div>
                        
                        {/* Mobile convergence connector */}
                        <div className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-primary-container/40"></div>

                        <div className="text-center mb-10">
                            <h2 className="font-display-lg text-3xl text-primary-fixed-dim mb-2">Era of the Wilds</h2>
                            <p className="font-body-md text-primary-fixed/60 max-w-lg mx-auto">
                                A distant future where the histories of the past have faded into myth, and the cycles of calamity begin anew.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* Initial connector for Wilds */}
                            <div className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_12px_rgba(212,175,55,0.8)]"></div>
                            
                            {wildsEra.map((game, index) => (
                                <GameCard key={index} game={game} />
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
