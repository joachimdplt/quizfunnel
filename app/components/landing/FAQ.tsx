import { useState } from "react";
import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";
import { Plus, Minus } from "lucide-react";
import { BOOKING_URL } from "~/constants";

export function FAQ() {
    const handleCTA = () => {
        window.open(BOOKING_URL, "_blank");
    };

    const faqs = [
        {
            q: "Quelle est votre garantie de satisfaction ?",
            a: "Nous sommes confiants dans notre méthode. Si les résultats ne sont pas au rendez-vous après 90 jours d'optimisation (génération de leads qualifiés ou rentabilité), nous vous remboursons intégralement. C'est notre engagement envers votre succès."
        },
        {
            q: "Que se passe-t-il à la fin des 3 mois ?",
            a: "Après la phase initiale de 3 mois, nous analysons les performances ensemble. Vous pouvez choisir de continuer l'accompagnement pour optimiser davantage le funnel, de prendre le relais en interne, ou d'arrêter sans frais supplémentaires."
        },
        {
            q: "Pour quels secteurs créez-vous des Quiz Funnels ?",
            a: "Nous travaillons principalement avec des entreprises de services (B2B/B2C), des infopreneurs, des coachs et des agences qui ont besoin de qualifier leurs prospects avant un appel de vente."
        },
        {
            q: "À quoi sert l'appel ?",
            a: "L'appel de diagnostic nous permet de comprendre votre business, vos objectifs et de vérifier si un Quiz Funnel est la meilleure solution pour vous. C'est une session de conseil stratégique, pas une simple démo."
        },
        {
            q: "Quels sont vos délais de livraisons ?",
            a: "Votre V1 (stratégie, quiz et landing page) est livrée sous 14 jours ouvrés. La version finale optimisée avec intégrations CRM complètes est livrée sous 21 jours."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <Section id="faq" className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
                <h2 className="text-5xl md:text-8xl font-bold text-foreground mb-10 text-center tracking-tighter">
                    FAQ
                </h2>

                <div className="mb-16">
                    <Button
                        variant="cta"
                        size="lg"
                        className="rounded-full px-10 text-lg shadow-2xl"
                        onClick={handleCTA}
                    >
                        Je veux mon système d'acquisition
                    </Button>
                </div>

                <div className="w-full space-y-4">
                    {faqs.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`group bg-muted/40 border transition-all duration-300 rounded-[28px] overflow-hidden ${isOpen ? 'border-purple-500/50 bg-muted/80 shadow-lg shadow-purple-500/5' : 'border-border'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full px-8 py-7 flex items-center justify-between text-left transition-colors"
                                >
                                    <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/90'}`}>
                                        {item.q}
                                    </h3>
                                    <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-purple-500 bg-purple-500 text-white' : 'border-border text-muted-foreground group-hover:border-border/80 group-hover:text-foreground'
                                        }`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out px-8 ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
