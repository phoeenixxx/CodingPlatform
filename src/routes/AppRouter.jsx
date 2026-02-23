import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Modules from '../pages/Modules';
import LessonDetail from '../pages/LessonDetail';
import Tasks from '../pages/Tasks';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/modules" replace />} />
          <Route path="modules" element={<Modules />} />
          <Route path="modules/:moduleId/lesson/:lessonId" element={<LessonDetail />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;