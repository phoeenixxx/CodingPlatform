import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight, LayoutPanelTop } from 'lucide-react';
import db from '../data/db.json';

const Modules = () => {
  const { t, i18n } = useTranslation();
  const [expandedModule, setExpandedModule] = useState(null);

  const isKa = i18n.language === 'ka';
  const getLabel = (obj, key) => obj[`${key}${isKa ? 'Ka' : 'En'}`];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-10 border-l-4 border-editor-accent pl-4 font-mono uppercase tracking-widest">
        {t('modules')}
      </h1>

      <div className="space-y-4">
        {db.modules.map((module) => (
          <div key={module.id} className="bg-editor-sidebar border border-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300">
            <button
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-editor-active transition-all"
            >
              <div className="flex items-center gap-5 text-left">
                <LayoutPanelTop className="text-editor-accent shrink-0" size={26} />
                <span className="text-xl font-bold text-gray-100 uppercase leading-snug">
                  {getLabel(module, 'title')}
                </span>
              </div>
              <div className="text-editor-accent">
                {expandedModule === module.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </div>
            </button>

            {expandedModule === module.id && (
              <div className="bg-black/30 border-t border-gray-800 animate-in slide-in-from-top duration-300">
                {module.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/modules/${module.id}/lesson/${lesson.id}`}
                    className="flex items-center gap-4 p-5 hover:bg-editor-active/60 border-b border-gray-800/40 last:border-0 transition-colors group"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-editor-accent transition-colors" />
                    <span className="text-gray-400 group-hover:text-white font-semibold text-lg">
                      {getLabel(lesson, 'title')}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;