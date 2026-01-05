import { Button } from "~/components/ui/Button";
import { Section } from "~/components/ui/Section";

export function Hero() {
    return (
        <Section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48" id="hero">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">
                {/* Social Proof - Moved to top */}
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
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                    <span className="block mb-2 md:mb-4 md:whitespace-nowrap">
                        Je transforme ta landing {" "}
                        <span className="whitespace-nowrap">
                            en{" "}
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 px-4 py-1 rounded-xl bg-gradient-to-r from-[#9C51FF] to-[#6F00FF] text-white rotate-[-2deg] inline-block shadow-lg shadow-purple-500/30">
                                    Quiz
                                </span>
                                {/* Decorative Question Mark */}
                                <svg className="absolute -bottom-3 -right-6 md:-top-8 md:-left-6 w-8 h-8 md:w-12 md:h-12 text-purple-400 bg-background rounded-lg p-1 shadow-sm rotate-[-15deg] z-20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C15.3137 2 18 4.68629 18 8C18 10.1646 16.7977 12.0838 15.0048 13.0973C14.1539 13.5783 13.6294 14.4752 13.6294 15.4545V16C13.6294 16.5523 13.1817 17 12.6294 17H11.3706C10.8183 17 10.3706 16.5523 10.3706 16V15.4545C10.3706 13.6289 11.3483 11.9571 12.9335 11.0609C13.9744 10.4724 14.6294 9.32426 14.6294 8C14.6294 6.54579 13.4542 5.37059 12 5.37059C10.5458 5.37059 9.37059 6.54579 9.37059 8C9.37059 8.55228 8.92287 9 8.37059 9H7.11176C6.55948 9 6.11176 8.55228 6.11176 8C6.11176 4.68629 8.68629 2 12 2ZM12 22C12.8284 22 13.5 21.3284 13.5 20.5C13.5 19.6716 12.8284 19 12 19C11.1716 19 10.5 19.6716 10.5 20.5C10.5 21.3284 11.1716 22 12 22Z" />
                                </svg>
                            </span>
                        </span>
                    </span>
                    <span className="block md:whitespace-nowrap">
                        <span className="whitespace-nowrap">
                            qui fait{" "}
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 px-4 py-1 rounded-xl bg-gradient-to-r from-[#9C51FF] to-[#6F00FF] text-white rotate-[1deg] inline-block shadow-lg shadow-purple-500/30">
                                    Exploser
                                </span>
                                {/* Decorative Chart Icon */}
                                <svg className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 text-purple-400 bg-background rounded-lg p-1 shadow-sm z-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                </svg>
                            </span>
                        </span>
                        {" "}tes conversions
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                    Qualifiez, diagnostiquez et convertissez automatiquement chaque prospect avec un Quiz Funnel sur-mesure.
                </p>

                <div className="flex flex-col items-center gap-4 pt-4">
                    <Button size="lg" variant="cta" className="text-lg px-8" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
                        Je veux mon système d'acquisition
                    </Button>
                    <p className="text-sm text-muted-foreground font-medium opacity-60">
                        Sans engagement — 100% gratuit
                    </p>
                </div>
            </div>
        </Section>
    );
}
