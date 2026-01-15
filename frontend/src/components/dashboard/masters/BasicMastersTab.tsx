import React from 'react'
import { Link } from 'react-router-dom'
import {
    MapPin,
    ArrowRight,
} from 'lucide-react'
import { ViewZones } from '../ViewZones'
import { ViewStates } from '../ViewStates'
import { ViewOrganizations } from '../ViewOrganizations'
import { ViewDistricts } from '../ViewDistricts'
import { useLocation } from 'react-router-dom'

interface Section {
    title: string
    icon: React.ReactNode
    items: {
        label: string
        path: string
        component?: React.ReactNode
    }[]
}

const sections: Section[] = [
    {
        title: 'Basic Masters',
        icon: <MapPin className="w-5 h-5" />,
        items: [
            { label: 'Zones Master', path: '/all-master/zones', component: <ViewZones /> },
            { label: 'States Master', path: '/all-master/states', component: <ViewStates /> },
            { label: 'Organization Master', path: '/all-master/universities', component: <ViewOrganizations /> },
            { label: 'Districts Master', path: '/all-master/districts', component: <ViewDistricts /> },
        ],
    },
]

export const BasicMastersTab: React.FC = () => {
    const location = useLocation()

    // Check if we're on a specific master page, show that component directly
    const currentSection = sections.find(section =>
        section.items.some(item => location.pathname === item.path || location.pathname.startsWith(item.path + '/'))
    )

    const currentItem = currentSection?.items.find(item =>
        location.pathname === item.path || location.pathname.startsWith(item.path + '/')
    )

    // If on a specific master page, show that component
    if (currentItem?.component) {
        return currentItem.component
    }

    // Otherwise show the grid of sections
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-emerald-700">Basic Masters</h2>
                <p className="text-sm text-[#757575] mt-1">
                    Manage zones, states, organizations, and districts
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, sectionIdx) => (
                    <div
                        key={sectionIdx}
                        className="bg-white rounded-xl shadow-sm border border-[#E0E0E0] overflow-hidden hover:shadow-md transition-all duration-200"
                    >
                        <div className="bg-emerald-50 px-4 py-3 border-b border-[#E0E0E0] border-l-2 border-emerald-500">
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
                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F5F5F5] transition-all duration-200 group border border-transparent hover:border-[#E0E0E0]"
                                >
                                    <span className="text-sm text-[#212121] group-hover:text-emerald-700 font-medium">
                                        {item.label}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-[#757575] group-hover:text-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
