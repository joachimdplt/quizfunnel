import React from "react";
import { TrendingUp } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "cta";
    size?: "sm" | "md" | "lg";
    className?: string;
    asChild?: boolean;
}

export function Button({
    className = "",
    variant = "primary",
    size = "md",
    asChild = false,
    ...props
}: ButtonProps) {
    const baseStyles = "group inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white gap-2";

    const variants = {
        primary: "bg-gradient-to-r from-[#9C51FF] to-[#6F00FF] text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300",
        secondary: "bg-white text-[#6F00FF] border border-purple-100 hover:bg-purple-50 shadow-sm",
        outline: "border-2 border-[#9C51FF]/20 text-[#9C51FF] hover:bg-purple-50 hover:border-[#6F00FF]/50",
        ghost: "text-[#6F00FF] hover:bg-purple-50",
        cta: "bg-gradient-to-r from-[#9C51FF] to-[#6F00FF] text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-10 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} `;

    if (asChild) {
        // Basic support for asChild pattern if needed later, for now just render children
        return <button className={classes} {...props} />;
    }

    return (
        <button className={classes} {...props}>
            {props.children}
            <TrendingUp className="w-5 h-5 ml-1 opacity-80 group-hover:translate-x-0.5 transition-transform" />
        </button>
    );
}
