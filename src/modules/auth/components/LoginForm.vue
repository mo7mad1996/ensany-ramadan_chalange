<template>
  <div class="login_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("auth.login") }}
    </h2>

    <form action="">
      <!-- name input -->
      <div class="relative">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img src="../../../assets/images/contact/name.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input"
          :placeholder="$t('auth.name')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- password input -->
      <div class="relative mt-4">
        <div
          class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
          @click="showPassword"
        >
          <v-icon v-if="show" size="small">mdi-eye-outline</v-icon>
          <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
        </div>

        <input
          :type="show ? 'text' : 'password'"
          id="custom-input"
          :placeholder="$t('auth.password')"
          class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- forget password link -->
      <nuxt-link to="/forgetpassword">
        <p class="underline text-primary cursor-pointer text-sm pt-2 text-end">
          {{ $t("auth.forget_password") }}
        </p>
      </nuxt-link>

      <!-- remember me checkbox -->
      <v-checkbox
        v-model="isRemember"
        class="checkbox"
        color="primary"
        :ripple="false"
      >
        <template v-slot:label>
          <p class="text-sm">{{ $t("auth.remember_me") }}</p>
        </template>
      </v-checkbox>

      <!-- confirm login -->
      <v-btn
        class="text-capitalize rounded-lg w-100 mt-2"
        :ripple="false"
        variant="flat"
        size="large"
        color="primary"
        >{{ $t("auth.login") }}</v-btn
      >

      <!-- do not have account option -->
      <p class="text-sm pt-sm text-center">
        {{ $t("auth.do_not_have_account") }}
        <nuxt-link to="/signup" class="text-primary underline cursor-pointer">{{
          $t("auth.signup")
        }}</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const show = ref<boolean>(false);
const isRemember = ref<boolean>(true);

const showPassword = (): void => {
  show.value = !show.value;
};
</script>
