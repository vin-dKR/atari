import React from 'react'
import { useAuthStore } from '../../stores/authStore'
import { SuperAdminDashboard } from './SuperAdminDashboard'
import { AdminDashboard } from './AdminDashboard'
import { KVKDashboard } from './KVKDashboard'

export const Dashboard: React.FC = () => {
    const { user } = useAuthStore()

    // Render dashboard based on user role
    const renderDashboard = () => {
        if (!user) return null

        switch (user.role) {
            case 'super_admin':
                return <SuperAdminDashboard />
            case 'zone_admin':
            case 'state_admin':
            case 'district_admin':
            case 'org_admin':
                return <AdminDashboard />
            case 'kvk':
                return <KVKDashboard />
            default:
                return <SuperAdminDashboard />
        }
    }

    return (
        <div className="min-h-screen bg-[#F5F5F5] p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold text-[#212121]">
                            Dashboard
                        </h1>
                        <p className="text-sm text-[#757575] mt-1">
                            Overview of your system activities
                        </p>
                    </div>
                </div>

                {/* Role-based Dashboard Content */}
                {renderDashboard()}
            </div>
        </div>
    )
}
