import { Section } from "~/components/ui/Section";

export function FAQ() {
    const faqs = [
        {
            q: "Est-ce que le quiz n'est pas infantilisant pour mon audience pro ?",
            a: "Au contraire. Un quiz bien conçu est perçu comme un outil de diagnostic expert. Il apporte de la valeur immédiate à vos prospects en les aidant à y voir plus clair sur leur situation."
        },
        {
            q: "Et si ça n'augmente pas la conversion ?",
            a: "Nous sommes confiants dans notre méthode. Si les résultats ne sont pas au rendez-vous après 90 jours d'optimisation, nous retravaillons votre funnel gratuitement."
        },
        {
            q: "Je n'ai pas le temps de produire le contenu.",
            a: "C'est une offre 'Done For You'. Nous nous occupons de la stratégie, de la rédaction et de l'intégration. Vous validez, nous exécutons."
        },
        {
            q: "Est-ce compatible avec mon CRM actuel ?",
            a: "Oui, nous connectons le système à la plupart des outils du marché (HubSpot, ActiveCampaign, MailerLite, etc.) via des intégrations natives ou Zapier/Make."
        }
    ];

    return (
        <Section>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">Questions Fréquentes</h2>

                <div className="space-y-6">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="border-b border-slate-200 pb-6">
                            <h3 className="text-lg font-bold text-primary mb-2">{item.q}</h3>
                            <p className="text-slate-600">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
