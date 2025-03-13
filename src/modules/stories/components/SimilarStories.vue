<template>
  <section aria-label="similar blogs" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("story.similar_blogs") }}
      </h1>

      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide v-for="(item, index) in props.similarStories" :key="index">
          <StoryCard :route="`/stories/${item.id}`" class="text-start m-1">
            <template #video>
              <NuxtLink :to="`/stories/${item.id}`">
                <nuxt-img
                  loading="lazy"
                  :src="item.image"
                  :alt="item?.title"
                  class="rounded-lg w-full object-cover mx-auto"
                  style="height: 250px"
                />
              </NuxtLink>
            </template>
            <template #title>{{ item.title }}</template>
            <template #desc>{{ item.content.slice(0, 110) }} </template>
          </StoryCard>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import Container from "../../../global/Container.vue";
import { useCarousel } from "../../../helpers/carousel";
const { breakpoints1, settings, Carousel, Slide, Pagination } = useCarousel();
const { locale } = useI18n();
const props = defineProps<{
  similarStories: Array<any>;
}>();

// إعداد متغير للتخزين المؤقت للصور بعد فترة معينة
const imageTimeout = ref(false);

onMounted(() => {});

watchEffect(() => {});
</script>
