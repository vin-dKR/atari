import React from 'react'
import { Link } from 'react-router-dom'
import {
    TestTube,
    FolderTree,
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
        title: 'OFT Master',
        icon: <TestTube className="w-5 h-5" />,
        items: [
            { label: 'Subject Master', path: '/all-master/oft/subject' },
            { label: 'Thematic Area Master', path: '/all-master/oft/thematic-area' },
        ],
    },
    {
        title: 'FLD Master',
        icon: <FolderTree className="w-5 h-5" />,
        items: [
            { label: 'Sector', path: '/all-master/fld/sector' },
            { label: 'Thematic Area', path: '/all-master/fld/thematic-area' },
            { label: 'Category', path: '/all-master/fld/category' },
            { label: 'Sub-category', path: '/all-master/fld/sub-category' },
            { label: 'Crop', path: '/all-master/fld/crop' },
        ],
    },
    {
        title: 'CFLD Master',
        icon: <TestTube className="w-5 h-5" />,
        items: [
            { label: 'CFLD Crop Master', path: '/all-master/cfld-crop' },
        ],
    },
]

export const OFTFLDTab: React.FC = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-emerald-700">OFT & FLD Masters</h2>
                <p className="text-sm text-[#757575] mt-1">
                    Manage OFT (On Farm Testing), FLD (Front Line Demonstrations), and CFLD masters
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
