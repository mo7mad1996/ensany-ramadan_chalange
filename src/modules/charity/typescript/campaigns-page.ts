export const useCampaignsPage = () => {
  const { t } = useI18n();
  const search = ref("");

  const headers = computed(() => [
    // { key: "campaign_id", title: t("dashboard.campaign_id"), align: "start" },
    { key: "name", title: t("dashboard.name") },
    { key: "campaign_goal", title: t("dashboard.campaign_goal") },
    { key: "donation_amount", title: t("dashboard.donation_amount") },
    { key: "no_donors", title: t("dashboard.no_doners") },
    { key: "campaign_status", title: t("dashboard.campaign_status") },
    { key: "starting_date", title: t("dashboard.starting_date") },
    { key: "ending_date", title: t("dashboard.ending_date") },
    // { key: "campaign_image", title: t("dashboard.campaign_image") },
    { key: "actions", title: t("dashboard.actions"), sortable: false },
  ]);

  const campaigns = computed(() => [
    {
      // campaign_id: "#0120000",
      name: t("dashboard.feed_family"),
      campaign_goal: "$1,000,000",
      donation_amount: "$125k",
      no_donors: 6000,
      campaign_status: t("dashboard.active"),
      starting_date: "2024-01-01",
      ending_date: "2024-12-31",
      // campaign_image: "https://example.com/feed_family.jpg",
      actions: "edit/delete",
    },
    {
      // campaign_id: "#0120001",
      name: t("dashboard.water_well"),
      campaign_goal: "$500,000",
      donation_amount: "$200k",
      no_donors: 3200,
      campaign_status: t("dashboard.completed"),
      starting_date: "2023-06-01",
      ending_date: "2023-12-31",
      // campaign_image: "https://example.com/water_well.jpg",
      actions: "edit/delete",
    },
    {
      // campaign_id: "#0120002",
      name: t("dashboard.medical_aid"),
      campaign_goal: "$800,000",
      donation_amount: "$400k",
      no_donors: 4500,
      campaign_status: t("dashboard.active"),
      starting_date: "2024-03-01",
      ending_date: "2024-09-30",
      // campaign_image: "https://example.com/medical_aid.jpg",
      actions: "edit/delete",
    },
    {
      // campaign_id: "#0120003",
      name: t("dashboard.education_orphans"),
      campaign_goal: "$300,000",
      donation_amount: "$150k",
      no_donors: 2500,
      campaign_status: t("dashboard.completed"),
      starting_date: "2023-05-01",
      ending_date: "2023-11-30",
      // campaign_image: "https://example.com/education_orphans.jpg",
      actions: "edit/delete",
    },
    {
      // campaign_id: "#0120004",
      name: t("dashboard.disaster_relief"),
      campaign_goal: "$2,000,000",
      donation_amount: "$750k",
      no_donors: 10000,
      campaign_status: t("dashboard.active"),
      starting_date: "2024-02-01",
      ending_date: "2024-08-31",
      // campaign_image: "https://example.com/disaster_relief.jpg",s
      actions: "edit/delete",
    },
  ]);

  return {
    search,
    headers,
    campaigns,
  };
};
