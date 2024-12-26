import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";

export const useCarousel = () => {
  const settings = ref({
    itemsToShow: 1,
    snapAlign: "",
  });

  //   this for Ramadan chalenge component
  const breakpoints1 = ref({
    700: {
      itemsToShow: 1,
      snapAlign: "",
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: "",
    },
  });

  //   this for Parteners component
  const breakpoints2 = ref({
    700: {
      itemsToShow: 1,
      snapAlign: "",
    },
    // 1024 and up
    1024: {
      itemsToShow: 4,
      snapAlign: "",
    },
  });

  //   this for Famouses component
  const breakpoints3 = ref({
    700: {
      itemsToShow: 1,
      snapAlign: "",
    },
    // 1024 and up
    1024: {
      itemsToShow: 6,
      snapAlign: "",
    },
  });

  //   this for SuccessStories component
  const breakpoints4 = ref({
    700: {
      itemsToShow: 1,
      snapAlign: "",
    },
    // 1024 and up
    1024: {
      itemsToShow: 1,
      snapAlign: "",
    },
  });

  return {
    settings,
    breakpoints1,
    breakpoints2,
    breakpoints3,
    breakpoints4,
    Carousel,
    Pagination,
    Slide,
    Navigation,
  };
};
