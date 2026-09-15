import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Book, X, Eye, FileText } from 'lucide-react';

const Materials = () => {
  const { t } = useTranslation();
  const [selectedModule, setSelectedModule] = useState(null);
  const [viewingFile, setViewingFile] = useState(null);

  const modulesData = [
    { id: "m1", title: t('m1_title'), lessons: [] },
    { id: "m2", title: t('m2_title'), lessons: [] },
    { id: "m3", title: t('m3_title'), lessons: [
        { id: "m3_m1", title: t('m3_lo1_m1'), url: "https://docs.google.com/document/d/13a_o5CYa2UIOOiiS4gOiew9rLKpwWVyVQD6YlyjGPjo/preview?rm=minimal" },
        { id: "m3_m2", title: t('m3_lo1_m2'), url: "https://docs.google.com/document/d/1whNx8o0hhUbxRHlZp6PhDDUIRmrKsYIx_-UjimDaqcA/preview?rm=minimal" },
        { id: "m3_m3", title: t('m3_lo2') + " - Material", url: "https://docs.google.com/document/d/1gzvN3DHAVllyc04ZB_KpsJVV72JxnGDP4Gm9QdYM9jA/preview?rm=minimal" },
        { id: "m3_m4", title: t('m3_lo3') + " - Material", url: "https://docs.google.com/document/d/1_KJTJBZKPJLT2LwxpUFFUGRuZEXVpCzIwiZQpQOLPLw/preview?rm=minimal" },
        { id: "m3_m5", title: t('m3_lo4') + " - Material", url: "https://docs.google.com/document/d/1CW8XhWUgaBz-LIbcaXiUiukYQbAM2aEqgeQmrB0yF5k/preview?rm=minimal" },
        { id: "m3_m6", title: t('m3_lo5') + " - Material", url: "https://docs.google.com/document/d/1oxB7LzEVm-wkPovDJcsAw7-fmGY4H9H9fsoyK0t_hsw/preview?rm=minimal" },
        { id: "m3_m7", title: t('m3_lo6') + " - Material", url: "https://docs.google.com/document/d/12SzLNgEpyS5hJ59-vT2W1iPOpn3zHxxo8Zu5KTOdzME/preview?rm=minimal" }
    ]},
    { id: "m4", title: t('m4_title'), lessons: [
        { id: "m4_m1", title: t('m4_lo1') + " - Material", url: "https://docs.google.com/document/d/1seQ2X-glbQRhE0MrO_JSWE8dkizbWMYCidE5I9ClT0Q/preview?rm=minimal" },
        { id: "m4_m2", title: t('m4_lo2') + " - Material", url: "https://docs.google.com/document/d/1jrC1zgp4tSvXlclAH-K3C1GC_suyfYYiVIEq3W1WHmU/preview?rm=minimal" },
        { id: "m4_m3", title: t('m4_lo3') + " - Material", url: "https://docs.google.com/document/d/1kNfBcDO3xdP_8FjYF-ZuBqu82ODWNW1DAclywS_qK2Q/preview?rm=minimal" },
        { id: "m4_m4", title: t('m4_lo4') + " - Material 1", url: "https://docs.google.com/document/d/1mTg7yJI-vBEcCiRXHgEf6PUXK7k1yTy8UEK_6Pb0tfU/preview?rm=minimal" },
        { id: "m4_m5", title: t('m4_lo4') + " - Material 2", url: "https://docs.google.com/document/d/1FuQGxZKq3O-r1ManZ4SuLRK0jHlFlRq-38El7CKA0q8/preview?rm=minimal" }
    ]},
    { id: "m5", title: t('m5_title'), lessons: [] },
    { id: "m6", title: t('m6_title'), lessons: [
        { id: "m6_m1_1", title: t('m6_lo1') + " - Material 1", url: "https://docs.google.com/document/d/1KLSwDTWg9NOAOZg5J3AzMwg65oc4eIlUSu1fdtfSyM0/preview?rm=minimal" },
        { id: "m6_m1_2", title: t('m6_lo1') + " - Material 2", url: "https://docs.google.com/document/d/1NfUV4rrWfhNll7xcwHfng_Q48J_GYyXP7NcqXobDPOM/preview?rm=minimal" },
        { id: "m6_m2_1", title: t('m6_lo2') + " - Material 1", url: "https://docs.google.com/document/d/1QAAn9FQBAqR5arE5FnKr08bMhXUuIvF-XCW2PflzPcY/preview?rm=minimal" },
        { id: "m6_m2_2", title: t('m6_lo2') + " - Material 2", url: "https://docs.google.com/document/d/19ecM2HqVEW82D42ohibVjX-mz1KKi0879RNQxGCYyxg/preview?rm=minimal" },
        { id: "m6_m3", title: t('m6_lo3') + " - Material", url: "https://docs.google.com/document/d/1is4MF26nGWc2jggpRT3YUUcMMv2WwsI6QxSjlFwirFw/preview?rm=minimal" }
    ]},
    { id: "m7", title: t('m7_title'), lessons: [
        { id: "m7_m1", title: t('m7_lo1') + " - Material", url: "https://docs.google.com/document/d/1Edt2TCU5fj__7emswvudN67IFK27-V41muL3T0iG7gE/preview?rm=minimal" },
        { id: "m7_m2", title: t('m7_lo2') + " - Material", url: "https://docs.google.com/document/d/1oFamSksgIXbwdieHGUa8_XXuo_UVsMA3nOROgolJP8k/preview?rm=minimal" },
        { id: "m7_m3", title: t('m7_lo3') + " - Material 1", url: "https://docs.google.com/document/d/1wvuo0Zc-VehK6fUepKLIsAt7L5kVrJmra-rJQu698f8/preview?rm=minimal" },
        { id: "m7_m4", title: t('m7_lo3') + " - Material 2", url: "https://docs.google.com/document/d/11yz9ii9gARtedC5EcaAQnIsco7jpTljk5nDc5A2u1JU/preview?rm=minimal" }
    ]},
    { id: "m8", title: t('m8_title'), lessons: [] },
    { id: "m9", title: t('m9_title'), lessons: [] },
    { id: "m10", title: t('m10_title'), lessons: [
        { id: "m10_m1_1", title: t('m10_lo1') + " - Material 1", url: "https://docs.google.com/document/d/15o_bAJ__asdsxP6-nmd1-Lysl1VEapiLxurEfGcuxQQ/preview?rm=minimal" },
        { id: "m10_m1_2", title: t('m10_lo1') + " - Material 2", url: "https://docs.google.com/document/d/1pp6O08OSNK9S3NMhZDu_IPnYiZuX9B9M-RxmuMKSQpI/preview?rm=minimal" },
        { id: "m10_m2_1", title: t('m10_lo2') + " - Material 1", url: "https://docs.google.com/document/d/1ZJKt-LTKWK7zdWiNSZIGJvWGudP3FQCpmtw_c8q376s/preview?rm=minimal" },
        { id: "m10_m2_2", title: t('m10_lo2') + " - Material 2", url: "https://docs.google.com/document/d/1sL-NRuBk83z81TX-6TQ-JpXfsbF3sbKLKAYPNxM26kI/preview?rm=minimal" }
    ]}
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 pt-24 lg:pt-8 flex flex-col flex-1 pb-12">
        {!viewingFile ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 shrink-0">
              <Book className="text-editor-accent" /> {t('materials_title')}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modulesData.map((mod, index) => (
                <div key={mod.id} onClick={() => setSelectedModule(mod)} className="bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 p-6 md:p-8 rounded-xl cursor-pointer hover:border-editor-accent transition-all min-h-[160px] relative group flex items-end shadow-lg overflow-hidden">
                  <div className="absolute top-2 right-4 text-4xl md:text-5xl font-black text-editor-accent/30 dark:text-editor-accent/40 group-hover:text-editor-accent/50 dark:group-hover:text-editor-accent/60 font-mono transition-all transform group-hover:-translate-y-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-base md:text-lg font-bold leading-tight z-10 pr-8 group-hover:text-editor-accent transition-colors">
                    {mod.title}
                  </h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col flex-1 w-full h-full mx-auto">
            <div className="w-full flex justify-between items-center mb-4 bg-gray-50 dark:bg-editor-sidebar p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl shrink-0 transition-colors">
              <h3 className="font-medium flex items-center gap-2 text-sm md:text-base pr-4 line-clamp-1">
                <FileText size={18} className="text-editor-accent shrink-0" /> {viewingFile.title}
              </h3>
              <button onClick={() => setViewingFile(null)} className="bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-500 hover:bg-red-500 hover:text-white px-4 md:px-6 py-2 rounded-lg font-bold transition-all border border-red-500/30 dark:border-red-500/50 text-sm shrink-0">
                {t('back')}
              </button>
            </div>
            <div className="relative flex-1 w-full min-h-[75vh] bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <iframe src={viewingFile.url} className="absolute inset-0 w-full h-full border-none" title={viewingFile.title} />
            </div>
          </div>
        )}

        {selectedModule && !viewingFile && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[200] p-4 sm:p-6">
            <div className="bg-white dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95">
              <div className="p-5 md:p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-start bg-gray-50 dark:bg-editor-bg/50 shrink-0 transition-colors">
                <h3 className="text-lg md:text-xl font-bold leading-tight pr-6">{selectedModule.title}</h3>
                <button onClick={() => setSelectedModule(null)} className="text-gray-500 hover:text-red-500 bg-gray-200 dark:bg-editor-bg p-2 rounded-xl transition-colors shrink-0">
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 md:p-6 space-y-3 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-transparent">
                {selectedModule.lessons.length > 0 ? (
                  selectedModule.lessons.map((lesson) => (
                    <button key={lesson.id} onClick={() => { setViewingFile(lesson); setSelectedModule(null); }} className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-editor-bg hover:bg-gray-100 dark:hover:bg-editor-active rounded-xl border border-gray-200 dark:border-gray-800 group transition-all text-left hover:border-editor-accent">
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-sm md:text-base pr-4">{lesson.title}</span>
                      <Eye size={18} className="text-gray-400 dark:text-gray-500 group-hover:text-editor-accent transition-colors shrink-0" />
                    </button>
                  ))
                ) : (
                  <div className="text-center py-10 bg-gray-50 dark:bg-editor-bg/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-800">
                    <p className="text-gray-500 italic text-sm">{t('no_content')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;