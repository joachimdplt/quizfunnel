import { Section } from "~/components/ui/Section";

export function Testimonials() {
    return (
        <Section className="bg-slate-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Ils ont transformé leur business
                </h2>
                <p className="text-lg text-slate-600">
                    Rejoignez les entrepreneurs qui ont arrêté de courir après les leads.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
                {[
                    {
                        quote: "J'ai doublé mon taux de conversion en 2 mois. Le quiz qualifie mes prospects avant même que je leur parle.",
                        author: "Thomas L.",
                        role: "Consultant SEO"
                    },
                    {
                        quote: "Fini les appels avec des curieux. Je ne parle qu'à des prospects chauds qui connaissent déjà ma valeur.",
                        author: "Sarah M.",
                        role: "Coach Business"
                    },
                    {
                        quote: "La mise en place a été ultra rapide. C'est la première fois qu'un système marketing me fait gagner du temps.",
                        author: "Julien R.",
                        role: "Formateur Immo"
                    }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="text-accent text-4xl mb-4">"</div>
                        <p className="text-slate-700 mb-6 italic">{item.quote}</p>
                        <div>
                            <div className="font-bold text-primary">{item.author}</div>
                            <div className="text-sm text-slate-500">{item.role}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3">
                    {/* Placeholder for ProfilePic.png */}
                    <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative">
                        <img
                            src="/images/ProfilePic.png"
                            alt="Joachim Duplat"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                        Qui est Joachim Duplat ?
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Concepteur d'application web/mobile, j'aide les entreprises à structurer leur croissance sans s'épuiser.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Après avoir vu trop d'experts talentueux échouer à cause d'un marketing "site vitrine" dépassé, j'ai développé la méthode Q4C. Mon objectif : vous redonner le contrôle sur votre acquisition avec un système qui travaille pour vous, 24h/24.
                    </p>
                    <div className="flex gap-4">
                        <div className="text-center">
                            <div className="font-bold text-2xl text-primary">3+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Années d'xp</div>
                        </div>
                        <div className="w-px bg-slate-200"></div>
                        <div className="text-center">
                            <div className="font-bold text-2xl text-primary">10+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Clients accompagnés</div>
                        </div>
                        <div className="w-px bg-slate-200"></div>
                          <div className="text-center">
                            <div className="font-bold text-2xl text-primary">100%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Satisfaction</div>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
}
