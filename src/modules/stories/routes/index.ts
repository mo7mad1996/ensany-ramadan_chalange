import { resolve } from "pathe";

const storiesRoutes = [
  {
    name: "stories",
    path: "/stories",
    file: resolve(__dirname, "../pages/AllStories.vue"),
  },

  {
    name: "story",
    path: "/stories/:id",
    file: resolve(__dirname, "../pages/SingleStory.vue"),
  },
];

export default storiesRoutes;
