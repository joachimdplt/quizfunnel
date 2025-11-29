import { Section } from "~/components/ui/Section";

export function ProblemAgitation() {
    const frustrations = [
        {
            icon: "📉",
            title: "Site vitrine muet",
            desc: "Un joli site qui ne convertit pas et ne capture aucune donnée qualifiée."
        },
        {
            icon: "⏳",
            title: "Leads non qualifiés",
            desc: "Votre calendrier se remplit de curieux sans budget qui vous font perdre du temps."
        },
        {
            icon: "💸",
            title: "Ads coûteuses",
            desc: "Des coûts publicitaires qui explosent sans ROI clair ni retargeting précis."
        }
    ];

    return (
        <Section className="bg-slate-50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Le modèle "Site Vitrine" est <span className="text-red-500">cassé</span>.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Vous êtes expert dans votre domaine, mais votre site web ne reflète pas votre valeur. Il attend passivement que les visiteurs cliquent sur "Contact", ce qu'ils font de moins en moins.
                    </p>
                    <div className="space-y-4">
                        {frustrations.map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <h3 className="font-bold text-primary">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    {/* Visual representation of the "Old Way" vs "New Way" could go here */}
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 relative z-10">
                        <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-3">
                            La Solution
                        </div>
                        <h3 className="text-xl font-bold mb-4">Imaginez plutôt...</h3>
                        <ul className="space-y-4">
                            {[
                                "Un quiz qui segmente automatiquement vos visiteurs",
                                "Des prospects chauds qui prennent RDV eux-mêmes",
                                "Un coût par lead réduit de 30 à 50%",
                                "Une expérience client personnalisée dès le premier clic"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        ✓
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-10 -left-10 w-full h-full bg-slate-200 rounded-2xl z-0 transform -rotate-3"></div>
                </div>
            </div>
        </Section>
    );
}
