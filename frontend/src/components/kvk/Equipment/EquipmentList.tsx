import React from 'react'
import { DynamicTablePage, TableColumn, ButtonOption } from '../../common/DynamicTablePage'
import { getMockEquipmentList } from '../../../mocks/kvkMockData'
import { Download, FileSpreadsheet } from 'lucide-react'

export const EquipmentList: React.FC = () => {
    const data = getMockEquipmentList()

    const columns: TableColumn[] = [
        { key: 'year', label: 'Year', sortable: true },
        { key: 'kvk_name', label: 'KVK Name', sortable: true },
        { key: 'equipment_name', label: 'Equipment Name', sortable: true },
        { key: 'source_of_fund', label: 'Source of fund', sortable: true },
        { key: 'status', label: 'Present Status', sortable: true },
    ]

    const buttons: ButtonOption[] = [
        { label: 'Download Report', icon: <Download className="w-4 h-4" />, onClick: () => {} },
        { label: 'Download Excel Report', icon: <FileSpreadsheet className="w-4 h-4" />, onClick: () => {} },
    ]

    return (
        <DynamicTablePage
            title="View Equipment Details"
            description="Equipment inventory by KVK"
            columns={columns}
            data={data}
            buttonOptions={buttons}
            showTabs={false}
            showBreadcrumbs={false}
            showBack={true}
        />
    )
}
