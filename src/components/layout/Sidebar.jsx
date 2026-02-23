import { NavLink } from 'react-router-dom';
import { BookOpen, Code, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  const navItems = [
    { path: '/modules', name: t('modules'), icon: <BookOpen size={20} /> },
    { path: '/tasks', name: t('tasks'), icon: <Code size={20} /> }
  ];

  return (
    <aside className="w-64 bg-editor-sidebar border-r border-gray-800 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <span className="text-xl font-bold text-editor-accent font-mono">
          &lt;DevAcademy /&gt;
        </span>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-editor-active text-white'
                      : 'text-gray-400 hover:bg-editor-active hover:text-white'
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 text-gray-400 hover:text-white px-3 py-2 w-full transition-colors">
          <Settings size={20} />
          <span>{t('settings')}</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;