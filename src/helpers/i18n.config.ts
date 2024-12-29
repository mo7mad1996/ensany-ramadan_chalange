import enGlobal from "../locales/en.json";
import arGlobal from "../locales/ar.json";

import enHome from "../modules/home/locales/en.json";
import arHome from "../modules/home/locales/ar.json";

export default {
  legacy: false,
  locale: "en",
  messages: {
    en: {
      home: enHome,
      global: enGlobal,
    },
    ar: {
      home: arHome,
      global: arGlobal,
    },
  },
};
