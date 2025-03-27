import { resolve } from "pathe";

const videosRoutes = [
  {
    name: "videos",
    path: "/videos",
    file: resolve(__dirname, "../pages/AllVideos.vue"),
  },
  {
    name: "video",
    path: "/videos/:id",
    file: resolve(__dirname, "../pages/SingleVideo.vue"),
  },
];

export default videosRoutes;
