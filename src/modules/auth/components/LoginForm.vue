<template>
  <div class="login_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("auth.login") }}
    </h2>

    <Form @submit.preventDefault="">
      <!-- Name Input -->
      <div>
        <div class="relative mb-4">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <img src="../../../assets/images/contact/name.svg" alt="" />
          </div>

          <Field
            type="text"
            name="name"
            :rules="{ required: true }"
            :placeholder="$t('auth.name')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <ErrorMessage class="text-red-500 text-sm" name="name" />
      </div>

      <!-- Password Input -->
      <div>
        <div class="relative mt-4 mb-4">
          <div
            class="absolute ltr:right-0 rtl:left-0 inset-y-0 flex items-center ltr:pr-3 rtl:pl-3 cursor-pointer"
            @click="showPassword"
          >
            <v-icon v-if="show" size="small">mdi-eye-outline</v-icon>
            <v-icon v-else size="small">mdi-eye-off-outline</v-icon>
          </div>

          <Field
            :type="show ? 'text' : 'password'"
            name="password"
            rules="required|min:6"
            :placeholder="$t('auth.password')"
            class="block w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>
        <ErrorMessage name="password" class="text-red-500 text-sm" />
      </div>

      <!-- Remember Me -->
      <v-checkbox
        v-model="isRemember"
        class="checkbox mb-4"
        color="primary"
        :ripple="false"
      >
        <template v-slot:label>
          <p class="text-sm">{{ $t("auth.remember_me") }}</p>
        </template>
      </v-checkbox>

      <!-- Submit Button -->
      <v-btn
        type="submit"
        class="text-capitalize rounded-lg w-full mt-2"
        :ripple="false"
        variant="flat"
        size="large"
        color="primary"
      >
        {{ $t("auth.login") }}
      </v-btn>
    </Form>

    <!-- Forgot Password -->
    <nuxt-link
      to="/forgetpassword"
      class="block text-sm text-primary underline text-right mt-2"
    >
      {{ $t("auth.forget_password") }}
    </nuxt-link>

    <!-- Signup Link -->
    <p class="text-sm text-center mt-4">
      {{ $t("auth.do_not_have_account") }}
      <nuxt-link to="/signup" class="text-primary underline">{{
        $t("auth.signup")
      }}</nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";

const show = ref(false);
const isRemember = ref(true);

const showPassword = (): void => {
  show.value = !show.value;
};
</script>
