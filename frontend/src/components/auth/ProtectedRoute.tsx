import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'

interface ProtectedRouteProps {
    children: React.ReactNode
    requiredRole?:
        | 'super_admin'
        | 'admin'
        | 'kvk'
        | ('super_admin' | 'admin' | 'kvk')[]
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    requiredRole,
}) => {
    const { isAuthenticated, user, hasRole } = useAuthStore()

    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />
    }

    if (requiredRole && !hasRole(requiredRole)) {
        return (
            <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                    <h1 className="text-2xl font-bold text-[#212121] mb-4">
                        Access Denied
                    </h1>
                    <p className="text-[#757575] mb-6">
                        You don't have permission to access this page.
                    </p>
                    <a
                        href="/dashboard"
                        className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Go to Dashboard
                    </a>
                </div>
            </div>
        )
    }

    return <>{children}</>
}
