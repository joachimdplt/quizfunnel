import { useEffect, useRef } from "react";
import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";

export function Solution() {
    const headerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('reveal-hidden');
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (headerRef.current) observer.observe(headerRef.current);
        stepsRef.current.forEach((step) => {
            if (step) observer.observe(step);
        });

        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            step: "01",
            title: "Appel de Cadrage Stratégique",
            desc: "Nous analysons en profondeur votre business, votre offre et votre cible pour définir l'angle d'attaque précis."
        },
        {
            step: "02",
            title: "Profilage Avatar & Psychologie",
            desc: "Recherche avancée pour modéliser votre client idéal et créer un ciblage chirurgical."
        },
        {
            step: "03",
            title: "Architecture & Déploiement",
            desc: "Lancement de votre V1 sous 14 jours. Puis intégration CRM, e-mails de vente et livraison finale sous 21 jours."
        },
        {
            step: "04",
            title: "Optimisation Continue (90 Jours)",
            desc: "Nous analysons les datas et itérons chaque semaine pour maximiser votre retour sur investissement."
        }
    ];

    return (
        <Section className="py-24 relative" id="solution">
            {/* Timeline Line */}
            <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2 hidden md:block opacity-50"></div>

            <div
                ref={headerRef}
                className="text-center max-w-4xl mx-auto mb-20 relative z-10 px-4 reveal-hidden"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                    MÉTHODOLOGIE
                </div>
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Comment ça marche ?
                </h2>
                <p className="text-xl text-slate-400">
                    Un processus rodé pour déployer votre machine à leads.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16 md:space-y-32">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { stepsRef.current[index] = el; }}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 reveal-hidden transition-all ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        {/* Step Bubble */}
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center z-20 shrink-0 shadow-2xl relative md:absolute md:left-1/2 md:-translate-x-1/2">
                            <div className="absolute inset-0 bg-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-xl font-bold text-white relative z-10">{item.step}</span>
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-1/2">
                            <div className={`p-8 rounded-[32px] bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                        {/* Empty Space */}
                        <div className="hidden md:block w-1/2" />
                    </div>
                ))}
            </div>

            <div className="text-center mt-24 relative z-10">
                <Button
                    size="lg"
                    variant="cta"
                    className="h-14 px-8 text-lg"
                    onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Je veux mon système d'acquisition
                </Button>
            </div>
        </Section>
    );
}
