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
                        { title: 'Ocarina of Time',    year: '1998', era: 'Hero of Time',   console: 'N64', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-V8UqC9QEDvRGHnlo2XrHYSGG8uyZAMB_xM0VqSJuIajgdNmh7F3uz8JKoGrWf-Rjv0bYOJqq8q6yA7_K_s1s9yfwCWaibpzIXnmrrwDtIvUO5EEHutlDO1JSYdWmDlHZvxMNJ2dMXLhoAOXnh8z0mVtwSvkJUcOZpS_zNl95myfEJhLe2eIozqFerv6aEV2GP3IL4i6tDWbIcONR4mBUnda9g__AW4bXUOiEJaDODrDu7d-zR_sDA' },
                        { title: "Majora's Mask",       year: '2000', era: 'Termina Era',    console: 'N64', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzXFZEq6YyszQ2J92_03BCbBs9fGYTji0zJGGy_QZmvUjq1Oag6YzZ-w1sYONXvXRUC-btCEa4Nm42HZ1wLD6733TDOxW6X5983FPvZvTttCLZr2SSyt5ZsjxwqO0B506xqlz953TDh4vVZ33s3mV7uTFE22-gvzBCFwF0WNEz1Vd34UWvGh6uuVD7xrUyP4DCrFPJhAG-oi1HZHnWhaqSR5GFYXvkuhDNvsSeBTvvK0eFDQkrS9e7og' },
                        { title: 'The Wind Waker',      year: '2002', era: 'Great Sea',      console: 'GCN', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkEdKjueKDNAWfhalCnFJxm6OLRkovolHDMrNAeo1QQDh2epI-psZEVGWZ86nlQ_gmMKCR2x_IoRV0t8LJbeRE-UGfuYQQdY09RsNOiA1mBZhnrsfisj3w-pBneUHI_bUp6Q1kzznFuC8kumFFBnXlDj-IpDTf-GEbjFaj0ep2-XbVcZyn8tqmB-I39uqKN9dbGMmObhwY8KWZbRJLkucOLiTzAl5K5JutrUvaCi6mmuXkRv_Fdf1imA' },
                        { title: 'Twilight Princess',   year: '2006', era: 'Shadow Realm',   console: 'WII', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrL5TpQ7QPz6CZiXDqWR6bnUGNO9IaQ5iRiHfvCK_Q-y8JIgl02W6YS6FKIdGTOCXj9Z-uwePm-p3J4UFfdeUfq2efpqjQkbKKGJMotSF8svS_R8OXsZKPmzPpDUdK0Pcgm2K1YsFZtgQQPGUjFCpBsxo7blNqC_MOLwATNvq8nxO_NF0hm7JY59VluzeESMeQIla9kKOAmQvkhsn7kSRwWpCLCSlDiTX3dnZK15iyELLiEhcdIpJOHw' },
                        { title: 'Breath of the Wild',  year: '2017', era: 'Calamity Era',   console: 'SWI', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBghrP2UrwSRam9G8ME0Upy4pAUxnK2N3wUaQoPUWVvJQ0DJg7ghmVezZ5dUVGe0GKI_GvxEGgHbcxhigs34i91Y2H8Z2cTehrkrE8HzGRjgjNCtOLr0sLGPzFjjQZEXUwWKjvV7Sen2xrMffbMzHn5fGdl5dO8LYIgVYBhmibFo1DQBsS-bhWgqGafKmRYL33WMW2MbMhQy78hEnFPevPNKqATqEMyKYw4Mtc4WkwinSiuXSpREW1k_w' },
                        { title: 'A Link to the Past',  year: '1991', era: 'Dark World',     console: 'SNES', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN8ZX8edxcWtdp1S5oyNncjdN_bHCgb4_R40sUVy-P65Ql0Xk9LjVvawue06Q2jjGBELNslzUGa2dvQ-pO8hB1bu-otV7AcA2wrtpgTZk-JC0GnKCSvRhBw8A2WIxzuXWP5jZjByfhDAK_RBTBWPPAQ-W8ZLXRPwczzZ_fVNr44HozGrVYeXIDl2w1CmxAlyMhvWXQE4hUL-rfAz1iXGLA2CDpQfd6zQt_fOWX6sZpywZ5yNhGrZMQ' },
                        { title: 'Skyward Sword',       year: '2011', era: 'Origin Era',     console: 'WII', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxVTxQpgyWCFO2PTOZa7xL_7lkJyvr5Pf-hF6ijCPut-BHuLZKFkIvbwRALurfb6HmvhCNBJ08jqvZeCie8pYlFRVN9tlK6zFIjOSHIK584t4xmhRV1zBG5zeL4o59kJ-pz7-LPF6iuESiBWv7aCPJr9PByTHJcjVPNMfBvOzrNkfmQPLYqoH-RcwuXZlMgiy_fMyaSLwIsYgO0t7Vyz6L2mo81e7ZAjiTzvlJ6mJckPVavFAG3ICWmA' },
                        { title: 'Tears of the Kingdom',year: '2023', era: 'Sky Era',        console: 'SWI', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi5qPPhN0lPS9u9SU9m__UqO3a6iibLCC19m75Z2Z24QrBDb27iX4Jr8xMmGPzAPM93c8DYsFDPhlmGLxAdlmzAIQbcdmipG8rxoFxAwmHtwvd2mguvXWlgJFqRw5LLZHVkroEi07EHieQLinOtoJwV_pAx2uZFACfeenYJOe0xUxpua8v_OifhXoJI4ipPw-c_uVXybJMPlVHmai69BcrbeIPsCWGVrz7NopuDMjTs-sG7KdnG1Uamw' },
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
                                <div className="absolute top-2 right-2 bg-primary/90 text-on-primary font-label-md text-[10px] px-2 py-1 rounded-sm uppercase tracking-tighter">{game.console}</div>
                            </div>
                            <div className="decorative-border pb-2">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 group-hover:text-primary transition-colors">{game.title}</h3>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="font-label-md text-label-md text-on-surface-variant/70">{game.year}</span>
                                    <span className="font-label-md text-label-md text-primary-container bg-on-primary-container/10 px-2 rounded-full">{game.era}</span>
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
                    <p className="font-label-md text-label-md text-secondary-fixed-dim/60">Showing 8 of 29 Chronicled Adventures</p>
                </div>

            </main>
        </div>
    );
}
