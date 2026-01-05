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
            q: "Pourquoi choisir du sur-mesure plutôt qu'un logiciel existant ?",
            a: "Les logiciels standards vous imposent leur manière de travailler. Une application sur-mesure s'adapte à votre métier, automatise vos goulots d'étranglement et devient un actif propriétaire de votre entreprise."
        },
        {
            q: "Quelles technologies utilises-tu ?",
            a: "J'utilise un mix de No-Code (pour la rapidité et la flexibilité) et de Code (React/Node.js pour la puissance et l'évolutivité). Cela me permet de livrer des outils performants en un temps record."
        },
        {
            q: "L'application est-elle évolutive ?",
            a: "Absolument. On commence par un MVP pour résoudre l'urgence, mais l'architecture est pensée pour grandir avec votre business et accueillir de nouvelles fonctionnalités selon vos besoins."
        },
        {
            q: "Où sont stockées mes données ?",
            a: "Vos données sont stockées sur des serveurs sécurisés et souverains. Vous en êtes l'unique propriétaire et elles sont accessibles en temps réel par vos équipes autorisées."
        },
        {
            q: "Combien de temps faut-il pour voir les premiers résultats ?",
            a: "Votre V1 est opérationnelle sous 21 jours. Dès le premier jour de déploiement, vous éliminez les doubles saisies et les pertes d'informations, ce qui se traduit immédiatement par un gain de temps pour vos équipes."
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
                        Prendre rendez-vous
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
