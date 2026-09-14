import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-editor-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          &copy; {currentYear} Coding Platform.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wide">
          Developed By <span className="text-editor-accent font-black tracking-widest uppercase">Phoeenixxx</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;