import React from 'react'
import { Link } from 'react-router-dom'
import {
    Trophy,
    GraduationCap,
    Users,
    Package,
    TestTube,
    Briefcase,
    FileText,
    Award,
    UserCheck,
    ArrowRight
} from 'lucide-react'

interface Section {
    title: string
    icon: React.ReactNode
    items: {
        label: string
        path: string
    }[]
    subsections?: {
        title: string
        items: {
            label: string
            path: string
        }[]
    }[]
}

const sections: Section[] = [
    {
        title: 'Technical Achievement Summary',
        icon: <Trophy className="w-5 h-5" />,
        items: [
            { label: 'Technical Achievement Summary', path: '/forms/achievements/technical-summary' },
        ],
    },
    {
        title: 'OFT & FLD',
        icon: <TestTube className="w-5 h-5" />,
        items: [
            { label: 'OFT', path: '/forms/achievements/oft' },
            { label: 'FLD - View FLD', path: '/forms/achievements/fld' },
        ],
    },
    {
        title: 'Training & Extension',
        icon: <GraduationCap className="w-5 h-5" />,
        items: [
            { label: 'Trainings', path: '/forms/achievements/trainings' },
            { label: 'Extension Activities', path: '/forms/achievements/extension-activities' },
            { label: 'Other Extension Activities', path: '/forms/achievements/other-extension' },
            { label: 'Technology Week', path: '/forms/achievements/technology-week' },
            { label: 'Celebration Days', path: '/forms/achievements/celebration-days' },
        ],
    },
    {
        title: 'Production & Supply',
        icon: <Package className="w-5 h-5" />,
        items: [
            { label: 'Production and Supply', path: '/forms/achievements/production-supply' },
        ],
    },
    {
        title: 'Soil and Water Testing',
        icon: <TestTube className="w-5 h-5" />,
        items: [
            { label: 'Equipment Details', path: '/forms/achievements/soil-equipment' },
            { label: 'Analysis Details', path: '/forms/achievements/soil-analysis' },
            { label: 'World Soil Day', path: '/forms/achievements/world-soil-day' },
        ],
    },
    {
        title: 'Projects',
        icon: <Briefcase className="w-5 h-5" />,
        items: [
            { label: 'CFLD', path: '/forms/achievements/projects/cfld' },
            { label: 'Climate Resilient Agriculture', path: '/forms/achievements/projects/cra' },
            { label: 'FPO And CBBO', path: '/forms/achievements/projects/fpo-cbbo' },
            { label: 'DRMR', path: '/forms/achievements/projects/drmr' },
            { label: 'NARI', path: '/forms/achievements/projects/nari' },
            { label: 'ARYA', path: '/forms/achievements/projects/arya' },
            { label: 'CSISA', path: '/forms/achievements/projects/csisa' },
            { label: 'TSP/SCSP', path: '/forms/achievements/projects/tsp-scsp' },
            { label: 'NICRA', path: '/forms/achievements/projects/nicra' },
            { label: 'Natural Farming', path: '/forms/achievements/projects/natural-farming' },
            { label: 'Agri-Drone', path: '/forms/achievements/projects/agri-drone' },
            { label: 'Seed Hub Program', path: '/forms/achievements/projects/seed-hub' },
            { label: 'Other Programmes', path: '/forms/achievements/projects/other' },
        ],
    },
    {
        title: 'Publications',
        icon: <FileText className="w-5 h-5" />,
        items: [
            { label: 'Publications', path: '/forms/achievements/publications' },
        ],
    },
    {
        title: 'Award and Recognition',
        icon: <Award className="w-5 h-5" />,
        items: [
            { label: 'KVK Awards', path: '/forms/achievements/awards/kvk' },
            { label: 'Scientist Awards', path: '/forms/achievements/awards/scientist' },
            { label: 'Farmer Awards', path: '/forms/achievements/awards/farmer' },
        ],
    },
    {
        title: 'Human Resources Development',
        icon: <UserCheck className="w-5 h-5" />,
        items: [
            { label: 'Human Resources Development', path: '/forms/achievements/hrd' },
        ],
    },
]

export const AchievementsTab: React.FC = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-emerald-900">Achievements</h2>
                <p className="text-sm text-[#757575] mt-1">
                    Manage technical achievements, OFT, FLD, trainings, extension activities, projects, and awards
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
