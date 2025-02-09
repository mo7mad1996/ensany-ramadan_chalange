import aboutRoutes from "~/modules/about/routes";
import authRoutes from "~/modules/auth/routes";
import blogsRoutes from "~/modules/blogs/routes";
import campaignsRoutes from "~/modules/campaigns/routes";
import charityRoutes from "~/modules/charity/routes";
import contactRoutes from "~/modules/contact/routes";
import dashbaordDonorRoutes from "~/modules/donor/routes";
import homeRoutes from "~/modules/home/routes";
import storiesRoutes from "~/modules/stories/routes";
import videosRoutes from "~/modules/videos/routes";

export default [
  ...homeRoutes,
  ...aboutRoutes,
  ...contactRoutes,
  ...campaignsRoutes,
  ...authRoutes,
  ...blogsRoutes,
  ...storiesRoutes,
  ...charityRoutes,
  ...dashbaordDonorRoutes,
  ...videosRoutes,
];
