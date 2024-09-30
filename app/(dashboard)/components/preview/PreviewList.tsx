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

interface ListItemData {
  id: number;
  title: string;
}

interface Props {
  items: ListItemData[];
}

export default function PreviewCardList({ items }: Props) {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [currentItem, setCurrentItem] = React.useState<ListItemData | null>(null);

  const handleEdit = (item: ListItemData) => {
    setEditMode(true);
    setCurrentItem(item);
  };

  const handleCancel = () => {
    setEditMode(false);
    setCurrentItem(null);
  };

  return (
    <List sx={{ width: '100%', minWidth: 380, maxWidth: 400, bgcolor: 'background.paper', paddingTop: "0", paddingBottom: "0" }}>
      {items.map(item => (
        <ListItem key={item.id} sx={{ paddingLeft: "0" }}>
          {!editMode || currentItem?.id !== item.id ? (
            <>
              <ListItemIcon>
                <IconButton color="primary" aria-label="edit">
                  <DragIndicatorIcon sx={{ color: "#db4073" }} />
                </IconButton>
              </ListItemIcon>
              <ListItemText id={`switch-list-label-${item.id}`} primary={item.title} />
              <Stack direction="row" spacing={1}>
                <IconButton variant="IconGreen" aria-label="edit" onClick={() => handleEdit(item)}>
                  <ModeEditIcon />
                </IconButton>
                <IconButton variant="IconRed" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </>
          ) : (
            <Card sx={{ width: "100%", boxShadow: "none", padding: "3px 15px 3px 15px" }}>
              <CardContent sx={{ padding: 0 }}>
                <Stack
                  direction="column"
                  component="form"
                  sx={{ width: '100%' }}
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
                      defaultValue={item.title} // Set initial value if needed
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <label>APR</label>
                    <CustomTextField
                      hiddenLabel
                      size="small"
                      sx={{ maxWidth: "100px" }}
                      defaultValue={item.title} // Set initial value if needed
                    />
                  </Box>
                </Stack>
              </CardContent>
              <CardActions disableSpacing sx={{ padding: 0 }}>
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
                  <Button size="small" variant="outlined" sx={{ marginRight: "10px" }} onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button size="small" variant="contained">
                    Update
                  </Button>
                </Box>
              </CardActions>
            </Card>
          )}
        </ListItem>
      ))}
    </List>
  );
}
