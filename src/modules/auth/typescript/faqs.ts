import icon1 from "~/assets/images/dashboard/amount.svg";
import icon2 from "~/assets/images/dashboard/campaigns.svg";
import icon3 from "~/assets/images/dashboard/donation.svg";
import icon4 from "~/assets/images/dashboard/campaigns.svg";

export const useFaqs = () => {
  const { t } = useI18n();
  const faqs = computed(() => [
    {
      question: t("auth.q1"),
      answer: t("auth.answer3"),
      icon: icon1,
    },
    {
      question: t("auth.q2"),
      answer: t("auth.answer1"),
      icon: icon2,
    },
    {
      question: t("auth.q3"),
      answer: t("auth.answer2"),
      icon: icon3,
    },
    {
      question: t("auth.q4"),
      answer: t("auth.answer3"),
      icon: icon4,
    },
  ]);

  return {
    faqs,
  };
};
