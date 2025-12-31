import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
    return (
        <section className={cn("py-12 md:py-16 lg:py-24", className)} {...props}>
            <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
