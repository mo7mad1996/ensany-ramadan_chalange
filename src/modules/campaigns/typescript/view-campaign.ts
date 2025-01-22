export const useViewCampaign = () => {
  const progress = ref<number>(30);
  const tab = ref<null | string>(null);
  const loading = ref<boolean>(true);
  const isImageLoaded = ref<boolean>(true);
  const { t } = useI18n();

  const text = ref<string[]>([
    t("campaigns.p3"),
    t("campaigns.p2"),
    t("campaigns.p4"),
    t("campaigns.p1"),
  ]);

  const computedText = computed(() => text.value);

  setTimeout(() => {
    loading.value = false;
  }, 3000);

  const animatedRate = ref(0);
  const targetRate = progress.value;

  const onEnterViewport = (isVisible: boolean) => {
    if (isVisible) {
      animateProgressBar(targetRate);
    }
  };

  const animateProgressBar = (target: number) => {
    const duration = 1000;
    const increment = target / (duration / 16);

    let current = 0;
    const update = () => {
      current += increment;
      if (current < target) {
        animatedRate.value = Math.round(current);
        requestAnimationFrame(update);
      } else {
        animatedRate.value = target;
      }
    };
    requestAnimationFrame(update);
  };

  const tabs = ref<any>([
    {
      value: "one",
      item: computedText.value,
    },

    {
      value: "two",
      item: computedText.value,
    },

    {
      value: "three",
      item: computedText.value,
    },

    {
      value: "four",
      item: computedText.value,
    },
  ]);

  return {
    tab,
    tabs,
    onEnterViewport,
    animatedRate,
    computedText,
    loading,
    progress,
    isImageLoaded,
  };
};
