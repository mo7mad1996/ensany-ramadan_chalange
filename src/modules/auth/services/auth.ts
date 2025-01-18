import { api } from "../../../helpers/axios";
import { AxiosError } from "axios";
import { encryptData } from "~/helpers/data-encryption";
import { decryptData } from "~/helpers/data-encryption";
import { type User } from "~/helpers/interfaces";

export function useAuth() {
  const token = ref<string>(
    localStorage.getItem("token")
      ? decryptData(localStorage.getItem("token") as string)
      : ""
  );

  const user = ref<any>(
    localStorage.getItem("user")
      ? decryptData(localStorage.getItem("user") as string)
      : null
  );
  const error = ref<AxiosError | null>(null);
  const isLoading = ref<boolean>(false);

  // Save encrypted user data to localStorage
  const saveUser = (userData: any) => {
    const encryptedData = encryptData(userData);
    localStorage.setItem("user", encryptedData);
    user.value = userData;
  };

  const saveToken = (userToken: any) => {
    const encryptedData = encryptData(userToken);
    localStorage.setItem("token", encryptedData);
    token.value = userToken;
  };

  // Load user data from localStorage
  const loadUser = () => {
    const encryptedData = localStorage.getItem("user");
    if (encryptedData) {
      const decryptedData = decryptData(encryptedData);
      user.value = decryptedData;
    }
  };

  const loadToken = () => {
    const encryptedData = localStorage.getItem("token");
    if (encryptedData) {
      const decryptedData = decryptData(encryptedData);
      token.value = decryptedData;
    }
  };

  // Login function
  const login = async (credentials: User) => {
    try {
      isLoading.value = true;
      const response = await api.post("/login", credentials);
      user.value = response.data.result;
      token.value = response.data.result.token;
      saveUser(user.value); // Save the encrypted user data
      saveToken(token.value);
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
    console.log("token", token.value);

    const response = await api.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  // Load user on initialization if there is
  // onBeforeMount(() => {
  //   loadUser();
  //   loadToken();
  // });

  return {
    login,
    user,
    token,
    error,
    isLoading,
    saveUser,
    loadUser,
    loadToken,
    logout,
  };
}
