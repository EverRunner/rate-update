"use client";
import { Typography } from '@mui/material';
import PageContainer from '@/app/(dashboard)/components/container/PageContainer';
import ProductPerformance from './ProductPerformance';


const Dashboard = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <ProductPerformance />
    </PageContainer>
  );
};

export default Dashboard;

