export const useCampaignsPage = () => {
  const { t } = useI18n();
  const search = ref("");

  const headers = computed(() => [
    // { key: "campaign_id", title: t("dashboard.campaign_id"), align: "start" },
    { key: "name", title: t("dashboard.name") },
    { key: "price_target", title: t("dashboard.campaign_goal") },
    { key: "total_amount", title: t("dashboard.donation_amount") },
    { key: "total_donors", title: t("dashboard.no_doners") },
    { key: "status", title: t("dashboard.campaign_status") },
    { key: "start_at", title: t("dashboard.starting_date") },
    { key: "end_at", title: t("dashboard.ending_date") },
    { key: "image", title: t("dashboard.campaign_image") },
    { key: "actions", title: t("dashboard.actions"), sortable: false },
  ]);

  return {
    search,
    headers,
  };
};
