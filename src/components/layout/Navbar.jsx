import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="h-16 bg-editor-sidebar border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Globe size={18} className="text-gray-500" />
        <div className="flex gap-3">
          <button 
            onClick={() => changeLanguage('ka')}
            className={`text-sm font-bold transition-colors ${i18n.language === 'ka' ? 'text-editor-accent' : 'text-gray-500 hover:text-white'}`}
          >
            KA
          </button>
          <span className="text-gray-800">|</span>
          <button 
            onClick={() => changeLanguage('en')}
            className={`text-sm font-bold transition-colors ${i18n.language === 'en' ? 'text-editor-accent' : 'text-gray-500 hover:text-white'}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;