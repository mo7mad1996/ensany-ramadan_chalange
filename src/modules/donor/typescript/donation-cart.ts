export const useDonationCartPage = () => {
  const { t } = useI18n();
  const headers = computed(() => [
    { key: "name", title: t("donor.name") },
    { key: "Description", title: t("donor.description") },
    { key: "charity.name", title: t("donor.charity_name") },
    { key: "amount", title: t("donor.amount") },
    { key: "action", title: t("donor.action") },
  ]);

  return {
    headers,
  };
};
