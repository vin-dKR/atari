import React from 'react'
import { Link } from 'react-router-dom'
import {
    Bug,
    Users,
    Shield,
    GraduationCap,
    UserCircle,
    Smartphone,
    Sparkles,
    Calendar,
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
        title: 'Prevalent Diseases',
        icon: <Bug className="w-5 h-5" />,
        items: [
            { label: 'Prevalent diseases (Crops)', path: '/forms/miscellaneous/diseases/crops' },
            { label: 'Prevalent diseases (Livestock/Fishery)', path: '/forms/miscellaneous/diseases/livestock' },
        ],
    },
    {
        title: 'Nehru Yuva Kendra',
        icon: <Users className="w-5 h-5" />,
        items: [
            { label: 'Nehru Yuva Kendra', path: '/forms/miscellaneous/nehru-yuva-kendra' },
        ],
    },
    {
        title: 'PPV & FRA Sensitization',
        icon: <Shield className="w-5 h-5" />,
        items: [
            { label: 'Training & Awareness Program', path: '/forms/miscellaneous/ppv-fra/training' },
            { label: 'Details of Plant Varieties', path: '/forms/miscellaneous/ppv-fra/plant-varieties' },
        ],
    },
    {
        title: 'RAWE/FET Programme',
        icon: <GraduationCap className="w-5 h-5" />,
        items: [
            { label: 'RAWE/FET programme', path: '/forms/miscellaneous/rawe-fet' },
        ],
    },
    {
        title: 'VIP Visitors',
        icon: <UserCircle className="w-5 h-5" />,
        items: [
            { label: 'VIP visitors', path: '/forms/miscellaneous/vip-visitors' },
        ],
    },
    {
        title: 'Digital Information',
        icon: <Smartphone className="w-5 h-5" />,
        items: [
            { label: 'Mobile App', path: '/forms/miscellaneous/digital/mobile-app' },
            { label: 'Web Portal', path: '/forms/miscellaneous/digital/web-portal' },
            { label: 'Kisan Sarathi', path: '/forms/miscellaneous/digital/kisan-sarathi' },
            { label: 'Kisan Mobile Advisory', path: '/forms/miscellaneous/digital/kisan-mobile-advisory' },
            { label: 'Other channels', path: '/forms/miscellaneous/digital/other-channels' },
        ],
    },
    {
        title: 'Swachhta Bharat Abhiyaan',
        icon: <Sparkles className="w-5 h-5" />,
        items: [
            { label: 'Swachhta hi Sewa', path: '/forms/miscellaneous/swachhta/sewa' },
            { label: 'Swachta Pakhwada', path: '/forms/miscellaneous/swachhta/pakhwada' },
            { label: 'Budget expenditure', path: '/forms/miscellaneous/swachhta/budget' },
        ],
    },
    {
        title: 'Meetings',
        icon: <Calendar className="w-5 h-5" />,
        items: [
            { label: 'SAC Meetings', path: '/forms/miscellaneous/meetings/sac' },
            { label: 'Other meetings', path: '/forms/miscellaneous/meetings/other' },
        ],
    },
]

export const MiscellaneousTab: React.FC = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#212121]">Miscellaneous</h2>
                <p className="text-sm text-[#757575] mt-1">
                    Manage prevalent diseases, programmes, digital information, Swachhta Bharat Abhiyaan, and meetings
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, sectionIdx) => (
                    <div
                        key={sectionIdx}
                        className="bg-white rounded-md shadow-sm border border-[#C8E6C9] overflow-hidden"
                    >
                        <div className="bg-[#E8F5E9] px-4 py-3 border-b border-[#C8E6C9] border-l-2 border-[#487749]">
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
                                    className="flex items-center justify-between p-2 rounded hover:bg-[#E8F5E9] transition-colors group"
                                >
                                    <span className="text-sm text-[#212121] group-hover:text-[#487749]">
                                        {item.label}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-[#757575] group-hover:text-[#487749] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
