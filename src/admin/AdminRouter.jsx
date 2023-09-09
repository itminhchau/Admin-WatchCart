import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'constants/theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from './scenes/AdminDashboard';
import Layout from './scenes/Layout';

AdminRouter.propTypes = {};

function AdminRouter(props) {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="admin">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default AdminRouter;
