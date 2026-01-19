import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    Building2,
    Trophy,
    BarChart3,
    FolderTree,
    FileText,
    ChevronRight
} from 'lucide-react'
import { AboutKVKTab } from './forms/AboutKVKTab'
import { AchievementsTab } from './forms/AchievementsTab'
import { PerformanceTab } from './forms/PerformanceTab'
import { MiscellaneousTab } from './forms/MiscellaneousTab'

interface Tab {
    id: string
    label: string
    path: string
    icon: React.ReactNode
    component: React.ReactNode
}

const tabs: Tab[] = [
    {
        id: 'about-kvk',
        label: 'About KVK',
        path: '/forms/about-kvk',
        icon: <Building2 className="w-4 h-4" />,
        component: <AboutKVKTab />,
    },
    {
        id: 'achievements',
        label: 'Achievements',
        path: '/forms/achievements',
        icon: <Trophy className="w-4 h-4" />,
        component: <AchievementsTab />,
    },
    {
        id: 'performance',
        label: 'Performance Indicators',
        path: '/forms/performance',
        icon: <BarChart3 className="w-4 h-4" />,
        component: <PerformanceTab />,
    },
    {
        id: 'miscellaneous',
        label: 'Miscellaneous',
        path: '/forms/miscellaneous',
        icon: <FolderTree className="w-4 h-4" />,
        component: <MiscellaneousTab />,
    },
]

export const FormManagement: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Redirect to first tab if on base /forms route
    React.useEffect(() => {
        if (location.pathname === '/forms') {
            navigate(tabs[0].path, { replace: true })
        }
    }, [location.pathname, navigate])

    // Determine active tab based on current route
    const getActiveTab = () => {
        const currentPath = location.pathname
        // Match any /forms/* path to the appropriate tab
        if (currentPath.startsWith('/forms/about-kvk')) return 'about-kvk'
        if (currentPath.startsWith('/forms/achievements')) return 'achievements'
        if (currentPath.startsWith('/forms/performance')) return 'performance'
        if (currentPath.startsWith('/forms/miscellaneous')) return 'miscellaneous'
        return tabs[0].id
    }

    const [activeTab, setActiveTab] = useState<string>(getActiveTab())

    // Update active tab when route changes
    React.useEffect(() => {
        setActiveTab(getActiveTab())
    }, [location.pathname])

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab.id)
        navigate(tab.path)
    }

    const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0]

    return (
        <div className="h-full flex flex-col bg-[#FAF9F6]">
            {/* Header */}
            <div className="bg-white border-b border-[#E0E0E0] px-6 py-4">
                <h1 className="text-2xl font-semibold text-[#487749]">Form Management</h1>
                <p className="text-sm text-[#757575] mt-1">
                    Manage KVK forms, achievements, performance indicators, and miscellaneous data
                </p>
            </div>

            {/* Tabs */}
            <div className="bg-white border-b border-[#E0E0E0] px-6">
                <div className="flex space-x-1 overflow-x-auto">
                    {tabs.map(tab => {
                        const isActive = activeTab === tab.id
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab)}
                                className={`
                                    flex items-center gap-2 px-4 py-3 text-sm font-medium
                                    transition-all duration-200 whitespace-nowrap
                                    border-b-2 border-transparent rounded-t-xl
                                    ${
                                        isActive
                                            ? 'text-[#487749] border-[#487749] bg-[#E8F5E9] border-l-2'
                                            : 'text-[#757575] hover:text-[#487749] hover:bg-[#F5F5F5]'
                                    }
                                `}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto">
                {activeTabData.component}
            </div>
        </div>
    )
}
