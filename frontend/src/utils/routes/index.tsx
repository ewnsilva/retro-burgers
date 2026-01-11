import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from 'pages/Home';
import { ErrorPage } from 'pages/Error';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
