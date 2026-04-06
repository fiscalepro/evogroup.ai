import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    href?: string
    target?: string
    rel?: string
    children: React.ReactNode
    className?: string
}

const variantClasses = {
    primary:
        'bg-gray-900 dark:bg-[#F0F0F5] text-white dark:text-[#0A0E1A] hover:bg-black dark:hover:bg-white shadow-md hover:shadow-lg',
    secondary:
        'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20',
    outline:
        'border border-gray-900 dark:border-[#F0F0F5]/[0.1] text-gray-900 dark:text-[#F0F0F5]/70 bg-transparent hover:bg-gray-900 hover:text-white dark:hover:bg-[#F0F0F5]/[0.05] dark:hover:text-[#F0F0F5]',
    ghost:
        'bg-transparent text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white',
}

const sizeClasses = {
    sm: 'h-8 px-3 text-xs rounded-lg',
    md: 'h-10 px-5 text-sm rounded-xl',
    lg: 'h-12 px-7 text-sm rounded-xl',
    xl: 'h-14 px-8 text-base rounded-xl',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', href, target, rel, className = '', children, ...props }, ref) => {
        const classes = [
            'inline-flex items-center justify-center gap-2 font-semibold no-underline transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
            variantClasses[variant],
            sizeClasses[size],
            className,
        ].join(' ')

        if (href) {
            return (
                <Link href={href} target={target} rel={rel} className={classes}>
                    {children}
                </Link>
            )
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'
