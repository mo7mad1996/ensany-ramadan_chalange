<template>
  <section
    aria-lable="checking email  page"
    class="checking_email bg-[#F7F7F7] pt-lg pb-lg"
  >
    <Container class="flex justify-center items-center">
      <div class="card bg-white rounded-xl w-[494px] p-sm">
        <h2
          class="text-black mb-5 text-center font-bold lg:text-4xl md:text-4xl text-3xl"
        >
          Checking Email
        </h2>

        <div class="image flex justify-center">
          <img src="../../../assets/images/auth/email.svg" alt="" />
        </div>

        <!-- <div class="otp-input">
          <v-otp-input length="7" model-value="3214214"></v-otp-input>
        </div> -->

        <div class="text-center">
          <h6 class="font-bold text-lg">
            Waiting for you to verify your email...
          </h6>
          <p class="text-sm text-[#12121299]">
            We've sent a reset link to your email address. Click the link in the
            email to reset your password.
          </p>
        </div>

        <!-- Recend code -->
        <div
          class="flex gap-x-1 items-center justify-center mt-sm cursor-pointer"
        >
          <img
            src="../../../assets/images/auth/resent.svg"
            width="22px"
            alt="..."
          />
          <span class="text-primary text-sm">Resend</span>
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
