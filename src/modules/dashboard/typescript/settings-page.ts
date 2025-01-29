export const useSettingsPage = () => {
  const tab = ref<null | string>(null);
  const { t } = useI18n();

  const text = ref<string[]>([
    t("campaigns.p3"),
    t("campaigns.p2"),
    t("campaigns.p4"),
    t("campaigns.p1"),
  ]);

  const computedText = computed(() => text.value);

  const tabs = ref<any>([
    {
      value: "one",
      item: computedText.value,
    },

    {
      value: "two",
      item: computedText.value,
    },

    {
      value: "three",
      item: computedText.value,
    },

    {
      value: "four",
      item: computedText.value,
    },
  ]);

  return {
    tab,
    tabs,
  };
};
