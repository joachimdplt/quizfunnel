import { useState, useEffect } from "react";
import { Button } from "~/components/ui/Button";
import { ThemeToggle } from "~/components/ui/ThemeToggle";
import { X, Menu as MenuIcon, ArrowRight } from "lucide-react";
import { BOOKING_URL } from "~/constants";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCTA = () => {
        window.open(BOOKING_URL, "_blank");
        setIsOpen(false);
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[100] w-full bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                    <div
                        className="flex items-center gap-4 cursor-pointer"
                        onClick={() => scrollTo('hero')}
                    >
                        <div className="relative group">
                            <div className="w-12 h-12 rounded-full border-2 border-border overflow-hidden relative shadow-lg group-hover:scale-105 transition-transform">
                                <img
                                    src="/images/ProfilePic.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full z-10"></div>
                        </div>
                        <div>
                            <span className="font-bold text-foreground text-xl tracking-tight block">Joachim Duplat</span>
                            <span className="text-muted-foreground text-sm font-medium">Developer & Product Specialist</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="hidden md:flex items-center gap-6">
                            <div className="relative">
                                {/* Speech Bubble below the button */}
                                <div className="absolute top-[calc(100%+12px)] right-0 bg-background text-foreground text-[11px] font-black px-4 py-2 rounded-2xl whitespace-nowrap shadow-2xl pointer-events-none z-20 border border-border">
                                    👋 plus qu'un créneau dispo pour février!
                                    <div className="absolute top-[-6px] right-8 w-3 h-3 bg-background border-t border-l border-border rotate-45 transform"></div>
                                </div>
                                <Button
                                    variant="cta"
                                    size="md"
                                    className="rounded-full px-8 text-base shadow-lg"
                                    onClick={handleCTA}
                                >
                                    Réservez
                                </Button>
                            </div>
                        </div>

                        <ThemeToggle />

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 md:w-14 md:h-14 flex flex-col items-center justify-center gap-1.5 md:gap-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-full transition-all border border-border group"
                            aria-label="Toggle Menu"
                        >
                            <div className={`w-5 h-0.5 md:w-6 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5 md:translate-y-2' : ''}`}></div>
                            <div className={`w-5 h-0.5 md:w-6 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 md:translate-y-2' : ''}`}></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu Overlay */}
            <div
                className={`fixed inset-0 z-[90] ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}
            >
                {/* Top-Down Menu (Compact 50% height) */}
                <div
                    className={`absolute top-24 left-0 right-0 w-full bg-background border-b border-border shadow-3xl transition-transform duration-500 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'
                        } flex flex-col p-6 md:p-8 max-h-[50vh] overflow-y-auto`}
                >
                    <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                            {['Service', 'Offre', 'FAQ'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item.toLowerCase() === 'service' ? 'funnel' : item.toLowerCase())}
                                    className="text-lg md:text-xl font-bold text-muted-foreground hover:text-foreground transition-all transform hover:translate-x-4 text-left py-1"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <div className="pt-4 mt-4 border-t border-border flex items-end justify-end">
                            <div className="flex flex-col items-end gap-3">
                                <Button
                                    variant="cta"
                                    size="sm"
                                    className="rounded-full px-8 py-5 text-sm shadow-xl"
                                    onClick={handleCTA}
                                >
                                    Je veux mon système
                                </Button>
                                <div className="flex items-center gap-2 text-muted-foreground font-bold px-4 text-[9px] tracking-widest uppercase">
                                    <div className="w-1 h-1 rounded-full bg-green-500/50"></div>
                                    Prêt à scaler ?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
