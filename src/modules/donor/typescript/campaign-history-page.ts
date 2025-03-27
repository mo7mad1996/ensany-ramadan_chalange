export const useCampaignsHistoryPage = () => {
  const { t } = useI18n();
  const headers = computed(() => [
    { key: "name", title: t("donor.name") },
    { key: "amount", title: t("donor.amount") },
    { key: "donations", title: t("donor.donations") },
    { key: "created_at", title: t("donor.date_time") },
    { key: "status", title: t("donor.status") },
  ]);

  return {
    headers,
  };
};
