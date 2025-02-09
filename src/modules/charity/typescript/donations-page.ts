export const useDonationsPage = () => {
  const { t } = useI18n();
  const search = ref("");

  const headers = computed(() => [
    { key: "name", title: t("dashboard.name") },
    { key: "campaign", title: t("dashboard.campaign") },
    { key: "donated_at", title: t("dashboard.date") },
    { key: "total_amount", title: t("dashboard.donation_amount") },
    // { key: "time", title: t("dashboard.time") },
    // { key: "campaign_status", title: t("dashboard.campaign_status") },
  ]);

  return {
    search,
    headers,
  };
};
