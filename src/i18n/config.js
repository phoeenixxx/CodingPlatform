import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ka: {
    translation: {
      modules: "მოდულები",
      theory: "თეორია",
      tasks: "დავალებები"
    }
  },
  en: {
    translation: {
      modules: "Modules",
      theory: "Theory",
      tasks: "Tasks"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ka",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;