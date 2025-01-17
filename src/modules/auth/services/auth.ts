import { api } from "../../../helpers/axios";
import { AxiosError } from "axios";
import { encryptData } from "~/helpers/data-encryption";
import { decryptData } from "~/helpers/data-encryption";
import { type User } from "~/helpers/interfaces";

export function useAuth() {
  const user = ref<any>(null);
  const error = ref<AxiosError | null>(null);
  const isLoading = ref<boolean>(false);

  // Save encrypted user data to localStorage
  const saveUser = (userData: any) => {
    const encryptedData = encryptData(userData);
    localStorage.setItem("user", encryptedData);
    user.value = userData;
  };

  // Load user data from localStorage
  const loadUser = () => {
    const encryptedData = localStorage.getItem("user");
    if (encryptedData) {
      const decryptedData = decryptData(encryptedData);
      user.value = decryptedData;
    }
  };

  // Login function
  const login = async (credentials: User) => {
    try {
      isLoading.value = true;
      const response = await api.post("/login", credentials);
      user.value = response.data.result;
      saveUser(user.value); // Save the encrypted user data
      isLoading.value = false;
      navigateTo("/dashboard");
    } catch (err) {
      error.value = err as AxiosError;
      isLoading.value = false;
      console.error(err);
    }
  };

  // Load user on initialization if there is
  onMounted(() => {
    loadUser();
  });

  return {
    login,
    user,
    error,
    isLoading,
    saveUser,
  };
}
