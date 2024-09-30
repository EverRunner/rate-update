import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

// components
import Profile from './Profile';
import { IconMenu } from '@tabler/icons-react';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    zIndex: 2000,
    maxHeight: "90px",
    minHeight: '50px',
    position: "fixed",
    top: 0,
    [theme.breakpoints.up('lg')]: {
      minHeight: '50px',
    },

  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default" >
      <Paper elevation={4}>
        <ToolbarStyled>

          <Stack spacing={1} direction="row" alignItems="center">

            <Profile />
          </Stack>



          <Box flexGrow={1} />

          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
              display: {
                lg: "none",
                xs: "inline",
              },
            }}
          >
            <IconMenu width="20" height="20" />
          </IconButton>

        </ToolbarStyled>
      </Paper>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
