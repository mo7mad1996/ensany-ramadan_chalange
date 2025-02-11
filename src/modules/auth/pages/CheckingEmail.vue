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

        <!-- password input -->
        <div class="relative mt-4">
          <div
            class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
            @click="showPassword"
          >
            <v-icon v-if="show1" size="small">mdi-eye-outline</v-icon>
            <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
          </div>

          <input
            :type="show1 ? 'text' : 'password'"
            id="custom-input"
            :placeholder="$t('auth.password')"
            class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            required
          />
        </div>

        <!-- confirm password  -->
        <div class="relative mt-4">
          <div
            class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
            @click="showConfPassword"
          >
            <v-icon v-if="show2" size="small">mdi-eye-outline</v-icon>
            <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
          </div>

          <input
            :type="show2 ? 'text' : 'password'"
            id="custom-input"
            :placeholder="$t('auth.confirm_password')"
            class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            required
          />
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

const {
  show1,
  show2,
  showPassword,
  showConfPassword,
  resendCode,
  formattedTime,
  timeLeft,
} = useResetPassword();

const { siteName } = useGlobalVar();
siteName("auth.page_title_faq");
</script>
