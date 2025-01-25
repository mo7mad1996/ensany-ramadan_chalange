import { api } from "../../../helpers/axios";
import { AxiosError } from "axios";
import { encryptData } from "~/helpers/data-encryption";
import { decryptData } from "~/helpers/data-encryption";
import { setToken } from "~/helpers/set-cookies";
import { setUser } from "~/helpers/set-cookies";
import { setCode } from "~/helpers/set-cookies";
import { type User } from "~/helpers/interfaces";
import { type NewUser } from "~/helpers/interfaces";

export function useAuth() {
  const token = ref<string>(
    useCookie("token").value
      ? decryptData(useCookie("token").value as string)
      : null
  );

  const user = ref<any>(
    useCookie("user").value
      ? decryptData(useCookie("user").value as string)
      : null
  );

  const verification_code = ref("");

  const error = ref<AxiosError | null>(null);
  const isLoading = ref<boolean>(false);

  // Login function
  const login = async (credentials: User) => {
    try {
      isLoading.value = true;
      error.value = null;
      const response = await api.post("/login", credentials);
      token.value = response.data.result.token;
      user.value = response.data.result.user;
      setToken(encryptData(token.value));
      setUser(encryptData(user.value));
      isLoading.value = false;
      navigateTo("/dashboard");
    } catch (err: any) {
      error.value = err.response.data.message;
      isLoading.value = false;
      console.log(err as AxiosError);
    }
  };

  // register function
  const register = async (userData: NewUser) => {
    try {
      isLoading.value = true;
      error.value = null;

      const response = await api.post("/register", userData);

      token.value = response.data.result.token;
      user.value = response.data.result.user;
      verification_code.value = response.data.result.user.verification_code;

      setToken(encryptData(token.value));
      setUser(encryptData(user.value));
      setCode(verification_code.value);
      isLoading.value = false;

      navigateTo("/verrify-email");
    } catch (err: any) {
      error.value = err.response.data.message;
      isLoading.value = false;
      console.log(err as AxiosError);
    }
  };

  // verrify email function
  const verrifyEmail = async (verification_code: number | string) => {
    try {
      isLoading.value = true;
      const response = await api.post(
        "/verify-email",
        { verification_code },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );

      isLoading.value = false;
      if (response.data.status) {
        navigateTo("/dashboard");
      }
    } catch (error) {
      isLoading.value = false;
    }
  };

  // logout
  const logout = async () => {
    try {
      token.value = "";
      user.value = "";
      useCookie("token").value = "";
      useCookie("user").value = "";

      navigateTo("/");

      const response = await api.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    token,
    error,
    isLoading,
    logout,
    user,
    register,
    verrifyEmail,
  };
}
