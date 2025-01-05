<template>
  <section aria-label="login page" class="">
    <Container>
      <div
        class="flex lg:flex-row xl:flex-row md:flex-col-reverse flex-col-reverse justify-between items-center lg:gap-md xl:gap-md md:gap-md gap-sm"
      >
        <AuthRegisterForm />

        <div class="image">
          <img
            src="../../../assets/images/auth/login-img.svg"
            class="lg:h-[702px] xl:h-[702px] md:h-full h-full"
            alt=""
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";

const { locale } = useI18n();

useSeoMeta({
  title: "رمضان | انشاء حساب",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? "رمضان | انشاء حساب" : "Ramadan | Sign Up",
  });
});
</script>
