import { Route, Routes, Navigate } from 'react-router-dom';
import ListPage from 'pages/lists';
import DetailPage from 'pages/detail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/lists" element={<ListPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/" element={<Navigate to="/lists" />} />
      <Route path="*" element={<Navigate to="/lists" />} />
    </Routes>
  );
};
export default AppRouter;
