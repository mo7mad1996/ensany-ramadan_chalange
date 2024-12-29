import { ref } from "vue";
import image1 from "../../../assets/images/statistics1.svg";
import image2 from "../../../assets/images/doners.svg";
import image3 from "../../../assets/images/funded.svg";
import image4 from "../../../assets/images/campaigns.svg";

export const useBanner = () => {
  const { t } = useI18n();
  const stats = ref([
    {
      amount: 3085,
      imgSrc: image1,
      alt: "statistics1",
      label: t("home.raised"),
    },
    {
      amount: 60,
      imgSrc: image2,
      alt: "doners",
      label: t("home.doners"),
    },
    {
      amount: 3085,
      imgSrc: image3,
      alt: "funded",
      label: t("home.funded"),
    },
    {
      amount: 3085,
      imgSrc: image4,
      alt: "campaigns",
      label: t("home.campaign"),
    },
  ]);

  const animatedValues = ref(Array(stats.value.length).fill(0));

  const onEnterViewport = (isVisible: boolean) => {
    if (isVisible) {
      stats.value.forEach((stat, index) => animateNumber(index, stat.amount));
    }
  };

  const animateNumber = (index: number, target: number) => {
    const duration = 6000; // Animation duration in ms
    const start = 0;
    const increment = target / (duration / 16); // Assuming ~60fps

    let current = start;
    const updateNumber = () => {
      current += increment;
      if (current < target) {
        animatedValues.value[index] = Math.round(current);
        requestAnimationFrame(updateNumber);
      } else {
        animatedValues.value[index] = target;
      }
    };
    requestAnimationFrame(updateNumber);
  };

  return {
    onEnterViewport,
    stats,
    animatedValues,
  };
};
