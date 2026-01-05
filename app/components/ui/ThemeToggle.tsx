import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Initialize theme from document class
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:opacity-80 transition-all border border-border group"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-rotate-12" />
            ) : (
                <Sun className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-45" />
            )}
        </button>
    );
}
