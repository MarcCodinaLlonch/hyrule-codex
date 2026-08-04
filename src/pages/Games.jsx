import { Link } from 'react-router-dom';
import '../styles/games.css';
import '../styles/base.css';

export default function Games() {
    return (
        <div className="games-page">
            <main className="pt-24 pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">

                {/* Header & Search Section */}
                <section className="mb-xl text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-lg">
                    <div>
                        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-fixed-dim mb-xs">The Legend Archive</h1>
                        <p className="font-body-lg text-body-lg text-secondary-fixed-dim/80 max-w-2xl">
                            Traverse the fractured timelines of Hylian history. Every entry, every hero, every legend meticulously chronicled for the curious explorer.
                        </p>
                    </div>
                    {/* Search Bar */}
                    <div className="relative w-full md:w-80 group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
                        <input
                            className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline/30 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 rounded-xl font-body-md text-on-surface placeholder:text-outline transition-all"
                            placeholder="Search the records..."
                            type="text"
                        />
                    </div>
                </section>

                {/* Filter Bar */}
                <div className="mb-lg p-lg bg-surface-container-high/95 parchment-texture rounded-xl border border-primary-container/20 shadow-lg flex flex-wrap items-center gap-lg">
                    <div className="flex items-center gap-sm">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>filter_list</span>
                        <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Refine Archives:</span>
                    </div>
                    <div className="flex flex-wrap gap-md flex-1">
                        <div className="relative group">
                            <select className="appearance-none pl-4 pr-10 py-2 bg-surface border border-outline/20 rounded-lg font-label-md text-on-surface focus:outline-none focus:border-primary cursor-pointer hover:bg-surface-container-lowest transition-colors">
                                <option>All Consoles</option>
                                <option>NES / SNES</option>
                                <option>Nintendo 64</option>
                                <option>GameCube / Wii</option>
                                <option>Switch</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-primary">expand_more</span>
                        </div>
                        <div className="relative group">
                            <select className="appearance-none pl-4 pr-10 py-2 bg-surface border border-outline/20 rounded-lg font-label-md text-on-surface focus:outline-none focus:border-primary cursor-pointer hover:bg-surface-container-lowest transition-colors">
                                <option>All Eras</option>
                                <option>Pre-Split</option>
                                <option>Downfall Timeline</option>
                                <option>Child Timeline</option>
                                <option>Adult Timeline</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-primary">timeline</span>
                        </div>
                        <div className="relative group">
                            <select className="appearance-none pl-4 pr-10 py-2 bg-surface border border-outline/20 rounded-lg font-label-md text-on-surface focus:outline-none focus:border-primary cursor-pointer hover:bg-surface-container-lowest transition-colors">
                                <option>Release Year</option>
                                <option>1986 - 1995</option>
                                <option>1996 - 2005</option>
                                <option>2006 - 2015</option>
                                <option>2016 - Present</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-primary">calendar_today</span>
                        </div>
                    </div>
                    <button className="ml-auto flex items-center gap-xs font-label-md text-label-md text-primary hover:underline transition-all">
                        Clear Filters
                    </button>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                    {[
                        { title: 'Skyward Sword',            year: '2011', era: 'Origin Era',     console: 'WII', src: 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Legend_of_Zelda_Skyward_Sword_HD_box_art.png' },
                        { title: 'The Minish Cap',           year: '2004', era: 'Picori Era',     console: 'GBA', src: 'https://upload.wikimedia.org/wikipedia/en/a/a5/The_Legend_of_Zelda_The_Minish_Cap_GBA_cover.jpg' },
                        { title: 'Four Swords',              year: '2002', era: 'Unified Era',    console: 'GBA', src: 'https://upload.wikimedia.org/wikipedia/en/9/96/The_Legend_of_Zelda_A_Link_to_the_Past_and_Four_Swords_GBA_cover.jpg' },
                        { title: 'Ocarina of Time',           year: '1998', era: 'Hero of Time',   console: 'N64', src: 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time_N64_cover_art.jpg' },
                        { title: 'A Link to the Past',         year: '1991', era: 'Dark World',     console: 'SNES', src: 'https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_cover_art.jpg' },
                        { title: "Link's Awakening",          year: '1993', era: 'Koholint Era',   console: 'GB',  src: 'https://upload.wikimedia.org/wikipedia/en/b/b8/The_Legend_of_Zelda_Link%27s_Awakening_Switch_cover_art.png' },
                        { title: 'Oracle of Seasons & Ages',year: '2001', era: 'Dual Realms',    console: 'GBC', src: 'https://upload.wikimedia.org/wikipedia/en/0/06/The_Legend_of_Zelda_Oracle_of_Seasons_GBC_cover_art.jpg' },
                        { title: 'A Link Between Worlds',    year: '2013', era: 'Lorule Era',     console: '3DS', src: 'https://upload.wikimedia.org/wikipedia/en/9/94/The_Legend_of_Zelda_A_Link_Between_Worlds_3DS_cover_art.jpg' },
                        { title: 'Tri Force Heroes',          year: '2015', era: 'Hytopia Era',    console: '3DS', src: 'https://upload.wikimedia.org/wikipedia/en/e/eb/The_Legend_of_Zelda_Tri_Force_Heroes_3DS_cover_art.jpg' },
                        { title: 'Echoes of Wisdom',         year: '2024', era: 'Wisdom Era',     console: 'SWITCH', src: 'https://upload.wikimedia.org/wikipedia/en/6/66/The_Legend_of_Zelda_Echoes_of_Wisdom_cover_art.png' },
                        { title: 'The Legend of Zelda',      year: '1986', era: 'Hyrule Fantasy', console: 'NES', src: 'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png' },
                        { title: 'The Adventure of Link',    year: '1987', era: 'Triforce Era',   console: 'NES', src: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Zelda_II_The_Adventure_of_Link_NES_box_art.jpg' },
                        { title: "Majora's Mask",             year: '2000', era: 'Termina Era',    console: 'N64', src: 'https://upload.wikimedia.org/wikipedia/en/6/67/The_Legend_of_Zelda_Majora%27s_Mask_N64_cover_art.jpg' },
                        { title: 'Twilight Princess',        year: '2006', era: 'Shadow Realm',   console: 'WII', src: 'https://upload.wikimedia.org/wikipedia/en/2/23/The_Legend_of_Zelda_Twilight_Princess_GameCube_cover_art.jpg' },
                        { title: 'Four Swords Adventures',   year: '2004', era: 'Shadow Era',     console: 'GCN', src: 'https://upload.wikimedia.org/wikipedia/en/4/4c/The_Legend_of_Zelda_Four_Swords_Adventures_GameCube_cover_art.jpg' },
                        { title: 'The Wind Waker',           year: '2002', era: 'Great Sea',      console: 'GCN', src: 'https://upload.wikimedia.org/wikipedia/en/7/7b/The_Legend_of_Zelda_The_Wind_Waker_GameCube_cover_art.jpg' },
                        { title: 'Phantom Hourglass',        year: '2007', era: 'Ocean Realm',    console: 'NDS', src: 'https://upload.wikimedia.org/wikipedia/en/0/08/The_Legend_of_Zelda_Phantom_Hourglass_DS_cover_art.jpg' },
                        { title: 'Spirit Tracks',            year: '2009', era: 'New Hyrule',     console: 'NDS', src: 'https://upload.wikimedia.org/wikipedia/en/e/ee/The_Legend_of_Zelda_Spirit_Tracks_DS_cover_art.jpg' },
                        { title: 'Breath of the Wild',       year: '2017', era: 'Calamity Era',   console: 'SWITCH', src: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg' },
                        { title: 'Tears of the Kingdom',     year: '2023', era: 'Sky Era',        console: 'SWITCH', src: 'https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover_art.jpg' },
                    ].map((game, i) => (
                        <Link
                            key={i}
                            to="/games/breath-of-the-wild"
                            className="group relative bg-surface parchment-texture border border-outline/10 p-4 rounded-lg card-hover overflow-hidden block"
                        >
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]"></div>
                            <div className="relative mb-md aspect-[3/4] rounded-lg overflow-hidden border border-primary-container/30">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt={game.title}
                                    src={game.src}
                                />
                                <div className="absolute top-2 right-2 bg-primary/90 text-on-primary font-label-md text-[10px] px-2 py-1 rounded-sm uppercase tracking-tighter w-fit">{game.console}</div>
                            </div>
                            <div className="decorative-border pb-2 ">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 ml-2 group-hover:text-primary transition-colors">{game.title}</h3>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="font-label-md text-label-md text-on-surface-variant/70 ml-2">{game.year}</span>
                                    <span className="font-label-md text-label-md text-primary-container bg-on-primary-container/10 px-2 rounded-full mr-2 mt-1">{game.era}</span>
                                </div>
                            </div> 
                        </Link>
                    ))}
                </div>

                {/* Pagination / Load More */}
                <div className="mt-xl flex flex-col items-center gap-md">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent relative mb-md">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-surface-container rotate-45 border-2 border-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary scale-75 -rotate-45" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                        </div>
                    </div>
                    <button className="px-xl py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-md border-b-4 border-on-primary-fixed-variant">
                        UNVEIL MORE RECORDS
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                    <p className="font-label-md text-label-md text-secondary-fixed-dim/60">Showing 20 of 20 Chronicled Adventures</p>
                </div>

            </main>
        </div>
    );
}
