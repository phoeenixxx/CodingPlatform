import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LifeBuoy, MessageSquare, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Help = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const form = useRef();

  const sendHelpRequest = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_46754pf', 
      'template_ul8umj5', 
      form.current, 
      '0_3MvIFNznDY9gTf7'
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('error');
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="p-6 max-w-4xl mx-auto pt-24 lg:pt-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <LifeBuoy className="text-editor-accent" /> {t('help_title')}
        </h1>

        <div className="bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-2xl transition-all">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-editor-accent/20 p-4 rounded-2xl">
              <MessageSquare className="text-editor-accent" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t('help_title')}</h2>
              <p className="text-gray-500 dark:text-gray-400">{t('help_placeholder')}</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendHelpRequest} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-gray-600 dark:text-gray-500 text-xs uppercase font-bold ml-1">{t('name_label')}</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-4 rounded-xl text-gray-900 dark:text-white outline-none focus:border-editor-accent transition-all shadow-sm" 
                  placeholder={t('name_label')} 
                />
              </div>
              <div className="space-y-1">
                <label className="text-gray-600 dark:text-gray-500 text-xs uppercase font-bold ml-1">{t('email_label')}</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-4 rounded-xl text-gray-900 dark:text-white outline-none focus:border-editor-accent transition-all shadow-sm" 
                  placeholder={t('email_label')} 
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-gray-600 dark:text-gray-500 text-xs uppercase font-bold ml-1">{t('help_placeholder')}</label>
              <textarea 
                name="message" 
                required 
                className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-4 rounded-xl text-gray-900 dark:text-white outline-none focus:border-editor-accent min-h-[150px] transition-all shadow-sm" 
                placeholder={t('help_placeholder')} 
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'} 
              className="w-full bg-editor-accent text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 shadow-lg shadow-editor-accent/10"
            >
              {status === 'sending' ? (
                t('loading')
              ) : (
                <>
                  <Send size={20} /> {t('help_send')}
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="text-green-600 dark:text-green-500 text-center font-bold bg-green-500/10 p-4 rounded-xl flex items-center justify-center gap-2 animate-in fade-in zoom-in-95 border border-green-500/20">
                <CheckCircle size={20} /> {t('success')}
              </div>
            )}

            {status === 'error' && (
              <div className="text-red-600 dark:text-red-500 text-center font-bold bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                მოხდა შეცდომა. გთხოვთ სცადოთ მოგვიანებით.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;