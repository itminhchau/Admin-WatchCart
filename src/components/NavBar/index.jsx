import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material';
import { AppBar, Button, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { logOut, setMode } from 'state/globalSlice';
NavBar.propTypes = {};

function NavBar({ isSidebarOpen, setIsSidebarOpen }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* Right slide */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
          <IconButton>
            <Button onClick={handleLogout}>Logout</Button>
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
