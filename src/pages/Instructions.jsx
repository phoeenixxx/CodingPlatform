import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, X, Github, Video, CheckCircle2, MousePointer2, Globe, Settings, Terminal, Code2 } from 'lucide-react';

const Instructions = () => {
  const { t } = useTranslation();
  const [selectedInstruction, setSelectedInstruction] = useState(null);

  const getSteps = (key) => {
    const steps = t(key, { returnObjects: true });
    return Array.isArray(steps) ? steps : [];
  };

  const instructionsData = [
    {
      id: "online-compiler",
      title: t('inst_compiler_title'),
      icon: <Terminal className="text-editor-accent" size={32} />,
      shortDesc: t('inst_compiler_desc'),
      steps: getSteps('inst_compiler_steps')
    },
    {
      id: "google-meet",
      title: t('inst_meet_title'),
      icon: <Video className="text-blue-500" size={32} />,
      shortDesc: t('inst_meet_desc'),
      steps: getSteps('inst_meet_steps')
    },
    {
      id: "github-setup",
      title: t('inst_github_title'),
      icon: <Github className="text-gray-900 dark:text-white" size={32} />,
      shortDesc: t('inst_github_desc'),
      steps: getSteps('inst_github_steps')
    },
    {
      id: "github-pages",
      title: t('inst_pages_title'),
      icon: <Globe className="text-green-500" size={32} />,
      shortDesc: t('inst_pages_desc'),
      steps: getSteps('inst_pages_steps')
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 lg:pt-8 pb-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black mb-3 flex items-center gap-4">
            <FileText className="text-editor-accent" size={32} /> {t('instructions')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm md:text-base">
            დეტალური ნაბიჯ-ნაბიჯ სახელმძღვანელოები პლატფორმებთან და ხელსაწყოებთან სამუშაოდ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {instructionsData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedInstruction(item)}
              className="bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800/50 p-6 md:p-10 rounded-3xl cursor-pointer hover:border-editor-accent/50 hover:bg-gray-100 dark:hover:bg-editor-active/20 transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-[-20px] right-[-20px] p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Settings size={150} className="rotate-45 text-gray-900 dark:text-white" />
              </div>
              
              <div className="mb-6 p-4 md:p-5 bg-white dark:bg-editor-bg rounded-2xl w-fit group-hover:scale-110 transition-all duration-500 shadow-inner border border-gray-100 dark:border-gray-800">
                {item.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-editor-accent transition-colors">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-500 text-sm md:text-base leading-relaxed mb-6">{item.shortDesc}</p>
              <div className="mt-auto flex items-center gap-2 text-editor-accent font-bold text-xs md:text-sm tracking-wider uppercase">
                ინსტრუქციის ნახვა <MousePointer2 size={16} />
              </div>
            </div>
          ))}
        </div>

        {selectedInstruction && (
          <div className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md">
            <div className="bg-white dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 overflow-hidden">
              <div className="p-5 md:p-8 border-b border-gray-200 dark:border-gray-800 flex justify-between items-start bg-gray-50 dark:bg-editor-bg/30 shrink-0 transition-colors">
                <div className="flex items-center gap-4 md:gap-5 pr-4">
                  <div className="p-3 bg-white dark:bg-editor-bg rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hidden sm:block">
                      {selectedInstruction.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight leading-snug">{selectedInstruction.title}</h3>
                    <p className="text-editor-accent text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest">Step by step guide</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedInstruction(null)}
                  className="bg-gray-200 dark:bg-editor-bg p-2 md:p-3 rounded-xl text-gray-500 hover:text-red-500 transition-all shrink-0"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-transparent">
                {selectedInstruction.steps.map((step, index) => {
                  const parts = step.split(': ');
                  const label = parts[0];
                  const content = parts.slice(1).join(': ');
                  
                  return (
                    <div key={index} className="flex items-start gap-4 md:gap-6 animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="bg-editor-accent text-black w-8 h-8 md:w-9 md:h-9 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 font-black text-base md:text-lg shadow-[0_0_15px_rgba(0,212,255,0.3)] rotate-3">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-editor-accent font-bold text-base md:text-lg mb-1">{label}</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base font-medium opacity-90">{content}</p>
                      </div>
                    </div>
                  );
                })}
                
                <div className="mt-8 md:mt-10 p-5 md:p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-3 md:gap-4 text-green-600 dark:text-green-500 shadow-inner">
                  <div className="bg-green-500/20 p-2 rounded-full shrink-0">
                     <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest leading-snug">ინსტრუქცია წარმატებით დასრულდა</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructions;