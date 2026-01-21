import React from 'react'
import { DynamicTablePage, TableColumn, ButtonOption } from '../../common/DynamicTablePage'
import { getMockEquipmentDetails } from '../../../mocks/kvkMockData'
import { Download, FileSpreadsheet } from 'lucide-react'

export const EquipmentDetailsList: React.FC = () => {
    const data = getMockEquipmentDetails()

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
            title="Equipment Details"
            description="Detailed equipment information"
            columns={columns}
            data={data}
            buttonOptions={buttons}
            showTabs={false}
            showBreadcrumbs={false}
            showBack={true}
        />
    )
}
