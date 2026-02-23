import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Info, FileText, Presentation, ClipboardList } from 'lucide-react';
import db from '../data/db.json';
import TaskUploader from '../components/shared/TaskUploader';

const LessonDetail = () => {
  const { moduleId, lessonId } = useParams();
  const { t, i18n } = useTranslation();
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleLangChange = () => setTick(t => t + 1);
    i18n.on('languageChanged', handleLangChange);
    return () => i18n.off('languageChanged', handleLangChange);
  }, [i18n]);

  const moduleData = db.modules.find(m => m.id === moduleId);
  const lessonData = moduleData?.lessons.find(l => l.id === lessonId);

  if (!lessonData) return <Navigate to="/modules" replace />;

  const isKa = i18n.language === 'ka';
  const getLabel = (obj, key) => obj ? obj[`${key}${isKa ? 'Ka' : 'En'}`] : '';

  const formatPreviewLink = (link) => {
    if (!link || link === "#") return null;
    if (link.includes('docs.google.com')) {
      return link.replace(/\/edit.*$/, '/preview');
    }
    return link;
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 animate-in fade-in duration-500">
      <Link to="/modules" className="inline-flex items-center gap-2 text-editor-accent hover:text-white mb-10 transition-colors font-bold uppercase text-sm tracking-widest">
        <ArrowLeft size={18} />
        {isKa ? 'უკან დაბრუნება' : 'Back'}
      </Link>

      <div className="mb-14">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight uppercase">
          {getLabel(lessonData, 'title')}
        </h1>
        <div className="h-2 w-40 bg-editor-accent rounded-full shadow-lg" />
      </div>

      <div className="space-y-12">
        <div className="bg-editor-sidebar p-8 rounded-3xl border border-gray-800 shadow-2xl">
          <h3 className="text-2xl font-black text-editor-accent mb-8 font-mono flex items-center gap-3 uppercase">
            <Info size={24} /> // {t('theory')}
          </h3>
          <div className="text-gray-300 leading-relaxed text-xl font-medium">
            {getLabel(lessonData, 'theory')}
          </div>
        </div>

        <div className="space-y-16">
          <PreviewSection 
            title={isKa ? "პრეზენტაცია" : "Presentation"} 
            icon={<Presentation className="text-purple-500" />} 
            links={lessonData.resources?.presentation} 
            formatLink={formatPreviewLink}
          />

          <PreviewSection 
            title={isKa ? "სასწავლო მასალა" : "Reading Material"} 
            icon={<FileText className="text-blue-500" />} 
            links={lessonData.resources?.readingMaterial} 
            formatLink={formatPreviewLink}
          />

          <PreviewSection 
            title={isKa ? "დავალების ინსტრუქცია" : "Task Instructions"} 
            icon={<ClipboardList className="text-green-500" />} 
            links={lessonData.resources?.taskFile} 
            formatLink={formatPreviewLink}
          />
        </div>

        <TaskUploader 
          moduleId={moduleId} 
          moduleTitle={getLabel(moduleData, 'title')}
          lessonId={lessonId} 
          lessonTitle={getLabel(lessonData, 'title')}
        />
      </div>
    </div>
  );
};

const PreviewSection = ({ title, icon, links, formatLink }) => {
  const validLinks = links?.filter(link => link !== "#") || [];
  if (validLinks.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        {icon}
        <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {validLinks.map((link, index) => {
          const previewUrl = formatLink(link);
          return (
            <div key={index} className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
              <iframe 
                src={previewUrl} 
                className="absolute inset-0 w-full h-full border-0" 
                allow="autoplay"
                loading="lazy"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonDetail;