'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(dashboard)/components/container/PageContainer';
import DashboardCard from '@/app/(dashboard)/components/shared/DashboardCard';


const Setting = () => {
    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Sample Page">
                <Typography>This is a sample page Setting</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default Setting;

