import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="h-16 bg-editor-bg border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4"></div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => changeLanguage('ka')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            i18n.language === 'ka' ? 'bg-editor-accent text-white' : 'bg-editor-active text-gray-300 hover:bg-gray-700'
          }`}
        >
          KA
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            i18n.language === 'en' ? 'bg-editor-accent text-white' : 'bg-editor-active text-gray-300 hover:bg-gray-700'
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
};

export default Navbar;