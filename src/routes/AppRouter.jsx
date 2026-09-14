import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar.jsx';
import Footer from '../components/shared/Footer.jsx';
import Modules from '../pages/Modules';
import Materials from '../pages/Materials';
import Presentations from '../pages/Presentations';
import Videos from '../pages/Videos';
import Recordings from '../pages/Recordings';
import Tasks from '../pages/Tasks';
import Instructions from '../pages/Instructions';
import Help from '../pages/Help';
import LessonDetail from '../pages/LessonDetail';

const AppRouter = () => {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex bg-white dark:bg-editor-bg min-h-screen transition-colors duration-300 overflow-hidden">
        <Sidebar />
        
        <div className="flex-1 flex flex-col h-screen relative">
          <main className="flex-1 overflow-y-auto custom-scrollbar">
            <Routes>
              <Route path="/" element={<Modules />} />
              <Route path="/modules/:moduleId/lesson/:lessonId" element={<LessonDetail />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/presentations" element={<Presentations />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/recordings" element={<Recordings />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/instructions" element={<Instructions />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          
          <div className="shrink-0 border-t border-gray-200 dark:border-gray-800">
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default AppRouter;