import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";
import { UserSearch, Zap, ShieldCheck, ChartPie, Mail } from "lucide-react";

export function WhyChooseUs() {
    return (
        <Section className="py-24">
            <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    5 raisons de me choisir pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">faire exploser vos Conversions</span>
                </h2>
                <Button
                    variant="cta"
                    size="lg"
                    onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Je veux mon système d'acquisition
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px] max-w-6xl mx-auto px-4">
                {/* Card 1: Avatar */}
                <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-purple-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-slate-700 transition-colors">
                        <UserSearch className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Recherche Avatar Avancée</h3>
                        <p className="text-slate-400 text-sm">Analyse psychologique profonde pour cibler parfaitement votre audience.</p>
                    </div>
                </div>

                {/* Card 2: Speed */}
                <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-blue-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-slate-700 transition-colors">
                        <Zap className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Livraison V1 en 14 Jours</h3>
                        <p className="text-slate-400 text-sm">Votre système est opérationnel en 2 semaines, livraison finale complète sous 21 jours.</p>
                    </div>
                </div>

                {/* Card 3: Big Visual Card (Spans 2 rows on desktop) */}
                <div className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-purple-900/80 to-slate-900 p-8 rounded-3xl border border-purple-500/20 shadow-2xl overflow-hidden relative group">
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl inline-block w-fit mb-auto border border-white/20">
                            <Mail className="w-6 h-6 text-white" />
                        </div>

                        {/* Visual representation of the funnel */}
                        <div className="my-8 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 scale-90 md:scale-100">
                                <div className="bg-slate-800 rounded-xl p-4 shadow-2xl w-64 space-y-3 transform rotate-[-5deg] border border-slate-700">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold text-xs">JD</div>
                                        <div className="text-xs text-slate-500">À l'instant</div>
                                    </div>
                                    <div className="text-sm font-bold text-white">Nouveau Lead Qualifié ! 🚀</div>
                                    <div className="h-2 bg-slate-700 rounded-full w-3/4">
                                        <div className="h-full bg-green-500 rounded-full w-full"></div>
                                    </div>
                                </div>
                                <div className="bg-slate-800 rounded-xl p-4 shadow-2xl w-64 space-y-3 transform rotate-[5deg] translate-y-4 border border-slate-700 absolute top-10 -z-10 opacity-50">
                                    <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Gestion de A à Z</h3>
                            <p className="text-slate-300 text-sm">
                                Création complète du Quiz Funnel et des séquences emails. On s'occupe de toute la technique et du copywriting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 4: ROI/Guarantee */}
                <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-green-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-slate-700 transition-colors">
                        <ShieldCheck className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Fiabilité & Sécurité</h3>
                        <p className="text-slate-400 text-sm">Une infrastructure robuste et des données sécurisées pour votre business.</p>
                    </div>
                </div>

                {/* Card 5: Optimization */}
                <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-pink-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-slate-700 transition-colors">
                        <ChartPie className="w-8 h-8 text-pink-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Optimisation Data</h3>
                        <p className="text-slate-400 text-sm">Analyse des KPIs et itérations pendant 90 jours pour maximiser les résultats.</p>
                    </div>
                </div>

            </div>
        </Section>
    );
}
