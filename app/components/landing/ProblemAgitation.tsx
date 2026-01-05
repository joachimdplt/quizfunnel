import { Section } from "~/components/ui/Section";
import { TrendingDown, Activity, Angry } from "lucide-react";

export function ProblemAgitation() {
    const frustrations = [
        {
            icon: <TrendingDown className="w-6 h-6 text-red-500" />,
            title: "Site vitrine muet",
            desc: "Un joli site qui ne convertit pas et ne capture aucune donnée qualifiée."
        },
        {
            icon: <Activity className="w-6 h-6 text-red-500" />,
            title: "Leads non qualifiés",
            desc: "Ton calendrier se remplit de curieux sans budget qui te font perdre du temps."
        },
        {
            icon: <Angry className="w-6 h-6 text-red-500" />,
            title: "Ads coûteuses",
            desc: "Des coûts publicitaires qui explosent sans ROI clair ni retargeting précis."
        }
    ];

    return (
        <Section id="problem">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Le modèle "Site Vitrine" est <span className="text-red-500">cassé</span>.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Tu es expert dans ton domaine, mais ton site web ne reflète pas ta valeur. Il attend passivement que les visiteurs cliquent sur "Contact", ce qu'ils font de moins en moins.
                    </p>
                    <div className="space-y-4">
                        {frustrations.map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 bg-muted/50 rounded-xl border border-border backdrop-blur-sm">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <h3 className="font-bold text-foreground">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-muted p-8 rounded-2xl border border-border shadow-2xl relative z-10">
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#9C51FF] to-[#6F00FF] text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-3">
                            La Solution
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">Imagine plutôt...</h3>
                        <ul className="space-y-4">
                            {[
                                "Un quiz qui segmente automatiquement tes visiteurs",
                                "Des prospects chauds qui prennent RDV eux-mêmes",
                                "Un coût par lead réduit de 30 à 50%",
                                "Une expérience client personnalisée dès le premier clic"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/80">
                                    <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                                        ✓
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-10 -left-10 w-full h-full bg-muted/50 rounded-2xl z-0 transform -rotate-3 border border-border/50"></div>
                </div>
            </div>
        </Section>
    );
}
