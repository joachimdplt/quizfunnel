import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
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
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white";

   const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-violet-600",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-slate-200 hover:bg-slate-100 hover:text-slate-900",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-10 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (asChild) {
        // Basic support for asChild pattern if needed later, for now just render children
        return <button className={classes} {...props} />;
    }

    return <button className={classes} {...props} />;
}
