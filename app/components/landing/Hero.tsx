import { Button } from "~/components/ui/Button";
import { Section } from "~/components/ui/Section";

export function Hero() {
    return (
        <Section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
                <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                    Pour les coachs, consultants et formateurs
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
                    Transformez votre site passif en <span className="text-accent">conseiller interactif</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                    Qualifiez, diagnostiquez et convertissez automatiquement vos prospects grâce à un Quiz Funnel intelligent.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="text-lg px-8 shadow-xl shadow-purple-900/20 bg-brand-gradient text-white hover:opacity-90 transition-opacity">
                        Réserver mon audit gratuit
                    </Button>
                </div>

                <div className="pt-12 flex flex-col items-center space-y-4">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                        Ils nous font confiance
                    </p>
                    <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="h-8 w-24 bg-slate-300 rounded"></div>
                        <div className="h-8 w-24 bg-slate-300 rounded"></div>
                        <div className="h-8 w-24 bg-slate-300 rounded"></div>
                        <div className="h-8 w-24 bg-slate-300 rounded"></div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
