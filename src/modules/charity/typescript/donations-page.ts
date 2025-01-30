export const useDonationsPage = () => {
  const { t } = useI18n();
  const search = ref("");

  const headers = computed(() => [
    { key: "campaign_id", title: t("dashboard.campaign_id"), align: "start" },
    { key: "name", title: t("dashboard.name") },
    { key: "date", title: t("dashboard.date") },
    { key: "donation_amount", title: t("dashboard.donation_amount") },
    { key: "time", title: t("dashboard.time") },
    { key: "campaign_status", title: t("dashboard.campaign_status") },
  ]);

  const donations = computed(() => [
    {
      campaign_id: "#0120000",
      name: t("dashboard.feed_family"),
      date: "2024-01-15",
      donation_amount: "$125k",
      time: `3:30 ${t("dashboard.pm")}`,
      campaign_status: t("dashboard.active"),
    },
    {
      campaign_id: "#0120001",
      name: t("dashboard.water_well"),
      date: "2023-11-10",
      donation_amount: "$200k",
      time: `3:30 ${t("dashboard.pm")}`,
      campaign_status: t("dashboard.completed"),
    },
    {
      campaign_id: "#0120002",
      name: t("dashboard.medical_aid"),
      date: "2024-02-01",
      donation_amount: "$400k",
      time: `3:30 ${t("dashboard.pm")}`,
      campaign_status: t("dashboard.active"),
    },
    {
      campaign_id: "#0120003",
      name: t("dashboard.education_orphans"),
      date: "2023-09-20",
      donation_amount: "$150k",
      time: `3:30 ${t("dashboard.am")}`,
      campaign_status: t("dashboard.completed"),
    },
    {
      campaign_id: "#0120004",
      name: t("dashboard.disaster_relief"),
      date: "2024-05-05",
      donation_amount: "$750k",
      time: `3:30 ${t("dashboard.pm")}`,
      campaign_status: t("dashboard.active"),
    },
  ]);

  return {
    search,
    headers,
    donations,
  };
};
