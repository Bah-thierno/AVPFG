import * as React from "react"
import { cn } from "../../lib/utils"

// Note: I am NOT installing class-variance-authority just for this if I didn't verify it.
// Wait, I didn't add class-variance-authority to package.json.
// I should rewrite this to not use cva if I don't have it, or install it.
// I will write a simpler button for now to avoid another install cycle or install it silently.
// Actually, simple button is better for now.

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            primary: "bg-brand-600 text-white hover:bg-brand-700",
            secondary: "bg-brand-100 text-brand-900 hover:bg-brand-200",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground"
        }

        const sizes = {
            sm: "h-9 rounded-md px-3",
            md: "h-10 px-4 py-2",
            lg: "h-11 rounded-md px-8"
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
