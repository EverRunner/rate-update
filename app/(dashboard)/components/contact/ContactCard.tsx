import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';

export default function ContactCard() {


    return (
        <Card sx={{ minHeight: 150 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 148 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: "center" }}>

                    <Typography component="div" variant="h5">
                        Contacts Upload
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary', }}
                    >
                        Add contacts from a CSV file
                    </Typography>


                    <Button variant="contained" size="small" >Import CSV</Button>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: "center" }}>

                    <IconButton variant="BigCircle" aria-label="upload template">
                        <UploadIcon />
                    </IconButton>
                    <Typography component="div" variant="h5">
                        Upload Template
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        Design your own layout for rate sheet
                    </Typography>

                </Box>
            </CardContent>
        </Card>
    );
}