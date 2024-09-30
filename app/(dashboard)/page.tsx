'use client'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PageContainer from '@/app/(dashboard)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(dashboard)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(dashboard)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(dashboard)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(dashboard)/dashboard/ProductPerformance';
import Blog from '@/app/(dashboard)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(dashboard)/components/dashboard/MonthlyEarnings';

const Dashboard = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, lg: 8 }}>
                        <SalesOverview />
                    </Grid>
                    <Grid size={{ xs: 12, lg: 4 }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12 }}>
                                <YearlyBreakup />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <MonthlyEarnings />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 4 }}>
                        <RecentTransactions />
                    </Grid>
                    <Grid size={{ xs: 12, lg: 8 }}>
                        <ProductPerformance />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Blog />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default Dashboard;