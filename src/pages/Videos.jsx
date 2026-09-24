import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FileText, Presentation, ClipboardCheck, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const LessonDetail = () => {
  const { lessonId } = useParams();
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const form = useRef();

  const lessonData = {
    "m3_lo1": {
      title: t('m3_lo1'),
      moduleName: t('m3_title'),
      readings: [
        { title: t('m3_lo1_m1'), url: "https://docs.google.com/document/d/13a_o5CYa2UIOOiiS4gOiew9rLKpwWVyVQD6YlyjGPjo/preview?rm=minimal" },
        { title: t('m3_lo1_m2'), url: "https://docs.google.com/document/d/1whNx8o0hhUbxRHlZp6PhDDUIRmrKsYIx_-UjimDaqcA/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m3_lo1_p1'), url: "https://docs.google.com/presentation/d/1KCdAWLQ2ENSLMHv_GBWuCaAsAkdYJTVU38bzQ-pb7XI/embed?rm=minimal" },
        { title: t('m3_lo1_p2'), url: "https://docs.google.com/presentation/d/137BKj8eECa90KimilvFzZlinUwj71PdKcnOKk5PZT0U/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1DognnuWsTqdIGcplySjGrq7BWlvP7d4lje7D_S7YgKM/preview?rm=minimal"
    },
    "m3_lo2": {
      title: t('m3_lo2'),
      moduleName: t('m3_title'),
      readings: [
        { title: t('m3_lo2') + " - Material", url: "https://docs.google.com/document/d/1gzvN3DHAVllyc04ZB_KpsJVV72JxnGDP4Gm9QdYM9jA/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m3_lo2') + " - Presentation", url: "https://docs.google.com/presentation/d/1r5HWKa6_7o0AkTDF_lR_pkRuYLBF1KULc6EC9WHg120/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1CwOivqCKjD3DkiZ10ZtThAKdyoB1zva8mBTvHZVZ9Hw/preview?rm=minimal"
    },
    "m3_lo3": {
      title: t('m3_lo3'),
      moduleName: t('m3_title'),
      readings: [
        { title: t('m3_lo3') + " - Material", url: "https://docs.google.com/document/d/1_KJTJBZKPJLT2LwxpUFFUGRuZEXVpCzIwiZQpQOLPLw/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m3_lo3') + " - Presentation", url: "https://docs.google.com/presentation/d/1Xd6wYbTDoIi1Kt6DY2c1NgnIFoLFpvgaNtxejSeuUVs/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1yp2CfPyZysITtB0x0lo6js5KbMZw0lGn-bVaEsF1VXk/preview?rm=minimal"
    },
    "m3_lo4": {
      title: t('m3_lo4'),
      moduleName: t('m3_title'),
      readings: [
        { title: t('m3_lo4') + " - Material", url: "https://docs.google.com/document/d/1CW8XhWUgaBz-LIbcaXiUiukYQbAM2aEqgeQmrB0yF5k/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m3_lo4') + " - Presentation", url: "https://docs.google.com/presentation/d/1-ottxbfibNibWwSYPRMQFNeZBlXeLjXKodoXry4MXvs/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1RVPzFFeqv_nJMsRn57wgfBC-eA3aIZhHllcDPuwWEdg/preview?rm=minimal"
    },
    "m3_lo5": {
      title: t('m3_lo5'),
      moduleName: t('m3_title'),
      readings: [
        { title: t('m3_lo5') + " - Material", url: "https://docs.google.com/document/d/1oxB7LzEVm-wkPovDJcsAw7-fmGY4H9H9fsoyK0t_hsw/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m3_lo5') + " - Presentation", url: "https://docs.google.com/presentation/d/11r-gbMpdkcF7sSezdKMpyHSZ9nH6vmYpdpPLHyJZIO4/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1zj3wkkQXBgyHDTaOXUM9E0xQTjm2vyOPW7fxz5M9yvU/preview?rm=minimal"
    },
    "m3_lo6": {
      title: t('m3_lo6'),
      moduleName: t('m3_title'),
      readings: [
        { title: t('m3_lo6') + " - Material", url: "https://docs.google.com/document/d/12SzLNgEpyS5hJ59-vT2W1iPOpn3zHxxo8Zu5KTOdzME/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m3_lo6') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1fMctxLEz2YBb-xaIl1Icq5c1DyoZq4fMK2p70ilatQs/embed?rm=minimal" },
        { title: t('m3_lo6') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1PqVbTEc_figGAXq9aij5VC3B_OPeh9d9UdTXfBjUXyQ/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1SXVEXVHobhA3h3swVhZeAjvn3Y7JabvSG2YSDJo_LUk/preview?rm=minimal"
    },
    "m4_lo1": {
      title: t('m4_lo1'),
      moduleName: t('m4_title'),
      readings: [{ title: t('m4_lo1') + " - Material", url: "https://docs.google.com/document/d/1seQ2X-glbQRhE0MrO_JSWE8dkizbWMYCidE5I9ClT0Q/preview?rm=minimal" }],
      presentations: [
        { title: t('m4_lo1') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1zWEEyH-yfSo3pYlglEjT-YQA7UNMmILp8ti8uk8ekfY/embed?rm=minimal" },
        { title: t('m4_lo1') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1gQ4aBBEve3HMxR1CJTzOm-VG1cimOmdpLMOY0SvwWl8/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1nogbK9Li_jagz5OWE7sjK6hMz1-jh8AsAIGFNuSxz5s/preview?rm=minimal"
    },
    "m4_lo2": {
      title: t('m4_lo2'),
      moduleName: t('m4_title'),
      readings: [{ title: t('m4_lo2') + " - Material", url: "https://docs.google.com/document/d/1jrC1zgp4tSvXlclAH-K3C1GC_suyfYYiVIEq3W1WHmU/preview?rm=minimal" }],
      presentations: [{ title: t('m4_lo2') + " - Presentation", url: "https://docs.google.com/presentation/d/1HxrsYWxHpCSAvmvp0dZf5qqinKU2Vhmlddg4lvUtpNY/embed?rm=minimal" }],
      taskFile: "https://docs.google.com/document/d/1bG8CSD-dxNMnhZEDgu1zozQgGEvPlEm1q9zHmZWFgwA/preview?rm=minimal"
    },
    "m4_lo3": {
      title: t('m4_lo3'),
      moduleName: t('m4_title'),
      readings: [{ title: t('m4_lo3') + " - Material", url: "https://docs.google.com/document/d/1kNfBcDO3xdP_8FjYF-ZuBqu82ODWNW1DAclywS_qK2Q/preview?rm=minimal" }],
      presentations: [{ title: t('m4_lo3') + " - Presentation", url: "https://docs.google.com/presentation/d/1Lyzh5AbdcJOmu1x9A-OhZr1x0xZcKtd9aRqUCMNU610/embed?rm=minimal" }],
      taskFile: "https://docs.google.com/document/d/1GekXTIfw-mQ-cy_xZROhr-Tj55_qIv62O_sIIvTTGEg/preview?rm=minimal"
    },
    "m4_lo4": {
      title: t('m4_lo4'),
      moduleName: t('m4_title'),
      readings: [
        { title: t('m4_lo4') + " - Material 1", url: "https://docs.google.com/document/d/1mTg7yJI-vBEcCiRXHgEf6PUXK7k1yTy8UEK_6Pb0tfU/preview?rm=minimal" },
        { title: t('m4_lo4') + " - Material 2", url: "https://docs.google.com/document/d/1FuQGxZKq3O-r1ManZ4SuLRK0jHlFlRq-38El7CKA0q8/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m4_lo4') + " - Presentation 1", url: "https://docs.google.com/presentation/d/16a0pYVrcB-f-Is_odF36PnDCaleRDHD8XtlecjxI2hA/embed?rm=minimal" },
        { title: t('m4_lo4') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1RET01U6phGqUAEsJDa5MFy1tto-zCYOqK99bGnQK1x8/embed?rm=minimal" }
      ],
      taskFiles: [
        { title: "Task 1", url: "https://docs.google.com/document/d/1EAQXiQgJTNICWp03zF46FrCYjgjnwQaP4jol0KZCRYo/preview?rm=minimal" },
        { title: "Task 2", url: "https://docs.google.com/document/d/1fNZ4eACCmek-ZYVn-FsLb65d8EAw7lwll3geVdNN7zM/preview?rm=minimal" }
      ]
    },
    "m6_lo1": {
      title: t('m6_lo1'),
      moduleName: t('m6_title'),
      readings: [
        { title: t('m6_lo1') + " - Material 1", url: "https://docs.google.com/document/d/1KLSwDTWg9NOAOZg5J3AzMwg65oc4eIlUSu1fdtfSyM0/preview?rm=minimal" },
        { title: t('m6_lo1') + " - Material 2", url: "https://docs.google.com/document/d/1NfUV4rrWfhNll7xcwHfng_Q48J_GYyXP7NcqXobDPOM/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m6_lo1') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1kOKPMz4ZQSQM3tLHYwfN5ckXOQWbrcmr/embed?rm=minimal" },
        { title: t('m6_lo1') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1hED1c9_Isahe0Kz_DT2y7cMvvBXTWnIG/embed?rm=minimal" }
      ],
      taskFiles: [
        { title: "Task 1", url: "https://docs.google.com/document/d/1a0IYEYickXr3Oy3SvCBOF_VuveEfPE9X9o1c0BafOvg/preview?rm=minimal" },
        { title: "Task 2", url: "https://docs.google.com/document/d/1LBHsJBQZmB7AvqgEirovvradCFdBmm8OlPkxLgenNVU/preview?rm=minimal" }
      ]
    },
    "m6_lo2": {
      title: t('m6_lo2'),
      moduleName: t('m6_title'),
      readings: [
        { title: t('m6_lo2') + " - Material 1", url: "https://docs.google.com/document/d/1QAAn9FQBAqR5arE5FnKr08bMhXUuIvF-XCW2PflzPcY/preview?rm=minimal" },
        { title: t('m6_lo2') + " - Material 2", url: "https://docs.google.com/document/d/19ecM2HqVEW82D42ohibVjX-mz1KKi0879RNQxGCYyxg/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m6_lo2') + " - Presentation 1", url: "https://docs.google.com/presentation/d/14zl_nMRFEkZXis63DM2yTgG7f64IIsuo/embed?rm=minimal" },
        { title: t('m6_lo2') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1g0a0n1u4LBMATXYAfKkNQ_XtKQTRSCZ3/embed?rm=minimal" }
      ],
      taskFiles: [
        { title: "Task 1", url: "https://docs.google.com/document/d/1s-t-M0w9aPeNcB_HW_zx7Po1s52m5tc8oAct4LxRws8/preview?rm=minimal" },
        { title: "Task 2", url: "https://docs.google.com/document/d/1tFIGY-apxvVvrzuek6wKkigighzcb1fnO7b2Vmm8bzc/preview?rm=minimal" }
      ]
    },
    "m6_lo3": {
      title: t('m6_lo3'),
      moduleName: t('m6_title'),
      readings: [
        { title: t('m6_lo3') + " - Material", url: "https://docs.google.com/document/d/1is4MF26nGWc2jggpRT3YUUcMMv2WwsI6QxSjlFwirFw/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m6_lo3') + " - Presentation", url: "https://docs.google.com/presentation/d/1LutUIi3SdIJReyej95vJduUwcCu4iRKA/embed?rm=minimal" }
      ],
      taskFile: "https://docs.google.com/document/d/1sdjsDU8-YQmiTy_QDhGUXAv1qK-0T9GuFGw1keTH2rs/preview?rm=minimal"
    },
    "m7_lo1": {
      title: t('m7_lo1'),
      moduleName: t('m7_title'),
      readings: [{ title: t('m7_lo1') + " - Material", url: "https://docs.google.com/document/d/1Edt2TCU5fj__7emswvudN67IFK27-V41muL3T0iG7gE/preview?rm=minimal" }],
      presentations: [{ title: t('m7_lo1') + " - Presentation", url: "https://docs.google.com/presentation/d/1RWIs8WPHHMM6t29Gom_rmN6qfqnyubvVijvvGMvwzRQ/embed?rm=minimal" }],
      taskFile: "https://docs.google.com/document/d/1ZIcDsRO5SVSOBdtGKtJuEdZY8YFpcxmQjJiBZvOjqgE/preview?rm=minimal"
    },
    "m7_lo2": {
      title: t('m7_lo2'),
      moduleName: t('m7_title'),
      readings: [{ title: t('m7_lo2') + " - Material", url: "https://docs.google.com/document/d/1oFamSksgIXbwdieHGUa8_XXuo_UVsMA3nOROgolJP8k/preview?rm=minimal" }],
      presentations: [{ title: t('m7_lo2') + " - Presentation", url: "https://docs.google.com/presentation/d/12suEy5h8UfXnyB8K0C2jNhM-eJkoDLI7P-LHyfncs58/embed?rm=minimal" }],
      taskFile: "https://docs.google.com/document/d/13QllbgBHM7JmM796bXymP27JQ1Z3yj65tmDmxTWzofU/preview?rm=minimal"
    },
    "m7_lo3": {
      title: t('m7_lo3'),
      moduleName: t('m7_title'),
      readings: [
        { title: t('m7_lo3') + " - Material 1", url: "https://docs.google.com/document/d/1wvuo0Zc-VehK6fUepKLIsAt7L5kVrJmra-rJQu698f8/preview?rm=minimal" },
        { title: t('m7_lo3') + " - Material 2", url: "https://docs.google.com/document/d/11yz9ii9gARtedC5EcaAQnIsco7jpTljk5nDc5A2u1JU/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m7_lo3') + " - Presentation 1", url: "https://docs.google.com/presentation/d/18GYaDgAivuJAUgmlLPj-pZifaJWT9lnJTJkd6DJBVzY/embed?rm=minimal" },
        { title: t('m7_lo3') + " - Presentation 2", url: "https://docs.google.com/presentation/d/11bfC0pETXUPM7Zd8vr0ojURu0LGyNDn_7N2pTP15ixU/embed?rm=minimal" }
      ],
      taskFiles: [
        { title: "Task 1", url: "https://docs.google.com/document/d/1V-MAUDWiAoxKKwJRLrTbYGFHynX7dFYndJ_Gt-MmskI/preview?rm=minimal" },
        { title: "Task 2", url: "https://docs.google.com/document/d/1MStXO965HWoKpZjz-vzTjJ3ZCd0x3gIZxewiBb_5cE0/preview?rm=minimal" }
      ]
    },
    "m10_lo1": {
      title: t('m10_lo1'),
      moduleName: t('m10_title'),
      readings: [
        { title: t('m10_lo1') + " - Material 1", url: "https://docs.google.com/document/d/15o_bAJ__asdsxP6-nmd1-Lysl1VEapiLxurEfGcuxQQ/preview?rm=minimal" },
        { title: t('m10_lo1') + " - Material 2", url: "https://docs.google.com/document/d/1pp6O08OSNK9S3NMhZDu_IPnYiZuX9B9M-RxmuMKSQpI/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m10_lo1') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1U5IhaM-u1jJmrq4U4rhNTn1Ff2EpsH3p/embed?rm=minimal" },
        { title: t('m10_lo1') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1Tl8oHWSIaSq_eaphcC7SdD4eilAMMM6o/embed?rm=minimal" }
      ],
      taskFiles: [
        { title: "Task 1", url: "https://docs.google.com/document/d/1yJFu_m_9RNDuvJk0HKgL-WeLyFCTs5rQggkzVo_GPUs/preview?rm=minimal" },
        { title: "Task 2", url: "https://docs.google.com/document/d/1nJ8zeKszNLah3muxZxbZA8wEnv4-YVDBodskz1mMd5c/preview?rm=minimal" }
      ]
    },
    "m10_lo2": {
      title: t('m10_lo2'),
      moduleName: t('m10_title'),
      readings: [
        { title: t('m10_lo2') + " - Material 1", url: "https://docs.google.com/document/d/1ZJKt-LTKWK7zdWiNSZIGJvWGudP3FQCpmtw_c8q376s/preview?rm=minimal" },
        { title: t('m10_lo2') + " - Material 2", url: "https://docs.google.com/document/d/1sL-NRuBk83z81TX-6TQ-JpXfsbF3sbKLKAYPNxM26kI/preview?rm=minimal" }
      ],
      presentations: [
        { title: t('m10_lo2') + " - Presentation 1", url: "https://docs.google.com/presentation/d/1G2tz6gPJLzXapqChMY8MXY6pX-H5zg4x/embed?rm=minimal" },
        { title: t('m10_lo2') + " - Presentation 2", url: "https://docs.google.com/presentation/d/1d8gOhFStabCiB8NZwIb-oFfrPKkkrwgh/embed?rm=minimal" }
      ],
      taskFiles: [
        { title: "Task 1", url: "https://docs.google.com/document/d/1huehc82nAJx9KopYLIHiIJ5wCdST1tD3uADlzxLVnIk/preview?rm=minimal" },
        { title: "Task 2", url: "https://docs.google.com/document/d/1nRh6xhYGEd37TdWbdyJIYAfLXTYvslTS0sNEf3HQnL4/preview?rm=minimal" }
      ]
    }
  };

  const current = lessonData[lessonId];
  const activeTaskFile = current?.taskFiles ? current.taskFiles[selectedTaskIndex].url : current?.taskFile;

  const sendTask = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_46754pf', 'template_1eit5vd', form.current, '0_3MvIFNznDY9gTf7')
      .then(() => { setStatus('success'); form.current.reset(); }, () => setStatus('error'));
  };

  if (!current) return <div className="p-20 text-center text-gray-500 font-bold italic">{t('no_content')}</div>;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-editor-bg text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-8 pb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold border-l-4 border-editor-accent pl-4 leading-tight mb-10">
          {current.title}
        </h1>

        <div className="space-y-12 md:space-y-16">
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3">
              <Presentation className="text-editor-accent" /> {t('presentations_title')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {current.presentations.map((pres, index) => (
                <div key={index} className="space-y-3">
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm ml-1 italic">{pres.title}</p>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-black shadow-xl">
                    <iframe 
                      src={pres.url} 
                      className="absolute inset-0 w-full h-full border-none" 
                      allowFullScreen 
                      sandbox="allow-scripts allow-same-origin allow-presentation"
                      title={pres.title} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3">
              <FileText className="text-editor-accent" /> {t('materials_title')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {current.readings.map((doc, index) => (
                <div key={index} className="space-y-3">
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm ml-1 italic">{doc.title}</p>
                  <div className="relative w-full h-[50vh] min-h-[350px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white shadow-xl">
                    <iframe 
                      src={doc.url} 
                      className="absolute inset-0 w-full h-full border-none" 
                      sandbox="allow-scripts allow-same-origin"
                      title={doc.title} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 dark:bg-editor-sidebar border border-gray-200 dark:border-gray-800 rounded-3xl p-5 md:p-8 shadow-2xl overflow-hidden transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="order-2 lg:order-1">
                <h2 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3 underline decoration-editor-accent underline-offset-8">
                  <ClipboardCheck className="text-editor-accent" /> {t('tasks_title')}
                </h2>
                <form ref={form} onSubmit={sendTask} className="space-y-5">
                  <input type="hidden" name="moduleName" value={current.moduleName} />
                  <input type="hidden" name="lessonName" value={current.title} />
                  <div>
                    <label className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-2 block font-bold uppercase tracking-wider">{t('name_label')}</label>
                    <input type="text" name="studentName" required className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-3 md:p-4 rounded-xl text-gray-900 dark:text-white outline-none focus:border-editor-accent transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-2 block font-bold uppercase tracking-wider">{t('email_label')}</label>
                    <input type="email" name="studentEmail" required className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-3 md:p-4 rounded-xl text-gray-900 dark:text-white outline-none focus:border-editor-accent transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-2 block font-bold uppercase tracking-wider">{t('link_label')}</label>
                    <input type="url" name="taskLink" required className="w-full bg-white dark:bg-editor-bg border border-gray-200 dark:border-gray-700 p-3 md:p-4 rounded-xl text-gray-900 dark:text-white outline-none font-mono text-xs md:text-sm shadow-sm" placeholder="https://github.com/..." />
                  </div>
                  <button type="submit" disabled={status === 'sending'} className="w-full bg-editor-accent text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 shadow-lg uppercase tracking-widest">
                    {status === 'sending' ? t('loading') : <><Send size={18} /> {t('send')}</>}
                  </button>
                  {status === 'success' && <div className="text-green-600 dark:text-green-500 text-center font-bold bg-green-500/10 p-3 rounded-lg flex items-center justify-center gap-2 animate-in fade-in"><CheckCircle size={18} /> {t('success')}</div>}
                </form>
              </div>
              <div className="order-1 lg:order-2 flex flex-col">
                <h3 className="text-gray-600 dark:text-gray-400 font-bold mb-4 uppercase text-[10px] md:text-xs tracking-widest">{t('task_desc')}</h3>
                <div className="relative flex-1 w-full min-h-[400px] h-[50vh] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white shadow-inner flex flex-col">
                  {current.taskFiles && (
                    <div className="flex gap-2 p-2 bg-gray-50 dark:bg-editor-sidebar border-b border-gray-200 dark:border-gray-800">
                      {current.taskFiles.map((tf, i) => (
                        <button 
                          key={i} 
                          type="button"
                          onClick={() => setSelectedTaskIndex(i)} 
                          className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors ${selectedTaskIndex === i ? 'bg-editor-accent text-black shadow-sm' : 'bg-gray-200 dark:bg-editor-bg text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800'}`}>
                          {tf.title}
                        </button>
                      ))}
                    </div>
                  )}
                  <iframe 
                    src={activeTaskFile} 
                    className="flex-1 w-full border-none bg-white" 
                    sandbox="allow-scripts allow-same-origin"
                    title="Task description" 
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;