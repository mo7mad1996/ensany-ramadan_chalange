import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = useCookie("token");
  const userLanguage = useCookie("i18n_redirected").value;

  config.headers.lang = userLanguage;
  config.headers.Authorization = `Bearer ${token.value}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      navigateTo("/login");
    }
    return Promise.reject(error);
  }
);
