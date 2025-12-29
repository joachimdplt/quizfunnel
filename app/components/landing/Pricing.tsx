import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <Section className="py-24" id="pricing">
            <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Prêt à Exploser votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Taux de Conversion</span> ?
                </h2>
                <p className="text-xl text-slate-400">
                    Choisissez la solution adaptée à votre stade de croissance.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                {/* Offer 1: Niveau Agile */}
                <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-xl hover:border-slate-600 transition-all flex flex-col relative group">
                    <div className="mb-8">
                        <div className="text-purple-400 font-bold mb-2 text-sm uppercase tracking-wider">Niveau Agile</div>
                        <h3 className="text-3xl font-bold text-white mb-2">No-Code (Tally)</h3>
                        <p className="text-slate-400 text-sm mb-8">
                            Intégration Tally/Typeform pour un lancement rapide et économique.
                        </p>
                        <Button
                            variant="outline"
                            className="w-full justify-center border-slate-700 text-white hover:bg-slate-800 hover:text-white"
                            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Je veux mon système d'acquisition
                        </Button>
                        <div className="mt-8 p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                            <div className="font-bold text-white text-sm mb-1 text-left flex items-center gap-2">
                                <span className="text-green-400">✦</span> Inclus : Le Moteur
                            </div>
                            <p className="text-xs text-slate-400 text-left">Connexions API, CRM et Tracking avancés.</p>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div className="text-sm font-bold text-white">Tout inclus :</div>
                        <ul className="space-y-4">
                            {[
                                "Analyse détaillée de l'avatar client",
                                "Landing page haute conversion",
                                "Quiz Funnel (Intégration No-Code)",
                                "Page d'Opt-in optimisée",
                                "1 à 3 pages de résultats personnalisées",
                                "1 à 3 séquences d'e-mails de vente",
                                "Analyse et optimisation sur 2 mois",
                                "V1 livrée sous 14 jours"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                    <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Offer 2: Niveau Premium */}
                <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/30 shadow-2xl hover:border-purple-500/60 hover:shadow-purple-500/10 transition-all flex flex-col relative overflow-hidden group">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg z-10">
                        Recommandé
                    </div>

                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent pointer-events-none"></div>

                    <div className="mb-8 relative z-10">
                        <div className="text-purple-300 font-bold mb-2 text-sm uppercase tracking-wider">Niveau Premium</div>
                        <h3 className="text-3xl font-bold text-white mb-2">Code (React)</h3>
                        <p className="text-slate-300 text-sm mb-8">
                            Front-end React sur-mesure pour une identité de marque sans compromis.
                        </p>
                        <Button
                            variant="cta"
                            className="w-full justify-center shadow-xl"
                            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Je veux mon système d'acquisition
                        </Button>
                        <div className="mt-8 p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                            <div className="font-bold text-white text-sm mb-1 text-left flex items-center gap-2">
                                <span className="text-green-400">✦</span> Inclus : Le Moteur
                            </div>
                            <p className="text-xs text-slate-400 text-left">Connexions API, CRM et Tracking avancés.</p>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1 relative z-10">
                        <div className="text-sm font-bold text-white">Tout inclus :</div>
                        <ul className="space-y-4">
                            {[
                                "Analyse détaillée de l'avatar client",
                                "Landing page haute conversion",
                                "Quiz Funnel (Dev React/Next.js)",
                                "Page d'Opt-in optimisée",
                                "1 à 3 pages de résultats personnalisées",
                                "1 à 3 séquences d'e-mails de vente",
                                "V1 sous 14j & Finale sous 21j",
                                "Analyse et optimisation sur 3 mois",
                                "Design & UX Sur-mesure (Figma)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Infrastructure Details - Optional cleanup visualization */}
            <div className="max-w-5xl mx-auto mt-16 px-4">
                <div className="bg-slate-900/40 rounded-3xl p-8 border border-slate-800 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Besoin d'aide pour choisir ?</h3>
                    <p className="text-slate-400 mb-6">
                        Lors de notre appel, nous définirons ensemble la meilleure infrastructure pour vos objectifs.
                    </p>
                    <Button
                        variant="ghost"
                        className="text-slate-300 hover:text-white hover:bg-slate-800"
                        onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Je veux mon système d'acquisition
                    </Button>
                </div>
            </div>
        </Section>
    );
}
