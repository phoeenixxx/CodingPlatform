import { useTranslation } from 'react-i18next';
import { Code2, Target } from 'lucide-react';
import db from '../data/db.json';

const Tasks = () => {
  const { t, i18n } = useTranslation();
  const isKa = i18n.language === 'ka';

  return (
    <div className="max-w-5xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <Code2 className="text-editor-accent" size={32} />
        {t('tasks')}
      </h1>

      <div className="grid gap-6">
        {db.tasks.map((task) => (
          <div key={task.id} className="bg-editor-sidebar border border-gray-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="text-editor-accent" size={24} />
                {isKa ? task.titleKa : task.titleEn}
              </h2>
              <span className="px-3 py-1 bg-editor-active text-gray-300 text-sm rounded-full border border-gray-700">
                {t('difficulty')}: {task.difficulty}
              </span>
            </div>

            <div className="bg-editor-bg p-4 rounded-lg border border-gray-800 mt-4">
              <p className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                {isKa ? task.instructionKa : task.instructionEn}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="bg-editor-accent hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                {t('start_task')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;