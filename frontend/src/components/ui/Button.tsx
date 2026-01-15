import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles =
        'font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
        primary:
            'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-600 focus:ring-emerald-500/30 shadow-sm hover:shadow-md',
        secondary:
            'bg-white text-emerald-700 border border-[#E0E0E0] hover:bg-[#F5F5F5] hover:border-[#BDBDBD] active:bg-[#FAFAFA] focus:ring-emerald-500/20',
        outline:
            'bg-transparent text-emerald-700 border-2 border-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 focus:ring-emerald-500/30',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm h-10',
        md: 'px-5 py-3 text-base h-12',
        lg: 'px-6 py-3.5 text-lg h-14',
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
