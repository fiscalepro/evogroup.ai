import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'default' | 'md' | 'lg' | 'xl'
    children: React.ReactNode
    className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
                                                                            variant = 'default',
                                                                            size = 'default',
                                                                            className = '',
                                                                            children,
                                                                            ...props
                                                                        }, ref) => {
    let baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50'

    // Стили для вариантов (адаптированы для темной темы)
    if (variant === 'default' || variant === 'primary') {
        baseClasses += ' bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500'
    } else if (variant === 'secondary') {
        baseClasses += ' bg-slate-700 text-white hover:bg-slate-600'
    } else if (variant === 'outline') {
        baseClasses += ' border-2 border-white/20 bg-transparent text-white hover:bg-white/10 focus:ring-2 focus:ring-white/50'
    } else if (variant === 'ghost') {
        baseClasses += ' bg-transparent text-white hover:bg-white/10 focus:ring-2 focus:ring-white/50'
    }

    // Стили для размеров
    if (size === 'sm') {
        baseClasses += ' h-8 px-3 text-sm'
    } else if (size === 'md') {
        baseClasses += ' h-9 px-4 text-sm'
    } else if (size === 'lg') {
        baseClasses += ' h-12 px-6 text-base'
    } else if (size === 'xl') {
        baseClasses += ' h-14 px-8 text-lg'
    } else {
        baseClasses += ' h-10 px-4 text-sm' // default
    }

    return (
        <button
            ref={ref}
            className={`${baseClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'