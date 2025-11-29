import { useState } from "react";
import { useNavigate } from "react-router";
import { Section } from "~/components/ui/Section";
import { ArrowRight } from "lucide-react";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/quiz", { state: formData });
    };

    return (
        <Section className="py-20 pb-8">
            <div className="bg-brand-gradient rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-900/20 overflow-hidden relative mb-12">
                {/* Background decoration if needed */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Copy & Steps */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Prêt à passer à la vitesse supérieure ?
                        </h2>
                        <p className="text-purple-100 text-lg mb-8">
                            Ne laissez plus vos visiteurs repartir sans laisser de trace. Tranformez votre trafic en opportunités réelles.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shrink-0">
                                    1
                                </div>
                                <span className="text-purple-50 font-medium">Audit & Analyse</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shrink-0">
                                    2
                                </div>
                                <span className="text-purple-50 font-medium">Prototypage Rapide</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shrink-0">
                                    3
                                </div>
                                <span className="text-purple-50 font-medium">Développement Sur Mesure</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-purple-100 mb-1">Prénom</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-purple-50/20 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400 outline-none"
                                        placeholder="Julien"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium text-purple-100 mb-1">Nom</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-purple-50/20 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400 outline-none"
                                        placeholder="Moreau"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-purple-100 mb-1">Email professionnel</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-purple-50/20 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400 outline-none"
                                    placeholder="julien@transport-moreau.fr"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-purple-100 mb-1">Numéro de téléphone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-purple-50/20 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400 outline-none"
                                    placeholder="06 12 34 56 78"
                                    required
                                />
                            </div>

                            <button type="submit" className="w-full px-6 py-4 text-primary-700 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 mt-2 cursor-pointer">
                                Réserver mon audit offert
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <p className="text-xs text-purple-200 text-center mt-4">
                                Gratuit & sans engagement. Réponse sous 24h.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Joachim Duplat. Tous droits réservés.</p>
                <div className="mt-4 space-x-4">
                    <a href="#" className="hover:text-primary">Mentions Légales</a>
                    <a href="#" className="hover:text-primary">Politique de Confidentialité</a>
                </div>
            </div>
        </Section>
    );
}
