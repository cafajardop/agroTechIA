import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones desde los archivos JSON
import enTranslations from './en.json';
import esTranslations from './es.json';

const resources = {
  en: {
    translation: enTranslations
  },
  es: {
    translation: esTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Idioma por defecto configurado a español
    fallbackLng: "es",
    keySeparator: false, // No usar separadores en las claves
    interpolation: {
      escapeValue: false // React ya maneja el escape de valores
    }
  });

export default i18n;
