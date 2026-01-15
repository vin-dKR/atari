import React from 'react'
import { Link } from 'react-router-dom'
import {
    TrendingUp,
    MapPin,
    Building2,
    DollarSign,
    Link as LinkIcon,
    ArrowRight
} from 'lucide-react'

interface Section {
    title: string
    icon: React.ReactNode
    items: {
        label: string
        path: string
    }[]
}

const sections: Section[] = [
    {
        title: 'Impact',
        icon: <TrendingUp className="w-5 h-5" />,
        items: [
            { label: 'Impact of KVK activities', path: '/forms/performance/impact/kvk-activities' },
            { label: 'Entrepreneurship', path: '/forms/performance/impact/entrepreneurship' },
            { label: 'Success Stories', path: '/forms/performance/impact/success-stories' },
        ],
    },
    {
        title: 'District and Village Performance',
        icon: <MapPin className="w-5 h-5" />,
        items: [
            { label: 'District Level Data', path: '/forms/performance/district-village/district-level' },
            { label: 'Operational Area Details', path: '/forms/performance/district-village/operational-area' },
            { label: 'Village Adoption Programme', path: '/forms/performance/district-village/village-adoption' },
            { label: 'Priority Thrust Area', path: '/forms/performance/district-village/priority-thrust' },
        ],
    },
    {
        title: 'Infrastructure Performance',
        icon: <Building2 className="w-5 h-5" />,
        items: [
            { label: 'Demonstration Units', path: '/forms/performance/infrastructure/demonstration-units' },
            { label: 'Instructional Farm (crops)', path: '/forms/performance/infrastructure/instructional-farm-crops' },
            { label: 'Production Units', path: '/forms/performance/infrastructure/production-units' },
            { label: 'Instructional Farm (livestock)', path: '/forms/performance/infrastructure/instructional-farm-livestock' },
            { label: 'Hostel Facilities', path: '/forms/performance/infrastructure/hostel' },
            { label: 'Staff Quarters', path: '/forms/performance/infrastructure/staff-quarters' },
            { label: 'Rain Water Harvesting', path: '/forms/performance/infrastructure/rainwater-harvesting' },
        ],
    },
    {
        title: 'Financial Performance',
        icon: <DollarSign className="w-5 h-5" />,
        items: [
            { label: 'Budget Details', path: '/forms/performance/financial/budget-details' },
            { label: 'Project-wise Budget', path: '/forms/performance/financial/project-budget' },
            { label: 'Revolving Fund Status', path: '/forms/performance/financial/revolving-fund' },
            { label: 'Revenue generation', path: '/forms/performance/financial/revenue-generation' },
            { label: 'Resource Generation', path: '/forms/performance/financial/resource-generation' },
        ],
    },
    {
        title: 'Linkages',
        icon: <LinkIcon className="w-5 h-5" />,
        items: [
            { label: 'Functional Linkage', path: '/forms/performance/linkages/functional-linkage' },
            { label: 'Special Programmes', path: '/forms/performance/linkages/special-programmes' },
        ],
    },
]

export const PerformanceTab: React.FC = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-emerald-900">Performance Indicators</h2>
                <p className="text-sm text-[#757575] mt-1">
                    Manage impact, district and village performance, infrastructure performance, financial performance, and linkages
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, sectionIdx) => (
                    <div
                        key={sectionIdx}
                        className="bg-white rounded-md shadow-sm border border-emerald-100 overflow-hidden"
                    >
                        <div className="bg-emerald-50 px-4 py-3 border-b border-emerald-100 border-l-2 border-emerald-500">
                            <div className="flex items-center gap-2">
                                <span className="text-emerald-700">
                                    {section.icon}
                                </span>
                                <h3 className="font-semibold text-emerald-700">
                                    {section.title}
                                </h3>
                            </div>
                        </div>
                        <div className="p-4 space-y-2">
                            {section.items.map((item, itemIdx) => (
                                <Link
                                    key={itemIdx}
                                    to={item.path}
                                    className="flex items-center justify-between p-2 rounded hover:bg-emerald-50 transition-colors group"
                                >
                                    <span className="text-sm text-emerald-900 group-hover:text-emerald-700">
                                        {item.label}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-[#757575] group-hover:text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
