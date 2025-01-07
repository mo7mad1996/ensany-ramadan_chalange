<template>
  <section
    aria-lable="checking email  page"
    class="checking_email bg-[#F7F7F7] pt-lg pb-lg"
  >
    <Container class="flex justify-center items-center">
      <div class="card bg-white rounded-xl w-[494px] p-sm">
        <h2
          class="text-black mb-2 text-center font-bold lg:text-4xl md:text-4xl text-3xl rtl:text-2xl"
        >
          {{ $t("auth.check_email") }}
        </h2>

        <p class="text-sm text-[#12121299]">
          We've sent a 4-digit code to your Email. Enter it below to Reset your
          password and continue.
        </p>

        <div class="otp-input">
          <v-otp-input length="6" model-value=""></v-otp-input>
        </div>

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-2"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >Reset Password</v-btn
        >

        <!-- Recend code -->
        <div
          class="flex gap-x-1 items-center justify-center mt-sm cursor-pointer"
        >
          <img
            src="../../../assets/images/auth/resent.svg"
            width="22px"
            alt="..."
          />
          <span class="text-primary text-sm">{{ $t("auth.resend") }}</span>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";

const { locale } = useI18n();

useSeoMeta({
  title: "رمضان |  كود التأكيد",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? "رمضان |  كود التأكيد" : "Ramadan | verrification",
  });
});
</script>
