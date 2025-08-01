<template>
  <div class="login_form lg:w-1/2 xl:w-1/2 md:w-full w-full">
    <h2 class="text-black mb-5 font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("auth.login") }}
    </h2>
    <Form @submit="onSubmit" v-slot="{ validate }">
      <!--email Input -->
      <div>
        <div class="relative">
          <div
            class="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
          >
            <nuxt-img
              loading="lazy"
              src="/contact/name.svg"
              alt="ramadanchallenges image"
            />
          </div>

          <Field
            type="text"
            name="email"
            :validateOnInput="true"
            v-model="credentials.account"
            rules="required"
            id="email"
            :placeholder="$t('auth.email')"
            class="block w-full ltr:pl-10 rtl:pr-10 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <ErrorMessage class="text-red-500 text-sm" name="email" as="span" />
      </div>

      <!-- Password Input -->
      <div>
        <div class="relative mt-4 mb-1">
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
            v-model="credentials.password"
            :validateOnInput="true"
            rules="required"
            id="password"
            autocomplete="login-password"
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
        id="checkbox-4"
        color="primary"
        :ripple="false"
      >
        <template v-slot:label>
          <label for="checkbox-4" class="text-sm">
            {{ $t("auth.remember_me") }}
          </label>
        </template>
      </v-checkbox>

      <!-- error message from backend -->
      <p class="error-msg text-sm text-red-500 text-center mb-2">
        {{ apiError }}
      </p>

      <!-- Submit Button -->
      <v-btn
        :disabled="isLoading"
        :loading="isLoading"
        :ripple="false"
        type="submit"
        class="text-capitalize rounded-lg w-full mt-2"
        variant="flat"
        size="large"
        color="primary"
        @click="validate"
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
import { ErrorMessage, Field, Form } from "vee-validate";
import { type User } from "~/helpers/interfaces";
import { useAuth } from "../services/auth";

const show = ref(false);
const isRemember = ref(true);
const { login, isLoading } = useAuth();
const apiError = ref(null);

const credentials = ref<User>({
  account: "",
  password: "",
  remember_me: "",
});

const showPassword = (): void => {
  show.value = !show.value;
};

const onSubmit = () => {
  credentials.value.remember_me = isRemember ? "yes" : "no";
  login(
    credentials.value,
    (err: any) => (apiError.value = err.response?.data?.message || err.message)
  );
};
</script>
