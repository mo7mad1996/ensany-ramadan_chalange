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
          {{ $t("auth.reset_password") }}
        </h2>

        <p class="text-sm text-[#12121299] text-center">
          {{ $t("auth.six_digits") }}
        </p>

        <div class="otp-input">
          <v-otp-input length="6" model-value=""></v-otp-input>
        </div>

        <!-- timer for resend code  -->
        <div class="text-center">
          <span>{{ formattedTime }}</span>
        </div>

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-5"
          :ripple="false"
          variant="flat"
          size="large"
          color="primary"
          >{{ $t("auth.reset_password") }}</v-btn
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
          <button :disabled="timeLeft !== 0" @click="resendCode">
            <span
              :class="{
                'text-[#ddd]': timeLeft !== 0,
                'text-primary': timeLeft === 0,
              }"
              class="text-sm"
              >{{ $t("auth.resend") }}</span
            >
          </button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
import { useResetPassword } from "../typescript/reset";
import { useGlobalVar } from "~/helpers/global-var";
const { locale } = useI18n();

const {
  show1,
  show2,
  showPassword,
  showConfPassword,
  resendCode,
  formattedTime,
  timeLeft,
} = useResetPassword();

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
