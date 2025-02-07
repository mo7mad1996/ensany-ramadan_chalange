import dayjs from "dayjs";

export const useStartCampaign = () => {
  const today = ref<string>(
    new Date().toISOString().replace("T", " ").split(".")[0]
  ); //24 houer system
  const endDate = ref<string>("");
  const availableDays = ref<string | number>("");
  const nameSwitch = ref<string>("ar");
  const goalSwitch = ref<string>("ar");
  const contentSwitch = ref<string>("ar");
  const selectedFileName = ref<string>("");
  const selected = ref<string>("");

  // to adjust the date formate to send to backend
  const formattedDate = computed(() => {
    return today.value
      ? dayjs(today.value).format("YYYY-MM-DD HH:mm:ss")
      : null;
  });

  const switchName = (): void => {
    nameSwitch.value = nameSwitch.value === "ar" ? "en" : "ar";
  };

  const switchGoal = (): void => {
    goalSwitch.value = goalSwitch.value === "ar" ? "en" : "ar";
  };

  const switchContent = (): void => {
    contentSwitch.value = contentSwitch.value === "ar" ? "en" : "ar";
  };

  const handleFileChange = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    selectedFileName.value = file ? file.name : "";
  };

  // Start campaign function (values is expected to be of a specific type, can be adjusted later)
  const startCmpaign = (payload: Record<string, any>): void => {
    console.log("form submitted", payload);
  };

  // Watcher to calculate end_date automatically when availableDays is selected
  watch(availableDays, (newDays) => {
    if (newDays && !isNaN(Number(newDays))) {
      const start = new Date(today.value);
      const calculatedEndDate = new Date(
        start.setDate(
          start.getDate() +
            (typeof newDays === "string"
              ? parseInt(newDays.toString(), 10)
              : newDays)
        )
      );
      endDate.value = calculatedEndDate.toISOString().split("T")[0];
    } else {
      endDate.value = "";
    }
  });

  // Watcher to calculate availableDays automatically when end_date is selected
  watch(endDate, (newEndDate) => {
    if (newEndDate) {
      const start = new Date(today.value);
      const end = new Date(newEndDate);
      const diffTime = end.getTime() - start.getTime();
      availableDays.value =
        diffTime >= 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : ""; // Calculate days
    } else {
      availableDays.value = ""; // Clear available days if end date is invalid
    }
  });

  return {
    today,
    endDate,
    availableDays,
    nameSwitch,
    goalSwitch,
    contentSwitch,
    selectedFileName,
    selected,
    switchName,
    switchGoal,
    switchContent,
    handleFileChange,
    startCmpaign,
    formattedDate,
  };
};
