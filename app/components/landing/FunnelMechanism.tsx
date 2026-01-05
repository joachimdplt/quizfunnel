import { Section } from "~/components/ui/Section";
import { MessageCircle, Database, Gift, ArrowRight } from "lucide-react";

export function FunnelMechanism() {
    return (
        <Section className="py-24 relative overflow-hidden" id="funnel">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                        Qu'est-ce qu'un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C51FF] to-[#6F00FF]">Quiz Funnel</span> ?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Un formulaire qui permet de segmenter vos prospects à travers vos critères.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="relative group">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#9C51FF] to-[#6F00FF] rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-xl z-20 transition-transform group-hover:scale-110">
                            1
                        </div>
                        <div className="bg-muted border border-border rounded-[32px] p-8 pt-12 h-full hover:border-purple-500/50 transition-colors">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-[#9C51FF]">
                                <MessageCircle className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Diagnostic</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Au lieu de vendre directement, vous posez des questions pertinentes pour comprendre le besoin réel de votre prospect.
                            </p>
                            <div className="bg-background/50 rounded-2xl p-4 border border-border">
                                <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Exemple</p>
                                <p className="text-sm text-foreground/80 italic">"Quel est votre plus grand défi actuel avec votre trafic ?"</p>
                            </div>
                        </div>
                        <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-border hidden md:block w-8 h-8" />
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-2xl font-bold text-foreground shadow-xl z-20 border border-border transition-transform group-hover:scale-110">
                            2
                        </div>
                        <div className="bg-muted border border-border rounded-[32px] p-8 pt-12 h-full hover:border-blue-500/50 transition-colors">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                                <Database className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Capture</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                En échange du diagnostic personnalisé, le prospect vous donne ses coordonnées qualifiées.
                            </p>
                            <div className="bg-background/50 rounded-2xl p-4 border border-border">
                                <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Résultat</p>
                                <p className="text-sm text-foreground/80 italic">+40% de taux d'opt-in par rapport à une landing classique.</p>
                            </div>
                        </div>
                        <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-border hidden md:block w-8 h-8" />
                    </div>

                    {/* Step 3 */}
                    <div className="relative group">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-2xl font-bold text-foreground shadow-xl z-20 border border-border transition-transform group-hover:scale-110">
                            3
                        </div>
                        <div className="bg-muted border border-border rounded-[32px] p-8 pt-12 h-full hover:border-green-500/50 transition-colors">
                            <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                                <Gift className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Conversion</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Vous redirigez le prospect vers l'offre exacte qui correspond à son besoin (ou un appel commercial préparé).
                            </p>
                            <div className="bg-background/50 rounded-2xl p-4 border border-border">
                                <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Impact</p>
                                <p className="text-sm text-foreground/80 italic">Des appels avec des prospects éduqués et prêts à passer à l'action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
