import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";

export function Solution() {
    const steps = [
        {
            step: "01",
            title: "Quiz Funnel",
            desc: "Conception et intégration d'un quiz interactif qui engage et segmente vos visiteurs."
        },
        {
            step: "02",
            title: "Classification",
            desc: "Scoring automatique pour identifier les prospects chauds et les séparer des curieux."
        },
        {
            step: "03",
            title: "Conversion",
            desc: "Pages de résultats dynamiques et séquences emails personnalisées selon le profil."
        },
        {
            step: "04",
            title: "Compounding",
            desc: "Optimisation continue via dashboards et A/B testing pour maximiser le ROI."
        }
    ];

    return (
        <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                    La Méthode <span className="text-accent">Q4C</span>
                </h2>
                <p className="text-xl text-slate-600">
                    Une approche complète "Done For You" pour transformer votre acquisition.
                    Nous ne vous livrons pas juste un outil, mais un système de vente complet.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
                {steps.map((item, idx) => (
                    <div key={idx} className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 select-none">
                            {item.step}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-brand-gradient rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-6">Offre "Done For You"</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-white/80 mt-1">✦</span>
                                <span><strong>Landing Page Conversion-First</strong> : Copywriting, Design & Intégration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white/80 mt-1">✦</span>
                                <span><strong>Quiz Funnel Complet</strong> : Logique de saut, Scoring & Segmentation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white/80 mt-1">✦</span>
                                <span><strong>Tech & RGPD</strong> : Connexion CRM, Tracking & Conformité</span>
                            </li>
                        </ul>
                        <Button
                            size="lg"
                            className="w-full md:w-auto font-bold"
                            >
                            Je veux mon système d'acquisition
                            </Button>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20">
                        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                            <span className="font-mono text-sm text-purple-200">DASHBOARD</span>
                            <span className="inline-flex items-center px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs border border-green-500/30">
                                ● LIVE
                            </span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-purple-200 text-sm">Taux de conversion</span>
                                <span className="text-3xl font-bold">12.4%</span>
                            </div>
                            <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                                <div className="bg-accent h-full w-[75%] shadow-[0_0_10px_rgba(113,4,255,0.5)]"></div>
                            </div>
                            <div className="flex justify-between items-end pt-2">
                                <span className="text-purple-200 text-sm">Coût par Lead (CPL)</span>
                                <span className="text-xl font-bold text-green-300">-45%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background gradients */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
        </Section>
    );
}
