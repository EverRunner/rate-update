import { createTheme } from "@mui/material/styles";
import { Plus_Jakarta_Sans } from "next/font/google";
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface CustomIconButtonProps extends IconButtonProps {
  variant?: 'IconRed' | 'IconGreen' | 'BigCircle';
}

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});
//RED:#db4073, GREEN:#13deb9, PINK: #FA896B
const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#5D87FF",
      light: "#ECF2FF",
      dark: "#4570EA",
    },
    secondary: {
      main: "#49BEFF",
      light: "#E8F7FF",
      dark: "#23afdb",
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff",
    },
    grey: {
      100: "#F2F6FA",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#7C8FAC",
      500: "#5A6A85",
      600: "#2A3547",
    },
    // textmain: {
    //   400: "#db4073",
    // },
    text: {
      primary: "#2A3547",
      secondary: "#5A6A85",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#e5eaef",
  },
  typography: {
    fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: plus.style.fontFamily,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: plus.style.fontFamily,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: plus.style.fontFamily,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        outlined: {
          borderColor: "#db4073", // Red border
          color: "#db4073", // Red text color
          "&:hover": {
            backgroundColor: "#cf5980", // Light red background on hover
            borderColor: "#cf5980",
            color: "#fff"
          },
        },
        contained: {
          backgroundColor: "#db4073", // Red background
          color: "#ffffff", // White text
          "&:hover": {
            backgroundColor: "#cf5980", // Light red on hover
          },
        },

      },
      variants: [
        {
          props: { variant: "contained" }, // Custom 'filled' variant
          style: {
            backgroundColor: "#db4073", // Red background for filled variant
            color: "#ffffff", // White text color
            "&:hover": {
              backgroundColor: "#cf5980", // Light red on hover
            },
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'IconRed' },
          style: {
            borderColor: '#db4073', // Red border for outlined variant
            color: '#db4073', // Red color for icon
            '&:hover': {
              backgroundColor: '#ffe0e6', // Light red background on hover
            },
          },
        },
        {
          props: { variant: 'IconGreen' },
          style: {
            borderColor: '#0c9b81', // Red border for outlined variant
            color: '#0c9b81', // Red color for icon
            '&:hover': {
              backgroundColor: '#c9fff5', // Light red background on hover
            },
            '&:focus': {
              outline: 0,
              boxShadow: "none"
            }
          },
        },
        {
          props: { variant: 'BigCircle' },
          style: {
            height: 50,
            width: 50,
            borderColor: '#db4073', // Red border for outlined variant
            color: '#fff', // Red color for icon
            backgroundColor: '#db4073',
            '&:hover': {
              backgroundColor: '#ff5a7a', // Light red background on hover
            },
            '&:focus': {
              outline: 0,
              boxShadow: "none"
            }
          },
        },
      ]
    },
  },
});


// eslint-disable-next-line
const CustomIconButton = styled(IconButton)<CustomIconButtonProps>(({ theme, variant }) => ({
  ...(variant === 'IconRed' && {
    borderColor: '#db4073',
    color: '#db4073',
    '&:hover': {
      backgroundColor: '#ffe0e6',
    },
  }),
  ...(variant === 'IconGreen' && {
    borderColor: '#0c9b81',
    color: '#0c9b81',
    '&:hover': {
      backgroundColor: '#c9fff5',
    },
    '&:focus': {
      outline: 0,
      boxShadow: 'none',
    },
  }),
  ...(variant === 'BigCircle' && {
    height: 50,
    width: 50,
    borderColor: '#db4073',
    color: '#fff',
    backgroundColor: '#db4073',
    '&:hover': {
      backgroundColor: '#ff5a7a',
    },
    '&:focus': {
      outline: 0,
      boxShadow: 'none',
    },
  }),
}));
export { baselightTheme, CustomIconButton };
