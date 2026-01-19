import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    MapPin,
    TestTube,
    GraduationCap,
    Package,
    BookOpen,
} from 'lucide-react'
import { BasicMastersTab } from './masters/BasicMastersTab'
import { OFTFLDTab } from './masters/OFTFLDTab'
import { TrainingExtensionTab } from './masters/TrainingExtensionTab'
import { ProductionProjectsTab } from './masters/ProductionProjectsTab'
import { PublicationsTab } from './masters/PublicationsTab'

interface Tab {
    id: string
    label: string
    path: string
    icon: React.ReactNode
    component: React.ReactNode
}

const tabs: Tab[] = [
    {
        id: 'basic',
        label: 'Basic Masters',
        path: '/all-master/basic',
        icon: <MapPin className="w-4 h-4" />,
        component: <BasicMastersTab />,
    },
    {
        id: 'oft-fld',
        label: 'OFT & FLD Masters',
        path: '/all-master/oft-fld',
        icon: <TestTube className="w-4 h-4" />,
        component: <OFTFLDTab />,
    },
    {
        id: 'training-extension',
        label: 'Training & Extension',
        path: '/all-master/training-extension',
        icon: <GraduationCap className="w-4 h-4" />,
        component: <TrainingExtensionTab />,
    },
    {
        id: 'production-projects',
        label: 'Production & Projects',
        path: '/all-master/production-projects',
        icon: <Package className="w-4 h-4" />,
        component: <ProductionProjectsTab />,
    },
    {
        id: 'publications',
        label: 'Publications',
        path: '/all-master/publications',
        icon: <BookOpen className="w-4 h-4" />,
        component: <PublicationsTab />,
    },
]

export const AllMasters: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Redirect to first tab if on base /all-master route
    React.useEffect(() => {
        if (location.pathname === '/all-master') {
            navigate(tabs[0].path, { replace: true })
        }
    }, [location.pathname, navigate])

    // Determine active tab based on current route
    const getActiveTab = () => {
        const currentPath = location.pathname
        // Check for exact matches first
        const exactMatch = tabs.find(tab => currentPath === tab.path)
        if (exactMatch) return exactMatch.id

        // Check for path prefixes to match sub-routes
        if (currentPath.startsWith('/all-master/zones') ||
            currentPath.startsWith('/all-master/states') ||
            currentPath.startsWith('/all-master/organizations') ||
            currentPath.startsWith('/all-master/universities') ||
            currentPath.startsWith('/all-master/districts')) {
            return 'basic'
        }
        if (currentPath.startsWith('/all-master/oft') ||
            currentPath.startsWith('/all-master/fld') ||
            currentPath.startsWith('/all-master/cfld-crop')) {
            return 'oft-fld'
        }
        if (currentPath.startsWith('/all-master/training') ||
            currentPath.startsWith('/all-master/extension-activity') ||
            currentPath.startsWith('/all-master/other-extension-activity') ||
            currentPath.startsWith('/all-master/events')) {
            return 'training-extension'
        }
        if (currentPath.startsWith('/all-master/product') ||
            currentPath.startsWith('/all-master/cra') ||
            currentPath.startsWith('/all-master/arya-enterprise')) {
            return 'production-projects'
        }
        if (currentPath.startsWith('/all-master/publication')) {
            return 'publications'
        }

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
                <h1 className="text-2xl font-semibold text-[#487749]">All Masters</h1>
                <p className="text-sm text-[#757575] mt-1">
                    Manage all master data including zones, states, organizations, OFT, FLD, training, extension, production, and publications
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
