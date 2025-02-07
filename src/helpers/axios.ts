import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "~/modules/auth/services/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const userLanguage = useCookie("i18n_redirected").value;
  const { token } = useAuth();

  config.headers.lang = userLanguage;
  config.headers.Authorization = `Bearer ${token.value}`;
  return config;
});
