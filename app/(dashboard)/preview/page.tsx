'use client';
import PageContainer from '@/app/(dashboard)/components/container/PageContainer';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PreviewCard from "@/app/(dashboard)/components/preview/PreviewCard";


const sampleItem1 = [
    { id: 1, title: 'Item 1 - Example Title' },
    { id: 2, title: 'Item 2 - Example Title' },
    { id: 3, title: 'Item 3 - Example Title' },
    { id: 4, title: 'Item 4 - Example Title' },
];

const sampleItem2 = [
    { id: 1, title: 'Item 1 - Example Title' },
    { id: 2, title: 'Item 2 - Example Title' },
    { id: 3, title: 'Item 3 - Example Title' },
    { id: 4, title: 'Item 4 - Example Title' },
];

const Preview = () => {
    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, lg: 4 }}>
                        <PreviewCard itemList={sampleItem1} cardTitle="Purchase Product" />
                        <PreviewCard itemList={sampleItem2} cardTitle="Refinance Product" />
                    </Grid>
                    <Grid size={{ xs: 12, lg: 12 }}>

                    </Grid>

                </Grid>
            </Box>
        </PageContainer>
    );
};

export default Preview;

