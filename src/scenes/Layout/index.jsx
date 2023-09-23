import { Box, useMediaQuery } from '@mui/material';
import Sidebar from 'components/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';

Layout.propTypes = {};

function Layout(props) {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
