import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import PreviewList from "@/app/(dashboard)/components/preview/PreviewList"


interface ListItemData {
  id: number;
  title: string;
}

type PreviewCardsProps = {
  cardTitle?: string; // cardTitle is an optional string prop
  itemList: ListItemData[];
  children?: JSX.Element | JSX.Element[];
};




export default function PreviewReviewCard({ cardTitle, itemList }: PreviewCardsProps) {
  return <>
    <Card sx={{ minWidth: 380, maxWidth: 400, marginBottom: "50px" }}>
      <CardHeader
        sx={{padding:"5 16px 0 16px"}}
        title={cardTitle}
      />

      <CardContent sx={{ padding: 0 }}>
        <PreviewList items={itemList} />
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingLeft: "15px", paddingRight: "15px" }}>
          <Button size="small" variant="outlined" >
            Reset rates to default
          </Button>

          <Button size="small" variant="contained" endIcon={<AddIcon />}>
            Add new product
          </Button>
        </Box>
      </CardActions>

    </Card>
  </>;
}
