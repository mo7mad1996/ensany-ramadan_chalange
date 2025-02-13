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
          {{ $t("auth.verrify_email") }}
        </h2>

        <p class="font-bold text-center text-primary mb-2">
          {{ useCookie("verrification_code") }}
        </p>

        <p class="text-sm text-[#12121299] text-center">
          {{ $t("auth.six_digits") }}
        </p>

        <Form @submit="onSubmit">
          <Field name="otp-input" rules="required|min:6" v-slot="{ field }">
            <v-otp-input
              v-bind="field"
              length="6"
              v-model="verification_code"
            ></v-otp-input>
          </Field>
          <ErrorMessage
            name="otp-input"
            class="text-sm w-full text-red-500 text-center"
          />

          <!-- timer for resend code  -->
          <div class="text-center">
            <span>{{ formattedTime }}</span>
          </div>

          <v-btn
            :disabled="isLoading"
            :loading="isLoading"
            type="submit"
            class="text-capitalize rounded-lg w-100 mt-5"
            :ripple="false"
            variant="flat"
            size="large"
            color="primary"
            >{{ $t("auth.verrify_email") }}</v-btn
          >
        </Form>

        <!-- Recend code -->
        <div
          class="flex gap-x-1 items-center justify-center mt-sm cursor-pointer"
        >
          <img loading="lazy" 
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
import { ErrorMessage, Field, Form } from "vee-validate";
import Container from "~/global/Container.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useAuth } from "../services/auth";
import { useResetPassword } from "../typescript/reset";
const { locale } = useI18n();
const verification_code = ref<number | string>("");
const { resendCode, formattedTime, timeLeft } = useResetPassword();

const { verifyEmail, isLoading } = useAuth();

const onSubmit = () => {
  verifyEmail(verification_code.value);
};

const { siteName } = useGlobalVar();
siteName("auth.page_title_verify_email");
</script>
