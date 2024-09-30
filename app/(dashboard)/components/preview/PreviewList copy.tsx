import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import CustomTextField from "@/app/(dashboard)/components/forms/theme-elements/CustomTextField";


export default function PreviewCardList() {
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const handleEdit = () => {
    console.log(" fire ")
    setEditMode((prevState: boolean) => {
      console.log("prevState ", prevState)
      return !prevState;
    });
  };

  return (
    <List
      sx={{ width: '100%', minWidth: 380, maxWidth: 400, bgcolor: 'background.paper' }}
    >
      <ListItem sx={{ paddingLeft: "0" }}>
        {!editMode ?
          <><ListItemIcon>
            <IconButton color="primary" aria-label="edit">
              <DragIndicatorIcon sx={{ color: "#db4073" }} />
            </IconButton>
          </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="20% Down Conventional" />
            <Stack direction="row" spacing={1}>
              <IconButton variant="IconGreen" aria-label="edit" onClick={handleEdit}>
                <ModeEditIcon />
              </IconButton>
              <IconButton variant="IconRed" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Stack></> :
          <Card sx={{ width: "100%", boxShadow: "none", padding: "3px 5px 3px 5px" }}>
            <CardContent sx={{ padding: 0 }}>
              <Stack
                direction="column"
                component="form"
                sx={{
                  width: '100%',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <label>Interest Rates</label>
                  <CustomTextField
                    hiddenLabel
                    size="small"
                    sx={{ maxWidth: "100px" }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <label>APR</label>
                  <CustomTextField
                    hiddenLabel
                    size="small"
                    sx={{ maxWidth: "100px" }}
                  />
                </Box>
              </Stack>
            </CardContent>
            <CardActions disableSpacing sx={{ padding: 0 }}>
              <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", }}>
                <Button size="small" variant="outlined" sx={{ marginRight: "10px" }}>
                  cancel
                </Button>

                <Button size="small" variant="contained">
                  Update
                </Button>
              </Box>
            </CardActions>

          </Card>}
      </ListItem>

    </List >
  );
}
