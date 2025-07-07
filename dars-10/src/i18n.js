// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // brauzer tilini aniqlaydi
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          add: "Add Product",
          delete: "Delete",
          productList: "Product List",
        },
      },
      uz: {
        translation: {
          welcome: "Xush kelibsiz",
          add: "Mahsulot qo'shish",
          delete: "O'chirish",
          productList: "Mahsulotlar Ro'yxati",
        },
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать",
          add: "Добавить продукт",
          delete: "Удалить",
          productList: "Список продуктов",
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
