import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  const toast = useToast({
    position: "top",
  });
  return {
    provide: {
      toast,
    },
  };
});
