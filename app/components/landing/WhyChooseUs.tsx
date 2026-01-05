import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";
import { UserSearch, Zap, ShieldCheck, ChartPie, Rocket } from "lucide-react";
import { BOOKING_URL } from "~/constants";

export function WhyChooseUs() {
    const handleCTA = () => {
        window.open(BOOKING_URL, "_blank");
    };

    return (
        <Section className="py-24">
            <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-8 tracking-tight text-center">
                    5 raisons de me choisir pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">digitaliser votre business</span>
                </h2>
                <div className="text-center">
                    <Button
                        variant="cta"
                        size="lg"
                        onClick={handleCTA}
                    >
                        Prendre rendez-vous
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px] max-w-6xl mx-auto px-4">
                {/* Card 1: Expertise */}
                <div className="bg-muted p-8 rounded-3xl border border-border shadow-xl hover:border-purple-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-background p-4 rounded-2xl group-hover:bg-muted transition-colors border border-border/50">
                        <UserSearch className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Immersion Métier</h3>
                        <p className="text-muted-foreground text-sm">Je ne code pas dans le vide. Je viens sur le terrain comprendre vos vrais besoins.</p>
                    </div>
                </div>

                {/* Card 2: Speed */}
                <div className="bg-muted p-8 rounded-3xl border border-border shadow-xl hover:border-blue-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-background p-4 rounded-2xl group-hover:bg-muted transition-colors border border-border/50">
                        <Zap className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">MVP en 21 Jours</h3>
                        <p className="text-muted-foreground text-sm">Une version fonctionnelle déployable en 3 semaines. On itère ensuite sur du réel.</p>
                    </div>
                </div>

                {/* Card 3: Big Visual Card (Spans 2 rows on desktop) */}
                <div className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-purple-900/80 to-slate-900 dark:from-purple-900/80 dark:to-slate-900 p-8 rounded-3xl border border-purple-500/20 shadow-2xl overflow-hidden relative group">
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl inline-block w-fit mb-auto border border-white/20">
                            <Rocket className="w-6 h-6 text-white" />
                        </div>

                        {/* Visual representation of an app alert */}
                        <div className="my-8 flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/12 scale-90 md:scale-100">
                                <div className="bg-background rounded-xl p-4 shadow-2xl w-64 space-y-3 transform rotate-[-5deg] border border-border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xs">OK</div>
                                        <div className="text-xs text-muted-foreground">Chantier #402</div>
                                    </div>
                                    <div className="text-sm font-bold text-foreground">Rapport validé ! ✅</div>
                                    <div className="h-2 bg-muted rounded-full w-3/4">
                                        <div className="h-full bg-blue-500 rounded-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Code & No-Code</h3>
                            <p className="text-purple-100 text-sm">
                                J'utilise le meilleur des deux mondes pour livrer vite des outils ultra-performants et évolutifs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 4: ROI/Guarantee */}
                <div className="bg-muted p-8 rounded-3xl border border-border shadow-xl hover:border-green-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-background p-4 rounded-2xl group-hover:bg-muted transition-colors border border-border/50">
                        <ShieldCheck className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Sécurité & Souveraineté</h3>
                        <p className="text-muted-foreground text-sm">Vos données vous appartiennent. Infrastructure sécurisée et RGPD compliant.</p>
                    </div>
                </div>

                {/* Card 5: Accompagnement */}
                <div className="bg-muted p-8 rounded-3xl border border-border shadow-xl hover:border-pink-500/30 transition-all flex flex-col items-start justify-between group">
                    <div className="bg-background p-4 rounded-2xl group-hover:bg-muted transition-colors border border-border/50">
                        <ChartPie className="w-8 h-8 text-pink-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Support & Évolution</h3>
                        <p className="text-muted-foreground text-sm">Je ne disparais pas après la livraison. Un accompagnement de 3 mois est inclus.</p>
                    </div>
                </div>

            </div>
        </Section>
    );
}
