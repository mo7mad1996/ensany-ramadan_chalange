export const useDonationHistoryPage = () => {
  const { t } = useI18n();
  const headers = computed(() => [
    { key: "total_amount", title: t("donor.amount") },
    { key: "campaign_name", title: t("donor.name") },
    { key: "chairty_name", title: t("donor.charity_name") },
    { key: "status", title: t("donor.status") },
    { key: "created_at", title: t("donor.date_time") },
  ]);

  return {
    headers,
  };
};
