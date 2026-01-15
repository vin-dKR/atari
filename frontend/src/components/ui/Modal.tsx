import React from 'react'
import { X } from 'lucide-react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
}) => {
    if (!isOpen) return null

    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative bg-white rounded-xl border border-[#E0E0E0] shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}
            >
                {/* Header */}
                {title && (
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0]">
                        <h2 className="text-xl font-semibold text-emerald-700">
                            {title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-xl hover:bg-[#F5F5F5] transition-all duration-200 border border-transparent hover:border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5 text-[#757575] hover:text-emerald-700" />
                        </button>
                    </div>
                )}

                {/* Content */}
                <div className="px-6 py-4">{children}</div>
            </div>
        </div>
    )
}
