import React from 'react'
import { Link } from 'react-router-dom'
import {
    GraduationCap,
    Users,
    Calendar,
    ArrowRight,
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
        title: 'Training Master',
        icon: <GraduationCap className="w-5 h-5" />,
        items: [
            { label: 'Training Type', path: '/all-master/training-type' },
            { label: 'Training Area', path: '/all-master/training-area' },
            { label: 'Training Thematic Area', path: '/all-master/training-thematic' },
        ],
    },
    {
        title: 'Extension Activities',
        icon: <Users className="w-5 h-5" />,
        items: [
            { label: 'Extension Activity', path: '/all-master/extension-activity' },
            { label: 'Other Extension Activity', path: '/all-master/other-extension-activity' },
        ],
    },
    {
        title: 'Events',
        icon: <Calendar className="w-5 h-5" />,
        items: [
            { label: 'Events', path: '/all-master/events' },
        ],
    },
]

export const TrainingExtensionTab: React.FC = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#487749]">Training & Extension</h2>
                <p className="text-sm text-[#757575] mt-1">
                    Manage training masters, extension activities, and events
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, sectionIdx) => (
                    <div
                        key={sectionIdx}
                        className="bg-white rounded-xl shadow-sm border border-[#E0E0E0] overflow-hidden hover:shadow-md transition-all duration-200"
                    >
                        <div className="bg-[#E8F5E9] px-4 py-3 border-b border-[#E0E0E0] border-l-2 border-[#487749]">
                            <div className="flex items-center gap-2">
                                <span className="text-[#487749]">
                                    {section.icon}
                                </span>
                                <h3 className="font-semibold text-[#487749]">
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
                                    <span className="text-sm text-[#212121] group-hover:text-[#487749] font-medium">
                                        {item.label}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-[#757575] group-hover:text-[#487749] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
