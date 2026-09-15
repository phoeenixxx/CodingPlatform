import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, X, Info, MonitorPlay } from 'lucide-react';

const Recordings = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const modulesData = [
    { id: "m1", title: t('m1_title'), videos: [] },
    { id: "m2", title: t('m2_title'), videos: [] },
    {
      id: "m3",
      title: t('m3_title'),
      videos: [
        { id: "v1", title: "შესავალი", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/17NylPQ45ECo9KQ1aQ4E41vsUZkevKX_i/preview" },
        { id: "v2", title: t('m3_lo1'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1ya8FodR85ovHXeFLo-Rs5luZVukqowsm/preview" },
        { id: "v3", title: t('m3_lo2'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1ABeoMeep4ljw0KMxVrrKt2rxnFG_qsnE/preview" },
        { id: "v4", title: t('m3_lo3'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1KAjIRIMlFC9Qv3C-F2E5omaeeyNSfxwh/preview" },
        { id: "v5", title: t('m3_lo4'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1cMc3nlTcfNtqdKvRLAi2tqgDkLBN6ro7/preview" },
        { id: "v6", title: t('m3_lo5'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1xfCXrMzikdVg2WcSp5exVwheKzDT96WE/preview" },
        { id: "v7", title: t('m3_lo6'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1Ouh53gMUbzu90IX6xsaRHn1oyMz_Hc6W/preview" }
      ]
    },
    { id: "m4", title: t('m4_title'), videos: [
        { id: "m4_v1", title: t('m4_lo1'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1I6rXoJl8MpLDrsej5-KfsZJEu1ij4c_N/preview" },
        { id: "m4_v2", title: t('m4_lo2'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1OwLG2HxuBdBW7xU2Ovl-TX280ffqyKag/preview" },
        { id: "m4_v3", title: t('m4_lo3'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/14tB9udgFx4NZM6SR8cZbtTHIjuj1-b4u/preview" },
        { id: "m4_v4", title: t('m4_lo4') + " - 1", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/19wETZmE5I5aJnQzc9wbbbaC2DncmvnNi/preview" },
        { id: "m4_v5", title: t('m4_lo4') + " - 2", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1Dcld0GWGrdZ_vANMEn9jWDtVfg4oCycS/preview" }
    ]},
    { id: "m5", title: t('m5_title'), videos: [] },
    { id: "m6", title: t('m6_title'), videos: [
        { id: "m6_v1_1", title: t('m6_lo1') + " - 1", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1fAGiiJE3-2S6UK4FlJpo3mqyUEpLIxQr/preview" },
        { id: "m6_v1_2", title: t('m6_lo1') + " - 2", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1cIF0No1aLBYkyKPQFRqobJBkz6NZuf9b/preview" },
        { id: "m6_v2_1", title: t('m6_lo2') + " - 1", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1gZU11v0RaPO1xgUS1XFHSecF2SYKLHzx/preview" },
        { id: "m6_v2_2", title: t('m6_lo2') + " - 2", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1i5fiE-TTjVc75GE3ziKb1sbIq5Yz_Cc4/preview" },
        { id: "m6_v3", title: t('m6_lo3'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1wxi5V-Dngc6zjozHMCN8VkECwf8l43Om/preview" }
    ]},
    { id: "m7", title: t('m7_title'), videos: [
        { id: "m7_v1", title: t('m7_lo1'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1MKuF7KZwAde5lIH9_3pczZ_lRr20IpnE/preview" },
        { id: "m7_v2", title: t('m7_lo2'), thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/13RQd2VjNZwrVKgdIHqB0WpE0-23n579j/preview" },
        { id: "m7_v3", title: t('m7_lo3') + " - 1", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1C2UYZn86wNHcgIFeXzbDJvn7nEL-aNh1/preview" },
        { id: "m7_v4", title: t('m7_lo3') + " - 2", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1JvIShNw5vZ5XHwDj3nvT7p_466Rfdx8k/preview" }
    ]},
    { id: "m8", title: t('m8_title'), videos: [] },
    { id: "m9", title: t('m9_title'), videos: [] },
    { id: "m10", title: t('m10_title'), videos: [
        { id: "m10_v1", title: t('m10_lo1') + " - 1", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1SJ3pokxZoVV5fA4sdCokZE16UrPPypeN/preview" },
        { id: "m10_v2", title: t('m10_lo1') + " - 2", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1e4sJ0CqA4lTILrCbkF2blnH7FGj2bs_c/preview" },
        { id: "m10_v3", title: t('m10_lo2') + " - 1", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1tQnf6hVb61iOzPj9w3LijTE7JsSlKMH4/preview" },
        { id: "m10_v4", title: t('m10_lo2') + " - 2", thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop", url: "https://drive.google.com/file/d/1uOoLGHWdRzZkU__tQpcBj4LRf0wjbwAD/preview" }
    ]}
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 lg:pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <MonitorPlay className="text-editor-accent" /> {t('recordings_title')}
        </h1>
        <div className="space-y-12">
          {modulesData.map((mod) => (
            <div key={mod.id} className="space-y-6">
              <h2 className="text-lg md:text-xl font-bold border-l-4 border-editor-accent pl-4">{mod.title}</h2>
              {mod.videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {mod.videos.map((video) => (
                    <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer space-y-3">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md transition-all group-hover:shadow-lg">
                        <img src={video.thumbnail} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={video.title} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-editor-accent p-3 rounded-full text-black"><Play fill="currentColor" size={20} /></div>
                        </div>
                      </div>
                      <div className="px-1">
                        <h3 className="font-medium line-clamp-2 group-hover:text-editor-accent transition-colors text-sm md:text-base">{video.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-3 text-gray-500 bg-gray-50 dark:bg-editor-sidebar/20 p-5 md:p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800">
                  <Info size={18} />
                  <p className="italic text-sm">{t('no_content')}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm">
            <div className="w-full max-w-6xl max-h-[90vh] bg-white dark:bg-editor-sidebar flex flex-col rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden animate-in zoom-in-95">
              <div className="flex justify-between items-start p-5 md:p-6 border-b border-gray-200 dark:border-gray-800 shrink-0 bg-gray-50 dark:bg-editor-bg/50">
                <h3 className="font-bold text-lg md:text-xl pr-4">{selectedVideo.title}</h3>
                <button onClick={() => setSelectedVideo(null)} className="text-gray-500 hover:text-red-500 bg-gray-200 dark:bg-editor-bg p-2 rounded-xl transition-colors shrink-0">
                  <X size={24} />
                </button>
              </div>
              <div className="relative flex-1 w-full h-[60vh] min-h-[400px] bg-black">
                <iframe 
                  src={selectedVideo.url} 
                  className="absolute inset-0 w-full h-full border-none" 
                  allowFullScreen 
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  title={selectedVideo.title} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recordings;