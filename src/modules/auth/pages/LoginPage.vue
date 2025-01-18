<template>
  <section aria-label="login page" class="pt-sm pb-sm">
    <Container>
      <div
        class="flex lg:flex-row xl:flex-row md:flex-col-reverse flex-col-reverse justify-between items-center lg:gap-xl xl:gap-xl md:gap-md gap-sm"
      >
        <AuthLoginForm />

        <div class="image">
          <img
            src="../../../assets/images/auth/login-img.svg"
            class="lg:h-[518px] xl:h-[518px] md:h-full h-full"
            alt=""
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
import { useGlobalVar } from "~/helpers/global-var";

definePageMeta({
  middleware: "non-require",
});

const { locale } = useI18n();

const { ramadan_ar, ramadan_en } = useGlobalVar();

useSeoMeta({
  title: locale.value == "ar" ? ramadan_ar : ramadan_en,
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? ramadan_ar : ramadan_en,
  });
});
</script>
