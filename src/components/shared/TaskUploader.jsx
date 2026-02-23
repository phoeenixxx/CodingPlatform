import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, Mail, User, Link as LinkIcon, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const TaskUploader = ({ moduleId, moduleTitle, lessonId, lessonTitle }) => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isKa = i18n.language === 'ka';

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      studentName: e.target.studentName.value,
      studentEmail: e.target.studentEmail.value,
      taskLink: e.target.taskLink.value,
      moduleName: moduleTitle,
      lessonName: lessonTitle,
    };

    emailjs.send(
      'service_46754pf', 
      'template_1eit5vd', 
      templateParams, 
      '0_3MvIFNznDY9gTf7'
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
    })
    .catch(() => {
      alert(isKa ? 'შეცდომა გაგზავნისას.' : 'Error sending task.');
      setLoading(false);
    });
  };

  if (submitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/50 p-8 rounded-3xl text-center">
        <h3 className="text-xl font-black text-white uppercase tracking-tighter">
          {isKa ? 'დავალება გაიგზავნა!' : 'Task Sent!'}
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          {isKa ? 'პასუხს მიიღებთ თქვენს ელ-ფოსტაზე.' : 'Feedback will be sent to your email.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-editor-sidebar p-8 rounded-3xl border border-gray-800 shadow-2xl mt-12 relative overflow-hidden">
      <h3 className="text-2xl font-black text-white mb-8 uppercase flex items-center gap-3 relative z-10">
        <Upload size={24} className="text-editor-accent" />
        {isKa ? 'დავალების ჩაბარება' : 'Submit Task'}
      </h3>
      
      <form onSubmit={sendEmail} className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
            <input name="studentName" placeholder={isKa ? "სახელი და გვარი" : "Full Name"} className="w-full bg-editor-bg border border-gray-800 rounded-2xl p-4 pl-12 text-white outline-none focus:border-editor-accent transition-all" required />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
            <input name="studentEmail" type="email" placeholder={isKa ? "თქვენი ელ-ფოსტა" : "Your Email"} className="w-full bg-editor-bg border border-gray-800 rounded-2xl p-4 pl-12 text-white outline-none focus:border-editor-accent transition-all" required />
          </div>
        </div>
        <div className="relative">
          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input name="taskLink" type="url" placeholder={isKa ? "დავალების ლინკი (GitHub/Drive)" : "Task Link"} className="w-full bg-editor-bg border border-gray-800 rounded-2xl p-4 pl-12 text-white outline-none focus:border-editor-accent transition-all" required />
        </div>
        
        <button type="submit" disabled={loading} className="w-full bg-editor-accent hover:bg-blue-600 disabled:bg-gray-700 text-white font-black uppercase py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg transition-all">
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
          {isKa ? 'გაგზავნა' : 'Send Submission'}
        </button>
      </form>
    </div>
  );
};

export default TaskUploader;