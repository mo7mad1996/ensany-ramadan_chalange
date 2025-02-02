export const useCampaignsHistoryPage = () => {
    const { t } = useI18n();
    const headers = computed(() => [
      { key: "id", title: t("donor.id"), align: "start" as const },
      { key: "name", title: t("donor.name") },
      { key: "total_amount", title: t("donor.amount") },
      { key: "donations", title: t("donor.donations") },
      { key: "created_at", title: t("donor.date_time") },
      { key: "status", title: t("donor.status") },
    ]);
  
    const donors = computed(() => [
        {
          id: "#D001",
          name: t("donor.name"),
          total_amount: "$5,000",
          donations: 10,
          created_at: "2024-02-01 10:30 AM",
          status: t("donor.status"),
        },
        {
          id: "#D002",
          name: t("donor.name"),
          total_amount: "$12,000",
          donations: 25,
          created_at: "2023-12-15 03:45 PM",
          status: t("donor.status"),
        },
        {
          id: "#D003",
          name: t("donor.name"),
          total_amount: "$3,500",
          donations: 7,
          created_at: "2024-01-20 08:15 AM",
          status: t("donor.status"),
        },
        {
          id: "#D004",
          name: t("donor.name"),
          total_amount: "$8,200",
          donations: 15,
          created_at: "2023-11-30 05:50 PM",
          status: t("donor.status"),
        },
        {
          id: "#D005",
          name: t("donor.name"),
          total_amount: "$15,000",
          donations: 40,
          created_at: "2023-10-10 07:20 AM",
          status: t("donor.status"),
        },
      ]);
      
  
    return {
     
      headers,
      donors,
    };
  };
  