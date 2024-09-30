import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CustomTextField from '../components/forms/theme-elements/CustomTextField';


interface Contact {
  id: number | null;
  name: string | null;
  email: string | null;
  phone_number: string | null;
  company: string | null;
  state_name: string | null;
}

type FormDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  forEditData: Contact | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};



export default function ContactForm({ open, setOpen, forEditData, handleChange, handleSubmit }: FormDialogProps) {
  //const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}

      >
        <DialogTitle>Contact</DialogTitle>
        <DialogContent sx={{ overflowY: "hidden" }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack>
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"
                    htmlFor="name"
                    mb="5px"
                  >
                    Name
                  </Typography>
                  <CustomTextField required onChange={handleChange} value={forEditData?.name || ""} variant="outlined" name="name" fullWidth />
                </Box>
                <Box mt="25px">
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"
                    htmlFor="email"
                    mb="5px"
                  >
                    Email
                  </Typography>
                  <CustomTextField required onChange={handleChange} value={forEditData?.email || ""} variant="outlined" name="email" fullWidth />
                </Box>
                <Box mt="25px">
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"
                    htmlFor="state"
                    mb="5px"
                  >
                    State
                  </Typography>
                  <CustomTextField required onChange={handleChange} value={forEditData?.state_name || ""} variant="outlined" name="state_name" fullWidth />
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack>
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"
                    htmlFor="phone number"
                    mb="5px"
                  >
                    Phone number
                  </Typography>
                  <CustomTextField required onChange={handleChange} value={forEditData?.phone_number || ""} variant="outlined" name="phone_number" fullWidth />
                </Box>
                <Box mt="25px">
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"
                    htmlFor="company"
                    mb="5px"
                  >
                    Company
                  </Typography>
                  <CustomTextField required onChange={handleChange} value={forEditData?.company || ""} variant="outlined" name="company" fullWidth />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
