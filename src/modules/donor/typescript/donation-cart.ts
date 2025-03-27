export const useDonationCartPage = () => {
  const { t } = useI18n();
  const headers = computed(() => [
    // { key: "id", title: "ID" },
    { key: "campaign.name", title: t("donor.campaign_name") },
    // { key: "campaign.description", title: t("donor.description") },
    { key: "campaign.charity_name", title: t("donor.charity_name") },
    { key: "amount", title: t("donor.amount") },
    { key: "action", title: t("donor.action") },
  ]);

  return {
    headers,
  };
};
