import enGlobal from "../locales/en.json";
import arGlobal from "../locales/ar.json";

import enHome from "../modules/home/locales/en.json";
import arHome from "../modules/home/locales/ar.json";

import enAbout from "../modules/about/locales/en.json";
import arAbout from "../modules/about/locales/ar.json";

import enContact from "../modules/contact/locales/en.json";
import arContact from "../modules/contact/locales/ar.json";

export default {
  legacy: false,
  locale: "en",
  messages: {
    en: {
      home: enHome,
      global: enGlobal,
      about: enAbout,
      contact: enContact,
    },
    ar: {
      home: arHome,
      global: arGlobal,
      about: arAbout,
      contact: arContact,
    },
  },
};
