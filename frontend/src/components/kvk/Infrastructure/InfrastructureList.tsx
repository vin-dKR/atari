import React from 'react'
import { DynamicTablePage, TableColumn, ButtonOption } from '../../common/DynamicTablePage'
import { getMockInfrastructureList } from '../../../mocks/kvkMockData'
import { Download, FileSpreadsheet } from 'lucide-react'

export const InfrastructureList: React.FC = () => {
    const data = getMockInfrastructureList()

    const columns: TableColumn[] = [
        { key: 'kvk_name', label: 'KVK Name', sortable: true },
        { key: 'infrastructure', label: 'Name of Infrastructure', sortable: true },
        { key: 'not_started', label: 'Not Yet Started', sortable: true },
        { key: 'plinth', label: 'Completed upto plinth level', sortable: true },
        { key: 'lintel', label: 'Completed upto lintel level', sortable: true },
        { key: 'roof', label: 'Completed upto roof level', sortable: true },
        { key: 'total_completed', label: 'Totally Completed', sortable: true },
        { key: 'plinth_area', label: 'Plinth Area(m²)', sortable: true },
        { key: 'under_use', label: 'Under use', sortable: true },
    ]

    const buttons: ButtonOption[] = [
        { label: 'Download Report', icon: <Download className="w-4 h-4" />, onClick: () => {} },
        { label: 'Download Excel Report', icon: <FileSpreadsheet className="w-4 h-4" />, onClick: () => {} },
    ]

    return (
        <DynamicTablePage
            title="Infrastructure Details"
            description="KVK infrastructure status"
            columns={columns}
            data={data}
            buttonOptions={buttons}
            showTabs={false}
            showBreadcrumbs={false}
            showBack={true}
        />
    )
}
