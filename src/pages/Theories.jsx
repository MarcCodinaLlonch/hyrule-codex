import { Link } from 'react-router-dom';
import '../styles/theories.css';
import '../styles/base.css';

const theories = [
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMUp4VZyuICo1_U_CSDZbB8W5mKE4npy7SwU9yapBr5WqDE5CbZWHz3c5QWXq3XxR2Mgzl39Nka_tDgngfMs1upDEhMxt0lSytju1khvrlvB1YtoP8sCS3Xi_7NrfFA7Egebe0pmxaQqqWTc592OfNWRDHLhh6ijqBNxw37UVNNqhPZLkDnHoWunBdo6fICIoNCPC-WwPGbwIYl6CZYIzbTnLQ896ModebAtLip2g5w7tjF5H6RQzrhA',
        date: 'Year 10,000 BCE',
        dateIcon: 'history_edu',
        tags: ['ZONAI', 'LEGEND'],
        title: 'The Secret of the Zonai: Star-Born or Earth-Bound?',
        excerpt: 'New evidence suggests the Zonai may not have descended from the heavens as originally believed, but rather emerged from the subterranean depths to escape a forgotten cataclysm.',
    },
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-kPrEQu5H5vwR9RRi4Of6dAb36Zm2GE6mJY84UdSweorCdTEnv_6S6yHo6uKIPgBcvYuEX5z02_MW_8V0qoaZ7HvHY1TBchtqCVC_kX4GXqfeCJtFHNVY8wStL8MadtMw3FYv6YKII9gte01TDLL0oGPanygo4houQ7hwZLznGYB_4Py6MEqoXlpwQcw8225v9v1n7hFQa3EsO5TzCZV2W_XxwPZjFKAy8BbYOFODlgP0qKYjJoT-aA',
        date: 'New Era, Year 2',
        dateIcon: 'auto_stories',
        tags: ['KOROKS', 'MAGIC'],
        title: 'The Korok Seeds: Guardians of the Lost Forest Pulse',
        excerpt: "Is Hestu's dance more than just a joyful celebration? Scholars theorize that the distribution of seeds across the realm creates a localized magical grid that keeps Ganon's Malice at bay.",
    },
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQBHV3EojN3xIK8pMZ6Ua7Es4YtuB-H6SOO8h7jbRCoSr1AozpKUC46nuSzZIcVjhDpEkbP3g5W9Gl8yuhhOlsXkBlRbduJty5igYy70ihLSTfJ7ei1v7-Ud_Vaj5OsHHSjNm-KvRs0QkD4jk-5_V38D72uxxPUcPPOLwy1rBNnbez6uB-6i410xk5Y_TG6ICJLVgNYIgJndxZ_fWRSn_27N2NUNJtZznYnxu7AumuISbX-GrlZVgv8g',
        date: 'Pre-Calamity',
        dateIcon: 'visibility',
        tags: ['SWORD', 'SOUL'],
        title: 'The Master Sword\'s Sentience: A Link to Fi?',
        excerpt: 'Recent echoes within the blade suggest the spirit of the sword\'s creator may still be communicating across timelines. Explorations into the Resonance Theory within the Silent Realm.',
    },
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7MT-DPF6ooCokTQV1gzkXxWz9-1NlEuArVjGh7lAVn8TucTqNwlmP5IXpGE-oIHD7DyEKnOJ4kYpHs_zsaWOV1CjJCFfa6E2RhpbSwAOFsiSzxL1lfcIIQkGImkvrU6ntU5SZIHhlYyFLl2ZNMkatDRkLNvOxRyeDuwyLp9ZcsjQ28iSmUN3wmi6HijYUw6nV06frgtGRFXEVAu4vNHW5XhL3tYlIL5BiCbX8Xlvf78ewjBbSNSPh_A',
        date: 'Sky Era, Year 5',
        dateIcon: 'architecture',
        tags: ['GEOLOGY', 'SKY'],
        title: 'The Skyward Connection: Gravity & Divine Intent',
        excerpt: "Why do only certain fragments of Hyrule rise? A study of the mineral composition of the floating islands reveals a magnetic resonance only found in the presence of Hylia's grace.",
    },
];

export default function Theories() {
    return (
        <div className="theories-page">
            <main className="pt-24 pb-xl px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto min-h-screen">

                {/* Header Section */}
                <section className="mb-xl text-center">
                    <span className="text-primary-fixed font-label-md text-label-md uppercase tracking-[0.2em] block mb-2">Speculative Archive</span>
                    <h1 className="text-primary-fixed-dim font-display-lg-mobile md:text-display-lg font-display-lg mb-0 italic">Ancient Theories &amp; Hypotheses</h1>
                    <div className="page-header-divider"></div>
                    <p className="text-inverse-on-surface font-body-lg text-body-lg max-w-2xl mx-auto">
                        Explore the whispers of the past. These documented theories represent the collective findings of Hyrule's most dedicated scholars and fan-cartographers.
                    </p>
                </section>

                {/* Theory Cards */}
                <div className="flex flex-col gap-lg">
                    {theories.map((theory, i) => (
                        <article key={i} className="parchment-card p-6 md:p-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-lg group hover:translate-y-[-4px] transition-transform duration-300">
                            <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-lg relative ring-2 ring-primary/20">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt={theory.title}
                                    src={theory.img}
                                />
                                <div className="absolute top-2 left-2 fan-theory-tag px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded shadow-md z-10">Fan Theory</div>
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex items-center gap-sm mb-2 text-on-surface-variant font-label-md text-label-md">
                                    <span className="material-symbols-outlined text-[18px]">{theory.dateIcon}</span>
                                    <span>Archived: {theory.date}</span>
                                </div>
                                <h2 className="text-primary font-headline-sm text-headline-sm mb-3 group-hover:text-primary-container transition-colors">{theory.title}</h2>
                                <p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">{theory.excerpt}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex gap-sm">
                                        {theory.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 bg-tertiary-container/30 text-on-tertiary-container rounded text-[11px] font-bold">{tag}</span>
                                        ))}
                                    </div>
                                    <a className="flex items-center gap-1 text-primary font-bold font-label-md text-label-md hover:underline" href="#">
                                        Read Archive <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-xl text-center">
                    <div className="page-header-divider mb-xl"></div>
                    <button className="mt-lg px-10 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 hover:shadow-lg shadow-md transition-all duration-300">
                        Uncover Older Scrolls
                    </button>
                </div>

            </main>
        </div>
    );
}
