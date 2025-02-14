import { api } from "~/helpers/axios";
import { encryptData, decryptData } from "~/helpers/data-encryption";
import { useApi } from "./handle-apicals";
import { setToken, setUser, setCode } from "~/helpers/set-cookies";
import { startLoader, stopLoader } from "~/helpers/nprogress";
import { type User, type NewUser, type NewCharity } from "~/helpers/interfaces";

export function useAuth() {
  const token = computed(() => {
    const cookieValue = useCookie("token").value;
    return cookieValue ? decryptData(cookieValue as string) : null;
  });

  const user = computed(() => {
    const cookieValue = useCookie("user").value;
    return cookieValue ? decryptData(cookieValue as string) : null;
  });

  const { handleApiCall, isLoading, error } = useApi();

  // login
  const login = async (credentials: User, handelError: any = null) => {
    const response = await handleApiCall(() => api.post("/login", credentials));

    if (response) {
      const { token: tokenValue, user: userValue } = response.data.result;

      setToken(encryptData(tokenValue));

      try {
        if (process.client) {
          startLoader();
        }

        setUser(encryptData(userValue));

        if (userValue?.user_type === "charity") {
          return await navigateTo("/dashboard/charity");
        } else {
          return await navigateTo("/dashboard/donor");
        }

        stopLoader();
      } catch (err) {
        console.error("Token verification failed:", err);
        stopLoader();
        return navigateTo("/");
      }
    }

    if (handelError && error.value) handelError(error.value);
  };

  // register
  const register = async (
    userData: NewUser | NewCharity,
    handelError: any = null
  ) => {
    const response = await handleApiCall(() => api.post("/register", userData));

    if (response) {
      const { token: tokenValue, user: userValue } = response.data.result;
      setToken(encryptData(tokenValue));
      setUser(encryptData(userValue));
      setCode(userValue.verification_code);
      navigateTo("/verify-email");
    }
    if (handelError && error.value) handelError(error.value);
  };

  // Verify user email
  const verifyEmail = async (verificationCode: number | string) => {
    const response = await handleApiCall(() =>
      api.post("/verify-email", { verification_code: verificationCode })
    );

    if (response?.data.status) {
      if (user.value?.user_type === "charity") {
        navigateTo("/dashboard/charity");
      } else if (user.value?.user_type === "dooner") {
        navigateTo("/dashboard/donor");
      }
    }
  };

  //  Logout the user
  const logout = async () => {
    setUser(null);
    navigateTo("/");
    await handleApiCall(() => api.post("/logout", {}));

    setToken(null);
  };

  return {
    login,
    register,
    verifyEmail,
    logout,
    token,
    user,
    isLoading,
    error,
  };
}
