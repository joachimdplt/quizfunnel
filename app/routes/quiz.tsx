import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Check, ChevronLeft, Users, TrendingUp, Target, Zap, Layout, MessageSquare, BarChart3, Megaphone, Share2, Search, Activity, Layers } from "lucide-react";

export function meta() {
    return [
        { title: "Audit de votre Acquisition - Joachim Duplat" },
        { name: "description", content: "Découvrez comment transformer votre site en machine à convertir avec la méthode Q4C." },
    ];
}

export default function Quiz() {
    const location = useLocation();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        ...location.state, // Pre-fill from footer form if available
        activity: "",
        trafficSource: "",
        leadVolume: "",
        challenge: "",
        goal: "",
    });

    const totalSteps = 6;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            // Submit logic here (e.g., send to API)
            alert("Merci ! Nous avons bien reçu vos réponses. Nous vous recontacterons sous 24h.");
            navigate("/");
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const updateField = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        // Auto-advance for single selection steps
        if (step < totalSteps) {
            setTimeout(() => setStep(step + 1), 300);
        }
    };

    const handleFinish = async () => {
        try {
            console.log("[QUIZ] Envoi du lead qualifié :", formData);

            const res = await fetch(`/api/lead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json().catch(() => null);
            console.log("[QUIZ] Réponse API lead-quiz :", res.status, data);
        } catch (error) {
            console.error("[QUIZ] Erreur lors de l'envoi :", error);
        } finally {
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen bg-brand-gradient flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-primary-200 text-sm mb-2 font-medium">
                        <span>Étape {step} sur {totalSteps}</span>
                        <span>{Math.round((step / totalSteps) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-primary-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-primary-800/50">
                        <div
                            className="h-full bg-accent-500 transition-all duration-500 ease-out"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Back Button */}
                        {step > 1 && (
                            <button
                                onClick={handleBack}
                                className="absolute -top-2 -left-2 p-2 text-primary-200 hover:text-white transition-colors"
                                aria-label="Revenir à l'étape précédente"
                                type="button"
                            >
                                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                            </button>
                        )}

                        {/* Step 1: Activity */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    Quelle est votre activité principale ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Pour identifier les leviers de conversion adaptés à votre modèle.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <OptionCard
                                        icon={Users}
                                        label="Coach / Formateur"
                                        selected={formData.activity === "coach"}
                                        onClick={() => updateField("activity", "coach")}
                                    />
                                    <OptionCard
                                        icon={Zap}
                                        label="Agence / Service B2B"
                                        selected={formData.activity === "agency"}
                                        onClick={() => updateField("activity", "agency")}
                                    />
                                    <OptionCard
                                        icon={Layout}
                                        label="Autre / E-commerce"
                                        selected={formData.activity === "other"}
                                        onClick={() => updateField("activity", "other")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Traffic Source */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    D'où vient votre trafic principal ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Pour comprendre votre coût d'acquisition actuel.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <OptionCard
                                        icon={Megaphone}
                                        label="Publicité (Ads)"
                                        selected={formData.trafficSource === "ads"}
                                        onClick={() => updateField("trafficSource", "ads")}
                                    />
                                    <OptionCard
                                        icon={Share2}
                                        label="Réseaux Sociaux (Orga)"
                                        selected={formData.trafficSource === "social"}
                                        onClick={() => updateField("trafficSource", "social")}
                                    />
                                    <OptionCard
                                        icon={Search}
                                        label="SEO / Bouche à oreille"
                                        selected={formData.trafficSource === "seo"}
                                        onClick={() => updateField("trafficSource", "seo")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Lead Volume */}
                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    Combien de prospects gérez-vous par mois ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Pour dimensionner le système de qualification.
                                </p>

                                <div className="space-y-4">
                                    <OptionRow
                                        icon={Activity}
                                        label="Moins de 10 leads (Démarrage)"
                                        selected={formData.leadVolume === "low"}
                                        onClick={() => updateField("leadVolume", "low")}
                                    />
                                    <OptionRow
                                        icon={Layers}
                                        label="10 à 50 leads (Croissance)"
                                        selected={formData.leadVolume === "medium"}
                                        onClick={() => updateField("leadVolume", "medium")}
                                    />
                                    <OptionRow
                                        icon={Zap}
                                        label="Plus de 50 leads (Scale)"
                                        selected={formData.leadVolume === "high"}
                                        onClick={() => updateField("leadVolume", "high")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Challenge */}
                        {step === 4 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    Quel est votre frein n°1 actuellement ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Nous allons cibler ce point bloquant en priorité.
                                </p>

                                <div className="space-y-4">
                                    <OptionRow
                                        icon={MessageSquare}
                                        label="Mon site ne convertit pas (visiteurs muets)"
                                        selected={formData.challenge === "conversion"}
                                        onClick={() => updateField("challenge", "conversion")}
                                    />
                                    <OptionRow
                                        icon={Target}
                                        label="Je perds du temps avec des prospects non qualifiés"
                                        selected={formData.challenge === "qualification"}
                                        onClick={() => updateField("challenge", "qualification")}
                                    />
                                    <OptionRow
                                        icon={BarChart3}
                                        label="Je manque de visibilité sur mon ROI"
                                        selected={formData.challenge === "tracking"}
                                        onClick={() => updateField("challenge", "tracking")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 5: Goal */}
                        {step === 5 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    Quel est votre objectif à 3 mois ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Pour définir la stratégie d'acquisition idéale.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <OptionCard
                                        icon={TrendingUp}
                                        label="Scaler mon CA en automatique"
                                        selected={formData.goal === "scale"}
                                        onClick={() => updateField("goal", "scale")}
                                    />
                                    <OptionCard
                                        icon={Check}
                                        label="Améliorer la qualité des leads"
                                        selected={formData.goal === "quality"}
                                        onClick={() => updateField("goal", "quality")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 6: Confirmation */}
                        {step === 6 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500 text-center">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                                    <Check className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                                    Profil analysé avec succès
                                </h1>
                                <p className="text-primary-100 text-lg mb-8 max-w-lg mx-auto">
                                    Merci {formData.firstname}. Votre situation correspond parfaitement à la méthode <strong>Q4C</strong>. Joachim va préparer votre audit personnalisé pour {formData.challenge === 'conversion' ? 'booster vos conversions' : 'automatiser votre qualification'}.
                                </p>

                                <div className="bg-primary-900/50 p-6 rounded-xl border border-primary-800/50 text-left mb-8">
                                    <h3 className="text-primary-200 text-sm uppercase tracking-wider font-bold mb-4">Votre Diagnostic Préliminaire</h3>
                                    <ul className="space-y-3 text-white">
                                        <li className="flex items-center justify-between border-b border-primary-800 pb-2">
                                            <span className="text-primary-200">Profil</span>
                                            <span className="font-medium capitalize">{formData.activity === 'coach' ? 'Coach / Formateur' : formData.activity}</span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-primary-800 pb-2">
                                            <span className="text-primary-200">Volume</span>
                                            <span className="font-medium capitalize">
                                                {formData.leadVolume === 'low' && '< 10 leads/mois'}
                                                {formData.leadVolume === 'medium' && '10-50 leads/mois'}
                                                {formData.leadVolume === 'high' && '50+ leads/mois'}
                                            </span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-primary-800 pb-2">
                                            <span className="text-primary-200">Priorité</span>
                                            <span className="font-medium text-accent-300">
                                                {formData.challenge === 'conversion' && 'Optimisation Conversion'}
                                                {formData.challenge === 'qualification' && 'Filtrage & Scoring'}
                                                {formData.challenge === 'tracking' && 'Data & Tracking'}
                                                {!formData.challenge && 'Analyse Globale'}
                                            </span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-primary-200">Potentiel Q4C</span>
                                            <span className="font-bold text-green-400">Élevé</span>
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    onClick={handleFinish}
                                    className="px-8 py-4 text-primary-900 hover:bg-primary-50 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Valider ma demande d'audit
                                </button>
                                <p className="text-sm text-primary-300 mt-4">
                                    Réponse sous 24h ouvrées par Joachim.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function OptionCard({ icon: Icon, label, selected, onClick }: { icon: any, label: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`p-6 rounded-xl border text-left transition-all duration-300 group flex flex-col items-center justify-center gap-4 h-40
                ${selected
                    ? "bg-accent-600 border-accent-400 shadow-lg shadow-accent-600/30 transform scale-[1.02]"
                    : "bg-primary-900/40 border-primary-800/50 hover:bg-primary-800/60 hover:border-primary-700 hover:transform hover:scale-[1.02]"
                }
            `}
        >
            <Icon className={`w-8 h-8 ${selected ? "text-white" : "text-primary-300 group-hover:text-white"}`} />
            <span className={`font-medium text-center ${selected ? "text-white" : "text-primary-200 group-hover:text-white"}`}>
                {label}
            </span>
        </button>
    );
}

function OptionRow({ icon: Icon, label, selected, onClick }: { icon?: any, label: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full p-5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group
                ${selected
                    ? "bg-accent-600 border-accent-400 shadow-lg shadow-accent-600/30 transform scale-[1.01]"
                    : "bg-primary-900/40 border-primary-800/60 hover:bg-primary-800/60 hover:border-primary-700 hover:transform hover:scale-[1.01]"
                }
            `}
        >
            <div className="flex items-center gap-4">
                {Icon && <Icon className={`w-6 h-6 ${selected ? "text-white" : "text-primary-300 group-hover:text-white"}`} />}
                <span className={`font-medium text-lg ${selected ? "text-white" : "text-primary-200 group-hover:text-white"}`}>
                    {label}
                </span>
            </div>
            {selected && <Check className="w-6 h-6 text-white" />}
        </button>
    );
}
