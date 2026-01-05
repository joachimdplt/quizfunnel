import { Section } from "~/components/ui/Section";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Sophie M.",
            role: "CEO, E-com Fashion",
            content: "Depuis la mise en place du Quiz Funnel, notre taux de conversion a bondi de 1.8% à 4.2%. C'est juste incroyable. Le système qualifie automatiquement nos leads.",
            image: "/images/client1.jpg" // Placeholder
        },
        {
            name: "Thomas Dubois",
            role: "Coach Business",
            content: "Je passais mes journées au téléphone avec des prospects non qualifiés. Maintenant, je ne parle qu'à des gens prêts à acheter. Merci Joachim !",
            image: "/images/client2.jpg" // Placeholder
        },
        {
            name: "Marc L.",
            role: "Agence Immobilière",
            content: "Le design est top, l'intégration React est fluide. On sent que c'est du travail de pro. Retour sur investissement validé en 3 semaines.",
            image: "/images/client3.jpg" // Placeholder
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden" id="testimonials">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

            <div className="text-center max-w-4xl mx-auto mb-16 relative z-10 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Ils ont choisi de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">passer à l'action</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                    Découvrez les résultats obtenus par nos partenaires.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative z-10">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-muted p-8 rounded-3xl border border-border shadow-lg hover:border-border/80 transition-colors flex flex-col relative group">
                        <Quote className="absolute top-6 right-6 w-8 h-8 text-border group-hover:text-purple-900/50 transition-colors" />

                        <div className="flex text-yellow-500 mb-6 gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-current" />
                            ))}
                        </div>

                        <p className="text-foreground/80 mb-8 flex-1 leading-relaxed">
                            "{t.content}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 rounded-full bg-background border-2 border-border overflow-hidden flex items-center justify-center shrink-0">
                                <span className="text-muted-foreground font-bold text-lg">{t.name[0]}</span>
                            </div>
                            <div>
                                <div className="font-bold text-foreground">{t.name}</div>
                                <div className="text-sm text-muted-foreground">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
