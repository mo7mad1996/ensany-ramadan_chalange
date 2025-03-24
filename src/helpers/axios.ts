import { useAuth } from "~/modules/auth/services/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const userLanguage = useCookie("i18n_redirected").value || "ar";
  const { token } = useAuth();

  config.headers.lang = userLanguage;
  config.headers.Authorization = `Bearer ${token.value}`;
  return config;
});
