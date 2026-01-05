import { Button } from "~/components/ui/Button";
import { Section } from "~/components/ui/Section";
import { BOOKING_URL } from "~/constants";

export function Hero() {
    const handleCTA = () => {
        window.open(BOOKING_URL, "_blank");
    };

    return (
        <Section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48" id="hero">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">
                {/* Social Proof - Moved to top */}
                {/*
                <div className="flex flex-col items-center space-y-3">
                    <div className="flex items-center justify-center -space-x-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="relative w-10 h-10 rounded-full border-2 border-border overflow-hidden shadow-sm">
                                <img
                                    src="/images/client.jpeg"
                                    alt={`Client ${i}`}
                                    className="w-full h-full object-cover grayscale opacity-80"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <span className="font-semibold text-muted-foreground text-sm">8+ clients satisfaits !</span>
                        <div className="flex text-yellow-500/80 gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>*/}

                {/* Headline */}
                <h1 className="mt-20 text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                    <span className="block mb-2 md:mb-4 md:whitespace-nowrap">
                        Je crée l'app qui {" "}
                        <span className="whitespace-nowrap">
                            résout{" "}
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 px-4 py-1 rounded-xl bg-gradient-to-r from-[#9C51FF] to-[#6F00FF] text-white rotate-[-2deg] inline-block shadow-lg shadow-purple-500/30">
                                    le problème n°1
                                </span>
                                {/* Decorative Dashboard Icon */}
                                <svg className="absolute -bottom-3 -right-6 md:-top-8 md:-left-6 w-8 h-8 md:w-12 md:h-12 text-purple-400 bg-background rounded-lg p-1 shadow-sm rotate-[-15deg] z-20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                </svg>
                            </span>
                        </span>
                    </span>
                    <span className="block md:whitespace-nowrap">
                        de votre secteur
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    Fini les tableaux Excel, les papiers perdus et les doubles saisies. Pilotez votre chantier, vos équipes et votre rentabilité en temps réel avec une application sur mesure.
                </p>

                <div className="flex flex-col items-center gap-4 pt-4">
                    <Button size="lg" variant="cta" className="text-lg px-8" onClick={handleCTA}>
                        Prendre rendez-vous
                    </Button>
                    <p className="text-sm text-muted-foreground font-medium opacity-60">
                        Sans engagement — 100% gratuit
                    </p>
                </div>
            </div>
        </Section>
    );
}
