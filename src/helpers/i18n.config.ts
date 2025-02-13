import { createI18n } from "vue-i18n";

import arGlobal from "../locales/ar.json";
import enGlobal from "../locales/en.json";

import arHome from "../modules/home/locales/ar.json";
import enHome from "../modules/home/locales/en.json";

import arAbout from "../modules/about/locales/ar.json";
import enAbout from "../modules/about/locales/en.json";

import arContact from "../modules/contact/locales/ar.json";
import enContact from "../modules/contact/locales/en.json";

import arCampaigns from "../modules/campaigns/locales/ar.json";
import enCampaigns from "../modules/campaigns/locales/en.json";

import arAuth from "../modules/auth/locales/ar.json";
import enAuth from "../modules/auth/locales/en.json";

import arBlogs from "../modules/blogs/locales/ar.json";
import enBlogs from "../modules/blogs/locales/en.json";

import arStories from "../modules/stories/locales/ar.json";
import enStories from "../modules/stories/locales/en.json";

import arCharity from "../modules/charity/locales/ar.json";
import enCharity from "../modules/charity/locales/en.json";

import arDonor from "../modules/donor/locales/ar.json";
import enDonor from "../modules/donor/locales/en.json";

import arVideo from "../modules/videos/locales/ar.json";
import enVideo from "../modules/videos/locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ar",
  defaultLocale: "ar",
  fallbackLocale: "ar",
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
      dashboard: enCharity,
      donor: enDonor,
      videos: enVideo,
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
      dashboard: arCharity,
      donor: arDonor,
      videos: arVideo,
    },
  },
}));
