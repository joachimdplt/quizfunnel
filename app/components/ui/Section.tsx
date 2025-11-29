import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    containerClassName?: string;
    fullWidth?: boolean;
}

export function Section({
    children,
    className = "",
    containerClassName = "",
    fullWidth = false,
    ...props
}: SectionProps) {
    return (
        <section className={`py-16 md:py-24 ${className}`} {...props}>
            <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${fullWidth ? 'w-full' : 'max-w-7xl'} ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
}
