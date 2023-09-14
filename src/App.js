import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ProtectRouter from 'components/ProtectRouter';

import { themeSettings } from 'constants/theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from 'scenes/AdminDashboard';
import Layout from 'scenes/Layout';
import Login from 'scenes/Login';
import Products from 'scenes/Products';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectRouter />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Navigate to="dashboard" />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/products" element={<Products />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
