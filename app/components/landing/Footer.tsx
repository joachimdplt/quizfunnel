import { useState } from "react";
import { useNavigate } from "react-router";
import { Section } from "~/components/ui/Section";
import { Button } from "~/components/ui/Button";
import { ArrowRight, Rocket } from "lucide-react";

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

    return (
        <Section id="footer" className="bg-transparent py-20 text-white overflow-hidden relative">
            <div className="relative z-10 container mx-auto px-4">
                {/* CTA Section */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-xs font-medium text-slate-300 mb-8">
                        <Rocket className="w-3 h-3 text-white" />
                        VOTRE LANDING PAGE EST MUETTE ?
                    </div>

                    <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                        Générez des leads ultra-qualifiés avec un <span className="text-primary">Quiz Funnel Intelligent</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Votre V1 livrée sous <span className="text-white font-bold">14 jours</span>.
                        <br />
                        Livraison finale optimisée sous <span className="text-white font-bold">21 jours</span>.
                    </p>

                    <Button
                        size="lg"
                        variant="cta"
                        className="shadow-xl"
                        onClick={() => window.location.href = '#'}
                    >
                        Je veux mon système d'acquisition
                    </Button>
                </div>

                {/* Footer Links */}
                <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-bold tracking-tight">
                        Joachim Duplat
                    </div>

                    <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-300">
                        <a href="#solution" className="hover:text-white transition-colors">Comment ça marche ?</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Offres</a>
                        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Joachim Duplat. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Politique de Confidentialité</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Politique de Cookies</a>
                    </div>

                </div>
            </div>
        </Section>
    );
}
