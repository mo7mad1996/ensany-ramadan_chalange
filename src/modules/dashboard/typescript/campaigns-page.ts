export const useCampaignsPage = () => {
  const { t } = useI18n();
  const search = ref("");

  const headers = computed(() => [
    { key: "campaign_id", title: t("dashboard.campaign_id"), align: "start" },
    { key: "name", title: t("dashboard.name") },
    { key: "campaign_goal", title: t("dashboard.campaign_goal") },
    { key: "donation_amount", title: t("dashboard.donation_amount") },
    { key: "no_donors", title: t("dashboard.no_doners") },
    { key: "campaign_status", title: t("dashboard.campaign_status") },
  ]);

  const campaigns = computed(() => [
    {
      campaign_id: "#0120000",
      name: t("dashboard.feed_family"),
      campaign_goal: "$1,000,000",
      donation_amount: "$125k",
      no_donors: 6000,
      campaign_status: t("dashboard.active"),
    },
    {
      campaign_id: "#0120001",
      name: t("dashboard.water_well"),
      campaign_goal: "$500,000",
      donation_amount: "$200k",
      no_donors: 3200,
      campaign_status: t("dashboard.completed"),
    },
    {
      campaign_id: "#0120002",
      name: t("dashboard.medical_aid"),
      campaign_goal: "$800,000",
      donation_amount: "$400k",
      no_donors: 4500,
      campaign_status: t("dashboard.active"),
    },
    {
      campaign_id: "#0120003",
      name: t("dashboard.education_orphans"),
      campaign_goal: "$300,000",
      donation_amount: "$150k",
      no_donors: 2500,
      campaign_status: t("dashboard.completed"),
    },
    {
      campaign_id: "#0120004",
      name: t("dashboard.disaster_relief"),
      campaign_goal: "$2,000,000",
      donation_amount: "$750k",
      no_donors: 10000,
      campaign_status: t("dashboard.active"),
    },
  ]);

  return {
    search,
    headers,
    campaigns,
  };
};
