import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Youtube, PlayCircle, Search, X } from 'lucide-react';

const Videos = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const videoData = [
    {
      id: "GihQAC1I39Q",
      title: "JavaScript Cookies vs Local Storage vs Session",
      author: "Web Dev Simplified",
      views: "Recent",
      posted: "New"
    },
    {
      id: "09BwruU4kiY",
      title: "JavaScript DOM Manipulation",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "0ik6X4DJKCc",
      title: "JavaScript DOM Crash Course",
      author: "Traversy Media",
      views: "Recent",
      posted: "New"
    },
    {
      id: "y17RuWkWdn8",
      title: "Learn DOM Manipulation In 18 Minutes",
      author: "Web Dev Simplified",
      views: "Recent",
      posted: "New"
    },
    {
      id: "g_vXSKbfUiQ",
      title: "Advanced JavaScript Concepts",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "PoRJizFvM7s",
      title: "Front-End Web Development",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "cuEtnrL9-H0",
      title: "JavaScript Real World Projects",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "DHvZLI7Db8E",
      title: "JavaScript Best Practices",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "s9wW2PpJsmQ",
      title: "JavaScript Basics - Full Course for Beginners",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "In0nB0ABaUk",
      title: "JavaScript Basics ",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "XF1_MlZ5l6M",
      title: "JavaScript Basics",
      author: "YouTube",
      views: "Recent",
      posted: "New"
    },
    {
      id: "Sh6lK57Cuk4",
      title: "HTML & CSS Full Course - Beginner to Pro",
      author: "SuperSimpleDev",
      views: "11M views",
      posted: "2 years ago"
    },
    {
      id: "DHjqpvDnNGE",
      title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
      author: "Programming with Mosh",
      views: "10M views",
      posted: "5 years ago"
    },
    {
      id: "8aGhZQkoFbQ",
      title: "React JS Crash Course 2024",
      author: "Traversy Media",
      views: "2M views",
      posted: "1 year ago"
    },
    {
      id: "lkIFF4maKMU",
      title: "100+ JavaScript Concepts You Should Know",
      author: "Fireship",
      views: "1.5M views",
      posted: "1 year ago"
    },
    {
      id: "cu_ykIfBprI",
      title: "React Router 6 - Full Course",
      author: "Net Ninja",
      views: "800K views",
      posted: "2 years ago"
    },
    {
      id: "a9u2yZvsqHA",
      title: "State Management in React - Complete Guide",
      author: "Web Dev Simplified",
      views: "1.2M views",
      posted: "11 months ago"
    },
    {
      id: "XgSjoHgy3Rk",
      title: "Sass Tutorial for Beginners - Learn CSS Preprocessor",
      author: "freeCodeCamp.org",
      views: "1.5M views",
      posted: "3 years ago"
    },
    {
      id: "N8ap4k_1QEQ",
      title: "Tailwind CSS Full Course 2024",
      author: "Dave Gray",
      views: "450K views",
      posted: "8 months ago"
    }
  ];

  const filteredVideos = videoData.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 lg:pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <Youtube className="text-red-600" /> {t('videos')}
          </h1>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text"
              placeholder="მოძებნე ვიდეო ან ავტორი..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 p-3.5 pl-12 rounded-xl outline-none focus:border-editor-accent transition-all shadow-sm text-sm md:text-base"
            />
            {searchQuery && (
              <X 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
                size={18}
              />
            )}
          </div>
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {filteredVideos.map((video) => (
              <div key={video.id} className="flex flex-col group cursor-pointer animate-in fade-in duration-500">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black mb-3 border border-gray-200 dark:border-gray-800 transition-all group-hover:border-gray-400 dark:group-hover:border-gray-600 shadow-md group-hover:shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="flex gap-3 px-1">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-editor-sidebar flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      <PlayCircle className="text-editor-accent" size={20} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold leading-snug line-clamp-2 group-hover:text-editor-accent transition-colors duration-200 text-sm md:text-base">
                      {video.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {video.author}
                    </p>
                    <div className="flex items-center text-gray-400 dark:text-gray-500 text-[10px] md:text-xs mt-0.5">
                      <span>{video.views}</span>
                      <span className="mx-1">•</span>
                      <span>{video.posted}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 bg-gray-50 dark:bg-editor-sidebar/10 rounded-3xl border border-dashed border-gray-300 dark:border-gray-800">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg md:text-xl font-medium">შედეგი ვერ მოიძებნა: "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;