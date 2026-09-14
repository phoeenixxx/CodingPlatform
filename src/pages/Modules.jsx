import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, ChevronDown, ChevronRight } from 'lucide-react';

const Modules = () => {
  const { t } = useTranslation();
  const [openModule, setOpenModule] = useState(null);

  const modules = [
    { id: "m1", title: t('m1_title'), lessons: [{id: "m1_lo1", title: t('m1_lo1')}, {id: "m1_lo2", title: t('m1_lo2')}, {id: "m1_lo3", title: t('m1_lo3')}, {id: "m1_lo4", title: t('m1_lo4')}, {id: "m1_lo5", title: t('m1_lo5')}, {id: "m1_lo6", title: t('m1_lo6')}] },
    { id: "m2", title: t('m2_title'), lessons: [{id: "m2_lo1", title: t('m2_lo1')}, {id: "m2_lo2", title: t('m2_lo2')}, {id: "m2_lo3", title: t('m2_lo3')}] },
    { id: "m3", title: t('m3_title'), lessons: [{id: "m3_lo1", title: t('m3_lo1')}, {id: "m3_lo2", title: t('m3_lo2')}, {id: "m3_lo3", title: t('m3_lo3')}, {id: "m3_lo4", title: t('m3_lo4')}, {id: "m3_lo5", title: t('m3_lo5')}, {id: "m3_lo6", title: t('m3_lo6')}] },
    { id: "m4", title: t('m4_title'), lessons: [{id: "m4_lo1", title: t('m4_lo1')}, {id: "m4_lo2", title: t('m4_lo2')}, {id: "m4_lo3", title: t('m4_lo3')}, {id: "m4_lo4", title: t('m4_lo4')}] },
    { id: "m5", title: t('m5_title'), lessons: [{id: "m5_lo1", title: t('m5_lo1')}, {id: "m5_lo2", title: t('m5_lo2')}, {id: "m5_lo3", title: t('m5_lo3')}, {id: "m5_lo4", title: t('m5_lo4')}, {id: "m5_lo5", title: t('m5_lo5')}, {id: "m5_lo6", title: t('m5_lo6')}] },
    { id: "m6", title: t('m6_title'), lessons: [{id: "m6_lo1", title: t('m6_lo1')}, {id: "m6_lo2", title: t('m6_lo2')}, {id: "m6_lo3", title: t('m6_lo3')}] },
    { id: "m7", title: t('m7_title'), lessons: [{id: "m7_lo1", title: t('m7_lo1')}, {id: "m7_lo2", title: t('m7_lo2')}, {id: "m7_lo3", title: t('m7_lo3')}] },
    { id: "m8", title: t('m8_title'), lessons: [{id: "m8_lo1", title: t('m8_lo1')}, {id: "m8_lo2", title: t('m8_lo2')}, {id: "m8_lo3", title: t('m8_lo3')}] },
    { id: "m9", title: t('m9_title'), lessons: [{id: "m9_lo1", title: t('m9_lo1')}, {id: "m9_lo2", title: t('m9_lo2')}, {id: "m9_lo3", title: t('m9_lo3')}] },
    { id: "m10", title: t('m10_title'), lessons: [{id: "m10_lo1", title: t('m10_lo1')}, {id: "m10_lo2", title: t('m10_lo2')}] }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 pt-24 lg:pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <BookOpen className="text-editor-accent" /> {t('modules_title')}
        </h1>
        <div className="space-y-4">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all">
              <button 
                onClick={() => setOpenModule(openModule === mod.id ? null : mod.id)} 
                className={`w-full p-4 md:p-6 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-editor-bg transition-all ${openModule === mod.id ? 'bg-gray-100 dark:bg-editor-bg' : ''}`}
              >
                <h2 className="text-lg md:text-xl font-bold text-left leading-tight pr-4">
                  {mod.title}
                </h2>
                <ChevronDown className={`text-gray-500 shrink-0 transition-transform duration-300 ${openModule === mod.id ? 'rotate-180' : ''}`} />
              </button>
              {openModule === mod.id && (
                <div className="p-2 md:p-4 bg-white dark:bg-editor-bg/30 border-t border-gray-200 dark:border-gray-800 grid gap-2">
                  {mod.lessons.map((lesson) => (
                    <Link 
                      key={lesson.id} 
                      to={`/modules/${mod.id}/lesson/${lesson.id}`} 
                      className="flex items-center justify-between p-3 md:p-4 bg-gray-50 dark:bg-editor-bg hover:bg-gray-100 dark:hover:bg-editor-active rounded-xl border border-gray-200 dark:border-gray-800 hover:border-editor-accent dark:hover:border-editor-accent transition-all group shadow-sm"
                    >
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium text-sm md:text-base leading-relaxed">
                        {lesson.title}
                      </span>
                      <ChevronRight size={18} className="text-gray-400 dark:text-gray-600 shrink-0 group-hover:text-editor-accent transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modules;