import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function AppRoutes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route path="*" element={<Login />} />
        ) : (
          <Route path="*" element={<Dashboard />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;