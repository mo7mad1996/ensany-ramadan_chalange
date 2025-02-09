import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useProfile = () => {
  const { user } = useAuth();

  return {
    update(payload: any, files: [File]) {
      const formData = new FormData();

      ["user_type", "mobile", "email", "charity_name"].map((key) => {
        if (user.value[key]) formData.append(key, user.value[key]);
      });

      const translation = user.value.charity_name_translations;

      const arTranslation = translation.find((i: any) => i.locale == "ar");
      const enTranslation = translation.find((i: any) => i.locale == "en");

      formData.append("country_id", user.value.country.id);
      formData.append("charity_name:ar", arTranslation.charity_name);
      formData.append("charity_name:en", enTranslation.charity_name);

      files.forEach((file) => {
        formData.append("file[]", file, file.name);
      });

      for (const key in payload) {
        if (payload[key]) formData.append(key, payload[key]);
      }
      return api.post("/edit/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },

    changePassword(payload: any) {
      return api.post("/change/password", payload);
    },
  };
};
