export const useCampaignsHistoryPage = () => {
  const { t } = useI18n();
  const headers = computed(() => [
    { key: "id", title: t("donor.id"), align: "start" },
    { key: "name", title: t("donor.name") },
    { key: "total_amount", title: t("donor.amount") },
    { key: "donations", title: t("donor.donations") },
    { key: "created_at", title: t("donor.date_time") },
    { key: "status", title: t("donor.status") },
  ]);

  return {
    headers,
  };
};
