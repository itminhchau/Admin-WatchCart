import AdminRouter from 'admin/AdminRouter';
import ClientRouter from 'client/ClientRouter';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<ClientRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </div>
  );
}

export default App;
