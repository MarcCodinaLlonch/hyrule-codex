import { Link } from 'react-router-dom';
import { games } from '../data/games';
import '../styles/games.css';
import '../styles/base.css';

export default function Games() {
    return (
        <div className="games-page">
            <main className="pt-24 pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">

                {/* Header & Search Section */}
                <section className="mb-xl text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-lg">
                    <div>
                        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-fixed-dim mb-0">The Legend Archive</h1>
                        <div className="page-header-divider"></div>
                        <p className="font-body-lg text-body-lg text-inverse-on-surface max-w-2xl">
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
                    <button className="ml-auto flex items-center gap-xs font-label-md text-label-md text-primary hover:text-primary-fixed uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-300">
                        <span className="material-symbols-outlined text-sm">clear_all</span>
                        Clear Filters
                    </button>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                    {games.map((game, i) => (
                        <Link
                            key={i}
                            to={`/games/${game.slug}`}
                            className="group relative bg-surface parchment-texture border border-outline/10 p-4 rounded-lg card-hover overflow-hidden block"
                        >
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]"></div>
                            <div className="relative mb-md aspect-[3/4] rounded-lg overflow-hidden border border-primary-container/30">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt={game.title}
                                    src={game.heroImage}
                                />
                                <div className="absolute top-2 right-2 bg-primary/90 text-on-primary font-label-md text-[10px] px-2 py-1 rounded-sm uppercase tracking-tighter w-fit">{game.platform}</div>
                            </div>
                            <div className="decorative-border pb-2 ">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 ml-2 group-hover:text-primary transition-colors">{game.title}</h3>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="font-label-md text-label-md text-on-surface-variant/70 ml-2">{game.year}</span>
                                    <span className="font-label-md text-label-md text-primary-container bg-on-primary-container/10 px-2 rounded-full mr-2 mt-1">{game.timeline?.eraLabel}</span>
                                </div>
                            </div> 
                        </Link>
                    ))}
                </div>

                {/* Pagination / Load More */}
                <div className="mt-xl flex flex-col items-center gap-md">
                    <div className="page-header-divider w-full max-w-none" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
                    <button className="px-xl py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 hover:shadow-lg shadow-md transition-all duration-300 flex items-center gap-md">
                        UNVEIL MORE RECORDS
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                    <p className="font-label-md text-label-md text-secondary-fixed-dim/60">Showing {games.length} of {games.length} Chronicled Adventures</p>
                </div>

            </main>
        </div>
    );
}
