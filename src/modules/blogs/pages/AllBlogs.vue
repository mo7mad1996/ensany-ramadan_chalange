<template>
  <BreadCrumb>
    <template #first_page> Home </template>
    <template #second_page> All Blogs </template>
  </BreadCrumb>

  <Container class="all-campaigns">
    <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
      All Blogs
    </h1>

    <div
      class="grid pt-sm pb-sm gap-sm lg:grid-cols-3 md:grid-cols-1 grid-cols-1"
      v-if="isLoading"
    >
      <v-card class="rounded-lg elevation-0">
        <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
      </v-card>

      <v-card class="rounded-lg elevation-0">
        <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
      </v-card>

      <v-card class="rounded-lg elevation-0">
        <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
      </v-card>

      <v-card class="rounded-lg elevation-0">
        <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
      </v-card>

      <v-card class="rounded-lg elevation-0">
        <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
      </v-card>

      <v-card class="rounded-lg elevation-0">
        <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
      </v-card>
    </div>

    <div
      v-if="!isLoading"
      class="campaigns grid gap-sm pt-sm pb-sm grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2"
    >
      <BlogCard
        v-for="(item, index) in 12"
        :key="index"
        :route="`/blogs/${index + 1}`"
      >
        <template #video>
          <video
            class="rounded-md object-cover cursor-pointer"
            src="../../../assets/videos/contribution-vid.mp4"
            poster="../../../assets/videos/contribution-poster.svg"
            controls
          ></video>
        </template>

        <template #title>The Power of Collective Giving</template>

        <template #desc
          >Discover how a community-driven approach turns individual donations
          into transformative outcomes for those in need Learn more about the
          ripple effects of giving and how your contribution plays a vital role
          See more .</template
        >
      </BlogCard>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="5"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
const { locale } = useI18n();

const page = ref(2);
const isLoading = ref(true);

useSeoMeta({
  title: "رمضان | حملات",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? "رمضان | حملات" : "Ramadan | Campaigns",
  });
});

// only simulation for test skeleton loader
setTimeout(() => {
  isLoading.value = false;
}, 3000);
</script>
