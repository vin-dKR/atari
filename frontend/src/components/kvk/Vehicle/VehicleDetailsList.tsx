import React from 'react'
import { DynamicTablePage, TableColumn, ButtonOption } from '../../common/DynamicTablePage'
import { getMockVehicleDetails } from '../../../mocks/kvkMockData'
import { Download, FileSpreadsheet } from 'lucide-react'

export const VehicleDetailsList: React.FC = () => {
    const data = getMockVehicleDetails()

    const columns: TableColumn[] = [
        { key: 'year', label: 'Year', sortable: true },
        { key: 'kvk_name', label: 'KVK Name', sortable: true },
        { key: 'vehicle_name', label: 'Vehicle Name', sortable: true },
        { key: 'registration_no', label: 'Registration No.', sortable: true },
        { key: 'total_run', label: 'Total Run(km/hrs)', sortable: true },
        { key: 'status', label: 'Present Status', sortable: true },
    ]

    const buttons: ButtonOption[] = [
        { label: 'Download Report', icon: <Download className="w-4 h-4" />, onClick: () => {} },
        { label: 'Download Excel Report', icon: <FileSpreadsheet className="w-4 h-4" />, onClick: () => {} },
    ]

    return (
        <DynamicTablePage
            title="Vehicle Details"
            description="Detailed vehicle information"
            columns={columns}
            data={data}
            buttonOptions={buttons}
            showTabs={false}
            showBreadcrumbs={false}
            showBack={true}
        />
    )
}
