import React from 'react'
import { Link } from 'react-router-dom'
import {
    Building2,
    Users,
    Truck,
    Wrench,
    FileText,
    ArrowRight
} from 'lucide-react'

interface Section {
    title: string
    icon: React.ReactNode
    items: {
        label: string
        path: string
        description?: string
    }[]
}

const sections: Section[] = [
    {
        title: 'View KVKs',
        icon: <Building2 className="w-5 h-5" />,
        items: [
            { label: 'View KVKs', path: '/forms/about-kvk/view-kvks' },
        ],
    },
    {
        title: 'Basic Information',
        icon: <FileText className="w-5 h-5" />,
        items: [
            { label: 'Bank Account Details', path: '/forms/about-kvk/bank-account' },
            { label: 'Employee Details', path: '/forms/about-kvk/employee-details' },
            { label: 'Staff Transferred', path: '/forms/about-kvk/staff-transferred' },
            { label: 'Infrastructure Details', path: '/forms/about-kvk/infrastructure' },
        ],
    },
    {
        title: 'Vehicles',
        icon: <Truck className="w-5 h-5" />,
        items: [
            { label: 'View Vehicles', path: '/forms/about-kvk/vehicles' },
            { label: 'Vehicle Details', path: '/forms/about-kvk/vehicle-details' },
        ],
    },
    {
        title: 'Equipments',
        icon: <Wrench className="w-5 h-5" />,
        items: [
            { label: 'View Equipments', path: '/forms/about-kvk/equipments' },
            { label: 'Equipment Details', path: '/forms/about-kvk/equipment-details' },
        ],
    },
    {
        title: 'Farm Implements',
        icon: <Wrench className="w-5 h-5" />,
        items: [
            { label: 'Farm Implement Details', path: '/forms/about-kvk/farm-implements' },
        ],
    },
]

export const AboutKVKTab: React.FC = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#212121]">About KVK</h2>
                <p className="text-sm text-[#757575] mt-1">
                    Manage KVK basic information, staff, infrastructure, vehicles, and equipments
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
                                    <span className="text-sm text-[#212121] group-hover:text-emerald-700">
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
