import { resolve } from "pathe";

const blogsRoutes = [
  {
    name: "blogs",
    path: "/blogs",
    file: resolve(__dirname, "../pages/AllBlogs.vue"),
  },

  {
    name: "blog",
    path: "/blogs/:id",
    file: resolve(__dirname, "../pages/SingleBlog.vue"),
  },
];

export default blogsRoutes;
