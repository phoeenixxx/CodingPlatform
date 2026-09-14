import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '../shared/ThemeSwitcher';
import { 
  LayoutGrid, 
  BookOpen, 
  Video, 
  MonitorPlay, 
  Presentation, 
  ClipboardCheck, 
  LifeBuoy,
  FileText,
  Menu,
  X,
  Brain,
  Info
} from 'lucide-react';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const menuItems = [
    { path: '/', icon: <LayoutGrid size={20} />, label: t('modules') },
    { path: '/materials', icon: <BookOpen size={20} />, label: t('materials') },
    { path: '/presentations', icon: <Presentation size={20} />, label: t('presentations') },
    { path: '/videos', icon: <Video size={20} />, label: t('videos') },
    { path: '/recordings', icon: <MonitorPlay size={20} />, label: t('recordings') },
    { path: '/tasks', icon: <ClipboardCheck size={20} />, label: t('tasks') },
    { path: 'https://phoeenixxx.github.io/FlashCards/', icon: <Brain size={20} />, label: t('flashcards'), isExternal: true },
    { path: 'https://phoeenixxx.github.io/infokpc/', icon: <Info size={20} />, label: t('about_program'), isExternal: true },
    { path: '/instructions', icon: <FileText size={20} />, label: t('instructions') },
    { path: '/help', icon: <LifeBuoy size={20} />, label: t('help') },
  ];

  return (
    <>
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-[110] p-2 bg-white dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-xl text-editor-accent shadow-2xl transition-all active:scale-95"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[90] lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-[100] h-screen w-72 bg-gray-50 dark:bg-editor-sidebar border-r border-gray-200 dark:border-gray-800 
        flex flex-col transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-editor-accent font-black text-2xl tracking-tighter whitespace-nowrap">
            &lt;DevAcademy/&gt;
          </h2>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const baseClasses = "flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all";
            const inactiveClasses = "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-editor-active hover:text-gray-900 dark:hover:text-white font-semibold tracking-wide";
            const activeClasses = "bg-editor-accent text-black shadow-lg shadow-editor-accent/20 font-bold";

            if (item.isExternal) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`${baseClasses} ${inactiveClasses}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-editor-sidebar flex flex-col gap-4">
          <div className="flex items-center justify-around bg-gray-100 dark:bg-editor-bg/50 rounded-2xl p-1.5 border border-gray-200 dark:border-gray-800 shadow-inner">
            <button 
              onClick={() => changeLanguage('ka')}
              className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${i18n.language === 'ka' ? 'bg-editor-accent text-black shadow-lg shadow-editor-accent/20' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              KA
            </button>
            <button 
              onClick={() => changeLanguage('en')}
              className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${i18n.language === 'en' ? 'bg-editor-accent text-black shadow-lg shadow-editor-accent/20' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              EN
            </button>
          </div>
          <ThemeSwitcher />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;