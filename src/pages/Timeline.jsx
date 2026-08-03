import { useEffect } from 'react';
import '../styles/timeline.css';
import '../styles/base.css';

export default function Timeline() {

    // Timeline float animation — previously initTimelineFloat() in main.js
    useEffect(() => {
        const cards = document.querySelectorAll('.parchment-card');
        cards.forEach((card, index) => {
            const delay = index * 0.2;
            card.style.animation      = `float ${3 + index % 2}s ease-in-out infinite alternate`;
            card.style.animationDelay = `${delay}s`;
        });
    }, []);

    return (
        <div className="timeline-page">
            <main className="pt-24 pb-12 overflow-x-auto custom-scrollbar min-h-screen">
                <div className="max-w-[2000px] mx-auto px-margin-desktop relative">

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

                    {/* Interactive Timeline Visualization */}
                    <div className="relative h-[800px] w-full min-w-[1400px]">

                        {/* SVG Connections Background */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 800">
                            {/* Central Path */}
                            <path className="timeline-path" d="M 50 400 L 250 400" />
                            {/* Declined Branch (Top) */}
                            <path className="timeline-path" d="M 400 400 C 450 400, 500 200, 550 200 L 1300 200" />
                            {/* Child Hero Branch (Middle) */}
                            <path className="timeline-path" d="M 400 400 L 1300 400" />
                            {/* Adult Hero Branch (Bottom) */}
                            <path className="timeline-path" d="M 400 400 C 450 400, 500 600, 550 600 L 1300 600" />
                        </svg>

                        {/* Start Node: Skyward Sword */}
                        <div className="absolute left-0 top-[340px] flex items-center gap-4">
                            <div className="parchment-card w-48 p-3 rounded-lg border-2 border-primary-container node-glow hover:scale-105 transition-transform cursor-pointer">
                                <div className="w-full h-24 bg-surface-dim rounded mb-2 overflow-hidden">
                                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                         data-alt="Skyward Sword - Era of Hylia"
                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr2npzS8P8JxH7eVL76FSeTXrybQZjYPZvaKuUqJpqzRhkGISmE4g-3wJ90AGtCRexV519taYpnZbe_J8heZxY_58teA0iy_twNrSZxBuaQSg4jkzzKBLjBYkMpCVFgL8rk5ua_McsvaWImEanLAt1llaJLE15ViSKwRCEP39MSrHuHQdn2fX4tb4REQbmEUerb7NdqzuCTvQFx6_fCJg3mUOQVJx5qQSo2rsBFECejlunr_pHfAsPYA" />
                                </div>
                                <span className="font-label-md text-label-md text-primary font-bold">SKYWARD SWORD</span>
                                <div className="h-0.5 w-full bg-primary-container/30 my-1"></div>
                                <p className="text-[10px] text-on-surface-variant leading-tight">The Creation and the Era of Hylia.</p>
                            </div>
                            <span className="material-symbols-outlined text-primary-fixed animate-pulse">arrow_forward</span>
                        </div>

                        {/* Anchor Node: Ocarina of Time */}
                        <div className="absolute left-[260px] top-[300px]">
                            <div className="parchment-card w-64 p-4 rounded-xl border-4 border-primary node-glow hover:scale-110 transition-transform z-10 cursor-pointer relative">
                                <div className="absolute -top-4 -right-4 bg-primary text-on-primary rounded-full p-2 shadow-lg">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <div className="w-full h-32 bg-surface-dim rounded mb-3 overflow-hidden">
                                    <img className="w-full h-full object-cover"
                                         data-alt="Ocarina of Time - Era that fractured time"
                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp8DF6UzrcwLpGQcdcInvMq5P0nlK_QxALJH26dvpN4AYU_oCLIPsn-cI7Ag_On-4XpYTOXo76ULLJC-H9Dhb8hYRlbVQ7Pq-g8J5Wl8ScD_SCceCTZF16pmz6eyvhFOIukYmPcOsGwc2pQx3DFuVC1jwS6ld3YQNbxNcAXbVbS32aRSYLmeEUBep7S3OYIcDrSqdC2O2TcrE0kl2JDis8bDiaEx5jq_8g3r2T73u-qvz-NKiqcCjkgg" />
                                </div>
                                <span className="font-headline-sm text-headline-sm text-primary">Ocarina of Time</span>
                                <div className="h-1 w-24 bg-primary-container mt-1 mb-2"></div>
                                <p className="text-xs text-on-surface-variant italic">The era that fractured time itself.</p>
                            </div>
                        </div>

                        {/* DECLINED HERO BRANCH */}
                        <div className="absolute top-[80px] left-[450px]">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="branch-label font-label-md text-label-md text-error bg-error-container/20 px-1 py-4 rounded border border-error/30 uppercase tracking-widest">Fallen Hero</span>
                                <div className="flex gap-12">
                                    {[
                                        { title: 'A Link to the Past', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLH_rPMODKJZKNLEju0HqeRNyWVf3dUY2n5JLckkw6tDSoPUI_fCIIChZVN9bTBrWEk7yTeJI4M71fm7hUoKmzOeYqSPAGEQphwad2dRFTujxL-bNLCETK8EB6etQs6Rk69W_Pb_VcSBFb9wvxd7h9OD2aErr1c4NZNs93xdXXEmd02vPkV8wYIJOEijwjCzZQA8sJY-fM7j0WZgpaKuen1SrH94Yt8IZy2SWlD-YTaEG04XYmg8YLBQ' },
                                        { title: "Link's Awakening",   src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6LTHNuYw-PPy3V9kxHuZ3dMVx0jIldZ1sbR8thsrbtt5SU_8Qwkp-4XDuckwGsOFVq9HkaAAEMSb1oY5pE3eHCOPylNjsEqyo_cPVcLS2eUnbF7-EJFCkhIyf1R0uT_90vEuNC7sXUIG9tvol1psO_DDim7momZXr1tSXqDQAdOoNy_QQvfIr8P-Ksvgn347bTPL0LFSo0pnfokzhlvRI1zSRWJj85j2J-7CNHciPLK6w' },
                                        { title: 'The Hyrule Fantasy',  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrXWvbxXpqC-_RS9tpDjQD3dc-oYqi5YhVUfZ6v67vHOKdIp9wFGafizd40qLepKUf7f-2azu2L9ccSudPWQd7kNtoqAmW1UtjtHNwqW7gJcLg3o1R7ZlgJ_3IXSbVYnS1uafJPwUL5j1Qd2YaenLT4CIshx4V4ERfJwjKpj3KzFPT2UcsEz3ukzflVoxdisOeW16d5Kbcgp7x7-R7rbG4ZRnfi5jjeGf3UUJ8_k5rO_k-GqKEkHjaQ' },
                                    ].map((node, i) => (
                                        <div key={i} className="parchment-card w-44 p-3 rounded-lg border-2 border-primary-container/40 hover:border-primary-container transition-all cursor-pointer">
                                            <div className="w-full h-20 bg-surface-dim rounded mb-2 overflow-hidden">
                                                <img className="w-full h-full object-cover" data-alt={node.title} src={node.src} />
                                            </div>
                                            <span className="font-label-md text-label-md text-primary">{node.title.toUpperCase()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CHILD HERO BRANCH */}
                        <div className="absolute top-[340px] left-[550px]">
                            <div className="flex items-center gap-4">
                                <span className="branch-label font-label-md text-label-md text-secondary bg-secondary-container/20 px-1 py-4 rounded border border-secondary/30 uppercase tracking-widest">Child Era</span>
                                <div className="flex gap-12">
                                    {[
                                        { title: "Majora's Mask",   src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQhp4U1UVCbmzzBwn9Yh0dU7egpnxdIR8hb369N_epF2SVIS3MxFho0gs4lYtIzjZVqXtKH9R7d6zhqHg5SG-f5Cxi5C3RjfNcePPgOcNf2iV1Im_4Zc601mKl682NMGmxlcLTggidGqSK7m2vfgJxYnJGpZaLSGV2vEgaQpXRZzL5uiqe-k85-apvOsif8H27tMezGmLE1_HoEjcpEbODBmAQKviL2pmElrrTcDZoggxFtneO6Zb4gQ' },
                                        { title: 'Twilight Princess', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc3Ppe-iu_Jb3p5l9gWdBZwB5bhg9y_Nhbr5Z7gf6AW0Gbz2HytRIwQ-fXepc16eTRsFGokGSXWdYj7ZD01uiqIwjAaZbhbf6gyS3Zy4nKNBsuTd8TLAKkXv0_SwwTk3uE_DqanHaN2LVV4LMx9qRXamZej6hJNgSAsD5vqaYN3dN2guNik0-4-861ymJXTMs2o7I2v85A4d9hEhYImD3sbdBfOwd6t1gmviJ34XN5xhxIES1h72DBeA' },
                                    ].map((node, i) => (
                                        <div key={i} className="parchment-card w-44 p-3 rounded-lg border-2 border-primary-container/40 hover:border-primary-container transition-all cursor-pointer">
                                            <div className="w-full h-20 bg-surface-dim rounded mb-2 overflow-hidden">
                                                <img className="w-full h-full object-cover" data-alt={node.title} src={node.src} />
                                            </div>
                                            <span className="font-label-md text-label-md text-primary">{node.title.toUpperCase()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ADULT HERO BRANCH */}
                        <div className="absolute top-[540px] left-[550px]">
                            <div className="flex items-center gap-4">
                                <span className="branch-label font-label-md text-label-md text-tertiary bg-tertiary-container/20 px-1 py-4 rounded border border-tertiary/30 uppercase tracking-widest">Adult Era</span>
                                <div className="flex gap-12">
                                    {[
                                        { title: 'The Wind Waker',     src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHIaG6AYpcU1lRa1y6L33VWuRuRj2xadD06ICaP8OilcW-7xuo4tH2zF1mGNr1zbUXlwXqr7XR5vJAYPxF4_3KuLJspupOLWfTT3v1PAftT5vx3T6-O3DnPllzHhXDm6Rnh_NS-wxZ8ADTauUXj6O3WMDnx7q5YHujNLRHaXlGKjx-tnDkTST274weLOT8bjINhwGCKK0_F_wBNP05YCnHyAu5YvabaSYaFVBuAawEzNqPMaoWDqbxsg' },
                                        { title: 'Phantom Hourglass',  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_JWrevJoPSV6kcUlvGjQJ94iDo5AAxr-ImOzwucR1KE2qSW8Q2XfxK-qaAmcWFH4acwFWbdHuuZKEoKL5vVRqYSwpRpoq-rYxTKj7pO7Aa77I0HBaHoVa_FuwrjEzZaP1dMV84LiXV_nrxLCC5IssU9_kHW9gCqDwWSQlOi4hv1gVToc52513-b-abkNhXJFR59jaZILbNLKWucBGhPDq2mVYVyOSVBzHIsho6GMyfudaGrGaGh_eTw' },
                                    ].map((node, i) => (
                                        <div key={i} className="parchment-card w-44 p-3 rounded-lg border-2 border-primary-container/40 hover:border-primary-container transition-all cursor-pointer">
                                            <div className="w-full h-20 bg-surface-dim rounded mb-2 overflow-hidden">
                                                <img className="w-full h-full object-cover" data-alt={node.title} src={node.src} />
                                            </div>
                                            <span className="font-label-md text-label-md text-primary">{node.title.toUpperCase()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
