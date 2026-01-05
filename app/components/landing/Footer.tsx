import { useState } from "react";
import { useNavigate } from "react-router";
import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";
import { ArrowRight, Rocket, Linkedin } from "lucide-react";
import { BOOKING_URL } from "~/constants";

export function Footer() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/lead",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify(formData), // { firstname, lastname, email, phone }
                });

            if (!res.ok) {
                throw new Error("Failed to create lead");
            }

            const data = await res.json();
            console.log("Lead created:", data);
            navigate("/quiz");
        } catch (error) {
            console.error("Error creating lead:", error);
        }
    };

    const handleCTA = () => {
        window.open(BOOKING_URL, "_blank");
    };

    return (
        <Section id="footer" className="bg-transparent py-20 text-foreground overflow-hidden relative">
            <div className="relative z-10 container mx-auto px-4">
                {/* CTA Section */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-8">
                        <Rocket className="w-3 h-3 text-foreground" />
                        VOS OUTILS VOUS FONT PERDRE DU TEMPS ?
                    </div>

                    <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-foreground">
                        Pilotez votre activité en temps réel avec une <span className="text-primary">Application Intelligente</span>
                    </h2>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Votre V1 livrée sous <span className="text-foreground font-bold">21 jours</span>.
                        <br />
                        Accompagnement et itérations sur <span className="text-foreground font-bold">90 jours</span>.
                    </p>

                    <Button
                        size="lg"
                        variant="cta"
                        className="shadow-xl"
                        onClick={handleCTA}
                    >
                        Prendre rendez-vous
                    </Button>
                </div>

                {/* Footer Links */}
                <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-bold tracking-tight text-foreground">
                            Joachim Duplat
                        </div>
                        <a
                            href="https://www.linkedin.com/in/joachim-ewestudio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
                        <a href="#solution" className="hover:text-foreground transition-colors">Comment ça marche ?</a>
                        <a href="#pricing" className="hover:text-foreground transition-colors">Offres</a>
                        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
                    <p>© {new Date().getFullYear()} Joachim Duplat. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-muted-foreground transition-colors">Politique de Confidentialité</a>
                        <a href="#" className="hover:text-muted-foreground transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-muted-foreground transition-colors">Politique de Cookies</a>
                    </div>

                </div>
            </div>
        </Section>
    );
}
