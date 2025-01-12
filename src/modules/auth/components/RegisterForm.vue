<template>
  <div class="login_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("auth.signup") }}
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
          id="custom-input1"
          :placeholder="$t('auth.name')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- email input -->
      <div class="relative mt-4">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img src="../../../assets/images/contact/email.svg" alt="" />
        </div>

        <input
          type="email"
          id="custom-input2"
          :placeholder="$t('auth.email')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
      </div>

      <!-- phone number  -->
      <div class="relative mt-4">
        <div
          class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
        >
          <img src="../../../assets/images/contact/phone.svg" alt="" />
        </div>

        <input
          type="text"
          id="custom-input3"
          :placeholder="$t('auth.phone')"
          class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        />
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
          id="custom-input4"
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
          id="custom-input5"
          :placeholder="$t('auth.confirm_password')"
          class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          required
        />
      </div>

      <!-- terms and conditions -->
      <v-checkbox
        v-model="isRemember"
        class="checkbox"
        color="primary"
        :ripple="false"
      >
        <template v-slot:label>
          <!-- <p class="text-sm">{{ $t("auth.terms") }}</p> -->
          <nuxt-link to="/terms-conditions" class="hover:underline">{{
            $t("auth.terms")
          }}</nuxt-link>
        </template>
      </v-checkbox>

      <!-- confirm login -->
      <v-btn
        class="text-capitalize rounded-lg w-100 mt-2"
        :ripple="false"
        variant="flat"
        size="large"
        color="primary"
        >{{ $t("auth.signup") }}</v-btn
      >

      <!-- do not have account option -->
      <p class="text-sm pt-sm text-center">
        {{ $t("auth.have_account") }}
        <nuxt-link to="/login" class="text-primary underline cursor-pointer">{{
          $t("auth.login")
        }}</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
const show1 = ref<boolean>(false);
const show2 = ref<boolean>(false);
const isRemember = ref<boolean>(true);

const showPassword = (): void => {
  show1.value = !show1.value;
};

const showConfPassword = (): void => {
  show2.value = !show2.value;
};
</script>
