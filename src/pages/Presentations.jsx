import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Presentation as PresentationIcon, X, Monitor } from 'lucide-react';

const Presentations = () => {
  const { t } = useTranslation();
  const [selectedPres, setSelectedPres] = useState(null);

  const modulesData = [
    { id: "m1", title: t('m1_title'), presentations: [] },
    { id: "m2", title: t('m2_title'), presentations: [] },
    { id: "m3", title: t('m3_title'), presentations: [
        { id: "m3_p1", title: t('m3_lo1_p1'), url: "https://docs.google.com/presentation/d/1KCdAWLQ2ENSLMHv_GBWuCaAsAkdYJTVU38bzQ-pb7XI/embed?rm=minimal" },
        { id: "m3_p2", title: t('m3_lo1_p2'), url: "https://docs.google.com/presentation/d/137BKj8eECa90KimilvFzZlinUwj71PdKcnOKk5PZT0U/embed?rm=minimal" },
        { id: "m3_p3", title: t('m3_lo2') + " - Presentation", url: "https://docs.google.com/presentation/d/1r5HWKa6_7o0AkTDF_lR_pkRuYLBF1KULc6EC9WHg120/embed?rm=minimal" },
        { id: "m3_p4", title: t('m3_lo3') + " - Presentation", url: "https://docs.google.com/presentation/d/1Xd6wYbTDoIi1Kt6DY2c1NgnIFoLFpvgaNtxejSeuUVs/embed?rm=minimal" },
        { id: "m3_p5", title: t('m3_lo4') + " - Presentation", url: "https://docs.google.com/presentation/d/1-ottxbfibNibWwSYPRMQFNeZBlXeLjXKodoXry4MXvs/embed?rm=minimal" },
        { id: "m3_p6", title: t('m3_lo5') + " - Presentation", url: "https://docs.google.com/presentation/d/11r-gbMpdkcF7sSezdKMpyHSZ9nH6vmYpdpPLHyJZIO4/embed?rm=minimal" },
        { id: "m3_p7_1", title: t('m3_lo6') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1fMctxLEz2YBb-xaIl1Icq5c1DyoZq4fMK2p70ilatQs/embed?rm=minimal" },
        { id: "m3_p7_2", title: t('m3_lo6') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1PqVbTEc_figGAXq9aij5VC3B_OPeh9d9UdTXfBjUXyQ/embed?rm=minimal" }
    ]},
    { id: "m4", title: t('m4_title'), presentations: [
        { id: "m4_p1_1", title: t('m4_lo1') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1zWEEyH-yfSo3pYlglEjT-YQA7UNMmILp8ti8uk8ekfY/embed?rm=minimal" },
        { id: "m4_p1_2", title: t('m4_lo1') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1gQ4aBBEve3HMxR1CJTzOm-VG1cimOmdpLMOY0SvwWl8/embed?rm=minimal" },
        { id: "m4_p2", title: t('m4_lo2') + " - Presentation", url: "https://docs.google.com/presentation/d/1HxrsYWxHpCSAvmvp0dZf5qqinKU2Vhmlddg4lvUtpNY/embed?rm=minimal" },
        { id: "m4_p3", title: t('m4_lo3') + " - Presentation", url: "https://docs.google.com/presentation/d/1Lyzh5AbdcJOmu1x9A-OhZr1x0xZcKtd9aRqUCMNU610/embed?rm=minimal" },
        { id: "m4_p4", title: t('m4_lo4') + " - Presentation 1", url: "https://docs.google.com/presentation/d/16a0pYVrcB-f-Is_odF36PnDCaleRDHD8XtlecjxI2hA/embed?rm=minimal" },
        { id: "m4_p5", title: t('m4_lo4') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1RET01U6phGqUAEsJDa5MFy1tto-zCYOqK99bGnQK1x8/embed?rm=minimal" }
    ]},
    { id: "m5", title: t('m5_title'), presentations: [] },
    { id: "m6", title: t('m6_title'), presentations: [] },
    { id: "m7", title: t('m7_title'), presentations: [
        { id: "m7_p1", title: t('m7_lo1') + " - Presentation", url: "https://docs.google.com/presentation/d/1RWIs8WPHHMM6t29Gom_rmN6qfqnyubvVijvvGMvwzRQ/embed?rm=minimal" },
        { id: "m7_p2", title: t('m7_lo2') + " - Presentation", url: "https://docs.google.com/presentation/d/12suEy5h8UfXnyB8K0C2jNhM-eJkoDLI7P-LHyfncs58/embed?rm=minimal" },
        { id: "m7_p3", title: t('m7_lo3') + " - Presentation 1", url: "https://docs.google.com/presentation/d/18GYaDgAivuJAUgmlLPj-pZifaJWT9lnJTJkd6DJBVzY/embed?rm=minimal" },
        { id: "m7_p4", title: t('m7_lo3') + " - Presentation 2", url: "https://docs.google.com/presentation/d/11bfC0pETXUPM7Zd8vr0ojURu0LGyNDn_7N2pTP15ixU/embed?rm=minimal" }
    ]},
    { id: "m8", title: t('m8_title'), presentations: [] },
    { id: "m9", title: t('m9_title'), presentations: [] },
    { id: "m10", title: t('m10_title'), presentations: [
        { id: "m10_p1_1", title: t('m10_lo1') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1U5IhaM-u1jJmrq4U4rhNTn1Ff2EpsH3p/embed?rm=minimal" },
        { id: "m10_p1_2", title: t('m10_lo1') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1Tl8oHWSIaSq_eaphcC7SdD4eilAMMM6o/embed?rm=minimal" },
        { id: "m10_p2_1", title: t('m10_lo2') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1G2tz6gPJLzXapqChMY8MXY6pX-H5zg4x/embed?rm=minimal" },
        { id: "m10_p2_2", title: t('m10_lo2') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1d8gOhFStabCiB8NZwIb-oFfrPKkkrwgh/embed?rm=minimal" }
    ]}
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 lg:pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <PresentationIcon className="text-editor-accent" /> {t('presentations_title')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {modulesData.map((mod) => (
            <div key={mod.id} className="bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-2xl p-5 md:p-6 shadow-lg transition-all">
              <h2 className="text-base md:text-lg font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2 italic">
                {mod.title}
              </h2>
              <div className="space-y-3">
                {mod.presentations.length > 0 ? (
                  mod.presentations.map((p) => (
                    <button key={p.id} onClick={() => setSelectedPres(p)} className="w-full flex items-center justify-between p-4 bg-white dark:bg-editor-bg hover:bg-gray-100 dark:hover:bg-editor-active rounded-xl border border-gray-200 dark:border-gray-800 transition-all group text-left">
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-medium text-sm md:text-base pr-4">{p.title}</span>
                      <Monitor size={18} className="text-gray-400 dark:text-gray-600 group-hover:text-editor-accent shrink-0" />
                    </button>
                  ))
                ) : (
                  <p className="text-gray-400 italic text-sm py-2">{t('no_content')}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedPres && (
          <div className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-2 sm:p-6 backdrop-blur-sm">
            <div className="w-full max-w-[95vw] h-[90vh] bg-white dark:bg-editor-sidebar flex flex-col rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden animate-in zoom-in-95">
              <div className="flex justify-between items-start p-4 md:p-6 border-b border-gray-200 dark:border-gray-800 shrink-0 bg-gray-50 dark:bg-editor-bg/50">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg md:text-xl pr-4">{selectedPres.title}</h3>
                <button onClick={() => setSelectedPres(null)} className="text-gray-500 hover:text-red-500 bg-gray-200 dark:bg-editor-bg p-2 rounded-xl transition-colors shrink-0">
                  <X size={24} />
                </button>
              </div>
              <div className="relative flex-1 w-full h-full bg-black">
                <iframe 
                  src={selectedPres.url} 
                  className="absolute inset-0 w-full h-full border-none" 
                  allowFullScreen 
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  title={selectedPres.title} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Presentations;