import homeRoutes from "~/modules/home/routes";
import aboutRoutes from "~/modules/about/routes";
import contactRoutes from "~/modules/contact/routes";
import campaignsRoutes from "~/modules/campaigns/routes";
import authRoutes from "~/modules/auth/routes";
import blogsRoutes from "~/modules/blogs/routes";
import storiesRoutes from "~/modules/stories/routes";
import charityRoutes from "~/modules/charity/routes";
import dashbaordDonorRoutes from "~/modules/donor/routes";

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
];
