export const useDonationHistoryPage = () => {
  const { t } = useI18n();
  const headers = computed(() => [
    { key: "amount", title: t("donor.amount") },
    { key: "campaign.name", title: t("donor.name") },
    { key: "charity.name", title: t("donor.charity_name") },
    { key: "status", title: t("donor.status") },
    { key: "donate_at", title: t("donor.date_time") },
  ]);

  return {
    headers,
  };
};
