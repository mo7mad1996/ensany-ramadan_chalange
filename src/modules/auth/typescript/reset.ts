import { api } from "~/helpers/axios";

export const useResetPassword = () => {
  const show1 = ref<boolean>(false);
  const show2 = ref<boolean>(false);
  const timeLeft = ref<number>(60);
  const email = useCookie("email");

  const formattedTime = computed<string>(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  });

  let timerInterval: number | undefined;
  const startTimer = (): void => {
    timerInterval = window.setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
  };

  onMounted(startTimer);
  onUnmounted(() => {
    if (timerInterval !== undefined) {
      clearInterval(timerInterval);
    }
  });

  const sendCode = (payload: any) => {
    email.value = payload.email;
    return api.post("/forgot-password", payload);
  };
  const resetPassword = (payload: any) =>
    api.post("/reset-password", { email: email.value, ...payload });

  const resendCode = async () => {
    await sendCode({ email: email.value });
    timeLeft.value = 60;
    startTimer();
  };
  const showPassword = (): void => {
    show1.value = !show1.value;
  };

  const showConfPassword = (): void => {
    show2.value = !show2.value;
  };

  return {
    formattedTime,
    show1,
    show2,
    showPassword,
    showConfPassword,
    sendCode,
    resetPassword,
    resendCode,
    timeLeft,
  };
};
