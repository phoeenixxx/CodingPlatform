import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen bg-editor-bg text-editor-text font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <main className="flex-1 p-4 md:p-6 pt-24 lg:pt-8">
          <Outlet />
        </main>
        <footer className="bg-editor-bg border-t border-gray-800 p-6 md:p-8 text-center text-sm text-gray-500 mt-auto">
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-bold tracking-tighter uppercase text-gray-400">
              &lt;DevAcademy /&gt; — {currentYear}
            </h3>
            <p className="max-w-md leading-relaxed opacity-70">
              © All Rights Reserved. Developed by 
              <span className="text-editor-accent font-semibold ml-1">Phoeenixxx</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;