import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl w-full transition-all duration-300 bg-gray-200 dark:bg-editor-bg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-editor-active shadow-sm"
    >
      {isDark ? (
        <>
          <Sun size={18} className="text-yellow-600" />
          <span className="text-sm font-bold uppercase tracking-wider">Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={18} className="text-indigo-500" />
          <span className="text-sm font-bold uppercase tracking-wider">Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;