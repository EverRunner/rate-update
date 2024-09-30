import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  outline: "0!important",
  '& .MuiInputBase-root': {
    height: "40px"
  },
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
  '&:focus': {
    boxShadow: "none!important",
    outline: "0!important"
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: "#000",
    borderWidth: '1px', // Optional: increase border width on focus
  },

  '& .MuiOutlinedInput-root.Mui-focused': {
    boxShadow: "none!important",
  },
  '& input:focus:not(ol) ': {
    boxShadow: "none!important",
  }
}));

export default CustomTextField;
