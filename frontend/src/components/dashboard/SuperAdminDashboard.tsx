import React, { useState } from 'react'
import { Card, CardContent } from '../ui/Card'
import {
    Users,
    FileText,
    BarChart3,
    GraduationCap,
    Tag,
} from 'lucide-react'

// Mock data for Super Admin
const mockKPIData = {
    organization: 9,
    kvk: 66,
    totalOFT: 462,
    totalFLD: 788,
    training: 7284,
    totalStaff: 636,
}

const mockOFTData = [
    { kvk: 'KVK Araria', completed: 2, total: 2, status: 'complete' },
    { kvk: 'KVK Arwal', completed: 5, total: 1, status: 'over' },
    { kvk: 'KVK Aurangabad', completed: 0, total: 7, status: 'pending' },
    { kvk: 'KVK Banka', completed: 4, total: 3, status: 'over' },
]

const mockTrainingData = [
    { kvk: 'KVK Araria', count: 140, status: 'active' },
    { kvk: 'KVK Arwal', count: 89, status: 'active' },
    { kvk: 'KVK Aurangabad', count: 45, status: 'active' },
    { kvk: 'KVK Banka', count: 120, status: 'active' },
]

const mockFLDData = [
    { kvk: 'KVK Araria', completed: 7, total: 3, status: 'over' },
    { kvk: 'KVK Arwal', completed: 19, total: 23, status: 'in-progress' },
    { kvk: 'KVK Aurangabad', completed: 0, total: 5, status: 'pending' },
    { kvk: 'KVK Banka', completed: 5, total: 9, status: 'in-progress' },
]

const mockExtensionActivity = [
    { kvk: 'KVK Araria', count: 45, status: 'active' },
    { kvk: 'KVK Arwal', count: 114, status: 'active' },
    { kvk: 'KVK Aurangabad', count: 67, status: 'active' },
    { kvk: 'KVK Banka', count: 89, status: 'active' },
]

const getProgressColor = (status: string) => {
    switch (status) {
        case 'complete':
        case 'active':
            return 'bg-emerald-500'
        case 'in-progress':
            return 'bg-emerald-600'
        case 'over':
            return 'bg-amber-500'
        case 'pending':
            return 'bg-gray-300'
        default:
            return 'bg-gray-300'
    }
}

const getBadgeColor = (status: string) => {
    switch (status) {
        case 'complete':
        case 'active':
            return 'bg-emerald-50 text-emerald-700 border border-emerald-200'
        case 'in-progress':
            return 'bg-[#F1F8E9] text-emerald-700 border border-[#DCEDC8]'
        case 'over':
            return 'bg-[#FFF3E0] text-[#F57C00] border border-[#FFE0B2]'
        case 'pending':
            return 'bg-[#F5F5F5] text-[#757575] border border-[#E0E0E0]'
        default:
            return 'bg-[#F5F5F5] text-[#757575] border border-[#E0E0E0]'
    }
}

export const SuperAdminDashboard: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState('All')
    const [selectedKVK, setSelectedKVK] = useState('All')

    const kpiCards = [
        {
            label: 'Organization',
            value: mockKPIData.organization,
            icon: <FileText className="w-6 h-6" />,
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-700',
        },
        {
            label: 'KVK',
            value: mockKPIData.kvk,
            icon: <BarChart3 className="w-6 h-6" />,
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-700',
        },
        {
            label: 'Total OFT',
            value: mockKPIData.totalOFT,
            icon: <Users className="w-6 h-6" />,
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-700',
        },
        {
            label: 'Total FLD',
            value: mockKPIData.totalFLD,
            icon: <FileText className="w-6 h-6" />,
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-700',
        },
        {
            label: 'Training',
            value: mockKPIData.training.toLocaleString(),
            icon: <GraduationCap className="w-6 h-6" />,
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-700',
        },
        {
            label: 'Total Staff',
            value: mockKPIData.totalStaff,
            icon: <Tag className="w-6 h-6" />,
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-700',
        },
    ]

    const calculateProgress = (completed: number, total: number) => {
        if (total === 0) return 0
        return Math.min((completed / total) * 100, 100)
    }

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex gap-4">
                <div className="w-48">
                    <label className="block text-sm font-medium text-emerald-700 mb-2">
                        Year
                    </label>
                    <select
                        value={selectedYear}
                        onChange={e => setSelectedYear(e.target.value)}
                        className="w-full h-12 px-4 border border-[#E0E0E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 bg-white text-[#212121] transition-all duration-200 hover:border-[#BDBDBD]"
                    >
                        <option value="All">All</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                </div>
                <div className="w-48">
                    <label className="block text-sm font-medium text-emerald-700 mb-2">
                        KVK
                    </label>
                    <select
                        value={selectedKVK}
                        onChange={e => setSelectedKVK(e.target.value)}
                        className="w-full h-12 px-4 border border-[#E0E0E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 bg-white text-[#212121] transition-all duration-200 hover:border-[#BDBDBD]"
                    >
                        <option value="All">All</option>
                        <option value="KVK Araria">KVK Araria</option>
                        <option value="KVK Arwal">KVK Arwal</option>
                        <option value="KVK Aurangabad">KVK Aurangabad</option>
                        <option value="KVK Banka">KVK Banka</option>
                    </select>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {kpiCards.map((card, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#757575] mb-1">
                                        {card.label}
                                    </p>
                                    <p className="text-3xl font-semibold text-[#212121]">
                                        {card.value}
                                    </p>
                                </div>
                                <div
                                    className={`${card.bgColor} ${card.iconColor} p-3 rounded-xl border border-[#E0E0E0]`}
                                >
                                    {card.icon}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Data Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* OFT Table */}
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#212121] mb-4">
                            OFT
                        </h3>
                        <div className="space-y-3">
                            {mockOFTData.map((item, index) => {
                                const progress = calculateProgress(
                                    item.completed,
                                    item.total
                                )
                                return (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-[#212121]">
                                                {index + 1} {item.kvk}
                                            </span>
                                            <span
                                                className={`px-2.5 py-1 rounded-xl text-xs font-medium ${getBadgeColor(
                                                    item.status
                                                )}`}
                                            >
                                                {item.completed}/{item.total}
                                            </span>
                                        </div>
                                        <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${getProgressColor(
                                                    item.status
                                                )}`}
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* FLD Table */}
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#212121] mb-4">
                            FLD
                        </h3>
                        <div className="space-y-3">
                            {mockFLDData.map((item, index) => {
                                const progress = calculateProgress(
                                    item.completed,
                                    item.total
                                )
                                return (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-[#212121]">
                                                {index + 1} {item.kvk}
                                            </span>
                                            <span
                                                className={`px-2.5 py-1 rounded-xl text-xs font-medium ${getBadgeColor(
                                                    item.status
                                                )}`}
                                            >
                                                {item.completed}/{item.total}
                                            </span>
                                        </div>
                                        <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${getProgressColor(
                                                    item.status
                                                )}`}
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Training Table */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-[#212121]">
                                Training
                            </h3>
                            <div className="flex gap-2">
                                <select className="text-xs border border-[#E0E0E0] rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 bg-white text-[#212121] transition-all duration-200">
                                    <option>All</option>
                                </select>
                                <select className="text-xs border border-[#E0E0E0] rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 bg-white text-[#212121] transition-all duration-200">
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {mockTrainingData.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-[#212121]">
                                            {index + 1} {item.kvk}
                                        </span>
                                        <span
                                            className={`px-2.5 py-1 rounded-xl text-xs font-medium ${getBadgeColor(
                                                item.status
                                            )}`}
                                        >
                                            {item.count}
                                        </span>
                                    </div>
                                    <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${getProgressColor(
                                                item.status
                                            )}`}
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Extension Activity Table */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-[#212121]">
                                Extension Activity
                            </h3>
                            <select className="text-xs border border-[#E0E0E0] rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 bg-white text-[#212121] transition-all duration-200">
                                <option>All</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            {mockExtensionActivity.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-[#212121]">
                                            {index + 1} {item.kvk}
                                        </span>
                                        <span
                                            className={`px-2.5 py-1 rounded-xl text-xs font-medium ${getBadgeColor(
                                                item.status
                                            )}`}
                                        >
                                            {item.count}
                                        </span>
                                    </div>
                                    <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${getProgressColor(
                                                item.status
                                            )}`}
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
