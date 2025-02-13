<template>
  <section
    aria-lable="forget password page"
    class="forget_password bg-[#F7F7F7] pt-lg pb-lg"
  >
    <Container class="flex justify-center items-center">
      <div class="card bg-white rounded-xl w-[494px] p-sm">
        <h2
          class="text-black mb-5 text-center font-bold lg:text-4xl md:text-4xl text-3xl"
        >
          {{ $t("auth.reset_password") }}
        </h2>

        <form action="">
          <!-- email input -->
          <div class="relative mt-4">
            <div
              class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
            >
              <img
                loading="lazy"
                src="../../../assets/images/contact/email.svg"
                alt=""
              />
            </div>

            <input
              type="email"
              id="custom-input"
              :placeholder="$t('auth.email')"
              class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
            />
          </div>

          <!-- confirm email -->
          <v-btn
            class="text-capitalize rounded-lg w-100 mt-4"
            :ripple="false"
            variant="flat"
            size="large"
            color="primary"
            @click="$router.push('/checkemail')"
            >{{ $t("auth.reset_password") }}</v-btn
          >
        </form>

        <!-- back to login -->
        <nuxt-link to="/login">
          <p class="text-sm underline text-center mt-sm cursor-pointer">
            {{ $t("auth.back_login") }}
          </p>
        </nuxt-link>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("auth.page_title_reset_password");
</script>
