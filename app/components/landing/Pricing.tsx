import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";
import { Check } from "lucide-react";
import { BOOKING_URL } from "~/constants";

export function Pricing() {
    const handleCTA = () => {
        window.open(BOOKING_URL, "_blank");
    };

    return (
        <Section className="py-24" id="pricing">
            <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                    Prêt à Exploser votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Taux de Conversion</span> ?
                </h2>
                <p className="text-xl text-muted-foreground">
                    Choisissez la solution adaptée à votre stade de croissance.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                {/* Offer 1: Niveau Agile */}
                <div className="bg-muted/50 backdrop-blur-md p-8 rounded-3xl border border-border shadow-xl hover:border-border/80 transition-all flex flex-col relative group">
                    <div className="mb-8">
                        <div className="text-purple-300 font-bold mb-2 text-sm uppercase tracking-wider">Niveau Agile</div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">No-Code (Tally)</h3>
                        <p className="text-muted-foreground text-sm mb-8">
                            Intégration Tally/Typeform pour un lancement rapide et économique.
                        </p>
                        <Button
                            variant="outline"
                            className="w-full justify-center border-border text-foreground hover:bg-muted"
                            onClick={handleCTA}
                        >
                            Je veux mon système d'acquisition
                        </Button>
                        <div className="mt-8 p-4 bg-background/50 rounded-xl border border-border">
                            <div className="font-bold text-foreground text-sm mb-1 text-left flex items-center gap-2">
                                <span className="text-green-400">✦</span> Inclus : Le Moteur
                            </div>
                            <p className="text-xs text-muted-foreground text-left">Connexions API, CRM et Tracking avancés.</p>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div className="text-sm font-bold text-foreground">Tout inclus :</div>
                        <ul className="space-y-4">
                            {[
                                "Analyse détaillée de l'avatar client",
                                "Quiz Funnel (Intégration No-Code)",
                                "Page d'Opt-in optimisée",
                                "1 à 3 pages de résultats personnalisées",
                                "1 à 3 séquences d'e-mails de vente",
                                "Analyse et optimisation sur 2 mois",
                                "V1 livrée sous 14 jours"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-foreground/80">
                                    <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Offer 2: Niveau Premium */}
                <div className="bg-muted p-8 rounded-3xl border border-border dark:border-purple-500/30 shadow-2xl hover:border-primary/50 dark:hover:border-purple-500/60 hover:shadow-primary/5 dark:hover:shadow-purple-500/10 transition-all flex flex-col relative overflow-hidden group">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-purple-600 dark:to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg z-10">
                        Recommandé
                    </div>

                    {/* Background Gradient */}
                    <div className="absolute inset-0 r dark:from-purple-900/30 dark:to-transparent pointer-events-none"></div>

                    <div className="mb-8 relative z-10">
                        <div className="text-primary dark:text-purple-500 font-bold mb-2 text-sm uppercase tracking-wider">Niveau Premium</div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">Code (React)</h3>
                        <p className="text-muted-foreground text-sm mb-8">
                            Front-end React sur-mesure pour une identité de marque sans compromis.
                        </p>
                        <Button
                            variant="cta"
                            className="w-full justify-center shadow-xl"
                            onClick={handleCTA}
                        >
                            Je veux mon système d'acquisition
                        </Button>
                        <div className="mt-8 p-4 bg-background/50 rounded-xl border border-border">
                            <div className="font-bold text-foreground text-sm mb-1 text-left flex items-center gap-2">
                                <span className="text-green-400">✦</span> Inclus : Le Moteur
                            </div>
                            <p className="text-xs text-muted-foreground text-left">Connexions API, CRM et Tracking avancés.</p>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1 relative z-10">
                        <div className="text-sm font-bold text-foreground">Tout inclus :</div>
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
                                <li key={i} className="flex items-start gap-3 text-foreground/80">
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
                <div className="bg-muted/40 rounded-3xl p-8 border border-border text-center">
                    <h3 className="text-xl font-bold text-foreground mb-4">Besoin d'aide pour choisir ?</h3>
                    <p className="text-muted-foreground mb-6">
                        Lors de notre appel, nous définirons ensemble la meilleure infrastructure pour vos objectifs.
                    </p>
                    <Button
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground"
                        onClick={handleCTA}
                    >
                        Je veux mon système d'acquisition
                    </Button>
                </div>
            </div>
        </Section>
    );
}
