import enGlobal from "../locales/en.json";
import arGlobal from "../locales/ar.json";

import enHome from "../modules/home/locales/en.json";
import arHome from "../modules/home/locales/ar.json";

import enAbout from "../modules/about/locales/en.json";
import arAbout from "../modules/about/locales/ar.json";

import enContact from "../modules/contact/locales/en.json";
import arContact from "../modules/contact/locales/ar.json";

import enCampaigns from "../modules/campaigns/locales/en.json";
import arCampaigns from "../modules/campaigns/locales/ar.json";

import enAuth from "../modules/auth/locales/en.json";
import arAuth from "../modules/auth/locales/ar.json";

import enBlogs from "../modules/auth/locales/en.json";
import arBlogs from "../modules/auth/locales/ar.json";

import enStories from "../modules/stories/locales/en.json";
import arStories from "../modules/stories/locales/ar.json";

export default {
  legacy: false,
  locale: "ar",
  messages: {
    en: {
      home: enHome,
      global: enGlobal,
      about: enAbout,
      contact: enContact,
      campaigns: enCampaigns,
      auth: enAuth,
      blogs: enBlogs,
      story: enStories,
    },
    ar: {
      home: arHome,
      global: arGlobal,
      about: arAbout,
      contact: arContact,
      campaigns: arCampaigns,
      auth: arAuth,
      blogs: arBlogs,
      story: arStories,
    },
  },
};
