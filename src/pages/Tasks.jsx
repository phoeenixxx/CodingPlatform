import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardList, X, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Tasks = () => {
  const { t } = useTranslation();
  const [selectedTask, setSelectedTask] = useState(null);
  const [status, setStatus] = useState('');
  const form = useRef();

  const modulesWithTasks = [
    {
      id: "m3",
      moduleIndex: "03",
      title: t('m3_title'),
      tasks: [
        { id: "m3_lo1", lessonTitle: t('m3_lo1'), taskFile: "https://docs.google.com/document/d/1DognnuWsTqdIGcplySjGrq7BWlvP7d4lje7D_S7YgKM/preview?rm=minimal" },
        { id: "m3_lo2", lessonTitle: t('m3_lo2'), taskFile: "https://docs.google.com/document/d/1CwOivqCKjD3DkiZ10ZtThAKdyoB1zva8mBTvHZVZ9Hw/preview?rm=minimal" },
        { id: "m3_lo3", lessonTitle: t('m3_lo3'), taskFile: "https://docs.google.com/document/d/1yp2CfPyZysITtB0x0lo6js5KbMZw0lGn-bVaEsF1VXk/preview?rm=minimal" },
        { id: "m3_lo4", lessonTitle: t('m3_lo4'), taskFile: "https://docs.google.com/document/d/1RVPzFFeqv_nJMsRn57wgfBC-eA3aIZhHllcDPuwWEdg/preview?rm=minimal" },
        { id: "m3_lo5", lessonTitle: t('m3_lo5'), taskFile: "https://docs.google.com/document/d/1zj3wkkQXBgyHDTaOXUM9E0xQTjm2vyOPW7fxz5M9yvU/preview?rm=minimal" },
        { id: "m3_lo6", lessonTitle: t('m3_lo6'), taskFile: "https://docs.google.com/document/d/1SXVEXVHobhA3h3swVhZeAjvn3Y7JabvSG2YSDJo_LUk/preview?rm=minimal" }
      ]
    },
    {
      id: "m4",
      moduleIndex: "04",
      title: t('m4_title'),
      tasks: [
        { id: "m4_lo1", lessonTitle: t('m4_lo1'), taskFile: "https://docs.google.com/document/d/1nogbK9Li_jagz5OWE7sjK6hMz1-jh8AsAIGFNuSxz5s/preview?rm=minimal" },
        { id: "m4_lo2", lessonTitle: t('m4_lo2'), taskFile: "https://docs.google.com/document/d/1bG8CSD-dxNMnhZEDgu1zozQgGEvPlEm1q9zHmZWFgwA/preview?rm=minimal" },
        { id: "m4_lo3", lessonTitle: t('m4_lo3'), taskFile: "https://docs.google.com/document/d/1GekXTIfw-mQ-cy_xZROhr-Tj55_qIv62O_sIIvTTGEg/preview?rm=minimal" },
        { id: "m4_lo4_1", lessonTitle: t('m4_lo4') + " - 1", taskFile: "https://docs.google.com/document/d/1EAQXiQgJTNICWp03zF46FrCYjgjnwQaP4jol0KZCRYo/preview?rm=minimal" },
        { id: "m4_lo4_2", lessonTitle: t('m4_lo4') + " - 2", taskFile: "https://docs.google.com/document/d/1fNZ4eACCmek-ZYVn-FsLb65d8EAw7lwll3geVdNN7zM/preview?rm=minimal" }
      ]
    },
    {
      id: "m6",
      moduleIndex: "06",
      title: t('m6_title'),
      tasks: [
        { id: "m6_lo1_1", lessonTitle: t('m6_lo1') + " - 1", taskFile: "https://docs.google.com/document/d/1a0IYEYickXr3Oy3SvCBOF_VuveEfPE9X9o1c0BafOvg/preview?rm=minimal" },
        { id: "m6_lo1_2", lessonTitle: t('m6_lo1') + " - 2", taskFile: "https://docs.google.com/document/d/1LBHsJBQZmB7AvqgEirovvradCFdBmm8OlPkxLgenNVU/preview?rm=minimal" },
        { id: "m6_lo2_1", lessonTitle: t('m6_lo2') + " - 1", taskFile: "https://docs.google.com/document/d/1s-t-M0w9aPeNcB_HW_zx7Po1s52m5tc8oAct4LxRws8/preview?rm=minimal" },
        { id: "m6_lo2_2", lessonTitle: t('m6_lo2') + " - 2", taskFile: "https://docs.google.com/document/d/1tFIGY-apxvVvrzuek6wKkigighzcb1fnO7b2Vmm8bzc/preview?rm=minimal" },
        { id: "m6_lo3", lessonTitle: t('m6_lo3'), taskFile: "https://docs.google.com/document/d/1sdjsDU8-YQmiTy_QDhGUXAv1qK-0T9GuFGw1keTH2rs/preview?rm=minimal" }
      ]
    },
    {
      id: "m7",
      moduleIndex: "07",
      title: t('m7_title'),
      tasks: [
        { id: "m7_lo1", lessonTitle: t('m7_lo1'), taskFile: "https://docs.google.com/document/d/1ZIcDsRO5SVSOBdtGKtJuEdZY8YFpcxmQjJiBZvOjqgE/preview?rm=minimal" },
        { id: "m7_lo2", lessonTitle: t('m7_lo2'), taskFile: "https://docs.google.com/document/d/13QllbgBHM7JmM796bXymP27JQ1Z3yj65tmDmxTWzofU/preview?rm=minimal" },
        { id: "m7_lo3_1", lessonTitle: t('m7_lo3') + " - 1", taskFile: "https://docs.google.com/document/d/1V-MAUDWiAoxKKwJRLrTbYGFHynX7dFYndJ_Gt-MmskI/preview?rm=minimal" },
        { id: "m7_lo3_2", lessonTitle: t('m7_lo3') + " - 2", taskFile: "https://docs.google.com/document/d/1MStXO965HWoKpZjz-vzTjJ3ZCd0x3gIZxewiBb_5cE0/preview?rm=minimal" }
      ]
    },
    {
      id: "m10",
      moduleIndex: "10",
      title: t('m10_title'),
      tasks: [
        { id: "m10_lo1_1", lessonTitle: t('m10_lo1') + " - 1", taskFile: "https://docs.google.com/document/d/1yJFu_m_9RNDuvJk0HKgL-WeLyFCTs5rQggkzVo_GPUs/preview?rm=minimal" },
        { id: "m10_lo1_2", lessonTitle: t('m10_lo1') + " - 2", taskFile: "https://docs.google.com/document/d/1nJ8zeKszNLah3muxZxbZA8wEnv4-YVDBodskz1mMd5c/preview?rm=minimal" },
        { id: "m10_lo2_1", lessonTitle: t('m10_lo2') + " - 1", taskFile: "https://docs.google.com/document/d/1huehc82nAJx9KopYLIHiIJ5wCdST1tD3uADlzxLVnIk/preview?rm=minimal" },
        { id: "m10_lo2_2", lessonTitle: t('m10_lo2') + " - 2", taskFile: "https://docs.google.com/document/d/1nRh6xhYGEd37TdWbdyJIYAfLXTYvslTS0sNEf3HQnL4/preview?rm=minimal" }
      ]
    }
  ];

  const sendTask = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_46754pf', 'template_1eit5vd', form.current, '0_3MvIFNznDY9gTf7')
      .then(() => { 
        setStatus('success'); 
        setTimeout(() => { setStatus(''); setSelectedTask(null); }, 2000);
      }, () => setStatus('error'));
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 lg:pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
          <ClipboardList className="text-editor-accent" /> {t('tasks_title')}
        </h1>

        <div className="space-y-16">
          {modulesWithTasks.map((mod) => (
            <div key={mod.id} className="space-y-6">
              <h2 className="text-lg md:text-xl font-bold border-l-4 border-editor-accent pl-4 text-gray-900 dark:text-white">
                {mod.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mod.tasks.map((task, index) => (
                  <div 
                    key={task.id} 
                    onClick={() => setSelectedTask({ ...task, title: mod.title })} 
                    className="bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 p-8 rounded-xl relative group shadow-lg overflow-hidden flex flex-col justify-between min-h-[220px] cursor-pointer hover:border-editor-accent dark:hover:border-editor-accent transition-all"
                  >
                    <div className="absolute top-2 right-4 text-5xl font-black text-editor-accent/20 dark:text-editor-accent/40 group-hover:text-editor-accent/40 dark:group-hover:text-editor-accent/60 font-mono transition-all">
                      {mod.moduleIndex}
                    </div>
                    <div className="z-10">
                      <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-gray-900 dark:text-white">
                        {t('task_prefix')} {index + 1}
                      </h3>
                      <p className="text-editor-accent font-bold text-sm mb-4">{task.lessonTitle}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs italic line-clamp-2 pr-10">{mod.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedTask && (
          <div className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-2 sm:p-6 backdrop-blur-sm">
            <div className="bg-white dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-3xl w-full max-w-[95vw] h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 overflow-hidden transition-colors">
              <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-start shrink-0 bg-gray-50 dark:bg-editor-bg/50">
                <div className="flex flex-col pr-4">
                  <span className="text-editor-accent text-xs font-bold uppercase tracking-widest">{t('task_prefix')}</span>
                  <h3 className="text-lg md:text-xl font-bold italic">{selectedTask.lessonTitle}</h3>
                </div>
                <button onClick={() => setSelectedTask(null)} className="text-gray-500 hover:text-red-500 bg-gray-200 dark:bg-editor-bg p-2 rounded-xl transition-colors shrink-0">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto custom-scrollbar">
                <div className="relative flex-1 w-full h-full min-h-[50vh] lg:min-h-full bg-white border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800">
                  <iframe src={selectedTask.taskFile} className="absolute inset-0 w-full h-full border-none" title="Task Viewer" />
                </div>
                
                <div className="w-full lg:w-[400px] p-6 md:p-8 bg-gray-50 dark:bg-editor-sidebar shrink-0 overflow-y-auto">
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                    <Send size={18} className="text-editor-accent" /> {t('send')}
                  </h4>
                  <form ref={form} onSubmit={sendTask} className="space-y-5">
                    <input type="hidden" name="moduleName" value={selectedTask.title} />
                    <input type="hidden" name="lessonName" value={selectedTask.lessonTitle} />
                    <div className="space-y-1">
                      <label className="text-gray-600 dark:text-gray-500 text-xs uppercase font-bold ml-1">{t('name_label')}</label>
                      <input type="text" name="studentName" required className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-3.5 rounded-xl outline-none focus:border-editor-accent transition-all shadow-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-600 dark:text-gray-500 text-xs uppercase font-bold ml-1">{t('email_label')}</label>
                      <input type="email" name="studentEmail" required className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-3.5 rounded-xl outline-none focus:border-editor-accent transition-all shadow-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-600 dark:text-gray-500 text-xs uppercase font-bold ml-1">{t('link_label')}</label>
                      <input type="url" name="taskLink" required className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-3.5 rounded-xl outline-none font-mono text-sm shadow-sm" placeholder="https://github.com/..." />
                    </div>
                    <button type="submit" disabled={status === 'sending'} className="w-full bg-editor-accent text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all mt-6 shadow-lg uppercase tracking-widest">
                      {status === 'sending' ? t('loading') : t('send')}
                    </button>
                    {status === 'success' && <div className="text-green-600 dark:text-green-500 text-center font-bold bg-green-500/10 border border-green-500/20 p-3 rounded-lg flex items-center justify-center gap-2 animate-in fade-in"><CheckCircle size={18} /> {t('success')}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;