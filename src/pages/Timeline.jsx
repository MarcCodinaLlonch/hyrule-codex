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
        { title: 'Skyward Sword', desc: 'The Creation and the Era of Hylia.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr2npzS8P8JxH7eVL76FSeTXrybQZjYPZvaKuUqJpqzRhkGISmE4g-3wJ90AGtCRexV519taYpnZbe_J8heZxY_58teA0iy_twNrSZxBuaQSg4jkzzKBLjBYkMpCVFgL8rk5ua_McsvaWImEanLAt1llaJLE15ViSKwRCEP39MSrHuHQdn2fX4tb4REQbmEUerb7NdqzuCTvQFx6_fCJg3mUOQVJx5qQSo2rsBFECejlunr_pHfAsPYA' },
        { title: 'The Minish Cap', desc: 'The legend of the Picori and Vaati.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlP0QkQ9713_rV69w9_zUjL_1oQ2yJtQ83r7y7q9s4ZqE0L-Nl0QhB6425_1jC2-2g_h19nFmE79V1qV24R9xK63C38-h95u7K-4xV0xU434ZzE7wU263kL85pC34F9W9yTzX7nQJ5kR78-qP49P35F_P5P7J409S-jD70uJ0g3H6-W-185C34uX2y630V8y3' },
        { title: 'Four Swords', desc: 'The hero splits to seal the wind mage.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7z_kQ6u1vLzD6q_8mE9_L4LqP33LqE9uQ4K2D6_yT0C6gV304xN9uQ335u_y4kX8qC5mD0E993L23E4yP75x-C340N6yQ8L3gV0E3_3D4-mR_5T0yL7qK0K69N8L448-6TqT2yL8Q8uP690X7xJ35y92Q3-Q48_3yF0_yT2_y0C' },
        { title: 'Ocarina of Time', desc: 'The era that fractured time itself.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp8DF6UzrcwLpGQcdcInvMq5P0nlK_QxALJH26dvpN4AYU_oCLIPsn-cI7Ag_On-4XpYTOXo76ULLJC-H9Dhb8hYRlbVQ7Pq-g8J5Wl8ScD_SCceCTZF16pmz6eyvhFOIukYmPcOsGwc2pQx3DFuVC1jwS6ld3YQNbxNcAXbVbS32aRSYLmeEUBep7S3OYIcDrSqdC2O2TcrE0kl2JDis8bDiaEx5jq_8g3r2T73u-qvz-NKiqcCjkgg', isAnchor: true }
    ];

    const fallenHero = [
        { title: 'A Link to the Past', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLH_rPMODKJZKNLEju0HqeRNyWVf3dUY2n5JLckkw6tDSoPUI_fCIIChZVN9bTBrWEk7yTeJI4M71fm7hUoKmzOeYqSPAGEQphwad2dRFTujxL-bNLCETK8EB6etQs6Rk69W_Pb_VcSBFb9wvxd7h9OD2aErr1c4NZNs93xdXXEmd02vPkV8wYIJOEijwjCzZQA8sJY-fM7j0WZgpaKuen1SrH94Yt8IZy2SWlD-YTaEG04XYmg8YLBQ' },
        { title: "Link's Awakening", src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6LTHNuYw-PPy3V9kxHuZ3dMVx0jIldZ1sbR8thsrbtt5SU_8Qwkp-4XDuckwGsOFVq9HkaAAEMSb1oY5pE3eHCOPylNjsEqyo_cPVcLS2eUnbF7-EJFCkhIyf1R0uT_90vEuNC7sXUIG9tvol1psO_DDim7momZXr1tSXqDQAdOoNy_QQvfIr8P-Ksvgn347bTPL0LFSo0pnfokzhlvRI1zSRWJj85j2J-7CNHciPLK6w' },
        { title: 'Oracle of Seasons & Ages', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0957zQ7_K5_r_L8-9z990K44yL7zL7v43U73V76Q8LqK7qP22X7E298qPqQyE3D3x48-D0V749_u-U4mR9uC-Q44M603uK6V-7PqTqN7xK4M05Q4Q0NqD4uT8q24L_2_3xM_8y_84vL9E9Q3_9T4V439y70u' },
        { title: 'A Link Between Worlds', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_9y_2D43y9936_uQ03T9-M38N60C_P9mE0TqV6K4uE98V2066uC2mQ70P2P_6T73y2-VqN338u7v49E7N7679y7Q0qT74066060_D8Q0_E6y3_82E_4P0Q2_39X3Q98mK789_y3K4_T' },
        { title: 'Tri Force Heroes', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC73489Q_73K2V8qL098M3y-26Q97K3uD_4_3qP40C8v6444T6-NqK24Tq9M84E9T9K2T46q4080P88836yD2E_92P93946C_07D0C09Q7x678q3V73N8qC0D6xL2Pq_y9y_0L_q8V7_2u4_0M2M09Q6044' },
        { title: 'Echoes of Wisdom', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqQ9387x2_T6_yE74V3y8q2-0D6V698m8-0C64_83P8L38V89Q8x0y7V33qQ64E_T72P9qP8_40DqT07C3y2L4886E_0qDq3T4P9M7_8_x30-M2N9M20vC4u7Q39D8P0_3M39_33C9uL7D7Q2363Q' },
        { title: 'The Legend of Zelda', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrXWvbxXpqC-_RS9tpDjQD3dc-oYqi5YhVUfZ6v67vHOKdIp9wFGafizd40qLepKUf7f-2azu2L9ccSudPWQd7kNtoqAmW1UtjtHNwqW7gJcLg3o1R7ZlgJ_3IXSbVYnS1uafJPwUL5j1Qd2YaenLT4CIshx4V4ERfJwjKpj3KzFPT2UcsEz3ukzflVoxdisOeW16d5Kbcgp7x7-R7rbG4ZRnfi5jjeGf3UUJ8_k5rO_k-GqKEkHjaQ' },
        { title: 'The Adventure of Link', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC04uQ0yQ4M_0vD9y94982N03qL40DqM4y9P64Q76u36-22M8E3TqM_24L2u02P44-V7_vQ960N2M9K839082V2K98DqN837L29840vQ6v78V4-672Q-07E20V4T44C333_6_68V9V_Q3N_N' }
    ];

    const childEra = [
        { title: "Majora's Mask", src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQhp4U1UVCbmzzBwn9Yh0dU7egpnxdIR8hb369N_epF2SVIS3MxFho0gs4lYtIzjZVqXtKH9R7d6zhqHg5SG-f5Cxi5C3RjfNcePPgOcNf2iV1Im_4Zc601mKl682NMGmxlcLTggidGqSK7m2vfgJxYnJGpZaLSGV2vEgaQpXRZzL5uiqe-k85-apvOsif8H27tMezGmLE1_HoEjcpEbODBmAQKviL2pmElrrTcDZoggxFtneO6Zb4gQ' },
        { title: 'Twilight Princess', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc3Ppe-iu_Jb3p5l9gWdBZwB5bhg9y_Nhbr5Z7gf6AW0Gbz2HytRIwQ-fXepc16eTRsFGokGSXWdYj7ZD01uiqIwjAaZbhbf6gyS3Zy4nKNBsuTd8TLAKkXv0_SwwTk3uE_DqanHaN2LVV4LMx9qRXamZej6hJNgSAsD5vqaYN3dN2guNik0-4-861ymJXTMs2o7I2v85A4d9hEhYImD3sbdBfOwd6t1gmviJ34XN5xhxIES1h72DBeA' },
        { title: 'Four Swords Adventures', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB232Q_T6V8P4V896q6M04V7Q49P829C0M876K3Q3C8_D_866_M89yq76K70V443-433_T_7_0y7K_V_3V0u86u66C7T92C_Tq8040_D4L22Q44yqK2qL4vV8Q079Q_0E69_C3yV9x8N0u2V06V4L9D' }
    ];

    const adultEra = [
        { title: 'The Wind Waker', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHIaG6AYpcU1lRa1y6L33VWuRuRj2xadD06ICaP8OilcW-7xuo4tH2zF1mGNr1zbUXlwXqr7XR5vJAYPxF4_3KuLJspupOLWfTT3v1PAftT5vx3T6-O3DnPllzHhXDm6Rnh_NS-wxZ8ADTauUXj6O3WMDnx7q5YHujNLRHaXlGKjx-tnDkTST274weLOT8bjINhwGCKK0_F_wBNP05YCnHyAu5YvabaSYaFVBuAawEzNqPMaoWDqbxsg' },
        { title: 'Phantom Hourglass', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_JWrevJoPSV6kcUlvGjQJ94iDo5AAxr-ImOzwucR1KE2qSW8Q2XfxK-qaAmcWFH4acwFWbdHuuZKEoKL5vVRqYSwpRpoq-rYxTKj7pO7Aa77I0HBaHoVa_FuwrjEzZaP1dMV84LiXV_nrxLCC5IssU9_kHW9gCqDwWSQlOi4hv1gVToc52513-b-abkNhXJFR59jaZILbNLKWucBGhPDq2mVYVyOSVBzHIsho6GMyfudaGrGaGh_eTw' },
        { title: 'Spirit Tracks', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8T0P67L0E2Lq3T66y093D8N6v66qT7Q063q7Q39uDqT0D6638K0vK8M4M8-q3_y7Q6M36D9P7M8C236E08M82V4_Q2L4v0T7uM60E97D40D36V6M3yQ4v3y9T74D4q324Q_C_0v0V2vK38M4yD' }
    ];

    const wildsEra = [
        { title: 'Breath of the Wild', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD870_P0Q3V2_9N837V6V2E4Q8M4C0-89q4D_4M2004L2N80vE43M063990M89q39M9K4V2D642D_C9yM276M076P779Q2363V8yD0E80E8T7V2u7v02K7u0v2q7D2T2N80v6323_yqE82V88y7C' },
        { title: 'Tears of the Kingdom', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_D226C2Q8q6L28V8E8T396K6P3_M4Q4M2E36D96860E2_K6780_38M8V264T2294N24P808qK92V6323_0L7M70V3_L2M786y7q2N0C2Q3v3M4_0u4vK3N_0D_03960y2Q7T2T7v2q0v3E9_0V' }
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
                    <img className={`w-full h-full object-cover ${game.isAnchor ? '' : 'grayscale hover:grayscale-0 transition-all duration-500'}`} data-alt={game.title} src={game.src} />
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
