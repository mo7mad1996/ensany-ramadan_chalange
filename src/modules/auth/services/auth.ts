import { api } from "../../../helpers/axios";
import { AxiosError } from "axios";
import { encryptData } from "~/helpers/data-encryption";
import { decryptData } from "~/helpers/data-encryption";
import { type User } from "~/helpers/interfaces";

export function useAuth() {
  const token = ref<string>(
    useCookie("token").value
      ? decryptData(useCookie("token").value as string)
      : null
  );

  const error = ref<AxiosError | null>(null);
  const isLoading = ref<boolean>(false);

  const setToken = (userToken: any) => {
    const tokenCookie: any = useCookie("token");
    tokenCookie.value = userToken;
  };

  // Login function
  const login = async (credentials: User) => {
    try {
      isLoading.value = true;
      const response = await api.post("/login", credentials);
      token.value = response.data.result.token;
      setToken(encryptData(token.value));
      console.log("user", response.data.result.user);

      isLoading.value = false;
      // window.location.reload();
      navigateTo("/dashboard");
    } catch (err) {
      error.value = err as AxiosError;
      isLoading.value = false;
      console.error(err);
    }
  };

  // logout
  const logout = async () => {
    try {
      isLoading.value = true;
      const response = await api.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      token.value = "";
      useCookie("token").value = "";
      isLoading.value = false;
      navigateTo("/");
    } catch (error) {
      isLoading.value = false;
      console.log(error);
    }
  };

  return {
    login,
    token,
    error,
    isLoading,
    logout,
  };
}
