'use client';
import * as React from 'react';
import { Chip, Typography } from '@mui/material';
import PageContainer from '@/app/(dashboard)/components/container/PageContainer';
import DashboardCard from '@/app/(dashboard)/components/shared/DashboardCard';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface DataTableRow {
    id: number;
    openRate: string;
    receipient: string;
    status: number;
    dateTime: string;
    action: number;
}

interface Params {
    row: DataTableRow;
}

const STATUS = {
    PREPARED: "Prepared",
    SENT: "Sent",
    CANCELED: "Canceled"
}
const STATUS_COLOR = {
    PREPARED: "#FA896B",
    SENT: "#13deb9",
    CANCELED: "#db4073"
}

const paginationModel = { page: 0, pageSize: 5 };
const rows = [
    { id: 1, openRate: '75%', receipient: 'john.doe@example.com', status: 1, dateTime: '2024-01-12 10:30', action: 1 },
    { id: 2, openRate: '62%', receipient: 'jane.smith@example.com', status: 2, dateTime: '2024-01-12 12:00', action: 0 },
    { id: 3, openRate: '80%', receipient: 'alex.johnson@example.com', status: 1, dateTime: '2024-01-13 14:45', action: 1 },
    { id: 4, openRate: '50%', receipient: 'emily.white@example.com', status: 2, dateTime: '2024-01-14 09:15', action: 2 },
    { id: 5, openRate: '90%', receipient: 'michael.brown@example.com', status: 1, dateTime: '2024-01-14 11:20', action: 1 },
    { id: 6, openRate: '68%', receipient: 'olivia.davis@example.com', status: 0, dateTime: '2024-01-15 13:40', action: 0 },
    { id: 7, openRate: '72%', receipient: 'daniel.wilson@example.com', status: 2, dateTime: '2024-01-15 15:10', action: 1 },
    { id: 8, openRate: '85%', receipient: 'ava.miller@example.com', status: 0, dateTime: '2024-01-16 08:25', action: 1 },
    { id: 9, openRate: '57%', receipient: 'sophia.moore@example.com', status: 0, dateTime: '2024-01-16 16:50', action: 2 },
    { id: 10, openRate: '94%', receipient: 'liam.taylor@example.com', status: 1, dateTime: '2024-01-17 11:55', action: 1 },
];


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: "center", align: "center" },
    { field: 'openRate', headerName: 'Open Rate', width: 130, headerAlign: "center", align: "center" },
    { field: 'receipient', headerName: 'Recipient', width: 130, headerAlign: "center", align: "center" },
    {
        field: 'status',
        headerName: 'Status',
        type: 'number',
        flex: 1,
        headerAlign: "left", align: "left",
        renderCell: (params: Params) => {
            let newValue = STATUS.PREPARED;
            let color = STATUS_COLOR.PREPARED;
            switch (params?.row?.status) {
                case 0:
                    newValue = STATUS.CANCELED;
                    color = STATUS_COLOR.CANCELED;
                    break;
                case 1:
                    newValue = STATUS.PREPARED;
                    color = STATUS_COLOR.PREPARED;
                    break;
                case 2:
                    newValue = STATUS.SENT
                    color = STATUS_COLOR.SENT;
                    break;
            }
            return <Chip
                sx={{
                    px: "4px",
                    backgroundColor: color,
                    color: "#fff",
                }}
                size="small"
                label={newValue}
            ></Chip>;
        },
    },
    {
        field: 'dateTime',
        headerName: 'Date Time',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        headerAlign: "center", align: "center"
    },
    {
        field: 'action',
        headerName: 'Action',
        type: 'number',
        flex: 1,
        headerAlign: "center", align: "center",
        renderCell: renderAction
    },
];


function renderAction(params: Params) {
    return <Button data-id={params?.row?.id}
        size="small" variant="contained"
        disabled={params?.row.status === 0 || params?.row.status === 2}
        onClick={handleClick}>
        Cancel
    </Button>

}
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    // const { dataset } = event.target || event.currentTarget;
    console.log("dataset ", event.target);
}
const Tracker = () => {
    return (
        <PageContainer title="Tracker" description="Tracker whether or not emails are delivered">
            <DashboardCard title="Email Tracking" subtitle="Details of all sent, prepared, and canceled emails.">
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </DashboardCard>
        </PageContainer>
    );
};

export default Tracker;








