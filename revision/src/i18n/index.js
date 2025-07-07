import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: { welcome: "Welcome to News" } },
      uz: { translation: { welcome: "Yangiliklar saytiga xush kelibsiz" } },
      ru: { translation: { welcome: "Добро пожаловать на сайт новостей" } },
    },
  });
