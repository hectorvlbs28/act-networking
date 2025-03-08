import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useLocation } from 'react-router-dom';
import ColorModeIconDropdown from './ColorModeIconDropdown';
import Links from '../Utils/Links';
import MyProfileBtn from './MyProfileBtn';
import { AppContext } from '../Context/AppContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

const AppAppBar = () => {
  const location = useLocation();
  //const { state } = useContext(AppContext);
  //const { userToken } = state;

  const [open, setOpen] = React.useState(false);
  const [isHome, setIsHome] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSmoothScroll = (componentId) => {
    document.getElementById(componentId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setIsHome(location.pathname === Links.home);
  }, [location]);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {isHome ? (
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={() => handleSmoothScroll('highlights')} variant="text" color="info" size="small">
                  Highlights
                </Button>
                <Button onClick={() => handleSmoothScroll('pricing')} variant="text" color="info" size="small">
                  Precios
                </Button>
              </Box>
            ) : (
              <Button component={Link} to={Links.home} color="primary" variant="text" size="small">
                Inicio
              </Button>
            )}

            {/* {userToken && (
              <Button component={Link} to={Links.tasks} color="primary" variant="text" size="small">
                Tareas
              </Button>
            )} */}
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {/* {userToken ? (
              <MyProfileBtn />
            ) : (
              <>
                <Button component={Link} to={Links.signUp} color="primary" variant="text" size="small">
                  Regístrate
                </Button>
                <Button component={Link} to={Links.signIn} color="primary" variant="contained" size="small">
                  Iniciar sesión
                </Button>
              </>
            )} */}

            <ColorModeIconDropdown />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem component={Link} to={Links.home} onClick={handleCloseDrawer}>
                  Inicio
                </MenuItem>

                <Divider sx={{ my: 3 }} />

                {/* {userToken ? (
                  <MenuItem>
                    <MyProfileBtn />
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem>
                      <Button
                        component={Link}
                        to={Links.signUp}
                        onClick={handleCloseDrawer}
                        variant="contained"
                        fullWidth
                      >
                        Regístrate
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        component={Link}
                        to={Links.signIn}
                        onClick={handleCloseDrawer}
                        variant="contained"
                        fullWidth
                      >
                        Iniciar sesión
                      </Button>
                    </MenuItem>
                  </>
                )} */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default AppAppBar;
